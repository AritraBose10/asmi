import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/auth';
import { SANITY_CDN } from '@/lib/upload';

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

/** Same-site image paths, or an image on this project's Sanity CDN. No other hosts, no schemes. */
export function localPath(v: unknown, field = 'src') {
  const s = text(v, 400, field);
  if (s === undefined || s === '') return s;
  const sanity = `${SANITY_CDN}${process.env.SANITY_PROJECT_ID}/`;
  const ok =
    (/^\/(photos|assets)\/[\w\-./]+$/.test(s) && !s.includes('..')) ||
    (process.env.SANITY_PROJECT_ID && s.startsWith(sanity) && /^[\w\-./]+$/.test(s.slice(sanity.length)));
  if (!ok) throw new BadInput(`${field} must be an uploaded or site image`);
  return s;
}
