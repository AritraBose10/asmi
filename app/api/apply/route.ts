import { NextResponse } from 'next/server';
import { FIELDS, COURSES, GENDERS, EDUCATION, ESSAYS, ESSAY_MAX_WORDS, wordCount } from '@/data/apply';

export const runtime = 'nodejs';

// Light in-memory throttle (per server instance): 5 submissions / 10 min / IP.
const hits = new Map<string, number[]>();
function throttled(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const bad = (error: string, status = 400) => NextResponse.json({ ok: false, error }, { status });

export async function POST(req: Request) {
  const url = process.env.ABSAT_SHEET_WEBHOOK_URL;
  const secret = process.env.ABSAT_SHEET_SECRET;
  if (!url || !secret) return bad('Applications are temporarily unavailable. Please call the admissions office.', 503);

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (throttled(ip)) return bad('Too many attempts. Please try again in a few minutes.', 429);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return bad('Invalid request.');
  }

  // Honeypot: bots fill the hidden field. Pretend success.
  if (typeof body.website === 'string' && body.website) return NextResponse.json({ ok: true });

  const data: Record<string, string> = {};
  for (const f of FIELDS) {
    const raw = body[f.name];
    const v = (typeof raw === 'string' ? raw : '').trim().slice(0, f.max);
    if (f.required && !v) return bad(`Please complete “${f.label}”.`);
    data[f.name] = v;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return bad('Please enter a valid email address.');
  if (!/^[0-9+\-\s]{7,15}$/.test(data.mobile)) return bad('Please enter a valid mobile number.');
  if (!(COURSES as readonly string[]).includes(data.course)) return bad('Please choose a course.');
  if (!(GENDERS as readonly string[]).includes(data.gender)) return bad('Please choose a gender.');
  if (!(EDUCATION as readonly string[]).includes(data.education)) return bad('Please choose your education level.');
  if (body.agree !== true) return bad('Please accept the declaration.');
  for (const e of ESSAYS) {
    if (wordCount(data[e.name]) > ESSAY_MAX_WORDS) return bad(`Essays are limited to ${ESSAY_MAX_WORDS} words.`);
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        secret,
        form: 'apply',
        submittedAt: new Date().toISOString(),
        data,
      }),
      redirect: 'follow',
      signal: AbortSignal.timeout(15_000),
    });
    const text = await res.text();
    let json: { ok?: boolean } = {};
    try { json = JSON.parse(text); } catch { /* non-JSON = script error page */ }
    if (!res.ok || json.ok !== true) {
      console.error('[apply] sheet webhook rejected', res.status, text.slice(0, 200));
      return bad('We could not save your application. Please try again or call admissions.', 502);
    }
  } catch (err) {
    console.error('[apply] sheet webhook failed', err);
    return bad('We could not save your application. Please try again or call admissions.', 502);
  }

  return NextResponse.json({ ok: true });
}
