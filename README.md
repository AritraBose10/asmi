# ASMi Business School

Next.js 15 (App Router, TypeScript) rebuild of the ASMi Business School site.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — every page prerenders to static HTML
npm start
```

## How it is organised

```
app/                  routes (App Router)
  layout.tsx          chrome: loader, cursor, hamburger nav, footer, motion
  page.tsx            landing page
  programs/[slug]     MBA · BBA · Executive MBA
  specializations/    six MBA tracks + detail pages
  faculty/[slug]      leadership, faculty and industry mentor profiles
  clubs/[slug]        eight student clubs
  events/[slug]       ten event formats
  blog/[slug]         articles
  styles/             base.css (original design system) + pages.css + menu.css
components/
  Nav.tsx             hamburger + full-screen overlay menu
  SiteMotion.tsx      reveal / text-split / counters / parallax / tilt / FAQ
  Loader.tsx          branded preloader (once per session)
  Chrome.tsx          PageHero, SecHead, CtaBand, FaqBlock, Footer, Ladder…
data/                 ALL CONTENT LIVES HERE
  site.ts             contact, placements, press, accreditation, sources
  programs.ts         programmes + specializations
  people.ts           leadership, faculty, mentors
  campus.ts           clubs + events
  posts.ts            blog articles
legacy/               the previous static site, kept for reference
```

**To change content, edit `data/*.ts`** — pages, listings, detail routes, nav and
footer all read from it. Adding an entry creates its page automatically.

## Content status

Facts (names, titles, placement figures, partners, programme structure) come from
`asmi_website_data.md`. Marked PLACEHOLDER in each data file: club details, event
descriptions, extended biographies, blog articles and forum threads. Blog bylines
name real people — get sign-off before publishing.

The discussion forum and blog subscribe box are UI only; both tell the user they
need a backend rather than failing silently.
