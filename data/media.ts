/**
 * Photos managed through the CMS at /admin (Decap, git-based).
 *
 * The CMS saves each upload into public/photos/ and records its path in the
 * JSON files under data/media/. This module merges those paths over the
 * defaults in the data files, so a record with no CMS photo keeps whatever it
 * already had (a hard-coded path, or the monogram/placeholder).
 *
 * Regenerate the CMS form after adding or renaming people, clubs, events etc.:
 *   npm run cms:config
 */
import people from './media/people.json';
import clubs from './media/clubs.json';
import specializations from './media/specializations.json';
import students from './media/students.json';
import events from './media/events.json';
import pages from './media/pages.json';

type Flat = Record<string, string | undefined>;
type Nested = Record<string, Flat | undefined>;

export const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const path = (v: unknown) => (typeof v === 'string' && v.startsWith('/') ? v : undefined);

/** Sets `photo` on every record that has a CMS photo under `key(record)`. */
export function applyPhotos<T extends { photo?: string }>(items: T[], map: Flat, key: (t: T) => string) {
  for (const it of items) {
    const v = path(map[key(it)]);
    if (v) it.photo = v;
  }
}

export const MEDIA = {
  people: people as Flat,
  clubs: clubs as Flat,
  specializations: specializations as Flat,
  students: students as Flat,
  events: events as unknown as Record<string, { photo?: string; gallery?: string[] } | undefined>,
  pages: pages as unknown as Record<string, Flat | undefined>,
};

/** CMS path for a page slot, e.g. pageSlot('hero', 'home'). */
export const pageSlot = (group: string, key: string) => path(MEDIA.pages[group]?.[key]);
export type { Nested };
