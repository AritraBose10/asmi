import { cookies } from 'next/headers';
import { COOKIE, checkPassword, makeToken, cookieOptions } from '@/lib/auth';
import { json } from '@/lib/adminApi';

// Per-process throttle: 5 failures per 15 minutes per IP. Enough to stop casual guessing.
const fails = new Map<string, { n: number; until: number }>();

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'local';
  const f = fails.get(ip);
  if (f && f.n >= 5 && f.until > Date.now()) return json({ error: 'Too many attempts. Try again later.' }, 429);

  const body = await req.json().catch(() => ({}));
  if (typeof body.password !== 'string' || !checkPassword(body.password)) {
    const cur = f && f.until > Date.now() ? f : { n: 0, until: Date.now() + 15 * 60 * 1000 };
    fails.set(ip, { n: cur.n + 1, until: cur.until });
    return json({ error: process.env.ADMIN_PASSWORD ? 'Wrong password' : 'ADMIN_PASSWORD is not set on the server' }, 401);
  }
  fails.delete(ip);
  (await cookies()).set(COOKIE, makeToken(), cookieOptions);
  return json({ ok: true });
}

export async function DELETE() {
  (await cookies()).set(COOKIE, '', { ...cookieOptions, maxAge: 0 });
  return json({ ok: true });
}
