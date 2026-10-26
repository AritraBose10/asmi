/**
 * Clubs and events.
 * Event names come from asmi_website_data.md. Club names, descriptions and all
 * per-item detail below are PLACEHOLDER — on-brand copy pending real material.
 */

export interface Club {
  /** /photos/clubs/<slug>.jpg */
  photo?: string;
  slug: string;
  mono: string;
  name: string;
  shortName: string;
  kicker: string;
  summary: string;
  activities: string[];
  intro: string[];
  calendar: { when: string; what: string; detail: string }[];
  roles: string[];
  openTo: string;
  meets: string;
}

export const CLUBS: Club[] = [
  {
    slug: 'the-bourse-finance-club',
    mono: 'FIN', name: 'The Bourse — Finance Club', shortName: 'The Bourse',
    kicker: 'Markets, valuation & investing',
    summary: 'Runs a mock portfolio, weekly market briefings and a valuation bootcamp before placement season. Hosts the annual stock-pitch competition.',
    activities: ['Stock Pitch', 'Valuation Lab', 'Market Brief'],
    intro: [
      'The Bourse exists because finance interviews test mechanics that a syllabus alone does not build. The club runs a live mock portfolio, publishes a weekly market brief to the cohort, and puts every finance-track student through a valuation bootcamp before placement season opens.',
      'It is the most technically demanding club on campus and the one with the most direct line to an offer letter.',
    ],
    calendar: [
      { when: 'Weekly', what: 'Market brief', detail: 'A student-written note on the week in Indian markets, circulated every Monday.' },
      { when: 'Fortnightly', what: 'Valuation lab', detail: 'Working sessions on a real listed company, from statements to a defensible number.' },
      { when: 'Annual', what: 'Stock pitch competition', detail: 'Teams pitch a long or short to a panel of practitioners, judged on the thesis and the risk case.' },
    ],
    roles: ['Club President', 'Portfolio Lead', 'Research Editors (3)', 'Events Lead'],
    openTo: 'MBA and BBA, all years',
    meets: 'Fridays, 5pm · Case Room 2',
  },
  {
    slug: 'kanvas-marketing-club',
    mono: 'MKT', name: 'Kanvas — Marketing Club', shortName: 'Kanvas',
    kicker: 'Brand, content & consumer insight',
    summary: 'Live brand audits for Kolkata businesses, a student-run content studio, and case competitions with regional startups.',
    activities: ['Brand Audits', 'Case Comps', 'Content Studio'],
    intro: [
      'Kanvas takes briefs from real Kolkata businesses — usually small, usually under-marketed — and runs full brand audits with recommendations the owner can act on.',
      'The club also operates the student content studio that produces ASMi’s campus photography and the blog’s visual material, which means members graduate with a portfolio rather than a list of modules.',
    ],
    calendar: [
      { when: 'Monthly', what: 'Live brand audit', detail: 'A local business brief, researched and presented back to the owner.' },
      { when: 'Termly', what: 'Inter-college case competition', detail: 'Marketing cases against teams from other business schools in the region.' },
      { when: 'Ongoing', what: 'Content studio', detail: 'Photography, copy and campaign material for campus and club events.' },
    ],
    roles: ['Club President', 'Studio Lead', 'Brand Audit Leads (2)', 'Competitions Lead'],
    openTo: 'MBA and BBA, all years',
    meets: 'Fridays, 5pm · Student Lounge',
  },
  {
    slug: 'decode-analytics-club',
    mono: 'ANA', name: 'Decode — Analytics Club', shortName: 'Decode',
    kicker: 'Data, dashboards & decisions',
    summary: 'Weekend SQL and Power BI clinics, Kaggle-style datathons, and an IBM-tooling study group for BBA and MBA students alike.',
    activities: ['Datathons', 'SQL Clinic', 'IBM Tools'],
    intro: [
      'Decode runs the weekend clinics where the BBA analytics cohort turns coursework into competition entries — SQL, Power BI and the IBM tooling that sits at the centre of the curriculum.',
      'Its datathons are open to every year, and first-year students are deliberately placed on teams with third-years rather than left to compete among themselves.',
    ],
    calendar: [
      { when: 'Weekly', what: 'SQL & BI clinic', detail: 'Open lab hours with senior students running the room.' },
      { when: 'Termly', what: 'Datathon', detail: 'A Kaggle-style problem over a weekend, judged on method as much as score.' },
      { when: 'Ongoing', what: 'IBM tooling study group', detail: 'Working through the certification material together ahead of placement season.' },
    ],
    roles: ['Club President', 'Clinic Leads (2)', 'Datathon Director', 'Curriculum Liaison'],
    openTo: 'BBA and MBA, all years',
    meets: 'Saturdays, 11am · Analytics Lab',
  },
  {
    slug: 'sankalp-hr-club',
    mono: 'HR', name: 'Sankalp — HR & People Club', shortName: 'Sankalp',
    kicker: 'Talent, culture & workplaces',
    summary: 'Mock interview panels, campus hiring simulations and conversations with CHROs on what modern people functions really do.',
    activities: ['Mock Panels', 'CHRO Talks', 'Policy Lab'],
    intro: [
      'Sankalp runs the mock interview panels that every graduating student passes through — staffed by alumni and practising managers rather than classmates, which is what makes them useful.',
      'Its policy lab drafts and critiques real workplace policies, and the CHRO conversation series brings serving people leaders in for unscripted sessions.',
    ],
    calendar: [
      { when: 'Placement season', what: 'Mock interview panels', detail: 'Alumni and practitioner panels with written feedback for every candidate.' },
      { when: 'Monthly', what: 'CHRO conversation', detail: 'An unscripted session with a serving people leader.' },
      { when: 'Termly', what: 'Policy lab', detail: 'Drafting and stress-testing workplace policy against real scenarios.' },
    ],
    roles: ['Club President', 'Panels Coordinator', 'Policy Lab Lead', 'Alumni Liaison'],
    openTo: 'MBA, all years',
    meets: 'Fridays, 4pm · Case Room 1',
  },
  {
    slug: 'udyam-entrepreneurship-cell',
    mono: 'ENT', name: 'Udyam — Entrepreneurship Cell', shortName: 'Udyam',
    kicker: 'Founders, pitches & ventures',
    summary: 'Incubates student ventures, runs the annual pitch day, and connects founders to the Bengal Entrepreneurs ecosystem.',
    activities: ['Pitch Day', 'Incubation', 'Founder AMA'],
    intro: [
      'Udyam is the incubation desk. Student ventures get a working space, a faculty supervisor, and introductions into the regional ecosystem through mentors who have built companies here.',
      'Its annual pitch day is a hard deadline, which for most student ventures is the single most useful thing the cell provides.',
    ],
    calendar: [
      { when: 'Annual', what: 'Pitch day', detail: 'Student ventures pitch to founders and investors from the regional ecosystem.' },
      { when: 'Monthly', what: 'Founder AMA', detail: 'An open session with a founder who will answer the awkward questions.' },
      { when: 'Ongoing', what: 'Incubation desk', detail: 'Workspace, supervision and introductions for active student ventures.' },
    ],
    roles: ['Cell President', 'Incubation Lead', 'Mentor Liaison', 'Pitch Day Director'],
    openTo: 'MBA, BBA and EMBA',
    meets: 'Wednesdays, 6pm · Incubation Desk',
  },
  {
    slug: 'prayaas-social-impact-club',
    mono: 'CSR', name: 'Prayaas — Social Impact Club', shortName: 'Prayaas',
    kicker: 'Community & sustainability',
    summary: 'Drives ASMi’s community projects, sustainability audits on campus, and partnerships with local NGOs.',
    activities: ['Field Projects', 'ESG Audit', 'NGO Partners'],
    intro: [
      'Prayaas runs ASMi’s community work: field projects with partner NGOs, and an annual sustainability audit of the campus itself, which is the rare student project whose findings land on an administrator’s desk.',
      'For students on the sustainability track it is where measurement methodology stops being theoretical.',
    ],
    calendar: [
      { when: 'Termly', what: 'Field project', detail: 'A scoped project with a partner NGO, with outcomes measured and published.' },
      { when: 'Annual', what: 'Campus sustainability audit', detail: 'Energy, waste and procurement audited by students, reported to administration.' },
      { when: 'Ongoing', what: 'Volunteer programme', detail: 'Regular volunteering slots coordinated across the cohort.' },
    ],
    roles: ['Club President', 'Projects Lead', 'Audit Lead', 'Partnerships Lead'],
    openTo: 'All programmes',
    meets: 'Saturdays, 2pm · Student Lounge',
  },
  {
    slug: 'rangmanch-cultural-club',
    mono: 'CUL', name: 'Rangmanch — Cultural Club', shortName: 'Rangmanch',
    kicker: 'Music, theatre & the annual fest',
    summary: 'Owns the cultural calendar end to end — the fest, the festival nights, and every campus performance in between.',
    activities: ['Annual Fest', 'Open Mic', 'Theatre'],
    intro: [
      'Rangmanch owns the cultural calendar with a budget and a committee, which makes running it a genuine management exercise disguised as a good time.',
      'The annual fest is the club’s largest undertaking: vendors, sponsors, scheduling and a live audience, all handled by students.',
    ],
    calendar: [
      { when: 'Annual', what: 'ASMi cultural fest', detail: 'The year’s largest student-run production, from sponsorship to stage.' },
      { when: 'Monthly', what: 'Open mic', detail: 'Music, poetry and stand-up in the student lounge.' },
      { when: 'Termly', what: 'Theatre production', detail: 'A short production rehearsed and staged across a term.' },
    ],
    roles: ['Club President', 'Fest Director', 'Sponsorship Lead', 'Production Lead'],
    openTo: 'All programmes',
    meets: 'Fridays, 6pm · Student Lounge',
  },
  {
    slug: 'momentum-sports-club',
    mono: 'SPT', name: 'Momentum — Sports Club', shortName: 'Momentum',
    kicker: 'Fitness, tournaments & the field',
    summary: 'Inter-batch leagues in football and cricket, early-morning runs along the Salt Lake stretch, and the TIU sports meet.',
    activities: ['Inter-batch League', 'TIU Meet', 'Run Club'],
    intro: [
      'Momentum keeps a vertical campus physically active: inter-batch leagues played at grounds nearby, a run club along the Salt Lake stretch, and ASMi’s contingent for the TIU inter-university sports meet.',
      'It is also, by some distance, the fastest way for a first-year to meet the batch above them.',
    ],
    calendar: [
      { when: 'Termly', what: 'Inter-batch league', detail: 'Football and cricket played across the term at nearby grounds.' },
      { when: 'Weekly', what: 'Run club', detail: 'Early-morning runs along the Salt Lake stretch, all paces.' },
      { when: 'Annual', what: 'TIU sports meet', detail: 'ASMi’s contingent at the inter-university meet.' },
    ],
    roles: ['Club President', 'League Coordinator', 'Run Club Lead', 'TIU Meet Captain'],
    openTo: 'All programmes',
    meets: 'Varies · Nearby grounds',
  },
];

