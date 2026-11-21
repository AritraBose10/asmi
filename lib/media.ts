/**
 * Media store — the CMS layer over data/photos.ts and data/gallery.ts.
 *
 * The data files stay the source of defaults (alt text, briefs, fallbacks).
 * The admin writes *overrides* here; the site merges them on read, so a slot
 * with no override looks exactly as it does today.
 *
 * Overrides live in Turso (asmi_* tables, lib/db.ts); uploaded files live in
 * Sanity assets (lib/upload.ts).
 */
import { db, ensureSchema } from '@/lib/db';
import * as P from '@/data/photos';
import { PEOPLE } from '@/data/people';
import { CLUBS, EVENTS } from '@/data/campus';
import { SPECIALIZATIONS, PROGRAMS } from '@/data/programs';
import { POSTS } from '@/data/posts';
import { PLACED, TESTIMONIALS } from '@/data/site';
import { GALLERY_ITEMS, type GalleryItem } from '@/data/gallery';

export interface SlotOverride { src?: string; alt?: string; caption?: string }
export interface GalleryStore {
  overrides: Record<string, Partial<GalleryItem>>;
  hidden: string[];
  extra: GalleryItem[];
}
export interface MediaStore { slots: Record<string, SlotOverride>; gallery: GalleryStore }

const empty = (): MediaStore => ({ slots: {}, gallery: { overrides: {}, hidden: [], extra: [] } });

const nn = (v: unknown) => (v === null || v === undefined ? undefined : String(v));

/** Reads everything from Turso. Throws if the database is unreachable. */
export async function readStore(): Promise<MediaStore> {
  await ensureSchema();
  const [slots, gal] = await Promise.all([
    db().execute('SELECT id, src, alt, caption FROM asmi_media_slots'),
    db().execute('SELECT * FROM asmi_gallery ORDER BY created_at, id'),
  ]);
  const store = empty();
  for (const r of slots.rows) {
    const o: SlotOverride = {};
    if (r.src) o.src = String(r.src);
    if (r.alt) o.alt = String(r.alt);
    if (r.caption) o.caption = String(r.caption);
    store.slots[String(r.id)] = o;
  }
  for (const r of gal.rows) {
    const id = String(r.id);
    if (r.hidden) store.gallery.hidden.push(id);
    if (r.custom) {
      store.gallery.extra.push({
        id, title: String(r.title ?? ''), category: String(r.category) as GalleryItem['category'],
        tag: String(r.tag ?? ''), caption: String(r.caption ?? ''), image: nn(r.image),
      });
    } else {
      const o: Partial<GalleryItem> = {};
      if (r.title) o.title = String(r.title);
      if (r.category) o.category = String(r.category) as GalleryItem['category'];
      if (r.tag) o.tag = String(r.tag);
      if (r.caption !== null && r.caption !== undefined) o.caption = String(r.caption);
      if (r.image) o.image = String(r.image);
      if (Object.keys(o).length) store.gallery.overrides[id] = o;
    }
  }
  return store;
}

/** Public pages must render even if the database is down: fall back to the data-file defaults. */
async function safeStore(): Promise<MediaStore> {
  try {
    return await readStore();
  } catch (e) {
    console.error('CMS store unavailable, using defaults:', e instanceof Error ? e.message : e);
    return empty();
  }
}

// ── Writes ──────────────────────────────────────────────────────────────────
export async function setSlot(id: string, o: SlotOverride) {
  await ensureSchema();
  if (!o.src && !o.alt && !o.caption) return deleteSlot(id);
  await db().execute({
    sql: `INSERT INTO asmi_media_slots (id, src, alt, caption) VALUES (?, ?, ?, ?)
          ON CONFLICT(id) DO UPDATE SET src=excluded.src, alt=excluded.alt, caption=excluded.caption, updated_at=datetime('now')`,
    args: [id, o.src ?? null, o.alt ?? null, o.caption ?? null],
  });
}

export async function deleteSlot(id: string) {
  await ensureSchema();
  await db().execute({ sql: 'DELETE FROM asmi_media_slots WHERE id = ?', args: [id] });
}

export async function addGalleryItem(g: GalleryItem) {
  await ensureSchema();
  await db().execute({
    sql: 'INSERT INTO asmi_gallery (id, custom, title, category, tag, caption, image) VALUES (?, 1, ?, ?, ?, ?, ?)',
    args: [g.id, g.title, g.category, g.tag, g.caption, g.image ?? null],
  });
}

/** Upsert fields on a gallery row. `undefined` leaves a column alone; `null` clears it. */
export async function patchGalleryItem(
  id: string,
  custom: boolean,
  p: Partial<Record<'title' | 'category' | 'tag' | 'caption' | 'image', string | null>> & { hidden?: boolean },
) {
  await ensureSchema();
  await db().execute({ sql: 'INSERT OR IGNORE INTO asmi_gallery (id, custom) VALUES (?, ?)', args: [id, custom ? 1 : 0] });
  const sets: string[] = [];
  const args: (string | number | null)[] = [];
  for (const k of ['title', 'category', 'tag', 'caption', 'image'] as const) {
    if (p[k] !== undefined) { sets.push(`${k} = ?`); args.push(p[k]); }
  }
  if (p.hidden !== undefined) { sets.push('hidden = ?'); args.push(p.hidden ? 1 : 0); }
  if (sets.length) await db().execute({ sql: `UPDATE asmi_gallery SET ${sets.join(', ')} WHERE id = ?`, args: [...args, id] });
}

