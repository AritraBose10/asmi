/**
 * Minimal admin auth: one shared password (ADMIN_PASSWORD) exchanged for an
 * HMAC-signed, HttpOnly session cookie. No dependencies, no user table — fine
 * for a small content team; replace with real accounts if that changes.
 */
import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

export const COOKIE = 'asmi_admin';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function secret() {
  const s = process.env.CMS_SECRET;
  if (s) return s;
  if (process.env.NODE_ENV === 'production') throw new Error('CMS_SECRET is required in production');
  return 'dev-only-secret';
}

const sign = (payload: string) => createHmac('sha256', secret()).update(payload).digest('base64url');

export function makeToken() {
  const payload = String(Date.now() + MAX_AGE * 1000);
  return `${payload}.${sign(payload)}`;
}

export function verifyToken(token?: string) {
  if (!token) return false;
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return false;
  const expected = sign(payload);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  return Number(payload) > Date.now();
}

export function checkPassword(input: string) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return false; // no password configured = admin is locked
  const a = Buffer.from(input);
  const b = Buffer.from(pw);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function isAdmin() {
  return verifyToken((await cookies()).get(COOKIE)?.value);
}

export const cookieOptions = {
  httpOnly: true,
  sameSite: 'strict' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: MAX_AGE,
};
