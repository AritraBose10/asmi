/**
 * ABSAT 2027 — content for /absat
 *
 * Built from absat-2027-landing-page-spec.md.
 *
 * ── HOW UNCONFIRMED VALUES WORK ────────────────────────────────────────────
 * Anything not yet confirmed is `null`. The page renders `null` as a
 * "To be announced" state instead of a placeholder like [DD Month 2026], and
 * Event structured data is emitted only once the two attempt dates are real.
 *
 * Fill a value → it appears on the page automatically. When every value below
 * is filled and the compliance wording is signed off, set PUBLISHED = true to
 * drop the noindex tag.
 *
 * Dates are ISO (YYYY-MM-DD) so they can go straight into <time datetime>.
 */

/** Flip to true only when §6 of the spec's launch QA checklist passes. */
export const PUBLISHED = false;

export const ABSAT = {
  year: 2027,
  batch: '2027–29',
  canonical: 'https://asmibschool.com/absat/',

  /** Helpdesk. Spec flags both as "confirm"; phone matches the site-wide number. */
  helpdeskEmail: null as string | null, // → falls back to info@asmibschool.com
  helpdeskPhone: '+91 8100203639',
  helpdeskHours: 'Mon–Sat, 10:00 am – 6:00 pm IST',

  /** Seats in the MBA intake (spec §2.6 footnote). */
  seats: null as number | null,

  /** Provisional-admission deadline for final-year students (spec §2.8). */
  documentDeadline: null as string | null,

  /**
   * Portal URLs. Null keeps every CTA on the on-page form and hides the
   * "Log in with your ABSAT ID" / "Candidate Login" links rather than
   * pointing them at dead anchors.
   */
  portalSignupUrl: null as string | null,
  portalLoginUrl: null as string | null,

  /** Policy pages. Both are required before the form may collect data. */
  privacyPolicyUrl: null as string | null,
  grievanceUrl: null as string | null,

  /** Spec §2.15 quick link — lives on the current live site. */
  mbaAdmissionsUrl: 'https://asmibschool.com/admission/',
};

// ── §2.4 Hero stats ─────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: '75', label: 'Questions' },
  { value: '90 min', label: 'Duration' },
  { value: '2', label: 'Attempts, best score counts' },
  { value: 'CBT', label: 'Remote-proctored or centre' },
];

// ── §2.6 Specialisations ────────────────────────────────────────────────────
export const MBA_SPECIALISATIONS = [
  'Marketing',
  'Finance',
  'Human Resources',
  'Entrepreneurship',
  'Emerging Technology & Entrepreneurship',
];

// ── §2.7 Important dates ────────────────────────────────────────────────────
export interface DateRow {
  event: string;
  date: string | null;
  /** Marks the two rows the spec asked to be added (blocker #5). */
  attempt?: 1 | 2;
}

export const DATES: DateRow[] = [
  { event: 'Registration opens', date: null },
  { event: 'Last date for registration and fee payment', date: null },
  { event: 'Mock test available', date: null },
  { event: 'Admit card release (Attempt 1)', date: null, attempt: 1 },
  { event: 'ABSAT Attempt 1', date: null, attempt: 1 },
  { event: 'Admit card release (Attempt 2)', date: null, attempt: 2 },
  { event: 'ABSAT Attempt 2', date: null, attempt: 2 },
  { event: 'Final scorecard (best of two attempts)', date: null },
  { event: 'Shortlist for WAT / Personal Interview', date: null },
  { event: 'Final merit list and offer letters', date: null },
];

// ── §2.8 Eligibility and selection ──────────────────────────────────────────
export const ELIGIBILITY = [
  'A bachelor’s degree of minimum three years’ duration in any discipline from a UGC-recognised university, or an equivalent qualification recognised by AIU, with at least 50% aggregate marks (45% for SC/ST/PwD candidates), in line with AICTE norms.',
  'Final-year students awaiting results may apply. Admission is provisional until the degree and marksheets are submitted.',
  'International and NRI candidates may apply through ABSAT or with a valid GMAT/GRE score.',
];

/** Final merit weights — null until confirmed (spec §2.8 step 3). */
export const MERIT_WEIGHTS: { component: string; weight: number | null }[] = [
  { component: 'ABSAT score', weight: null },
  { component: 'Written Ability Test', weight: null },
  { component: 'Personal Interview', weight: null },
  { component: 'Academics and work experience', weight: null },
];

