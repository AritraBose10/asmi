/**
 * Upload storage: images go to Sanity assets, and the CDN URL is what gets
 * saved in Turso. The write token stays on the server — the browser only ever
 * posts the file to /api/admin/upload.
 */
import { createClient } from '@sanity/client';

export const MAX_BYTES = 10 * 1024 * 1024;
export const SANITY_CDN = 'https://cdn.sanity.io/images/';

function sanity() {
  const projectId = process.env.SANITY_PROJECT_ID;
  const token = process.env.SANITY_API_TOKEN;
  if (!projectId || !token) throw new Error('Sanity is not configured on the server');
  return createClient({ projectId, dataset: process.env.SANITY_DATASET ?? 'production', apiVersion: '2024-01-01', token, useCdn: false });
}

// Type is chosen from the sniffed content, never from the client's filename or MIME.
function sniff(b: Buffer): { ext: string; mime: string } | null {
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return { ext: 'jpg', mime: 'image/jpeg' };
  if (b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return { ext: 'png', mime: 'image/png' };
  if (b.subarray(0, 4).toString() === 'RIFF' && b.subarray(8, 12).toString() === 'WEBP') return { ext: 'webp', mime: 'image/webp' };
  if (b.subarray(4, 8).toString() === 'ftyp' && /avif|avis/.test(b.subarray(8, 16).toString())) return { ext: 'avif', mime: 'image/avif' };
  return null;
}

export async function saveUpload(bytes: Buffer, originalName: string) {
  if (bytes.length > MAX_BYTES) throw new Error('File is larger than 10 MB');
  const type = sniff(bytes);
  if (!type) throw new Error('Only JPEG, PNG, WebP or AVIF images are allowed');
  const stem = originalName.replace(/\.[^.]*$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'photo';
  const asset = await sanity().assets.upload('image', bytes, { filename: `asmi-${stem}.${type.ext}`, contentType: type.mime });
  return asset.url;
}
