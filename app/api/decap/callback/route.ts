import { NextResponse } from 'next/server';

/** Step 2: exchange GitHub's code for a token and hand it to the CMS window that opened us. */
function page(message: string, payload: string) {
  // The CMS shares our origin, so only ever post back to it.
  const html = `<!doctype html><html><body><p>${message}</p><script>
(function () {
  var origin = location.origin;
  function receive(e) {
    if (e.origin !== origin) return;
    window.opener.postMessage(${JSON.stringify(payload)}, origin);
    window.removeEventListener('message', receive);
    window.close();
  }
  window.addEventListener('message', receive);
  window.opener.postMessage('authorizing:github', origin);
})();
</script></body></html>`;
  const res = new NextResponse(html, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
  res.cookies.set('decap_state', '', { path: '/api/decap', maxAge: 0 });
  return res;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookie = req.headers.get('cookie')?.match(/(?:^|;\s*)decap_state=([^;]+)/)?.[1];
  const fail = (m: string) => page(m, `authorization:github:error:${JSON.stringify({ message: m })}`);

  if (!code || !state || !cookie || state !== cookie) return fail('Login expired or invalid. Close this window and try again.');
  const { GITHUB_OAUTH_ID: id, GITHUB_OAUTH_SECRET: secret } = process.env;
  if (!id || !secret) return fail('GitHub OAuth is not configured on the server.');

  const r = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id: id, client_secret: secret, code }),
  }).catch(() => null);
  const data = r && (await r.json().catch(() => null));
  if (!data?.access_token) return fail('GitHub did not return a token. Try again.');

  return page('Signed in. You can close this window.', `authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}`);
}