export async function deleteGalleryRow(id: string) {
  await ensureSchema();
  await db().execute({ sql: 'DELETE FROM asmi_gallery WHERE id = ?', args: [id] });
}

// ── Slots ───────────────────────────────────────────────────────────────────
/**
 * Slot ids: `hero.home`, `section.homeAbout`, `facility.library`, `campus.0`, `building.2`,
 * plus one per record: `person.<slug>`, `club.<slug>`, `event.<slug>`, `spec.<slug>`,
 * `program.<slug>`, `post.<slug>`, `placed.<name-slug>`, `testimonial.<name-slug>`.
 */
interface Def { group: string; key: string; slot: P.PhotoSlot; label?: string; simple?: boolean }

const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** A record whose photo lives in a data file: where to read the default and where to write the merged value. */
interface Target { id: string; group: string; key: string; label: string; obj: Record<string, unknown>; field: 'photo' | 'image' }
const targets = (): Target[] => {
  const t = (group: string, rows: object[], key: (r: never) => string, label: (r: never) => string, field: 'photo' | 'image' = 'photo'): Target[] =>
    rows.map((r) => ({ id: `${group}.${key(r as never)}`, group, key: key(r as never), label: label(r as never), obj: r as Record<string, unknown>, field }));
  return [
    ...t('person', PEOPLE, (r: { slug: string }) => r.slug, (r: { name: string; role: string }) => `${r.name} — ${r.role}`),
    ...t('club', CLUBS, (r: { slug: string }) => r.slug, (r: { name: string }) => r.name),
    ...t('event', EVENTS, (r: { slug: string }) => r.slug, (r: { title: string }) => r.title),
    ...t('spec', SPECIALIZATIONS, (r: { slug: string }) => r.slug, (r: { name: string }) => r.name),
    ...t('program', PROGRAMS, (r: { slug: string }) => r.slug, (r: { name: string }) => r.name, 'image'),
    ...t('post', POSTS, (r: { slug: string }) => r.slug, (r: { title: string }) => r.title, 'image'),
    ...t('placed', PLACED, (r: { name: string }) => slugify(r.name), (r: { name: string; company: string }) => `${r.name} — ${r.company}`),
    ...t('testimonial', TESTIMONIALS, (r: { name: string }) => slugify(r.name), (r: { name: string; batch: string }) => `${r.name} — ${r.batch}`),
  ];
};

// Snapshot of each record's original value, taken before the first hydrate mutates anything.
const ORIGINAL = new WeakMap<object, string | undefined>();
const originalOf = (t: Target) => {
  if (!ORIGINAL.has(t.obj)) ORIGINAL.set(t.obj, t.obj[t.field] as string | undefined);
  return ORIGINAL.get(t.obj);
};
const defaultSrcOf = (t: Target) => {
  const o = originalOf(t);
  return o && t.field === 'image' ? P.assetSrc(o) : o;
};

const defaults = (): Record<string, Def> => {
  const out: Record<string, Def> = {};
  const rec = (group: string, r: Record<string, P.PhotoSlot>) =>
    Object.entries(r).forEach(([key, slot]) => (out[`${group}.${key}`] = { group, key, slot }));
  const arr = (group: string, a: P.PhotoSlot[]) =>
    a.forEach((slot, i) => (out[`${group}.${i}`] = { group, key: String(i + 1), slot }));
  rec('hero', P.HERO);
  rec('section', P.SECTION);
  rec('facility', P.FACILITIES);
  arr('campus', P.CAMPUS_PHOTOS);
  arr('building', P.BUILDING_PHOTOS);
  for (const t of targets()) {
    out[t.id] = { group: t.group, key: t.key, label: t.label, simple: true, slot: { src: defaultSrcOf(t), alt: t.label } };
  }
  return out;
};

const apply = (slot: P.PhotoSlot, o?: SlotOverride): P.PhotoSlot => ({
  ...slot,
  ...(o?.src ? { src: o.src } : {}),
  ...(o?.alt ? { alt: o.alt } : {}),
  ...(o?.caption ? { caption: o.caption } : {}),
});

/** Same shapes as data/photos.ts, with CMS overrides applied. */
export async function getPhotos() {
  const { slots } = await safeStore();
  const mergeRec = (group: string, r: Record<string, P.PhotoSlot>) =>
    Object.fromEntries(Object.entries(r).map(([k, s]) => [k, apply(s, slots[`${group}.${k}`])]));
  const mergeArr = (group: string, a: P.PhotoSlot[]) => a.map((s, i) => apply(s, slots[`${group}.${i}`]));
  return {
    HERO: mergeRec('hero', P.HERO),
    SECTION: mergeRec('section', P.SECTION),
    FACILITIES: mergeRec('facility', P.FACILITIES),
    CAMPUS_PHOTOS: mergeArr('campus', P.CAMPUS_PHOTOS),
    BUILDING_PHOTOS: mergeArr('building', P.BUILDING_PHOTOS),
  };
}

