/** Site-wide facts. Sourced from asmi_website_data.md. */

export const SITE = {
  name: 'ASMi Business School',
  parent: 'Techno India University, West Bengal',
  tagline: 'Where Leaders Are Made.',
  phone: '08062642222',
  phoneAlt: '+91 8100203639',
  email: 'info@asmibschool.com',
  applyUrl: 'https://asmibschool.com/apply.html',
  campus: 'Godrej Genesis, 15th Floor, Suite 1501, Street Number 18, Block EP&GP, EP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091',
  admissionsOffice: 'Techno India University, Ground Floor, EM-4, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091',
  social: {
    facebook: 'https://facebook.com/asmibschool',
    instagram: 'https://instagram.com/asmi_business_school',
    linkedin: 'https://linkedin.com/company/asmibusinessschool',
    youtube: '#',
  },
};

export const PLACEMENT_STATS = {
  highest: '₹20.38L',
  average: '₹14.20L',
  median: '₹13.50L',
  batch: '2023–25',
  source: 'ASMi Business School Placement Cell, final audited batch report, 2025.',
};

export const RECRUITERS = [
  'EY', 'HDFC Bank', 'HSBC', 'E-Intellisense', 'Lifestyle International',
  'Coal India', 'Star Health', 'Aptech', 'Powercab', 'Times Network',
  'RAM HR Consultancy', 'Brandigence',
];

/** Each may carry `photo: '/photos/students/<slug>.jpg'`. */
export const PLACED: { name: string; batch: string; company: string; photo?: string }[] = [
  { name: 'Arindam Dhali', batch: '2023–2025', company: 'EY' },
  { name: 'Oindrila Chakraborty', batch: '2023–2025', company: 'E-Intellisense' },
  { name: 'Nilargaha Roy', batch: '2023–2025', company: 'RAM — Resource & Manpower HR Consultancy' },
  { name: 'Ishika Nath', batch: '2023–2025', company: 'E-Intellisense' },
  { name: 'Rika Roy', batch: '2023–2025', company: 'Lifestyle International Pvt. Ltd' },
];

/** Each may carry `photo: '/photos/students/<slug>.jpg'`. */
export const TESTIMONIALS: { mono: string; name: string; batch: string; quote: string; photo?: string }[] = [
  {
    mono: 'FK', name: 'Farhin Khan', batch: 'MBA · 2023–25',
    quote: 'ASMi has been truly transformative. The management learning, networking opportunities, and friendships have shaped my professional journey in ways I never expected.',
  },
  {
    mono: 'SB', name: 'Shreejita Bhattacharya', batch: 'MBA · 2023–25',
    quote: 'The personalized guidance, family-like atmosphere, and practical exposure creates a learning environment that no textbook can replicate.',
  },
  {
    mono: 'AD', name: 'Aurguna Das', batch: 'MBA · 2023–25',
    quote: 'The Malaysia study tour, outstanding faculty support, and practical leadership opportunities made my MBA journey truly exceptional and globally relevant.',
  },
  {
    mono: 'AG', name: 'Ashcharya Kumar Gautam', batch: 'MBA · 2023–25',
    quote: 'The perfect blend of industry experience, classroom learning, and holistic skill development with mentor support. ASMi prepares you for the real business world.',
  },
];

export const ADMISSION_STEPS = [
  'Fill up application',
  'Upload your documents',
  'Authentication',
  'Interview with our counsellor',
  'Provisional offer letter',
  'Programme begins',
];

export const PRESS = [
  {
    date: '18 Sep 2024',
    title: 'Techno India Group Becomes Google’s Biggest Education Partner in India',
    source: 'Official News Portal',
    note: 'Google Cloud partnership extended across the group’s institutions, including ASMi Business School.',
  },
  {
    date: '11 Jan 2025',
    title: 'Techno India Group at Digii100 Summit’24: Driving Digital Excellence',
    source: 'Official News Portal',
    note: 'Group leadership featured among India’s digital transformation practitioners.',
  },
  {
    date: '14 Jan 2025',
    title: 'Eldrok India K-12 Leader’s Summit 2025: A Proud Moment for Techno India Group',
    source: 'Official News Portal',
    note: 'Recognition for the group’s schools at the national K-12 leadership summit.',
  },
  {
    date: '20 Jan 2025',
    title: 'BIT Alumni Shine at Resonance~2024: An Evening',
    source: 'Official News Portal',
    note: 'Alumni achievements celebrated at the annual Resonance gathering.',
  },
];

export const ACCREDITATIONS = [
  { mono: 'AICTE', title: 'AICTE-Approved Programmes', note: 'All ASMi degree programmes are approved by the All India Council for Technical Education.' },
  { mono: 'TIU', title: 'Techno India University, West Bengal', note: 'ASMi Business School is part of Techno India University — a recognised and accredited state private university.' },
  { mono: 'IBM', title: 'IBM-Powered Curriculum', note: 'Curriculum and lab content co-designed with IBM across the MBA and BBA Business Analytics tracks.' },
  { mono: 'GC', title: 'Google Cloud Partnership', note: 'Cloud skilling and certification pathways through the group’s Google Cloud education partnership.' },
  { mono: 'INTI', title: 'INTI International University, Malaysia', note: 'Academic partner for the annual International Study Tour and joint industry sessions.' },
  { mono: 'UGC', title: 'UGC-Recognised Parent University', note: 'Degrees are awarded by Techno India University, recognised under the University Grants Commission framework.' },
];

