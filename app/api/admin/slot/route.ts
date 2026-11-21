import { revalidatePath } from 'next/cache';
import { guarded, json, BadInput, str, localPath } from '@/lib/adminApi';
import { isSlotId, setSlot, deleteSlot } from '@/lib/media';

/** Set or change a slot's override. Empty fields fall back to the data/photos.ts default. */
export const PUT = guarded(async (req) => {
  const b = await req.json().catch(() => ({}));
  if (!isSlotId(b.id)) throw new BadInput('Unknown slot');
  await setSlot(b.id, {
    src: localPath(b.src) || undefined,
    alt: str(b.alt, 300, 'alt') || undefined,
    caption: str(b.caption, 200, 'caption') || undefined,
  });
  revalidatePath('/', 'layout');
  return json({ ok: true });
});

/** Reset a slot to its default. */
export const DELETE = guarded(async (req) => {
  const b = await req.json().catch(() => ({}));
  if (!isSlotId(b.id)) throw new BadInput('Unknown slot');
  await deleteSlot(b.id);
  revalidatePath('/', 'layout');
  return json({ ok: true });
});
