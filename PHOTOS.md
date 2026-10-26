# Photo manifest — ASMi website

Drop files at these exact paths under `public/`. Any slot without a file keeps
its current monogram or placeholder, so partial batches are fine.

Format: JPEG, sRGB. Next.js resizes and converts to AVIF/WebP at build time,
so supply the largest you have — no need to pre-compress.

| Context | Path | Crop | Longest edge |
|---|---|---|---|
| People | `/photos/people/<slug>.jpg` | 4:5 portrait, eyes upper third | 1200px |
| Clubs | `/photos/clubs/<slug>.jpg` | 16:10 | 1600px |
| Events | `/photos/events/<slug>.jpg` | 16:10 | 1600px |
| Specializations | `/photos/specializations/<slug>.jpg` | 16:7 | 1900px |
| Students | `/photos/students/<slug>.jpg` | 1:1 or 4:5 | 800px |
| Campus gallery | `/photos/campus/<n>.jpg` | 16:10 | 1600px |
| Study tour gallery | `/photos/tour/<n>.jpg` | 16:10 | 1600px |
| Page heroes | `/photos/heroes/<page>.jpg` | 16:7, dark or dimmable | 2400px |

## People (30)

- `public/photos/people/goutam-roychowdhury.jpg` — Prof. Dr. Goutam Roychowdhury
- `public/photos/people/manoshi-roychowdhury.jpg` — Prof. Manoshi Roychowdhury
- `public/photos/people/meghdut-roychowdhury.jpg` — Meghdut Roychowdhury
- `public/photos/people/pauline-laravoire.jpg` — Pauline Laravoire
- `public/photos/people/kaustav-majumdar.jpg` — Kaustav Majumdar
- `public/photos/people/gautam-majumdar.jpg` — Dr. Gautam Majumdar
- `public/photos/people/bhumita-bhattacharyya.jpg` — Bhumita Bhattacharyya
- `public/photos/people/debayan-chakraborty.jpg` — Debayan Chakraborty
- `public/photos/people/rituraj-brahmachari.jpg` — Rituraj Brahmachari
- `public/photos/people/rahul-rungta.jpg` — Rahul Rungta
- `public/photos/people/geeta-tolia.jpg` — Geeta Tolia
- `public/photos/people/sanghamitra-dhar.jpg` — Sanghamitra Dhar
- `public/photos/people/kausik-mitra.jpg` — Kausik Mitra
- `public/photos/people/manta-dey.jpg` — Dr. Manta Dey
- `public/photos/people/ruchi-agarwal.jpg` — Ruchi Agarwal
- `public/photos/people/govind-kumar-rai.jpg` — Govind Kumar Rai
- `public/photos/people/soumyadeep-chakraborty.jpg` — Soumyadeep Chakraborty
- `public/photos/people/sritama-dey-saha.jpg` — Dr. Sritama Dey Saha
- `public/photos/people/debjani-mookjherjee.jpg` — Debjani Mookjherjee
- `public/photos/people/hemant-lodhia.jpg` — Hemant Lodhia
- `public/photos/people/krittika-simlai.jpg` — Krittika Simlai
- `public/photos/people/pallab-ghosh.jpg` — Pallab Ghosh
- `public/photos/people/arun-mukherjee.jpg` — Arun Mukherjee
- `public/photos/people/atin-kumar-roy.jpg` — Atin Kumar Roy
- `public/photos/people/kamalini-paul.jpg` — Kamalini Paul
- `public/photos/people/mohammad-faisal.jpg` — Mohammad Faisal
- `public/photos/people/anirban-sen.jpg` — Anirban Sen
- `public/photos/people/adarsh-tandon.jpg` — CA Adarsh Tandon
- `public/photos/people/sanghamitra-dhar-mentor.jpg` — Sanghamitra Dhar
- `public/photos/people/lalith-dhanush.jpg` — Lalith Dhanush

## Clubs (8)

- `public/photos/clubs/the-bourse-finance-club.jpg` — The Bourse — Finance Club
- `public/photos/clubs/kanvas-marketing-club.jpg` — Kanvas — Marketing Club
- `public/photos/clubs/decode-analytics-club.jpg` — Decode — Analytics Club
- `public/photos/clubs/sankalp-hr-club.jpg` — Sankalp — HR & People Club
- `public/photos/clubs/udyam-entrepreneurship-cell.jpg` — Udyam — Entrepreneurship Cell
- `public/photos/clubs/prayaas-social-impact-club.jpg` — Prayaas — Social Impact Club
- `public/photos/clubs/rangmanch-cultural-club.jpg` — Rangmanch — Cultural Club
- `public/photos/clubs/momentum-sports-club.jpg` — Momentum — Sports Club

## Events (10)

- `public/photos/events/mba-boot-camp-sundarban.jpg` — MBA Boot Camp — Sundarban
- `public/photos/events/international-study-tour-malaysia.jpg` — International Study Tour — Malaysia
- `public/photos/events/session-meghdut-roychowdhury.jpg` — Session with Meghdut Roychowdhury
- `public/photos/events/session-kaustav-majumdar.jpg` — Session with Kaustav Majumdar
- `public/photos/events/session-pauline-laravoire.jpg` — Session with Pauline Laravoire
- `public/photos/events/corporate-connect-sessions.jpg` — Corporate Connect Sessions
- `public/photos/events/guest-lecture-series.jpg` — Guest Lecture Series
- `public/photos/events/teachers-day-celebration.jpg` — Teachers Day Celebration
- `public/photos/events/christmas-celebration.jpg` — Christmas Celebration
- `public/photos/events/asmi-campus-events.jpg` — ASMi Campus Events

## MBA specializations (6)

- `public/photos/specializations/marketing.jpg` — Marketing
- `public/photos/specializations/finance.jpg` — Finance
- `public/photos/specializations/human-resources.jpg` — Human Resources
- `public/photos/specializations/technology.jpg` — Technology
- `public/photos/specializations/entrepreneurship.jpg` — Entrepreneurship
- `public/photos/specializations/sustainability.jpg` — Sustainability

## Galleries

- `public/photos/campus/1.jpg` … `9.jpg` — captions in `data/site.ts` → CAMPUS_GALLERY
- `public/photos/tour/1.jpg` … `6.jpg` — captions in `data/site.ts` → TOUR_GALLERY

## Wiring a photo

Add the path to the matching entry, e.g. in `data/people.ts`:

```ts
{ slug: 'kaustav-majumdar', …, photo: '/photos/people/kaustav-majumdar.jpg' }
```

Galleries take `src` on the slot in `data/site.ts`. Alt text is generated from
the person's name and role, or the caption, so it never needs writing twice.
