/** Programmes and MBA specializations. Facts from asmi_website_data.md. */

export interface LadderStep {
  term: string;
  title: string;
  desc: string;
  bullets: string[];
}

export interface Program {
  slug: string;
  code: string;
  name: string;
  titleHtml: string;
  badge: string;
  eyebrow: string;
  heroTheme: 'ph-dark' | 'ph-deep' | 'ph-gold';
  image: string;
  dek: string;
  summary: string;
  meta: { value: string; label: string }[];
  facts: { label: string; value: string }[];
  tags: string[];
  highlights: string[];
  features: { icon: string; title: string; desc: string }[];
  ladderLabel: string;
  ladder: LadderStep[];
  facultyPicks: string[];
  faq: { q: string; a: string }[];
  ctaHeading: string;
  ctaSub: string;
}

export const PROGRAMS: Program[] = [
  {
    slug: 'mba',
    code: 'MBA',
    name: 'Master of Business Administration',
    titleHtml: 'Master of Business<br /><em>Administration</em>',
    badge: 'Flagship',
    eyebrow: 'Flagship Programme',
    heroTheme: 'ph-dark',
    image: 'campus-life.png',
    dek: 'Two years, six specializations, and a curriculum built with IBM around the work managers actually do. AICTE-approved and awarded by Techno India University.',
    summary: 'Future-focused curriculum with six specializations — Marketing, Finance, HR, Technology, Entrepreneurship & Sustainability. Powered by IBM.',
    meta: [
      { value: '2 Years', label: 'Full Time' },
      { value: '6', label: 'Specializations' },
      { value: '₹20.38L', label: 'Highest Package' },
      { value: 'AICTE', label: 'Approved' },
    ],
    facts: [
      { label: 'Duration', value: '2 Years' },
      { label: 'Mode', value: 'Full Time, On Campus' },
      { label: 'Degree Awarded By', value: 'Techno India University' },
      { label: 'Industry Partner', value: 'IBM' },
      { label: 'Eligibility', value: 'Bachelor’s degree, any discipline' },
      { label: 'Intake', value: 'Batch 2026' },
    ],
    tags: ['Marketing', 'Finance', 'HR', 'Technology'],
    highlights: [
      '6 industry-aligned specializations',
      'IBM & Google Cloud powered curriculum',
      '₹20.38 LPA highest package (2023–25)',
    ],
    features: [
      { icon: 'cloud', title: 'IBM-powered curriculum', desc: 'Analytics, cloud and emerging-technology modules co-designed with IBM, plus Google Cloud skilling pathways through the wider Techno India Group partnership.' },
      { icon: 'brief', title: 'Learning by doing', desc: 'Live projects, internships and case work run alongside every theory module. You present to practitioners, not just to professors.' },
      { icon: 'users', title: '12 industry mentors', desc: 'Practising CXOs and founders — from HDFC Bank and HSBC to Shark Tank India alumni — mentor students through the two years.' },
      { icon: 'globe', title: 'International study tour', desc: 'A ten-day immersion in Malaysia with INTI International University: industry sessions, factory floors and cultural fieldwork.' },
      { icon: 'target', title: 'Placement from day one', desc: 'The placement cell starts interview preparation in the first semester, not the last. ₹14.20 LPA average for the 2023–25 batch.' },
      { icon: 'leaf', title: 'Sustainability as a thread', desc: 'ESG and responsible business run through every specialization, led by the group’s Sustainability Director.' },
    ],
    ladderLabel: 'Semester',
    ladder: [
      { term: '01', title: 'The management core', desc: 'Foundations every manager is assumed to have: accounting, economics, organisational behaviour, statistics and business communication.', bullets: ['Financial & Managerial Accounting', 'Managerial Economics', 'Organisational Behaviour', 'Business Statistics', 'Business Communication'] },
      { term: '02', title: 'Functions and systems', desc: 'Functional depth across marketing, finance, operations and people, with the first IBM-powered analytics modules.', bullets: ['Marketing Management', 'Corporate Finance', 'Operations & Supply Chain', 'Human Resource Management', 'Business Analytics with IBM'] },
      { term: '03', title: 'Specialization & internship', desc: 'Your chosen track goes deep, alongside a summer internship and the international study tour.', bullets: ['Specialization electives', 'Summer internship', 'International Study Tour — Malaysia', 'Live industry project'] },
      { term: '04', title: 'Strategy and the capstone', desc: 'Everything converges: strategy, sustainability, and a capstone project defended before industry practitioners.', bullets: ['Strategic Management', 'Sustainability & ESG', 'Capstone project', 'Placement preparation'] },
    ],
    facultyPicks: ['kaustav-majumdar', 'bhumita-bhattacharyya', 'soumyadeep-chakraborty', 'manta-dey'],
    faq: [
      { q: 'Who is eligible for the ASMi MBA?', a: 'A bachelor’s degree in any discipline from a recognised university. Final-year students may apply and submit results before enrolment. Work experience is welcome but not required.' },
      { q: 'When do I choose my specialization?', a: 'At the end of the first year. The first two semesters are a common core, so you specialise once you have actually worked across marketing, finance, operations and people.' },
      { q: 'Is the international study tour included for every student?', a: 'The Malaysia study tour with INTI International University runs for the MBA cohort in the third semester. Contact the admissions office for the current cost structure and what the programme fee covers.' },
      { q: 'What placement support do MBA students get?', a: 'A dedicated placement cell handles corporate relations, mock interviews, case preparation and profile building — starting in the first semester. The 2023–25 batch recorded a ₹20.38 LPA highest and ₹14.20 LPA average package.' },
      { q: 'Can international students apply?', a: 'Yes. ASMi welcomes applications from international students; the admission process may carry additional documentation requirements. Write to info@asmibschool.com before applying.' },
    ],
    ctaHeading: 'Applications for the 2026 MBA batch are open',
    ctaSub: 'Limited seats across six specializations. Apply online, or call the admissions office to talk it through first.',
  },
  {
    slug: 'bba',
    code: 'BBA',
    name: 'Bachelor of Business Administration',
    titleHtml: 'Bachelor of Business<br /><em>Administration</em>',
    badge: 'Undergraduate',
    eyebrow: 'Undergraduate Programme',
    heroTheme: 'ph-deep',
    image: 'hero-bg.png',
    dek: 'Four years with Business Analytics at the centre. You learn to run the numbers before you learn to run the room — and you start on live projects in year one.',
    summary: 'Specialization in Business Analytics with industry-integrated learning powered by IBM. Build your analytical edge from year one.',
    meta: [
      { value: '4 Years', label: 'Full Time' },
      { value: 'Analytics', label: 'Specialization' },
      { value: 'IBM', label: 'Powered' },
      { value: 'Year 1', label: 'Live Projects' },
    ],
    facts: [
      { label: 'Duration', value: '4 Years' },
      { label: 'Mode', value: 'Full Time, On Campus' },
      { label: 'Specialization', value: 'Business Analytics' },
      { label: 'Industry Partner', value: 'IBM' },
      { label: 'Eligibility', value: '10+2 in any stream' },
      { label: 'Pathway', value: 'Direct entry to ASMi MBA' },
    ],
    tags: ['Business Analytics', 'IBM Powered'],
    highlights: [
      'Analytics-first undergraduate track',
      'Live projects from the first year',
      'Direct pathway into the ASMi MBA',
    ],
    features: [
      { icon: 'chart', title: 'Analytics from semester one', desc: 'Spreadsheets, statistics, SQL and visualisation start immediately — not as an elective in the final year.' },
      { icon: 'cloud', title: 'IBM tooling in the lab', desc: 'Hands-on work with IBM-powered analytics content, plus Google Cloud skilling pathways through the Techno India Group partnership.' },
      { icon: 'brief', title: 'Live projects every year', desc: 'Each year carries a real brief from a real organisation. By graduation you have a portfolio, not just a transcript.' },
      { icon: 'book', title: 'A degree that stacks', desc: 'Graduates move directly into the ASMi MBA with a year of the analytics core already behind them.' },
    ],
    ladderLabel: 'Year',
    ladder: [
      { term: '01', title: 'Foundations', desc: 'Business fundamentals and the analytical base — accounting, economics, statistics and the first data tooling.', bullets: ['Principles of Management', 'Financial Accounting', 'Business Statistics', 'Spreadsheet & Data Fundamentals', 'Year-one live brief'] },
      { term: '02', title: 'Functions and data', desc: 'The functional areas arrive alongside databases and visualisation — you analyse the functions as you learn them.', bullets: ['Marketing & Consumer Behaviour', 'Corporate Finance Basics', 'Databases & SQL', 'Data Visualisation', 'Business Research Methods'] },
      { term: '03', title: 'Analytics in practice', desc: 'The specialization year: predictive analytics, business intelligence and an internship that puts the toolkit to work.', bullets: ['Predictive Analytics', 'Business Intelligence with IBM', 'Operations & Supply Chain Analytics', 'Summer internship', 'Club-led datathon'] },
      { term: '04', title: 'Strategy and the capstone', desc: 'Strategic thinking, ethics and a capstone analytics project defended before industry practitioners.', bullets: ['Strategic Management', 'Business Ethics & ESG', 'Capstone analytics project', 'Placement & MBA pathway preparation'] },
    ],
    facultyPicks: ['soumyadeep-chakraborty', 'manta-dey', 'ruchi-agarwal', 'sritama-dey-saha'],
    faq: [
      { q: 'What is the eligibility for the BBA?', a: 'Completion of 10+2 (Class 12) from a recognised board in any stream. Students awaiting results may apply and submit their marksheet before enrolment.' },
      { q: 'Do I need a mathematics background for Business Analytics?', a: 'No. The statistics and data modules start from first principles. What matters is comfort with reasoning through numbers, and that is exactly what the first year builds.' },
      { q: 'Is the BBA four years or three?', a: 'Four years, in line with the current undergraduate framework, with the specialization years carrying the analytics depth and internship.' },
      { q: 'Can BBA students join the MBA afterwards?', a: 'Yes — it is the most common route our undergraduates take. Speak to the admissions office about the pathway and what it means for your application.' },
      { q: 'Are internships part of the programme?', a: 'A summer internship sits in the third year, and each year closes with a live project brief from a partner organisation.' },
    ],
    ctaHeading: 'Start the BBA in Business Analytics, Batch 2026',
    ctaSub: 'Four years, a portfolio of live projects, and a direct pathway into the ASMi MBA.',
  },
  {
    slug: 'executive-mba',
    code: 'EMBA',
    name: 'Executive MBA',
    titleHtml: 'Executive<br /><em>MBA</em>',
    badge: 'Executive',
    eyebrow: 'For Working Professionals',
    heroTheme: 'ph-gold',
    image: 'malaysia-tour.png',
    dek: 'Built for people who are already running something. Flexible modules, case-based sessions taught by practitioners, and a cohort of peers who bring their own P&L to the discussion.',
    summary: 'Designed for CXOs, senior managers, entrepreneurs and growth-minded professionals. Immersive case-based, flexible modules.',
    meta: [
      { value: 'Flexible', label: 'Modules' },
      { value: 'Weekend', label: 'Scheduling' },
      { value: 'Case-Based', label: 'Method' },
      { value: 'CXO', label: 'Peer Cohort' },
    ],
    facts: [
      { label: 'Format', value: 'Flexible Modules' },
      { label: 'Designed For', value: 'CXOs, senior managers, founders' },
      { label: 'Method', value: 'Immersive, case-based' },
      { label: 'Faculty', value: 'Industry-led' },
      { label: 'Credential', value: 'Certification from ASMi' },
      { label: 'Employment', value: 'Continue working throughout' },
    ],
    tags: ['Leadership', 'Strategy', 'Flexible'],
    highlights: [
      'Weekend & modular scheduling',
      'Case-based, peer-led classrooms',
      'Built for CXOs and founders',
    ],
    features: [
      { icon: 'clock', title: 'Flexible modules', desc: 'Content is delivered in self-contained modules rather than a fixed semester lockstep, so you can sequence around your work calendar.' },
      { icon: 'brief', title: 'Weekend-weighted sessions', desc: 'Core sessions sit on weekends, with intensives scheduled well in advance so travel and client commitments can be planned around them.' },
      { icon: 'users', title: 'Case-based, not lecture-based', desc: 'Immersive case sessions where the cohort’s own operating experience is part of the material. You will be asked to defend decisions you have actually made.' },
      { icon: 'target', title: 'Industry-led faculty', desc: 'Taught by practitioners — CMOs, CHROs, chartered accountants and digital officers who are still doing the work they teach.' },
      { icon: 'spark', title: 'Personalised learning', desc: 'Small cohorts mean the faculty know your context. Assignments can be anchored to problems inside your own organisation.' },
      { icon: 'shield', title: 'ASMi certification', desc: 'Completion carries certification from ASMi Business School, part of Techno India University, West Bengal.' },
    ],
    ladderLabel: 'Module',
    ladder: [
      { term: '01', title: 'Strategic foundations', desc: 'A compressed core for people who already run things: strategy, economics and the numbers behind both.', bullets: ['Strategic Management', 'Managerial Economics', 'Financial Statement Analysis'] },
      { term: '02', title: 'Leading people', desc: 'The people half of a senior role — building teams, designing incentives and managing through other managers.', bullets: ['Organisational Leadership', 'Talent & Incentive Design', 'Negotiation'] },
      { term: '03', title: 'Growth and markets', desc: 'Where the next rupee of revenue comes from, and what it costs to get it.', bullets: ['Marketing Strategy', 'Digital Transformation', 'Customer & Channel Economics'] },
      { term: '04', title: 'Capstone and exposure', desc: 'A capstone anchored in your own organisation, plus the compact international immersion.', bullets: ['Organisation-anchored capstone', 'International Study Tour (compact format)', 'Governance & ESG'] },
    ],
    facultyPicks: ['kaustav-majumdar', 'rituraj-brahmachari', 'geeta-tolia', 'sanghamitra-dhar'],
    faq: [
      { q: 'Do I need to leave my job for the Executive MBA?', a: 'No — the programme exists precisely for people unwilling to leave employment. Modules are flexible and weekend-weighted so you continue working throughout.' },
      { q: 'How much work experience do I need?', a: 'The cohort is deliberately senior: CXOs, senior managers, entrepreneurs and growth-minded professionals. Speak to the admissions office about your specific profile.' },
      { q: 'What credential do I receive?', a: 'Certification from ASMi Business School, part of Techno India University, West Bengal.' },
      { q: 'How is the EMBA different from the full-time MBA?', a: 'The full-time MBA is a two-year degree for early-career students. The EMBA is modular, case-driven and built around a working schedule, with a cohort that brings operating experience into the room.' },
      { q: 'Can my employer sponsor my participation?', a: 'Yes, and many participants are sponsored. The admissions office can provide the documentation most organisations require for approval.' },
    ],
    ctaHeading: 'Talk to us about the Executive MBA',
    ctaSub: 'Tell us where you are in your career and we will tell you honestly whether this is the right programme for you.',
  },
];

