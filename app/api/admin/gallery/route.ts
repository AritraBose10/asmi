import { revalidatePath } from 'next/cache';
import { randomBytes } from 'crypto';
import { guarded, json, BadInput, str, localPath } from '@/lib/adminApi';
import { readStore, writeStore } from '@/lib/media';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, type GalleryItem } from '@/data/gallery';

const CATS = GALLERY_CATEGORIES.filter((c) => c !== 'All') as GalleryItem['category'][];
const baseIds = new Set(GALLERY_ITEMS.map((g) => g.id));

function fields(b: Record<string, unknown>) {
  const p: Partial<GalleryItem> = {};
  const title = str(b.title, 120, 'title');
  const caption = str(b.caption, 300, 'caption');
  const tag = str(b.tag, 60, 'tag');
  const image = localPath(b.image, 'image');
  if (title) p.title = title;
  if (caption !== undefined) p.caption = caption;
  if (tag) p.tag = tag;
  if (image) p.image = image;
  if (b.category !== undefined) {
    if (!CATS.includes(b.category as GalleryItem['category'])) throw new BadInput('Unknown category');
    p.category = b.category as GalleryItem['category'];
  }
  return p;
}

/** Add a new gallery item. */
export const POST = guarded(async (req) => {
  const b = await req.json().catch(() => ({}));
  const p = fields(b);
  if (!p.title || !p.category) throw new BadInput('Title and category are required');
  const store = await readStore();
  store.gallery.extra.push({
    id: `cms-${randomBytes(4).toString('hex')}`,
    title: p.title,
    category: p.category,
    tag: p.tag ?? p.category,
    caption: p.caption ?? '',
    image: p.image,
  });
  await writeStore(store);
  revalidatePath('/', 'layout');
  return json({ ok: true });
});

/** Edit an item (`image: ""` resets a built-in item's photo), or hide/show a built-in one. */
export const PUT = guarded(async (req) => {
  const b = await req.json().catch(() => ({}));
  const store = await readStore();
  const id = String(b.id);
  const custom = store.gallery.extra.find((g) => g.id === id);
  if (!custom && !baseIds.has(id)) throw new BadInput('Unknown item');

  if (typeof b.hidden === 'boolean') {
    const set = new Set(store.gallery.hidden);
    b.hidden ? set.add(id) : set.delete(id);
    store.gallery.hidden = [...set];
  }
  const p = fields(b);
  if (custom) Object.assign(custom, p);
  else if (b.image === '' || Object.keys(p).length) {
    const cur = { ...(store.gallery.overrides[id] ?? {}), ...p };
    if (b.image === '') delete cur.image;
    if (Object.keys(cur).length) store.gallery.overrides[id] = cur;
    else delete store.gallery.overrides[id];
  }
  await writeStore(store);
  revalidatePath('/', 'layout');
  return json({ ok: true });
});

/** Delete a CMS-added item, or clear overrides on a built-in one. */
export const DELETE = guarded(async (req) => {
  const b = await req.json().catch(() => ({}));
  const store = await readStore();
  const id = String(b.id);
  store.gallery.extra = store.gallery.extra.filter((g) => g.id !== id);
  delete store.gallery.overrides[id];
  store.gallery.hidden = store.gallery.hidden.filter((h) => h !== id);
  await writeStore(store);
  revalidatePath('/', 'layout');
  return json({ ok: true });
});