// ── §2.9 Test pattern ───────────────────────────────────────────────────────
export const PATTERN = [
  { section: 'Verbal Ability & Reading Comprehension', questions: 20, marks: 20 },
  { section: 'Quantitative Aptitude & Data Interpretation', questions: 20, marks: 20 },
  { section: 'Logical & Analytical Reasoning', questions: 20, marks: 20 },
  { section: 'Business, Technology & Current Affairs', questions: 15, marks: 15 },
];

export const PATTERN_NOTES = [
  {
    title: 'Marking scheme',
    body: '+1 for each correct answer, −0.25 for each incorrect answer, 0 for unattempted questions.',
  },
  {
    title: 'Scoring',
    body: 'Scores are normalised across sessions; the scorecard reports a scaled score and a percentile.',
  },
  {
    title: 'Two attempts',
    body: 'Choose one or two attempts at registration. The higher of the two scores is used for admission.',
  },
  {
    title: 'Score validity',
    body: 'ABSAT 2027 scores are valid for the 2027–29 MBA admission cycle.',
  },
];

// ── §2.10 Syllabus ──────────────────────────────────────────────────────────
export const SYLLABUS = [
  {
    icon: 'book',
    title: 'Verbal Ability & RC',
    body: 'Reading comprehension, para-jumbles, sentence correction, vocabulary in context, critical reasoning, para-summary.',
  },
  {
    icon: 'chart',
    title: 'Quantitative Aptitude & DI',
    body: 'Arithmetic, algebra, geometry and mensuration, number systems, modern maths, tables, charts and caselets.',
  },
  {
    icon: 'target',
    title: 'Logical & Analytical Reasoning',
    body: 'Arrangements, puzzles, coding-decoding, syllogisms, blood relations, series, data sufficiency, decision making.',
  },
  {
    icon: 'globe',
    title: 'Business, Tech & Current Affairs',
    body: 'Indian economy and business news, startups and entrepreneurship, digital and emerging technologies, national and international affairs.',
  },
];

// ── §2.11 Fees and how to apply ─────────────────────────────────────────────
export const FEES: { option: string; fee: number | null }[] = [
  { option: 'One attempt', fee: null },
  { option: 'Two attempts', fee: null },
  { option: 'SC/ST/PwD candidates (per attempt)', fee: null },
];

export const APPLY_STEPS = [
  { title: 'Create your account', body: 'Register with your email and mobile number, and verify both with an OTP.' },
  { title: 'Fill the application', body: 'Personal, academic and work-experience details.' },
  { title: 'Upload documents', body: 'Photograph, signature, photo ID, and a category certificate if applicable.' },
  { title: 'Choose attempts, test mode and city', body: 'Remote-proctored from home, or a centre-based test in your chosen city.' },
  { title: 'Pay the fee', body: 'Download your confirmation page carrying your ABSAT ID.' },
];

// ── §2.12 Test modes and centres ────────────────────────────────────────────
export const TEST_MODES = [
  {
    icon: 'cloud',
    title: 'Remote-proctored (home-based)',
    body: 'Take the test on a laptop or desktop with a webcam, microphone and a stable internet connection. AI and live proctoring run throughout. A system-compatibility check is mandatory before the test.',
  },
  {
    icon: 'brief',
    title: 'Centre-based',
    body: 'Computer-based test at designated centres. Report 60 minutes before your slot with your admit card and original photo ID.',
  },
];

export const CENTRES = [
  'Kolkata', 'Delhi NCR', 'Mumbai', 'Bengaluru', 'Pune', 'Hyderabad',
  'Chennai', 'Guwahati', 'Bhubaneswar', 'Patna', 'Ranchi', 'Siliguri',
];

// ── §2.13 Downloads and notices ─────────────────────────────────────────────
/**
 * `href: null` renders as "Available soon" rather than a dead link, so the
 * page never ships a 404 (spec §6). Add the path and size once the PDF exists.
 */
export interface Download {
  title: string;
  kind: 'PDF' | 'Link';
  href: string | null;
  size?: string;
  note?: string;
}

export const DOWNLOADS: Download[] = [
  { title: 'ABSAT 2027 Information Bulletin', kind: 'PDF', href: null },
  { title: 'Detailed syllabus and sample questions', kind: 'PDF', href: null },
  { title: 'Remote-proctoring guidelines', kind: 'PDF', href: null },
  {
    title: 'Mock test and system check',
    kind: 'Link',
    href: null,
    // Spec blocker #6: resolved as gated. Keep this wording consistent wherever
    // the mock test is mentioned.
    note: 'Live for registered candidates',
  },
];

