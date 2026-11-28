import type { NextConfig } from 'next';

/**
 * Security headers. The public site loads only fonts from outside (Google Fonts, Fontshare);
 * everything else is first-party. The CMS at /admin needs a looser policy (it runs Decap, which
 * needs eval and talks to the GitHub API), so it gets its own.
 */
const common = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
];

const siteCsp = [
  "default-src 'self'",
  // Next.js emits inline bootstrap scripts, so inline is allowed; nothing is loaded from other hosts.
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com",
  "font-src 'self' data: https://fonts.gstatic.com https://cdn.fontshare.com https://api.fontshare.com",
  "img-src 'self' data: blob: https:",
  "media-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

// /campus-life embeds Google Maps; every other public page keeps frames fully blocked.
const campusCsp = siteCsp.replace("frame-src 'none'", "frame-src https://www.google.com");

const adminCsp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https:",
  // Decap's local-editing helper (npx decap-server) listens on :8081; only allow it in development.
  `connect-src 'self' https://api.github.com https://raw.githubusercontent.com https://github.com blob:${process.env.NODE_ENV === 'production' ? '' : ' http://localhost:8081'}`,
  "frame-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The MBA specialisations were renamed and reduced to eight: keep old links alive.
  async redirects() {
    const to = (from: string, dest: string) => ({ source: `/specializations/${from}`, destination: dest, permanent: true });
    return [
      to('marketing', '/specializations/marketing-management'),
      to('human-resources', '/specializations/human-resource-management'),
      to('entrepreneurship', '/specializations/entrepreneurship-innovation'),
      to('finance', '/specializations/fintech'),
      to('technology', '/specializations'),
      to('sustainability', '/specializations'),
    ];
  },
  async headers() {
    return [
      { source: '/:path*', headers: [...common, { key: 'Content-Security-Policy', value: siteCsp }] },
      // Images and video change rarely and are revalidated in the background after a day.
      ...['/assets/:path*', '/photos/:path*', '/videos/:path*'].map((source) => ({
        source,
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      })),
      { source: '/campus-life', headers: [...common, { key: 'Content-Security-Policy', value: campusCsp }] },
      // Listed after the catch-all so it wins for /admin: same headers, the CMS policy.
      { source: '/admin', headers: [...common, { key: 'Content-Security-Policy', value: adminCsp }, { key: 'Cache-Control', value: 'no-store' }] },
      { source: '/admin/:path*', headers: [...common, { key: 'Content-Security-Policy', value: adminCsp }] },
    ];
  },
  // The CMS is a static page in public/admin; serve it at /admin.
  async rewrites() {
    return [{ source: '/admin', destination: '/admin/index.html' }];
  },
  images: {
    // Real photography is coming in; let Next resize and serve AVIF/WebP
    // rather than shipping multi-megabyte originals.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 160, 240, 320, 420, 560],
  },
};

export default nextConfig;
