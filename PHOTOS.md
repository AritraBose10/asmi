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

## Events (29)

Each event takes a cover photo, and optionally a gallery. The Drive column
is the folder the photographs came from, so whoever exports them knows the
source.

| Cover file | Gallery folder | Event | Drive folder |
|---|---|---|---|
| `photos/events/asmi-orientation-2026.jpg` | `photos/events/asmi-orientation-2026/` | ASMi Orientation 2026 | — |
| `photos/events/asmi-deploy-batch-of-2026.jpg` | `photos/events/asmi-deploy-batch-of-2026/` | ASMi Deploy \u2014 Batch of 2026 | Asmi Deploy Batch of 2026 |
| `photos/events/asmi-farewell-fiesta.jpg` | `photos/events/asmi-farewell-fiesta/` | ASMi Farewell Fiesta | Asmi Farewell Fiesta |
| `photos/events/mba-boot-camp-sundarban.jpg` | `photos/events/mba-boot-camp-sundarban/` | MBA Boot Camp \u2014 Sundarban | Asmi Malaysia 2025 |
| `photos/events/asmi-malaysia-2025.jpg` | `photos/events/asmi-malaysia-2025/` | International Study Tour \u2014 Malaysia 2025 | — |
| `photos/events/ibm-day-technovate-2026.jpg` | `photos/events/ibm-day-technovate-2026/` | IBM Day: TechnoVate 2026 | IBM Day Technovate 2026 |
| `photos/events/ibm-immersion-programme.jpg` | `photos/events/ibm-immersion-programme/` | IBM Immersion Programme | IBM Immersion Programme |
| `photos/events/google-gemini-ai-masterclass.jpg` | `photos/events/google-gemini-ai-masterclass/` | Google Gemini AI Masterclass | Google Gemini AI Masterclass |
| `photos/events/corporate-connect-sessions.jpg` | `photos/events/corporate-connect-sessions/` | Corporate Connect Sessions | Asmi Corporate Connect Session |
| `photos/events/corporate-connect-hr-analytics.jpg` | `photos/events/corporate-connect-hr-analytics/` | Corporate Connect: HR Analytics | Asmi Corporate Connect Session on HR Analytics |
| `photos/events/asmi-session-11-august-2026.jpg` | `photos/events/asmi-session-11-august-2026/` | LinkedIn Branding & Practice Session | 11th August 2026 |
| `photos/events/asmi-finance-marathon.jpg` | `photos/events/asmi-finance-marathon/` | The ASMi Finance Marathon | The Asmi Finance Marathon |
| `photos/events/guest-lecture-series.jpg` | `photos/events/guest-lecture-series/` | Guest Lecture Series | Prof. Atanu Chaudhuri Session |
| `photos/events/prof-atanu-chaudhuri-session.jpg` | `photos/events/prof-atanu-chaudhuri-session/` | Supply Chain Management Session | — |
| `photos/events/ai-business-strategy-at-asmi.jpg` | `photos/events/ai-business-strategy-at-asmi/` | AI & Business Strategy | AI Business Strategy at Asmi |
| `photos/events/asmi-general-insurance.jpg` | `photos/events/asmi-general-insurance/` | General Insurance and Its Necessity | Asmi General Insurance and ITS Necessity |
| `photos/events/asmi-penalties-and-enforcement.jpg` | `photos/events/asmi-penalties-and-enforcement/` | Penalties and Enforcement | Asmi Penalties and Enforcement |
| `photos/events/asmi-happiness-by-design.jpg` | `photos/events/asmi-happiness-by-design/` | Happiness by Design | Asmi Happiness by Design |
| `photos/events/asmi-cma-swagatam.jpg` | `photos/events/asmi-cma-swagatam/` | CMA Swagatam | Asmi CMA Swagatam |
| `photos/events/asmi-sap-certificate-distribution.jpg` | `photos/events/asmi-sap-certificate-distribution/` | SAP Certificate Distribution | Asmi SAP Certificate Distribution |
| `photos/events/asmi-startup-games-2026.jpg` | `photos/events/asmi-startup-games-2026/` | ASMi Startup Games 2026 | Asmi Startup Games 2026 |
| `photos/events/asmi-empathy-mapping-competition.jpg` | `photos/events/asmi-empathy-mapping-competition/` | Empathy Mapping Competition | Asmi Empathy Mapping Competition |
| `photos/events/asmi-entrepreneurship-day.jpg` | `photos/events/asmi-entrepreneurship-day/` | ASMi Entrepreneurship Day | Asmi Entrepreneurship Day |
| `photos/events/asmi-premiere-league.jpg` | `photos/events/asmi-premiere-league/` | ASMi Premiere League | Asmi Premiere League |
| `photos/events/asmi-agomoni-2026.jpg` | `photos/events/asmi-agomoni-2026/` | Agomoni 2026 | Asmi Agomoni 2026 |
| `photos/events/teachers-day-celebration.jpg` | `photos/events/teachers-day-celebration/` | Teachers Day Celebration | Asmi Teachers Day Celebration |
| `photos/events/asmi-movie-screening.jpg` | `photos/events/asmi-movie-screening/` | Movie Screening & Creator Fireside Chat | Asmi Movie Screening |
| `photos/events/christmas-celebration.jpg` | `photos/events/christmas-celebration/` | Christmas Celebration | Cleanup Drive at TIU |
| `photos/events/cleanup-drive-at-tiu.jpg` | `photos/events/cleanup-drive-at-tiu/` | Cleanup Drive at TIU | — |
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
