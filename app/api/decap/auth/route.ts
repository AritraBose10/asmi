import { randomBytes } from 'crypto';
import { NextResponse } from 'next/server';

/**
 * Step 1 of Decap CMS's GitHub login: send the editor to GitHub to authorise.
 * Needs GITHUB_OAUTH_ID (and GITHUB_OAUTH_SECRET in the callback). The repo is
 * public, so `public_repo` is enough to commit; set GITHUB_OAUTH_SCOPE=repo if
 * it ever goes private.
 */
export async function GET(req: Request) {
  const clientId = process.env.GITHUB_OAUTH_ID;
  if (!clientId) return new NextResponse('GITHUB_OAUTH_ID is not set on the server', { status: 500 });

  const origin = new URL(req.url).origin;
  const state = randomBytes(16).toString('hex');
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', `${origin}/api/decap/callback`);
  url.searchParams.set('scope', process.env.GITHUB_OAUTH_SCOPE ?? 'public_repo');
  url.searchParams.set('state', state);

  const res = NextResponse.redirect(url);
  res.cookies.set('decap_state', state, { httpOnly: true, sameSite: 'lax', secure: origin.startsWith('https'), maxAge: 600, path: '/api/decap' });
  return res;
}
