import { revalidatePath } from 'next/cache';
import { guarded, json, BadInput, localPath } from '@/lib/adminApi';
import { addEventPhoto, deleteEventPhoto, isEventSlug } from '@/lib/media';

/** Add a photo to an event's gallery. */
export const POST = guarded(async (req) => {
  const b = await req.json().catch(() => ({}));
  if (!isEventSlug(b.slug)) throw new BadInput('Unknown event');
  const src = localPath(b.src);
  if (!src) throw new BadInput('src is required');
  await addEventPhoto(b.slug, src);
  revalidatePath('/', 'layout');
  return json({ ok: true });
});

export const DELETE = guarded(async (req) => {
  const b = await req.json().catch(() => ({}));
  if (!Number.isInteger(b.id)) throw new BadInput('Unknown photo');
  await deleteEventPhoto(b.id);
  revalidatePath('/', 'layout');
  return json({ ok: true });
});
