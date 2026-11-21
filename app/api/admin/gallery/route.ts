import { revalidatePath } from 'next/cache';
import { randomBytes } from 'crypto';
import { guarded, json, BadInput, str, localPath } from '@/lib/adminApi';
import { addGalleryItem, patchGalleryItem, deleteGalleryRow, readStore } from '@/lib/media';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, type GalleryItem } from '@/data/gallery';

const CATS = GALLERY_CATEGORIES.filter((c) => c !== 'All') as GalleryItem['category'][];
const baseIds = new Set(GALLERY_ITEMS.map((g) => g.id));

function fields(b: Record<string, unknown>) {
  const p: Partial<Record<'title' | 'category' | 'tag' | 'caption' | 'image', string>> = {};
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
    p.category = b.category as string;
  }
  return p;
}

/** Add a new gallery item. */
export const POST = guarded(async (req) => {
  const b = await req.json().catch(() => ({}));
  const p = fields(b);
  if (!p.title || !p.category) throw new BadInput('Title and category are required');
  await addGalleryItem({
    id: `cms-${randomBytes(4).toString('hex')}`,
    title: p.title,
    category: p.category as GalleryItem['category'],
    tag: p.tag ?? p.category,
    caption: p.caption ?? '',
    image: p.image,
  });
  revalidatePath('/', 'layout');
  return json({ ok: true });
});

/** Edit an item (`image: ""` resets a built-in item's photo), or hide/show it. */
export const PUT = guarded(async (req) => {
  const b = await req.json().catch(() => ({}));
  const id = String(b.id);
  const { gallery } = await readStore();
  const custom = gallery.extra.some((g) => g.id === id);
  if (!custom && !baseIds.has(id)) throw new BadInput('Unknown item');
  const p = fields(b);
  await patchGalleryItem(id, custom, {
    ...p,
    ...(b.image === '' && !custom ? { image: null } : {}),
    ...(typeof b.hidden === 'boolean' ? { hidden: b.hidden } : {}),
  });
  revalidatePath('/', 'layout');
  return json({ ok: true });
});

/** Delete a CMS-added item, or clear all edits on a built-in one. */
export const DELETE = guarded(async (req) => {
  const b = await req.json().catch(() => ({}));
  await deleteGalleryRow(String(b.id));
  revalidatePath('/', 'layout');
  return json({ ok: true });
});
