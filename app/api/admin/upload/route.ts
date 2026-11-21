import { guarded, json, BadInput } from '@/lib/adminApi';
import { saveUpload, MAX_BYTES } from '@/lib/upload';

export const POST = guarded(async (req) => {
  const form = await req.formData().catch(() => null);
  const file = form?.get('file');
  if (!(file instanceof File)) throw new BadInput('No file');
  if (file.size > MAX_BYTES) throw new BadInput('File is larger than 10 MB');
  try {
    return json({ src: await saveUpload(Buffer.from(await file.arrayBuffer()), file.name) });
  } catch (e) {
    throw new BadInput(e instanceof Error ? e.message : 'Upload failed');
  }
});
