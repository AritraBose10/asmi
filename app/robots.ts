import type { MetadataRoute } from 'next';
import { PUBLISHED as ABSAT_PUBLISHED } from '@/data/absat';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The ABSAT page carries its own noindex until the content is confirmed;
      // this keeps it out of crawls in the meantime.
      disallow: ABSAT_PUBLISHED ? [] : ['/absat'],
    },
    sitemap: 'https://asmibschool.com/sitemap.xml',
  };
}