export const getClub = (slug: string) => CLUBS.find((c) => c.slug === slug);

// ── Events ─────────────────────────────────────────────────────────────────
export interface CampusEvent {
  slug: string;
  tag: EventTag;
  title: string;
  /** One honest line. Anything longer belongs in `intro`, once confirmed. */
  summary: string;
  where?: string;
  when?: string;
  who?: string;
  /** Optional long copy. Events without it render summary + gallery only. */
  intro?: string[];
  details?: { label: string; value: string }[];
  highlights?: string[];
  /** Cover image: /photos/events/<slug>.jpg */
  photo?: string;
  /** Gallery: /photos/events/<slug>/1.jpg … */
  gallery?: string[];
  /** Source folder in the school's Drive, for whoever exports the photos. */
  driveFolder?: string;
  /** Slugs from data/people.ts, or names from the speaker directory. */
  speakers?: string[];
}

export type EventTag =
  | 'Flagship' | 'International' | 'Industry' | 'Academic'
  | 'Competition' | 'Culture' | 'Community' | 'Campus';

export const EVENT_TAGS: EventTag[] = [
  'Flagship', 'International', 'Industry', 'Academic',
  'Competition', 'Culture', 'Community', 'Campus',
];

/**
 * The ASMi event calendar.
 *
 * Titles and groupings mirror the school's own photo folders in Drive, so each
 * entry has photographs waiting for it; `driveFolder` records where. Entries
 * carry a short factual summary only — longer copy is added per event once
 * confirmed, rather than invented here. Several cross-reference the speaker
 * directory in data/speakers.ts.
 */