export interface AdminSlot {
  id: string;
  group: string;
  key: string;
  /** Human name for record slots (a person, club, event…). */
  label: string;
  /** Record slots only take a photo; their alt text is built by the page. */
  simple: boolean;
  alt: string;
  caption: string;
  brief: string;
  /** What the site shows right now. */
  src: string;
  /** What it shows with no override. */
  defaultSrc: string;
  overridden: boolean;
  /** True while neither a CMS photo nor a repo photo exists. */
  pending: boolean;
}

export async function listSlots(): Promise<AdminSlot[]> {
  const { slots } = await readStore();
  return Object.entries(defaults()).map(([id, { group, key, slot, label, simple }]) => {
    const merged = apply(slot, slots[id]);
    return {
      id,
      group,
      key,
      label: label ?? key,
      simple: Boolean(simple),
      alt: merged.alt,
      caption: merged.caption ?? '',
      brief: slot.brief ?? '',
      src: P.photoSrc(merged) ?? '',
      defaultSrc: P.photoSrc(slot) ?? '',
      overridden: Boolean(slots[id]),
      pending: !merged.src && !merged.fallback,
    };
  });
}

export function isSlotId(id: unknown): id is string {
  return typeof id === 'string' && id in defaults();
}

// ── Gallery ─────────────────────────────────────────────────────────────────
export async function getGalleryItems(): Promise<GalleryItem[]> {
  const { gallery } = await safeStore();
  const base = GALLERY_ITEMS.filter((g) => !gallery.hidden.includes(g.id)).map((g) => ({
    ...g,
    ...(gallery.overrides[g.id] ?? {}),
  }));
  return [...base, ...gallery.extra.filter((g) => !gallery.hidden.includes(g.id))];
}

export async function getAdminGallery() {
  const { gallery } = await readStore();
  const extraIds = new Set(gallery.extra.map((g) => g.id));
  const all = [
    ...GALLERY_ITEMS.map((g) => ({ ...g, ...(gallery.overrides[g.id] ?? {}) })),
    ...gallery.extra,
  ];
  return all.map((g) => ({
    ...g,
    custom: extraIds.has(g.id),
    hidden: gallery.hidden.includes(g.id),
    overridden: Boolean(gallery.overrides[g.id]),
  }));
}

// ── Event galleries ─────────────────────────────────────────────────────────
export interface EventPhoto { id: number; event_slug: string; src: string }

export async function listEventPhotos(): Promise<EventPhoto[]> {
  await ensureSchema();
  const r = await db().execute('SELECT id, event_slug, src FROM asmi_event_photos ORDER BY id');
  return r.rows.map((x) => ({ id: Number(x.id), event_slug: String(x.event_slug), src: String(x.src) }));
}
export async function addEventPhoto(slug: string, src: string) {
  await ensureSchema();
  await db().execute({ sql: 'INSERT INTO asmi_event_photos (event_slug, src) VALUES (?, ?)', args: [slug, src] });
}
export async function deleteEventPhoto(id: number) {
  await ensureSchema();
  await db().execute({ sql: 'DELETE FROM asmi_event_photos WHERE id = ?', args: [id] });
}
export const isEventSlug = (s: unknown): s is string => typeof s === 'string' && EVENTS.some((e) => e.slug === s);

// ── Hydrate ─────────────────────────────────────────────────────────────────
const DEFAULT_GALLERY = new WeakMap<object, string[] | undefined>();

/**
 * Applies CMS photos onto the record arrays in data/ (PEOPLE, CLUBS, EVENTS, …)
 * so pages and helpers like getPerson() see them without further changes.
 * Call it at the top of any server page that renders those records.
 *
 * The apply pass has no `await` in it, so concurrent renders can't interleave
 * half-applied state; each pass resets every record from its snapshot first.
 */
export async function hydrateMedia() {
  const [store, photos] = await Promise.all([
    safeStore(),
    listEventPhotos().catch(() => [] as EventPhoto[]),
  ]);
  for (const t of targets()) {
    const original = originalOf(t);
    const override = store.slots[t.id]?.src;
    if (override) t.obj[t.field] = override;
    else if (original === undefined) delete t.obj[t.field];
    else t.obj[t.field] = original;
  }
  for (const e of EVENTS) {
    if (!DEFAULT_GALLERY.has(e)) DEFAULT_GALLERY.set(e, e.gallery);
    const extra = photos.filter((p) => p.event_slug === e.slug).map((p) => p.src);
    const base = DEFAULT_GALLERY.get(e);
    e.gallery = extra.length || base ? [...(base ?? []), ...extra] : undefined;
  }
}
