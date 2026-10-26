import type { MetadataRoute } from 'next';
import { PROGRAMS, SPECIALIZATIONS } from '@/data/programs';
import { PEOPLE } from '@/data/people';
import { CLUBS, EVENTS } from '@/data/campus';
import { POSTS } from '@/data/posts';
import { PUBLISHED as ABSAT_PUBLISHED } from '@/data/absat';

const BASE = 'https://asmibschool.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly') => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  const pages: MetadataRoute.Sitemap = [
    entry('/', 1.0, 'weekly'),
    entry('/programs', 0.9, 'monthly'),
    entry('/specializations', 0.8, 'monthly'),
    entry('/placements', 0.8, 'monthly'),
    entry('/faculty', 0.7, 'monthly'),
    entry('/campus-life', 0.6, 'monthly'),
    entry('/clubs', 0.6, 'monthly'),
    entry('/events', 0.6, 'monthly'),
    entry('/gallery', 0.7, 'weekly'),
    entry('/study-tour', 0.6, 'monthly'),
    entry('/blog', 0.7, 'weekly'),
    entry('/forum', 0.5, 'weekly'),
    entry('/citations', 0.5, 'monthly'),
    entry('/faq', 0.6, 'monthly'),
    ...PROGRAMS.map((p) => entry(`/programs/${p.slug}`, 0.9, 'monthly')),
    ...SPECIALIZATIONS.map((s) => entry(`/specializations/${s.slug}`, 0.7, 'monthly')),
    ...PEOPLE.map((p) => entry(`/faculty/${p.slug}`, 0.5, 'yearly')),
    ...CLUBS.map((c) => entry(`/clubs/${c.slug}`, 0.5, 'yearly')),
    ...EVENTS.map((e) => entry(`/events/${e.slug}`, 0.5, 'yearly')),
    ...POSTS.map((p) => entry(`/blog/${p.slug}`, 0.6, 'yearly')),
  ];

  // Listed only once the page is cleared for indexing (data/absat.ts).
  if (ABSAT_PUBLISHED) pages.splice(1, 0, entry('/absat', 0.9, 'weekly'));

  return pages;
}
