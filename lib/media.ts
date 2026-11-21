/**
 * Media store — the CMS layer over data/photos.ts and data/gallery.ts.
 *
 * The data files stay the source of defaults (alt text, briefs, fallbacks).
 * The admin writes *overrides* here; the site merges them on read, so a slot
 * with no override looks exactly as it does today.
 *
 * STUB BACKEND: overrides live in `.cms/media.json` and uploads in
 * `public/uploads/`. Everything storage-specific is in readStore/writeStore
 * and lib/upload.ts, so moving to Turso + Sanity later means replacing those.
 */
import { promises as fs } from 'fs';
import path from 'path';
import * as P from '@/data/photos';
import { GALLERY_ITEMS, type GalleryItem } from '@/data/gallery';

export interface SlotOverride { src?: string; alt?: string; caption?: string }
export interface GalleryStore {
  overrides: Record<string, Partial<GalleryItem>>;
  hidden: string[];
  extra: GalleryItem[];
}
export interface MediaStore { slots: Record<string, SlotOverride>; gallery: GalleryStore }

const STORE_PATH = path.join(process.cwd(), '.cms', 'media.json');

const empty = (): MediaStore => ({ slots: {}, gallery: { overrides: {}, hidden: [], extra: [] } });

export async function readStore(): Promise<MediaStore> {
  try {
    const raw = JSON.parse(await fs.readFile(STORE_PATH, 'utf8'));
    const base = empty();
    return {
      slots: raw.slots ?? base.slots,
      gallery: { ...base.gallery, ...(raw.gallery ?? {}) },
    };
  } catch {
    return empty();
  }
}

export async function writeStore(store: MediaStore) {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  const tmp = STORE_PATH + '.tmp';
  await fs.writeFile(tmp, JSON.stringify(store, null, 2));
  await fs.rename(tmp, STORE_PATH);
}

// ── Slots ───────────────────────────────────────────────────────────────────
/** Slot ids: `hero.home`, `section.homeAbout`, `facility.library`, `campus.0`, `building.2`. */
const defaults = (): Record<string, { group: string; key: string; slot: P.PhotoSlot }> => {
  const out: Record<string, { group: string; key: string; slot: P.PhotoSlot }> = {};
  const rec = (group: string, r: Record<string, P.PhotoSlot>) =>
    Object.entries(r).forEach(([key, slot]) => (out[`${group}.${key}`] = { group, key, slot }));
  const arr = (group: string, a: P.PhotoSlot[]) =>
    a.forEach((slot, i) => (out[`${group}.${i}`] = { group, key: String(i + 1), slot }));
  rec('hero', P.HERO);
  rec('section', P.SECTION);
  rec('facility', P.FACILITIES);
  arr('campus', P.CAMPUS_PHOTOS);
  arr('building', P.BUILDING_PHOTOS);
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
  const { slots } = await readStore();
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
  return Object.entries(defaults()).map(([id, { group, key, slot }]) => {
    const merged = apply(slot, slots[id]);
    return {
      id,
      group,
      key,
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
  const { gallery } = await readStore();
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
