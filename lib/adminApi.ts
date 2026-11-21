import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/auth';

export const json = (body: unknown, status = 200) => NextResponse.json(body, { status });

/** Wrap an admin handler: 401 without a valid session, 400 on bad input, 500 otherwise. */
export function guarded(fn: (req: Request) => Promise<Response>) {
  return async (req: Request) => {
    if (!(await isAdmin())) return json({ error: 'Not signed in' }, 401);
    try {
      return await fn(req);
    } catch (e) {
      if (e instanceof BadInput) return json({ error: e.message }, 400);
      console.error('admin api error', e);
      return json({ error: 'Server error' }, 500);
    }
  };
}

export class BadInput extends Error {}

const text = (v: unknown, max: number, field: string) => {
  if (v === undefined) return undefined;
  if (typeof v !== 'string' || v.length > max) throw new BadInput(`${field} must be text up to ${max} characters`);
  return v.trim();
};
export const str = text;

/** Only same-site paths: uploads, repo photos, repo assets. No external URLs, no schemes. */
export function localPath(v: unknown, field = 'src') {
  const s = text(v, 300, field);
  if (s === undefined || s === '') return s;
  if (!/^\/(uploads|photos|assets)\/[\w\-./]+$/.test(s) || s.includes('..')) throw new BadInput(`${field} must be an uploaded or site image path`);
  return s;
}
