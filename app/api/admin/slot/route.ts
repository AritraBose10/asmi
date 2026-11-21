import { revalidatePath } from 'next/cache';
import { guarded, json, BadInput, str, localPath } from '@/lib/adminApi';
import { readStore, writeStore, isSlotId, type SlotOverride } from '@/lib/media';

/** Set or change a slot's override. Empty fields fall back to the data/photos.ts default. */
export const PUT = guarded(async (req) => {
  const b = await req.json().catch(() => ({}));
  if (!isSlotId(b.id)) throw new BadInput('Unknown slot');
  const o: SlotOverride = {};
  const src = localPath(b.src);
  const alt = str(b.alt, 300, 'alt');
  const caption = str(b.caption, 200, 'caption');
  if (src) o.src = src;
  if (alt) o.alt = alt;
  if (caption) o.caption = caption;

  const store = await readStore();
  if (Object.keys(o).length) store.slots[b.id] = o;
  else delete store.slots[b.id];
  await writeStore(store);
  revalidatePath('/', 'layout');
  return json({ ok: true });
});

/** Reset a slot to its default. */
export const DELETE = guarded(async (req) => {
  const b = await req.json().catch(() => ({}));
  if (!isSlotId(b.id)) throw new BadInput('Unknown slot');
  const store = await readStore();
  delete store.slots[b.id];
  await writeStore(store);
  revalidatePath('/', 'layout');
  return json({ ok: true });
});
