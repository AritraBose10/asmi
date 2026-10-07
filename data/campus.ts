/**
 * Clubs and events.
 * Event names come from asmi_website_data.md. Club names, descriptions and all
 * per-item detail below are PLACEHOLDER — on-brand copy pending real material.
 */

export interface Club {
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
  tag: string;
  title: string;
  where: string;
  when: string;
  summary: string;
  intro: string[];
  details: { label: string; value: string }[];
  highlights: string[];
  who: string;
}

export const EVENTS: CampusEvent[] = [
  {
    slug: 'mba-boot-camp-sundarban',
    tag: 'Flagship', title: 'MBA Boot Camp — Sundarban', where: 'Jharkhali, Sundarban', when: 'Annual · Residential',
    summary: 'A residential immersion where first-year students run live field assignments with local enterprises, testing strategy frameworks outside the classroom.',
    intro: [
      'The boot camp takes the incoming MBA cohort out of Sector V and into Jharkhali for a residential week of field assignments with local enterprises.',
      'The constraints are real — thin margins, limited capital, seasonal demand — and management frameworks that survive contact with them tend to stay with students for the rest of the programme.',
    ],
    details: [
      { label: 'Format', value: 'Residential, team-based' },
      { label: 'Cohort', value: 'First-year MBA' },
      { label: 'Duration', value: 'One week' },
      { label: 'Assessment', value: 'Field presentation' },
    ],
    highlights: ['Live assignments with local enterprises', 'Team-based and assessed in the field', 'Residential, away from campus', 'Runs annually for the incoming cohort'],
    who: 'First-year MBA students',
  },
  {
    slug: 'international-study-tour-malaysia',
    tag: 'International', title: 'International Study Tour — Malaysia', where: 'INTI International University', when: 'Annual · 10 Days',
    summary: 'Ten days of industry immersion, campus sessions and cultural discovery in partnership with INTI International University.',
    intro: [
      'The study tour pairs academic sessions at INTI International University with industrial site visits and structured cultural fieldwork.',
      'It runs in the MBA third semester, with a compact format scheduled for Executive MBA participants who cannot take an extended break from work.',
    ],
    details: [
      { label: 'Destination', value: 'Malaysia' },
      { label: 'Partner', value: 'INTI International University' },
      { label: 'Duration', value: '10 days' },
      { label: 'Cohorts', value: 'MBA · EMBA (compact)' },
    ],
    highlights: ['Industry sessions at INTI International University', 'Royal Selangor pewter factory tour', 'Barleys Chocolate factory visit', 'Cultural heritage fieldwork'],
    who: 'MBA cohort; compact format for EMBA',
  },
  {
    slug: 'session-meghdut-roychowdhury',
    tag: 'Leadership', title: 'Session with Meghdut Roychowdhury', where: 'Chief Innovation Officer, Techno India Group', when: 'Guest Session',
    summary: 'An open session on innovation, entrepreneurship and building technology ventures from Eastern India.',
    intro: [
      'The group’s Chief Innovation Officer runs an open session on innovation and venture building, consistently one of the best-attended fixtures in the calendar.',
      'It is unusually practical for a leadership session: the material is about what it takes to start something here, in this region, with these constraints.',
    ],
    details: [
      { label: 'Speaker', value: 'Meghdut Roychowdhury' },
      { label: 'Role', value: 'CIO & Executive Director, Techno India Group' },
      { label: 'Format', value: 'Open session with Q&A' },
      { label: 'Open to', value: 'All programmes' },
    ],
    highlights: ['Innovation and venture building', 'Eastern India’s startup ecosystem', 'Open Q&A with the whole school'],
    who: 'All students',
  },
  {
    slug: 'session-kaustav-majumdar',
    tag: 'Leadership', title: 'Session with Kaustav Majumdar', where: 'Chief Mentor, ASMi Business School', when: 'Guest Session',
    summary: 'Strategy and leadership masterclass drawing on decades of senior management practice.',
    intro: [
      'ASMi’s Chief Mentor runs a recurring masterclass on strategy and leadership built from decades of senior management practice.',
      'The format is deliberately adversarial: students take a position early and defend it as the facts change.',
    ],
    details: [
      { label: 'Speaker', value: 'Kaustav Majumdar' },
      { label: 'Role', value: 'Chief Mentor, ASMi Business School' },
      { label: 'Format', value: 'Masterclass' },
      { label: 'Open to', value: 'All programmes' },
    ],
    highlights: ['Strategy under incomplete information', 'Decision-making and defence', 'Leadership from practice'],
    who: 'All students',
  },
  {
    slug: 'session-pauline-laravoire',
    tag: 'Sustainability', title: 'Session with Pauline Laravoire', where: 'Sustainability Director, Techno India Group', when: 'Guest Session',
    summary: 'ESG, responsible business and how sustainability reshapes the manager’s job description.',
    intro: [
      'The group’s Sustainability Director runs sessions on ESG as an operating constraint rather than a values statement.',
      'The session anchors the sustainability thread that now runs through every MBA specialisation.',
    ],
    details: [
      { label: 'Speaker', value: 'Pauline Laravoire' },
      { label: 'Role', value: 'Sustainability Director, Techno India Group' },
      { label: 'Format', value: 'Session with case discussion' },
      { label: 'Open to', value: 'All programmes' },
    ],
    highlights: ['ESG as an operating constraint', 'Disclosure and impact measurement', 'Sustainability across functions'],
    who: 'All students',
  },
  {
    slug: 'corporate-connect-sessions',
    tag: 'Industry', title: 'Corporate Connect Sessions', where: 'Campus & partner offices', when: 'Monthly',
    summary: 'Recurring sessions where hiring managers and founders brief students on what industry actually looks for.',
    intro: [
      'Once a month, hiring managers and founders come to campus — or host students at their offices — and say plainly what they look for and what disqualifies a candidate.',
      'Many of the managers running these sessions meet the same students again, on the other side of a table, eighteen months later.',
    ],
    details: [
      { label: 'Frequency', value: 'Monthly' },
      { label: 'Format', value: 'Briefing and open Q&A' },
      { label: 'Hosts', value: 'Hiring managers and founders' },
      { label: 'Open to', value: 'All programmes' },
    ],
    highlights: ['Direct access to hiring managers', 'What recruiters actually screen for', 'Office visits with partner organisations'],
    who: 'All students',
  },
  {
    slug: 'guest-lecture-series',
    tag: 'Industry', title: 'Guest Lecture Series', where: 'ASMi Campus, Sector V', when: 'Fortnightly',
    summary: 'Practitioners from finance, marketing, analytics and operations teach a live problem from their own desk.',
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
    who: 'All students; selected sessions open to applicants',
  },
  {
    slug: 'teachers-day-celebration',
    tag: 'Culture', title: 'Teachers Day Celebration', where: 'ASMi Campus', when: 'September',
    summary: 'Students take over the lecterns for a day — a long-running ASMi tradition of tribute and role reversal.',
    intro: [
      'On Teachers Day the students teach. Classes are planned, delivered and — to the faculty’s visible discomfort — graded by the cohort.',
      'It is a tradition, and it is also the fastest way to discover how much preparation a good session actually takes.',
    ],
    details: [
      { label: 'When', value: 'September' },
      { label: 'Format', value: 'Student-led classes' },
      { label: 'Organised by', value: 'Student council and Rangmanch' },
      { label: 'Open to', value: 'All programmes' },
    ],
    highlights: ['Students deliver the day’s classes', 'Faculty tribute programme', 'Campus-wide participation'],
    who: 'All students and faculty',
  },
  {
    slug: 'christmas-celebration',
    tag: 'Culture', title: 'Christmas Celebration', where: 'ASMi Campus', when: 'December',
    summary: 'Kolkata’s Park Street spirit arrives on campus: music, secret santa and the year’s last big gathering.',
    intro: [
      'Kolkata takes Christmas seriously, and so does the campus. The December gathering is the last large event before the winter break.',
      'Rangmanch runs the programme, with music, secret santa and a batch dinner that spills into Park Street.',
    ],
    details: [
      { label: 'When', value: 'December' },
      { label: 'Format', value: 'Campus celebration' },
      { label: 'Organised by', value: 'Rangmanch cultural club' },
      { label: 'Open to', value: 'All programmes' },
    ],
    highlights: ['Live music and performances', 'Secret santa across the cohort', 'The year’s last big gathering'],
    who: 'All students, faculty and staff',
  },
  {
    slug: 'asmi-campus-events',
    tag: 'Campus', title: 'ASMi Campus Events', where: 'Across the academic year', when: 'Year-round',
    summary: 'Orientation, convocation, cultural evenings and inter-batch competitions that shape the ASMi calendar.',
    intro: [
      'Beyond the flagship fixtures, the calendar carries orientation, convocation, club fairs, cultural evenings and inter-batch competitions throughout the year.',
      'Orientation week in particular matters: the club fair that runs inside it is how most students find the group they spend two years with.',
    ],
    details: [
      { label: 'Frequency', value: 'Year-round' },
      { label: 'Includes', value: 'Orientation, convocation, club fair' },
      { label: 'Organised by', value: 'Student council and clubs' },
      { label: 'Open to', value: 'All programmes' },
    ],
    highlights: ['Orientation week and club fair', 'Convocation', 'Inter-batch competitions', 'Cultural evenings'],
    who: 'All students',
  },
];

export const getEvent = (slug: string) => EVENTS.find((e) => e.slug === slug);
