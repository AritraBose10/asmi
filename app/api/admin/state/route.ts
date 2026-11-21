import { guarded, json } from '@/lib/adminApi';
import { listSlots, getAdminGallery } from '@/lib/media';

export const dynamic = 'force-dynamic';

export const GET = guarded(async () => json({ slots: await listSlots(), gallery: await getAdminGallery() }));