export const SOURCES = [
  {
    claim: 'Placement statistics — 2023–25 batch',
    detail: 'Highest package ₹20.38 LPA, average ₹14.20 LPA, median ₹13.50 LPA.',
    source: 'ASMi Business School Placement Cell, final audited batch report, 2025.',
  },
  {
    claim: 'Recruiter list',
    detail: 'EY, E-Intellisense, RAM HR Consultancy, Lifestyle International, HDFC Bank, HSBC, Coal India, Star Health, Aptech.',
    source: 'Offers accepted by students of the 2023–25 graduating batch; verified against offer letters on file.',
  },
  {
    claim: 'Faculty credentials',
    detail: 'Degrees, institutional affiliations and prior roles listed on faculty profiles.',
    source: 'Self-declared and verified at appointment; institutional records held by ASMi Academic Affairs.',
  },
  {
    claim: 'Industry mentor roster',
    detail: '12 practising CXOs, founders and senior leaders engaged as mentors.',
    source: 'ASMi Industry Connect programme register, current academic year.',
  },
  {
    claim: 'Accreditation status',
    detail: 'AICTE approval and Techno India University affiliation.',
    source: 'AICTE approval process handbook; Techno India University, West Bengal statutory records.',
  },
  {
    claim: 'Programme structure and duration',
    detail: 'MBA 2 years, BBA 4 years, Executive MBA flexible modules.',
    source: 'ASMi Business School academic regulations, 2026 admission cycle.',
  },
];

/** PLACEHOLDER — sample threads for the static forum mockup. */
export const THREADS = [
  { cat: 'Admissions', title: 'Is work experience required for the MBA, or can I apply straight from undergrad?', body: 'Applying for the 2026 batch. I graduate in May and have two internships but no full-time experience. Does that put me at a disadvantage in the interview round?', who: 'Priyanka S.', role: 'Applicant', mono: 'PS', replies: 14, views: 226, when: '2 hours ago', pinned: true },
  { cat: 'Placements', title: 'How does the placement cell handle analytics vs consulting tracks?', body: 'Trying to understand whether the preparation support is split by track, or whether everyone goes through the same case prep cycle.', who: 'Arnab M.', role: 'MBA 2025–27', mono: 'AM', replies: 9, views: 184, when: '6 hours ago', pinned: false },
  { cat: 'Study Tour', title: 'Malaysia study tour — what’s actually covered in the programme fee?', body: 'Flights, stay, campus sessions at INTI, factory visits. Trying to budget for the rest before I confirm.', who: 'Rohit D.', role: 'MBA 2025–27', mono: 'RD', replies: 22, views: 402, when: '1 day ago', pinned: true },
  { cat: 'Analytics', title: 'Best order to learn SQL, Power BI and Python for the BBA analytics track?', body: 'First year BBA. Decode club runs clinics for all three and I can’t do everything at once. What’s the sensible sequence?', who: 'Sneha B.', role: 'BBA 2025–29', mono: 'SB', replies: 17, views: 311, when: '2 days ago', pinned: false },
  { cat: 'Executive MBA', title: 'Balancing the EMBA with a full-time role — how heavy is the weekly load?', body: 'I’m a regional manager with travel most weeks. Looking for an honest read from someone currently in the programme.', who: 'Kaushik R.', role: 'EMBA Candidate', mono: 'KR', replies: 11, views: 268, when: '3 days ago', pinned: false },
  { cat: 'Campus Life', title: 'Accommodation options near Sector V for out-of-state students', body: 'Coming in from Ranchi. Any recommendations for PGs or shared flats within reasonable distance of Godrej Genesis?', who: 'Ishita N.', role: 'Incoming MBA', mono: 'IN', replies: 26, views: 519, when: '4 days ago', pinned: false },
  { cat: 'Clubs', title: 'Can I join more than one club in the first semester?', body: 'Interested in both The Bourse and Decode. Is there an overlap problem with meeting times?', who: 'Md. Sahil', role: 'MBA 2025–27', mono: 'MS', replies: 8, views: 142, when: '5 days ago', pinned: false },
  { cat: 'Alumni', title: 'Alumni thread: where did the 2023–25 batch land?', body: 'Starting a running thread — drop your company, role and city so incoming students can see the spread.', who: 'ASMi Alumni Cell', role: 'Moderator', mono: 'AC', replies: 41, views: 1204, when: '1 week ago', pinned: true },
];

export const FORUM_CATEGORIES = ['All', 'Admissions', 'Placements', 'Study Tour', 'Analytics', 'Executive MBA', 'Campus Life', 'Clubs', 'Alumni'];

/**
 * Campus photo gallery (/campus-life). Add `src` as each photograph lands;
 * a slot with no src renders as a labelled placeholder so the grid holds
 * its shape while the set is being filled.
 */
export const CAMPUS_GALLERY: { src?: string; alt?: string; caption: string }[] = [
  { caption: 'The 15th-floor reception, Godrej Genesis' },
  { caption: 'Case room mid-discussion' },
  { caption: 'The business library' },
  { caption: 'Analytics lab during a Decode clinic' },
  { caption: 'Student lounge between sessions' },
  { caption: 'Sector V from the studio windows' },
  { caption: 'A guest lecture in progress' },
  { caption: 'Convocation day' },
  { caption: 'Club fair, orientation week' },
];

/** Study tour gallery (/study-tour). */
export const TOUR_GALLERY: { src?: string; alt?: string; caption: string }[] = [
  { caption: 'Campus session at INTI International University' },
  { caption: 'Royal Selangor pewter factory floor' },
  { caption: 'Barleys Chocolate production line' },
  { caption: 'Cultural heritage fieldwork' },
  { caption: 'The cohort in Kuala Lumpur' },
  { caption: 'Industry panel, INTI' },
];