/** Reverse-chronological. Move to a CMS collection when one exists (spec §2.13). */
export const NOTICES: { date: string | null; text: string }[] = [
  { date: null, text: 'ABSAT 2027 Information Bulletin released.' },
  { date: null, text: 'Registration for ABSAT 2027 opens.' },
  { date: null, text: 'Mock test and system-check link live for registered candidates.' },
];

// ── §2.14 FAQ ───────────────────────────────────────────────────────────────
export const FAQS: { q: string; a: string }[] = [
  {
    q: 'Is ABSAT mandatory for admission to the ASMi MBA?',
    a: 'No. Candidates with valid CAT, XAT, MAT, CMAT, ATMA or GMAT scores may apply directly. ABSAT is open to all eligible candidates and is the recommended route for those without another score.',
  },
  {
    q: 'Can I take ABSAT twice?',
    a: 'Yes. Select two attempts at registration. Only your higher score is considered for admission.',
  },
  {
    q: 'Is there negative marking in ABSAT?',
    a: 'Yes. Each incorrect answer carries a deduction of 0.25 marks. Unattempted questions carry no penalty.',
  },
  {
    q: 'What do I need for the remote-proctored test?',
    a: 'A laptop or desktop with a webcam and microphone, a supported browser, a stable internet connection, a quiet room and an original photo ID. Mobile phones and tablets are not permitted.',
  },
  {
    q: 'Can I change my test date, city or mode after paying?',
    a: 'No. Choices made at the time of fee payment are final, and the fee is non-refundable and non-transferable.',
  },
  {
    q: 'Who is eligible for ABSAT 2027?',
    a: 'Anyone holding a bachelor’s degree of at least three years in any discipline from a UGC-recognised university, with 50% aggregate marks (45% for SC/ST/PwD candidates). Final-year students awaiting results may also apply.',
  },
  {
    q: 'Is there an age limit for ABSAT?',
    a: 'No. There is no upper or lower age limit for ABSAT, provided you meet the academic eligibility criteria.',
  },
  {
    q: 'How do I download the ABSAT admit card?',
    a: 'Admit cards are released separately for each attempt and are downloaded from the candidate portal using your ABSAT ID. Registered candidates are notified by email and SMS when each admit card goes live.',
  },
  {
    q: 'What is the ABSAT exam date?',
    a: 'ABSAT 2027 runs in two attempts. Exact dates are published in the Important dates section above and in the Information Bulletin; registered candidates are notified of any change.',
  },
  {
    q: 'What is the ABSAT registration fee?',
    a: 'The fee depends on whether you register for one or two attempts, with a concessional rate for SC/ST/PwD candidates. Current amounts are listed in the Registration fee section above.',
  },
  {
    q: 'Are scholarships linked to ABSAT scores?',
    a: 'Merit scholarships are awarded on the basis of ABSAT percentile and overall performance across the selection process. Write to the helpdesk for the current scholarship policy.',
  },
];

// ── §2.2 Section sub-nav ────────────────────────────────────────────────────
export const SECTION_NAV = [
  { href: '#about', label: 'About' },
  { href: '#dates', label: 'Dates' },
  { href: '#eligibility', label: 'Eligibility' },
  { href: '#pattern', label: 'Test Pattern' },
  { href: '#syllabus', label: 'Syllabus' },
  { href: '#fees', label: 'Fees' },
  { href: '#centres', label: 'Test Centres' },
  { href: '#faq', label: 'FAQs' },
];

// ── Helpers ─────────────────────────────────────────────────────────────────
export const TBA = 'To be announced';

/** 2026-08-14 → "14 August 2026" */
export function formatDate(iso: string | null): string {
  if (!iso) return TBA;
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export const attemptDates = () => ({
  one: DATES.find((d) => d.event === 'ABSAT Attempt 1')?.date ?? null,
  two: DATES.find((d) => d.event === 'ABSAT Attempt 2')?.date ?? null,
});

export const PATTERN_TOTALS = {
  questions: PATTERN.reduce((n, r) => n + r.questions, 0),
  marks: PATTERN.reduce((n, r) => n + r.marks, 0),
  duration: '90 minutes',
};