export const EVENTS: CampusEvent[] = [
  // ── Flagship ──────────────────────────────────────────────────────────
  {
    slug: 'asmi-orientation-2026',
    tag: 'Flagship',
    title: 'ASMi Orientation 2026',
    summary: 'The incoming batch\u2019s first week: introductions to the programme, the faculty and the clubs.',
    when: 'Start of the academic year',
    who: 'Incoming MBA and BBA students',
    driveFolder: 'Asmi Orientation 2026',
  },
  {
    slug: 'asmi-deploy-batch-of-2026',
    tag: 'Flagship',
    title: 'ASMi Deploy \u2014 Batch of 2026',
    summary: 'The placement send-off for the graduating batch.',
    who: 'Graduating batch',
    driveFolder: 'Asmi Deploy Batch of 2026',
  },
  {
    slug: 'asmi-farewell-fiesta',
    tag: 'Flagship',
    title: 'ASMi Farewell Fiesta',
    summary: 'The outgoing batch\u2019s farewell, hosted by the juniors.',
    who: 'Outgoing and continuing students',
    driveFolder: 'Asmi Farewell Fiesta',
  },
  {
    slug: 'mba-boot-camp-sundarban',
    tag: 'Flagship',
    title: 'MBA Boot Camp \u2014 Sundarban',
    summary: 'A residential field immersion in Jharkhali, running live assignments with local enterprises.',
    where: 'Jharkhali, Sundarban',
    when: 'Annual \u00b7 Residential',
    who: 'First-year MBA students',
    intro: [
      'The boot camp takes the incoming MBA cohort out of Sector V and into Jharkhali for a residential week of field assignments with local enterprises.',
      'The constraints are real \u2014 thin margins, limited capital, seasonal demand \u2014 and management frameworks that survive contact with them tend to stay with students for the rest of the programme.',
    ],
    details: [
      { label: 'Format', value: 'Residential, team-based' },
      { label: 'Cohort', value: 'First-year MBA' },
      { label: 'Duration', value: 'One week' },
      { label: 'Assessment', value: 'Field presentation' },
    ],
    highlights: ['Live assignments with local enterprises', 'Team-based and assessed in the field', 'Residential, away from campus'],
  },

  // ── International ─────────────────────────────────────────────────────
  {
    slug: 'asmi-malaysia-2025',
    tag: 'International',
    title: 'International Study Tour \u2014 Malaysia 2025',
    summary: 'Ten days with INTI International University: campus sessions, factory visits and cultural fieldwork.',
    where: 'Malaysia \u00b7 INTI International University',
    when: 'Annual',
    who: 'MBA cohort; compact format for EMBA',
    driveFolder: 'Asmi Malaysia 2025',
    intro: [
      'The study tour pairs academic sessions at INTI International University with industrial site visits and structured cultural fieldwork.',
      'It runs in the MBA third semester, with a compact format scheduled for Executive MBA participants who cannot take an extended break from work.',
    ],
    details: [
      { label: 'Destination', value: 'Malaysia' },
      { label: 'Partner', value: 'INTI International University' },
      { label: 'Duration', value: '10 days' },
      { label: 'Cohorts', value: 'MBA \u00b7 EMBA (compact)' },
    ],
    highlights: ['Industry sessions at INTI International University', 'Royal Selangor pewter factory tour', 'Barleys Chocolate factory visit', 'Cultural heritage fieldwork'],
  },

  // ── Industry ──────────────────────────────────────────────────────────
  {
    slug: 'ibm-day-technovate-2026',
    tag: 'Industry',
    title: 'IBM Day: TechnoVate 2026',
    summary: 'A full day with IBM on campus, led by the company\u2019s AI, data and cloud practitioners.',
    when: '22 September 2026',
    driveFolder: 'IBM Day Technovate 2026',
    speakers: ['Mr. Aman Bakshi', 'Mr. Robin Tyagi'],
  },
  {
    slug: 'ibm-immersion-programme',
    tag: 'Industry',
    title: 'IBM Immersion Programme',
    summary: 'Hands-on sessions with IBM covering the analytics and cloud content that runs through the curriculum.',
    driveFolder: 'IBM Immersion Programme',
  },
  {
    slug: 'google-gemini-ai-masterclass',
    tag: 'Industry',
    title: 'Google Gemini AI Masterclass',
    summary: 'A masterclass on applied generative AI, run through the group\u2019s Google partnership.',
    driveFolder: 'Google Gemini AI Masterclass',
  },
  {
    slug: 'corporate-connect-sessions',
    tag: 'Industry',
    title: 'Corporate Connect Sessions',
    summary: 'A recurring series in which hiring managers and founders brief students on what industry looks for.',
    when: 'Monthly',
    who: 'All programmes',
    driveFolder: 'Asmi Corporate Connect Session',
    intro: [
      'Once a month, hiring managers and founders come to campus \u2014 or host students at their offices \u2014 and say plainly what they look for and what disqualifies a candidate.',
      'Many of the managers running these sessions meet the same students again, on the other side of a table, eighteen months later.',
    ],
    details: [
      { label: 'Frequency', value: 'Monthly' },
      { label: 'Format', value: 'Briefing and open Q&A' },
      { label: 'Hosts', value: 'Hiring managers and founders' },
      { label: 'Open to', value: 'All programmes' },
    ],
    highlights: ['Direct access to hiring managers', 'What recruiters actually screen for', 'Office visits with partner organisations'],
  },
  {
    slug: 'corporate-connect-hr-analytics',
    tag: 'Industry',
    title: 'Corporate Connect: HR Analytics',
    summary: 'A corporate connect session on how people functions use data.',
    driveFolder: 'Asmi Corporate Connect Session on HR Analytics',
  },
  {
    slug: 'asmi-session-11-august-2026',
    tag: 'Industry',
    title: 'LinkedIn Branding & Practice Session',
    summary: 'A double session on personal branding and professional practice.',
    when: '11 August 2026',
    driveFolder: '11th August 2026',
    speakers: ['Neha Mishra', 'CA Nikhil Bajaj'],
  },
  {
    slug: 'asmi-finance-marathon',
    tag: 'Industry',
    title: 'The ASMi Finance Marathon',
    summary: 'A finance-focused day led by a practising financial controller.',
    when: '19 August 2026',
    driveFolder: 'The Asmi Finance Marathon',
    speakers: ['Mainak Roy'],
  },
  {
    slug: 'guest-lecture-series',
    tag: 'Industry',
    title: 'Guest Lecture Series',
    summary: 'Practitioners bring a live, unresolved problem from their own desk and the room works on it.',
    when: 'Fortnightly',
    who: 'All students; selected sessions open to applicants',
    intro: [
      'Every fortnight a practitioner brings a live problem from their own desk and the room works on it together.',
      'The brief to speakers is explicit: bring something unresolved, not a case study with a published answer.',
    ],
    details: [
      { label: 'Frequency', value: 'Fortnightly' },
      { label: 'Format', value: 'Working session' },
      { label: 'Speakers', value: 'Practitioners across functions' },
      { label: 'Open to', value: 'All programmes' },
    ],
    highlights: ['Live, unresolved problems', 'Cross-functional speakers', 'Prospective students welcome at selected sessions'],
  },

  // ── Academic ──────────────────────────────────────────────────────────
  {
    slug: 'prof-atanu-chaudhuri-session',
    tag: 'Academic',
    title: 'Supply Chain Management Session',
    summary: 'A session on technology and operations management with Durham University Business School.',
    when: '1 September 2026',
    driveFolder: 'Prof. Atanu Chaudhuri Session',
    speakers: ['Prof. Atanu Chaudhuri'],
  },
  {
    slug: 'ai-business-strategy-at-asmi',
    tag: 'Academic',
    title: 'AI & Business Strategy',
    summary: 'A session on where artificial intelligence actually changes strategic decisions.',
    driveFolder: 'AI Business Strategy at Asmi',
  },
  {
    slug: 'asmi-general-insurance',
    tag: 'Academic',
    title: 'General Insurance and Its Necessity',
    summary: 'A subject session on general insurance and risk cover.',
    driveFolder: 'Asmi General Insurance and ITS Necessity',
  },
  {
    slug: 'asmi-penalties-and-enforcement',
    tag: 'Academic',
    title: 'Penalties and Enforcement',
    summary: 'A session on regulatory penalties and enforcement in business practice.',
    driveFolder: 'Asmi Penalties and Enforcement',
  },
  {
    slug: 'asmi-happiness-by-design',
    tag: 'Academic',
    title: 'Happiness by Design',
    summary: 'A behavioural session on wellbeing and decision-making.',
    driveFolder: 'Asmi Happiness by Design',
  },
  {
    slug: 'asmi-cma-swagatam',
    tag: 'Academic',
    title: 'CMA Swagatam',
    summary: 'A welcome and orientation session for the CMA cohort.',
    driveFolder: 'Asmi CMA Swagatam',
  },
  {
    slug: 'asmi-sap-certificate-distribution',
    tag: 'Academic',
    title: 'SAP Certificate Distribution',
    summary: 'Certificates awarded to students completing the SAP module.',
    driveFolder: 'Asmi SAP Certificate Distribution',
  },

  // ── Competition ───────────────────────────────────────────────────────
  {
    slug: 'asmi-startup-games-2026',
    tag: 'Competition',
    title: 'ASMi Startup Games 2026',
    summary: 'A venture-building competition run across the cohort.',
    driveFolder: 'Asmi Startup Games 2026',
  },
  {
    slug: 'asmi-empathy-mapping-competition',
    tag: 'Competition',
    title: 'Empathy Mapping Competition',
    summary: 'A design-thinking competition on understanding the customer before the solution.',
    driveFolder: 'Asmi Empathy Mapping Competition',
  },
  {
    slug: 'asmi-entrepreneurship-day',
    tag: 'Competition',
    title: 'ASMi Entrepreneurship Day',
    summary: 'A day given over to student ventures, pitches and founder conversations.',
    driveFolder: 'Asmi Entrepreneurship Day',
  },
  {
    slug: 'asmi-premiere-league',
    tag: 'Competition',
    title: 'ASMi Premiere League',
    summary: 'The inter-batch sporting league, run by the sports club.',
    driveFolder: 'Asmi Premiere League',
  },

  // ── Culture ───────────────────────────────────────────────────────────
  {
    slug: 'asmi-agomoni-2026',
    tag: 'Culture',
    title: 'Agomoni 2026',
    summary: 'The school\u2019s Durga Puja celebration, run by the cultural club.',
    driveFolder: 'Asmi Agomoni 2026',
  },
  {
    slug: 'teachers-day-celebration',
    tag: 'Culture',
    title: 'Teachers Day Celebration',
    summary: 'Students take over the lecterns for a day \u2014 a long-running ASMi tradition.',
    when: 'September',
    who: 'All students and faculty',
    driveFolder: 'Asmi Teachers Day Celebration',
    intro: [
      'On Teachers Day the students teach. Classes are planned, delivered and \u2014 to the faculty\u2019s visible discomfort \u2014 graded by the cohort.',
      'It is a tradition, and it is also the fastest way to discover how much preparation a good session actually takes.',
    ],
    details: [
      { label: 'When', value: 'September' },
      { label: 'Format', value: 'Student-led classes' },
      { label: 'Organised by', value: 'Student council and Rangmanch' },
      { label: 'Open to', value: 'All programmes' },
    ],
    highlights: ['Students deliver the day\u2019s classes', 'Faculty tribute programme', 'Campus-wide participation'],
  },
  {
    slug: 'asmi-movie-screening',
    tag: 'Culture',
    title: 'Movie Screening & Creator Fireside Chat',
    summary: '\u201cI Am The Future\u201d screened on campus, followed by a conversation with the creator.',
    when: '26 August 2026',
    driveFolder: 'Asmi Movie Screening',
    speakers: ['Pilar Parodi Felix'],
  },
  {
    slug: 'christmas-celebration',
    tag: 'Culture',
    title: 'Christmas Celebration',
    summary: 'Music, secret santa and the year\u2019s last big gathering before the winter break.',
    when: 'December',
    who: 'All students, faculty and staff',
  },

  // ── Community ─────────────────────────────────────────────────────────
  {
    slug: 'cleanup-drive-at-tiu',
    tag: 'Community',
    title: 'Cleanup Drive at TIU',
    summary: 'A campus cleanup run with the wider Techno India University community.',
    driveFolder: 'Cleanup Drive at TIU',
  },
];

export const getEvent = (slug: string) => EVENTS.find((e) => e.slug === slug);