export const getProgram = (slug: string) => PROGRAMS.find((p) => p.slug === slug);

// ── MBA specializations ────────────────────────────────────────────────────
export interface Specialization {
  slug: string;
  num: string;
  name: string;
  kicker: string;
  summary: string;
  tags: string[];
  intro: string[];
  electives: { title: string; desc: string }[];
  careers: string[];
  faculty: string[];
  skills: string[];
}

export const SPECIALIZATIONS: Specialization[] = [
  {
    slug: 'marketing',
    num: '01',
    name: 'Marketing',
    kicker: 'Brand, digital and consumer',
    summary: 'Consumer behaviour, brand strategy, digital and performance marketing, and marketing analytics.',
    tags: ['Brand Strategy', 'Digital', 'Analytics'],
    intro: [
      'Marketing at ASMi is taught as a measurable discipline. Every claim a brand makes is testable, every campaign has a cost of acquisition, and students are expected to produce the number as readily as the idea.',
      'The track runs live brand audits for Kolkata businesses through the Kanvas club, so the work leaves the classroom in the first semester of specialisation.',
    ],
    electives: [
      { title: 'Consumer Behaviour', desc: 'Why people buy, and the research methods that establish it rather than assume it.' },
      { title: 'Brand Strategy', desc: 'Positioning, architecture and the long-run economics of a brand.' },
      { title: 'Digital & Performance Marketing', desc: 'Channels, attribution, and what a rupee of spend is actually buying.' },
      { title: 'Marketing Analytics', desc: 'Segmentation, lifetime value and campaign measurement using IBM-powered tooling.' },
      { title: 'Sales & Channel Management', desc: 'Distribution, pricing through the channel, and managing a field force.' },
    ],
    careers: ['Brand Manager', 'Marketing Analyst', 'Digital Marketing Lead', 'Category Manager', 'Account Planner'],
    faculty: ['rituraj-brahmachari', 'debayan-chakraborty', 'soumyadeep-chakraborty'],
    skills: ['Positioning', 'Campaign measurement', 'Consumer research', 'Pricing', 'Channel economics'],
  },
  {
    slug: 'finance',
    num: '02',
    name: 'Finance',
    kicker: 'Capital, valuation and risk',
    summary: 'Corporate finance, valuation, financial markets, risk management and investment analysis.',
    tags: ['Valuation', 'Markets', 'Risk'],
    intro: [
      'The finance track is the most technically demanding specialisation at ASMi, and deliberately so — finance interviews test mechanics, not vocabulary.',
      'Students work through valuation on real Indian listed companies, supported by the Finance Club’s bootcamp and a mentor bench that includes a chartered accountant leading derivatives training at HSBC.',
    ],
    electives: [
      { title: 'Corporate Finance', desc: 'Capital structure, cost of capital and investment decisions.' },
      { title: 'Valuation', desc: 'DCF, comparables and the judgement calls that move a number more than the model does.' },
      { title: 'Financial Markets', desc: 'Instruments, market structure and how prices are actually formed.' },
      { title: 'Risk Management', desc: 'Credit, market and operational risk, including derivatives and collateral.' },
      { title: 'Financial Statement Analysis', desc: 'Reading three statements together, and what the notes conceal.' },
    ],
    careers: ['Financial Analyst', 'Investment Banking Analyst', 'Credit Analyst', 'Corporate Finance Associate', 'Risk Analyst'],
    faculty: ['manta-dey', 'ruchi-agarwal', 'rahul-rungta'],
    skills: ['Valuation modelling', 'Statement analysis', 'Risk assessment', 'Capital structure', 'Market mechanics'],
  },
  {
    slug: 'human-resources',
    num: '03',
    name: 'Human Resources',
    kicker: 'Talent and organisations',
    summary: 'Talent acquisition, organisational behaviour, compensation design and HR analytics.',
    tags: ['Talent', 'OB', 'HR Analytics'],
    intro: [
      'HR is taught here as a quantitative function. Retention, compensation and performance all generate data, and the specialisation trains students to argue for people decisions with evidence.',
      'The track is led by faculty who run people functions in practice, including a serving CHRO, and is supported by the Sankalp club’s mock panels and campus hiring simulations.',
    ],
    electives: [
      { title: 'Talent Acquisition', desc: 'Sourcing, assessment design and the economics of a bad hire.' },
      { title: 'Compensation & Benefits', desc: 'Pay structures, incentives and what they actually motivate.' },
      { title: 'HR Analytics', desc: 'Attrition modelling, workforce planning and performance measurement.' },
      { title: 'Organisational Development', desc: 'Change, culture and structure as design problems.' },
      { title: 'Labour Law & Compliance', desc: 'The statutory frame every people decision sits inside.' },
    ],
    careers: ['HR Business Partner', 'Talent Acquisition Specialist', 'Compensation Analyst', 'L&D Manager', 'HR Analytics Lead'],
    faculty: ['sanghamitra-dhar', 'sritama-dey-saha'],
    skills: ['Assessment design', 'Workforce analytics', 'Compensation design', 'Change management', 'Employment compliance'],
  },
  {
    slug: 'technology',
    num: '04',
    name: 'Technology',
    kicker: 'Systems and transformation',
    summary: 'Information systems, digital transformation, product thinking and technology-led operations.',
    tags: ['Systems', 'Product', 'Cloud'],
    intro: [
      'The technology track trains managers who can hold a conversation with engineers without pretending to be one — and can tell when a transformation programme is failing before the dashboard says so.',
      'IBM-powered content and Google Cloud skilling pathways sit at the centre of the track, with a chief digital officer teaching the transformation modules.',
    ],
    electives: [
      { title: 'Information Systems', desc: 'How enterprise systems are structured, and where they break.' },
      { title: 'Digital Transformation', desc: 'Running change programmes that touch process, people and platform at once.' },
      { title: 'Product Management', desc: 'Discovery, prioritisation and shipping under constraint.' },
      { title: 'Cloud & Emerging Technology', desc: 'Cloud economics and what new technology actually changes commercially.' },
      { title: 'Technology-Led Operations', desc: 'Automation, process redesign and measurement.' },
    ],
    careers: ['Business Analyst', 'Product Manager', 'Technology Consultant', 'Digital Transformation Associate', 'IT Project Manager'],
    faculty: ['soumyadeep-chakraborty', 'govind-kumar-rai'],
    skills: ['Systems thinking', 'Product prioritisation', 'Process redesign', 'Cloud economics', 'Change delivery'],
  },
  {
    slug: 'entrepreneurship',
    num: '05',
    name: 'Entrepreneurship',
    kicker: 'Building ventures',
    summary: 'Venture design, fundraising, go-to-market and the practicalities of running a young company.',
    tags: ['Venture', 'Fundraising', 'GTM'],
    intro: [
      'The entrepreneurship track is for students who intend to build something, and for those who will join a family business and have to professionalise it.',
      'It runs alongside the Udyam incubation desk, so coursework and an actual venture can share the same deadlines — including the annual pitch day.',
    ],
    electives: [
      { title: 'Venture Design', desc: 'From problem to business model, with the assumptions written down.' },
      { title: 'Entrepreneurial Finance', desc: 'Runway, unit economics, and what makes a company fundable in this region.' },
      { title: 'Go-To-Market', desc: 'First customers, pricing experiments and distribution for a company nobody has heard of.' },
      { title: 'Family Business Management', desc: 'Succession, governance and professionalising an established operation.' },
      { title: 'New Venture Operations', desc: 'Hiring, cash and the operational mess of the first two years.' },
    ],
    careers: ['Founder', 'Family Business Leader', 'Venture Associate', 'Business Development Lead', 'Incubator Programme Manager'],
    faculty: ['rahul-rungta', 'meghdut-roychowdhury'],
    skills: ['Business model design', 'Unit economics', 'Fundraising narrative', 'Customer discovery', 'Operating under uncertainty'],
  },
  {
    slug: 'sustainability',
    num: '06',
    name: 'Sustainability',
    kicker: 'ESG and responsible business',
    summary: 'Sustainability reporting, circular business models, impact measurement and climate risk.',
    tags: ['ESG', 'Impact', 'Reporting'],
    intro: [
      'Sustainability is threaded through every ASMi specialisation, but this track is for students who want to work in it directly — in reporting, impact measurement or climate-exposed industries.',
      'It is led by the Techno India Group’s Sustainability Director, with mentoring from a CSR manager running state-level programmes at HDFC Bank.',
    ],
    electives: [
      { title: 'Sustainability Reporting', desc: 'Disclosure frameworks and the mechanics of a credible report.' },
      { title: 'Circular Business Models', desc: 'Designing out waste, and what it does to unit economics.' },
      { title: 'Impact Measurement', desc: 'Measuring outcomes rather than activity, and defending the method.' },
      { title: 'Climate Risk', desc: 'Physical and transition risk inside financial and operating decisions.' },
      { title: 'Responsible Supply Chains', desc: 'Traceability, supplier standards and the audit problem.' },
    ],
    careers: ['ESG Analyst', 'Sustainability Manager', 'CSR Programme Lead', 'Impact Consultant', 'Supply Chain Sustainability Associate'],
    faculty: ['pauline-laravoire', 'krittika-simlai'],
    skills: ['Disclosure frameworks', 'Impact measurement', 'Climate risk assessment', 'Stakeholder engagement', 'Supply chain audit'],
  },
];

export const getSpecialization = (slug: string) => SPECIALIZATIONS.find((s) => s.slug === slug);
