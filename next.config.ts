import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Real photography is coming in; let Next resize and serve AVIF/WebP
    // rather than shipping multi-megabyte originals.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 160, 240, 320, 420, 560],
  },
};

export default nextConfig;
