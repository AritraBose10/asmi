/**
 * Upload storage — STUB: writes to public/uploads/. In production on a
 * read-only or serverless host this must be replaced (Sanity assets, S3, …);
 * keep the same signature: bytes in, public URL out.
 */
import { promises as fs } from 'fs';
import path from 'path';
import { randomBytes } from 'crypto';

const DIR = path.join(process.cwd(), 'public', 'uploads');
export const MAX_BYTES = 10 * 1024 * 1024;

// Extension is chosen from the sniffed content, never from the client's filename or MIME.
function sniff(b: Buffer): string | null {
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'jpg';
  if (b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'png';
  if (b.subarray(0, 4).toString() === 'RIFF' && b.subarray(8, 12).toString() === 'WEBP') return 'webp';
  if (b.subarray(4, 8).toString() === 'ftyp' && /avif|avis/.test(b.subarray(8, 16).toString())) return 'avif';
  return null;
}

export async function saveUpload(bytes: Buffer, originalName: string) {
  if (bytes.length > MAX_BYTES) throw new Error('File is larger than 10 MB');
  const ext = sniff(bytes);
  if (!ext) throw new Error('Only JPEG, PNG, WebP or AVIF images are allowed');
  const stem = originalName.replace(/\.[^.]*$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'photo';
  const name = `${stem}-${randomBytes(4).toString('hex')}.${ext}`;
  await fs.mkdir(DIR, { recursive: true });
  await fs.writeFile(path.join(DIR, name), bytes);
  return `/uploads/${name}`;
}
