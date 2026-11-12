import { NextResponse } from 'next/server';

/**
 * ABSAT registration → Google Sheet.
 *
 * The form on /absat posts JSON here. This route validates it and forwards it
 * to a Google Apps Script web app bound to the sheet
 * (scripts/google-sheet/absat-apps-script.gs), which appends one row.
 *
 * Env (set in .env.local and in the hosting dashboard):
 *   ABSAT_SHEET_WEBHOOK_URL  the Apps Script web-app URL (ends in /exec)
 *   ABSAT_SHEET_SECRET       shared secret; must match SECRET in the script
 *
 * The script URL stays server-side so it can't be scraped from the page.
 */

const MOBILE = /^[6-9][0-9]{9}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (v: unknown, max = 200) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

export async function POST(req: Request) {
  const url = process.env.ABSAT_SHEET_WEBHOOK_URL;
  const secret = process.env.ABSAT_SHEET_SECRET;
  if (!url || !secret) {
    console.error('ABSAT form: ABSAT_SHEET_WEBHOOK_URL / ABSAT_SHEET_SECRET not set');
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const row = {
    full_name: clean(body.full_name, 120),
    email: clean(body.email, 160).toLowerCase(),
    mobile: clean(body.mobile, 10),
    state: clean(body.state, 60),
    consent_processing: body.consent_processing === true,
    consent_marketing: body.consent_marketing === true,
    page: clean(body.page, 300),
    user_agent: clean(req.headers.get('user-agent'), 300),
  };

  if (
    !row.full_name ||
    !EMAIL.test(row.email) ||
    !MOBILE.test(row.mobile) ||
    !row.state ||
    !row.consent_processing
  ) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, ...row }),
      redirect: 'follow',
      cache: 'no-store',
    });
    const out = (await res.json().catch(() => null)) as { ok?: boolean } | null;
    if (!res.ok || !out?.ok) throw new Error(`sheet responded ${res.status}`);
  } catch (err) {
    console.error('ABSAT form: sheet write failed', err);
    return NextResponse.json({ ok: false, error: 'upstream' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
