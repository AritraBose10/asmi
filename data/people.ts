/**
 * Faculty, leadership and industry mentors.
 * Factual anchors (names, titles, institutions) come from asmi_website_data.md.
 * Longer biographies and "focus" lists are PLACEHOLDER expansion — on-brand copy
 * written around the verified facts, pending real profile text.
 */

export type PersonKind = 'leadership' | 'faculty' | 'mentor';

export interface Person {
  slug: string;
  name: string;
  mono: string;
  role: string;
  org?: string;
  kind: PersonKind;
  short: string;
  bio: string[];
  expertise: string[];
  focus: string[];
  teaches?: string[];
  linkedin?: string;
}

export const PEOPLE: Person[] = [
  // ── Leadership ───────────────────────────────────────────────────────────
  {
    slug: 'goutam-roychowdhury',
    name: 'Prof. Dr. Goutam Roychowdhury',
    mono: 'GR',
    role: 'Founder Chairman, Techno India Group',
    org: 'Founder Chancellor, Techno India University',
    kind: 'leadership',
    short: 'Built one of Eastern India’s largest education groups over three decades.',
    bio: [
      'Founder Chairman of the Techno India Group and Founder Chancellor of Techno India University, West Bengal. Over three decades he has built one of Eastern India’s largest education networks, spanning schools, engineering colleges and a state private university.',
      'His conviction — that quality higher education should not require leaving the region — is the reason ASMi Business School exists in Kolkata rather than anywhere else.',
    ],
    expertise: ['Institution Building', 'Higher Education', 'Governance'],
    focus: [
      'Founded the Techno India Group and its university',
      'Expanded access to technical and management education across West Bengal',
      'Sets the long-range direction for the group’s institutions',
    ],
  },
  {
    slug: 'manoshi-roychowdhury',
    name: 'Prof. Manoshi Roychowdhury',
    mono: 'MR',
    role: 'Co-Chairperson, Techno India Group',
    org: 'Co-Chancellor, Techno India University',
    kind: 'leadership',
    short: 'Champions access to quality higher education across the region.',
    bio: [
      'Co-Chairperson of the Techno India Group and Co-Chancellor of Techno India University, West Bengal. She has led the group’s academic and student-welfare agenda alongside its expansion.',
      'Her focus on inclusion shapes how ASMi admits and supports students from varied academic and economic backgrounds.',
    ],
    expertise: ['Academic Leadership', 'Inclusion', 'Student Welfare'],
    focus: [
      'Academic governance across the group’s institutions',
      'Access and inclusion in higher education',
      'Student welfare and support systems',
    ],
  },
  {
    slug: 'meghdut-roychowdhury',
    name: 'Meghdut Roychowdhury',
    mono: 'MDR',
    role: 'Chief Innovation Officer & Executive Director',
    org: 'Techno India Group',
    kind: 'leadership',
    short: 'Drives innovation, entrepreneurship and technology adoption across the group.',
    bio: [
      'Chief Innovation Officer and Executive Director of the Techno India Group, leading innovation, entrepreneurship and technology adoption across its institutions.',
      'He runs open sessions at ASMi on building technology ventures from Eastern India — one of the most heavily attended fixtures in the school’s calendar.',
    ],
    expertise: ['Innovation', 'Entrepreneurship', 'Technology'],
    focus: [
      'Technology and innovation strategy for the group',
      'Guest sessions on venture building for ASMi students',
      'Industry and startup ecosystem partnerships',
    ],
    teaches: ['Innovation & Venture Building'],
  },
  {
    slug: 'pauline-laravoire',
    name: 'Pauline Laravoire',
    mono: 'PL',
    role: 'Sustainability Director',
    org: 'Techno India Group',
    kind: 'leadership',
    short: 'Leads the group’s sustainability agenda and brings ESG into the classroom.',
    bio: [
      'Sustainability Director at the Techno India Group, where she leads the ESG agenda across institutions and partnerships.',
      'At ASMi she is the reason sustainability is not a single elective. Her work moved ESG into every MBA specialisation, taught as an operating constraint rather than a values statement.',
    ],
    expertise: ['ESG', 'Sustainability', 'Impact'],
    focus: [
      'Sustainability strategy across the Techno India Group',
      'ESG threaded through every MBA specialisation',
      'Responsible business and impact measurement',
    ],
    teaches: ['Sustainability & ESG'],
  },

  // ── Faculty ──────────────────────────────────────────────────────────────
  {
    slug: 'kaustav-majumdar',
    name: 'Kaustav Majumdar',
    mono: 'KM',
    role: 'Chief Mentor, ASMi Business School',
    kind: 'faculty',
    short: 'Leadership, strategy and innovation, from decades of senior management practice.',
    bio: [
      'Chief Mentor at ASMi Business School, with decades of strategic leadership behind him. He sets the tone for how strategy is taught here: as a set of decisions made with incomplete information, not a framework to be recited.',
      'His sessions are deliberately uncomfortable. Students are asked to take a position early and defend it as the facts change — the habit that separates a manager from an analyst.',
    ],
    expertise: ['Strategy', 'Leadership', 'Innovation'],
    focus: [
      'Strategic management and competitive positioning',
      'Leadership development through the two-year programme',
      'Mentoring students through specialisation choices',
    ],
    teaches: ['Strategic Management', 'Leadership'],
  },
  {
    slug: 'gautam-majumdar',
    name: 'Dr. Gautam Majumdar',
    mono: 'GM',
    role: 'Pro Vice-Chancellor (Academics), TIU',
    kind: 'faculty',
    short: 'Ph.D. (Engg.), Jadavpur University. Former Vice-Chancellor, MAKAUT.',
    bio: [
      'Pro Vice-Chancellor (Academics) at Techno India University. He holds a Ph.D. in Engineering from Jadavpur University, where he was Professor and Head of Mechanical Engineering, and formerly served as Vice-Chancellor of MAKAUT.',
      'He brings an engineer’s insistence on first principles to a business school — useful precisely because management students are rarely asked to show their working.',
    ],
    expertise: ['Academia', 'Engineering', 'Research'],
    focus: [
      'Academic standards and curriculum governance',
      'Research culture across the university',
      'Quantitative rigour in management teaching',
    ],
    teaches: ['Academic Affairs'],
  },
  {
    slug: 'bhumita-bhattacharyya',
    name: 'Bhumita Bhattacharyya',
    mono: 'BB',
    role: 'Assistant Professor & Academic Coordinator',
    kind: 'faculty',
    short: 'Soft skills, campus experience and student well-being.',
    bio: [
      'Assistant Professor and Academic Coordinator at ASMi Business School, shaping confident communicators and resilient leaders by building soft skills, creating powerful campus experiences and putting student well-being first.',
      'As Academic Coordinator she sits between the timetable and the student — which means she is usually the first to know when a cohort is struggling, and the reason something gets done about it.',
    ],
    expertise: ['Soft Skills', 'Communication', 'Student Well-being'],
    focus: [
      'Soft-skills and communication training across the cohort',
      'Campus experience and student engagement',
      'Student well-being and pastoral support',
      'Academic coordination across the programme',
    ],
    teaches: ['Soft Skills & Communication'],
    linkedin: 'https://www.linkedin.com/in/bhumita-bhattacharyya-08792823b',
  },
  {
    slug: 'debayan-chakraborty',
    name: 'Debayan Chakraborty',
    // TODO: confirm designation. LinkedIn blocks automated reads (HTTP 999),
    // so this is a neutral placeholder, not his stated title.
    mono: 'DC',
    role: 'Faculty, Marketing',
    kind: 'faculty',
    short: 'Turns marketing concepts into real-world strategy.',
    bio: [
      'Teaches marketing at ASMi Business School, transforming marketing concepts into real-world strategy by equipping students with industry-relevant tools, practical applications and sharp analytical thinking.',
      'The emphasis is on application: frameworks are introduced only alongside the decision they are meant to support, and students are expected to produce the number as readily as the idea.',
    ],
    expertise: ['Marketing', 'Strategy', 'Analytics'],
    focus: [
      'Marketing strategy grounded in real-world application',
      'Industry-relevant tools and platforms',
      'Analytical thinking for marketing decisions',
    ],
    teaches: ['Marketing Management'],
    linkedin: 'https://www.linkedin.com/in/debayan-chakraborty-educator',
  },
  {
    slug: 'rituraj-brahmachari',
    name: 'Rituraj Brahmachari',
    mono: 'RB',
    role: 'Senior Management, Business Development',
    kind: 'faculty',
    short: 'Former Vice President, Times of India (Times Network).',
    bio: [
      'Former Vice President at Times of India (Times Network), now leading business development at ASMi. A media strategist whose career was built on revenue growth in one of India’s most competitive advertising markets.',
      'He runs the placement-facing side of interview preparation, and his review of two seasons of recruiter feedback shapes how the school prepares students for questions that resist rehearsal.',
    ],
    expertise: ['Media', 'Sales', 'Business Development'],
    focus: [
      'Sales strategy and revenue growth',
      'Media planning and the advertising market',
      'Interview preparation with the placement cell',
    ],
    teaches: ['Sales & Business Development'],
  },
  {
    slug: 'rahul-rungta',
    name: 'Rahul Rungta',
    mono: 'RR',
    role: 'CMO, E-Intellisense',
    org: 'Founder, Edge24x7',
    kind: 'faculty',
    short: 'Finance and entrepreneurship, with a focus on early-stage ventures.',
    bio: [
      'Chief Marketing Officer at E-Intellisense and founder of Edge24x7. His work sits at the intersection of finance and entrepreneurship — specifically, how early-stage companies survive the gap between traction and funding.',
      'He supervises several ventures at the Udyam incubation desk and is candid with students about which ideas are fundable in this region and which are not.',
    ],
    expertise: ['Finance', 'Startup', 'Marketing'],
    focus: [
      'Early-stage venture finance',
      'Go-to-market for young companies',
      'Mentoring student ventures at Udyam',
    ],
    teaches: ['Entrepreneurial Finance'],
  },
  {
    slug: 'geeta-tolia',
    name: 'Geeta Tolia',
    mono: 'GT',
    role: 'Independent Director',
    org: 'Divgi TorqTransfer Systems Ltd',
    kind: 'faculty',
    short: 'Board governance, from the inside of listed-company boardrooms.',
    bio: [
      'Independent Director at Divgi TorqTransfer Systems Ltd, Director at ScArt LiVE, and Co-Founder of Gravitech Business Solutions. She teaches governance from the one vantage point students rarely get: inside the boardroom of a listed company.',
      'Her sessions cover what a board actually does with the reports management sends it, and why the quality of a disclosure matters more than the quality of the slide deck.',
    ],
    expertise: ['Board', 'Governance', 'Strategy'],
    focus: [
      'Corporate governance and board practice',
      'Independent directorship and disclosure',
      'Business strategy for mid-cap manufacturers',
    ],
    teaches: ['Corporate Governance'],
  },
  {
    slug: 'sanghamitra-dhar',
    name: 'Sanghamitra Dhar',
    mono: 'SD',
    role: 'CHRO & LinkedIn Growth Expert',
    org: 'LinkedIn24x7 · ILS Network',
    kind: 'faculty',
    short: 'Talent strategy, personal branding and modern HR practice.',
    bio: [
      'CHRO at LinkedIn24x7 and HR Instructor at ILS Network. She works across talent strategy, personal branding and the parts of HR that have changed fastest in the last decade.',
      'Every ASMi student passes through her profile and personal-branding clinics in the first semester, which is earlier than most schools start thinking about it.',
    ],
    expertise: ['HR', 'Branding', 'Talent'],
    focus: [
      'Talent acquisition and people strategy',
      'Personal branding and professional presence',
      'First-semester profile clinics for every cohort',
    ],
    teaches: ['Human Resource Management', 'Personal Branding'],
  },
  {
    slug: 'kausik-mitra',
    name: 'Kausik Mitra',
    mono: 'KMi',
    role: 'CPRO, Eastern Railway',
    kind: 'faculty',
    short: 'Public relations and communication at public-sector scale.',
    bio: [
      'Chief Public Relations Officer at Eastern Railway, bringing public relations and corporate communication experience from one of India’s largest public organisations.',
      'His case material is unusual for a business school: communication under genuine public scrutiny, where the audience is a region rather than a customer segment.',
    ],
    expertise: ['PR', 'Comms', 'Public Sector'],
    focus: [
      'Corporate and crisis communication',
      'Stakeholder management at scale',
      'Public-sector organisational practice',
    ],
    teaches: ['Business Communication'],
  },
  {
    slug: 'manta-dey',
    name: 'Dr. Manta Dey',
    mono: 'MD',
    role: 'Associate Professor, Finance',
    kind: 'faculty',
    short: 'Bridges academic finance with the models industry actually uses.',
    bio: [
      'Associate Professor of Finance, working across valuation, capital markets and corporate finance. Her teaching connects academic finance to the models practitioners actually build.',
      'Her method of stopping mid-explanation and asking a student to continue is uncomfortable by design, and it is the reason ASMi graduates hold up in technical interview rounds.',
    ],
    expertise: ['Finance', 'Research', 'Valuation'],
    focus: [
      'Corporate finance and valuation',
      'Financial statement analysis',
      'Finance Club valuation bootcamp',
    ],
    teaches: ['Corporate Finance', 'Financial Accounting'],
  },
  {
    slug: 'ruchi-agarwal',
    name: 'Ruchi Agarwal',
    mono: 'RA',
    role: 'Certified Financial Planner',
    org: 'PGDFP-WM Faculty',
    kind: 'faculty',
    short: 'Personal finance, wealth management and planning.',
    bio: [
      'A Certified Financial Planner and finance subject matter expert teaching on the PGDFP-WM programme. Her focus is personal finance and wealth management — the side of finance that affects every graduate regardless of function.',
      'She runs the practical sessions where students model their own post-graduation finances, which has a way of making compound interest memorable.',
    ],
    expertise: ['Wealth', 'Planning', 'Personal Finance'],
    focus: [
      'Wealth management and financial planning',
      'Personal finance literacy for graduates',
      'Certification pathway guidance',
    ],
    teaches: ['Financial Planning'],
  },
  {
    slug: 'govind-kumar-rai',
    name: 'Govind Kumar Rai',
    mono: 'GKR',
    role: 'Deputy Manager, Coal India Limited',
    kind: 'faculty',
    short: 'Operations and management at industrial scale.',
    bio: [
      'Deputy Manager at Coal India Limited, bringing large-scale industrial and public-sector operations into the classroom.',
      'Operations taught from a mine is a different subject from operations taught from a textbook: the constraints are physical, the stakes are regulatory, and the margins for error are small.',
    ],
    expertise: ['Operations', 'PSU', 'Supply Chain'],
    focus: [
      'Industrial operations management',
      'Public-sector organisational structures',
      'Supply chain under physical constraint',
    ],
    teaches: ['Operations Management'],
  },
  {
    slug: 'soumyadeep-chakraborty',
    name: 'Soumyadeep Chakraborty',
    mono: 'SC',
    role: 'Director & Chief Digital Officer',
    org: 'Ex Big-4 · IIM Bangalore',
    kind: 'faculty',
    short: 'Digital transformation, growth and data-led innovation.',
    bio: [
      'Director and Chief Digital Officer, formerly with a Big-4 firm, and an IIM Bangalore alumnus. Entrepreneur, growth hacker, speaker and technology evangelist.',
      'He led the case for rebuilding the BBA around Business Analytics, and teaches the modules where the analytical toolkit meets commercial judgement.',
    ],
    expertise: ['Digital', 'IIM', 'Analytics'],
    focus: [
      'Digital transformation and growth strategy',
      'Business analytics curriculum design',
      'IBM and Google Cloud skilling pathways',
    ],
    teaches: ['Business Analytics', 'Digital Transformation'],
  },
  {
    slug: 'sritama-dey-saha',
    name: 'Dr. Sritama Dey Saha',
    mono: 'SDS',
    role: 'Associate Professor, Human Resources',
    kind: 'faculty',
    short: 'Organisational behaviour and the human side of strategy.',
    bio: [
      'Associate Professor of Human Resources, working across organisational behaviour, talent development and the behavioural assumptions buried inside most strategy decisions.',
      'Her OB sessions in the first semester are where many students first discover that the hardest part of a plan is the people expected to execute it.',
    ],
    expertise: ['HR', 'Research', 'Organisational Behaviour'],
    focus: [
      'Organisational behaviour and culture',
      'Talent development and performance systems',
      'Research supervision in HR specialisation',
    ],
    teaches: ['Organisational Behaviour', 'Talent Development'],
  },

  // ── Industry mentors ─────────────────────────────────────────────────────
  {
    slug: 'debjani-mookjherjee',
    name: 'Debjani Mookjherjee',
    mono: 'DM',
    role: 'Founder, Nanigarh',
    org: 'Shark Tank India S4 · Mentor at Brandigence',
    kind: 'mentor',
    short: 'Founder who pitched on Shark Tank India, now mentoring student ventures.',
    bio: [
      'Founder of Nanigarh, seen on Shark Tank India Season 4, and a mentor at Brandigence. She works with ASMi students on brand building and the unglamorous mechanics of getting a consumer venture off the ground.',
      'Her mentoring sessions cover what a pitch actually has to prove, and why most student decks answer the wrong question.',
    ],
    expertise: ['Founder', 'Consumer Brands', 'Pitching'],
    focus: ['Consumer venture building', 'Brand and positioning', 'Pitch preparation for Udyam founders'],
  },
  {
    slug: 'hemant-lodhia',
    name: 'Hemant Lodhia',
    mono: 'HL',
    role: 'Founder',
    org: 'Windamere Projects',
    kind: 'mentor',
    short: 'Founder working across projects and hospitality in Eastern India.',
    bio: [
      'Founder of Windamere Projects, with a career built across project development and hospitality in Eastern India.',
      'He mentors students on the operational reality of running asset-heavy businesses, where cash and timing matter more than strategy decks.',
    ],
    expertise: ['Projects', 'Hospitality', 'Operations'],
    focus: ['Project development', 'Asset-heavy business models', 'Working capital in practice'],
  },
  {
    slug: 'krittika-simlai',
    name: 'Krittika Simlai',
    mono: 'KS',
    role: 'CSR Manager, HDFC Bank',
    org: 'West Bengal Operations',
    kind: 'mentor',
    short: 'Runs CSR for one of India’s largest private banks in West Bengal.',
    bio: [
      'CSR Manager for West Bengal operations at HDFC Bank. She leads corporate social responsibility programmes across the state for one of India’s largest private banks.',
      'For students in the sustainability and social impact tracks, she is the bridge between what ESG looks like in a syllabus and what it looks like inside a bank’s compliance calendar.',
    ],
    expertise: ['CSR', 'Banking', 'Impact'],
    focus: ['Corporate social responsibility', 'Banking sector practice', 'Impact measurement and reporting'],
  },
  {
    slug: 'pallab-ghosh',
    name: 'Pallab Ghosh',
    mono: 'PG',
    role: 'Co-Founder',
    org: 'GAPPU',
    kind: 'mentor',
    short: 'Co-founder building a consumer venture out of Kolkata.',
    bio: [
      'Co-Founder of GAPPU, building a consumer venture from Kolkata. He mentors on product, early traction and the compromises of a young company.',
      'His sessions with the entrepreneurship cell tend to be the ones where students revise their assumptions about how long things take.',
    ],
    expertise: ['Founder', 'Product', 'Consumer'],
    focus: ['Product and early traction', 'Founding team dynamics', 'Bootstrapped growth'],
  },
  {
    slug: 'arun-mukherjee',
    name: 'Arun Mukherjee',
    mono: 'AM',
    role: 'Founder, Bengal Entrepreneurs Ecosystem',
    org: 'Chaigram · Tabp Snacks · The Calcutta Street Food',
    kind: 'mentor',
    short: 'Serial founder and convener of the Bengal entrepreneurs ecosystem.',
    bio: [
      'Founder of the Bengal Entrepreneurs Ecosystem and co-founder of Chaigram, Tabp Snacks & Beverages and The Calcutta Street Food. Few people have started more companies in this region.',
      'He connects ASMi founders to the wider regional ecosystem — the single most valuable thing a student venture can get in its first year.',
    ],
    expertise: ['Serial Founder', 'F&B', 'Ecosystem'],
    focus: ['Food and beverage ventures', 'Regional startup ecosystem', 'Scaling from Kolkata'],
  },
  {
    slug: 'atin-kumar-roy',
    name: 'Atin Kumar Roy',
    mono: 'AK',
    role: 'Regional Head',
    org: 'Star Health & Allied Insurance',
    kind: 'mentor',
    short: 'Regional head in one of India’s largest health insurers.',
    bio: [
      'Regional Head at Star Health & Allied Insurance Company Ltd, running distribution and operations across a large territory.',
      'He mentors students interested in financial services and insurance — a sector that hires consistently and is consistently overlooked by MBA applicants.',
    ],
    expertise: ['Insurance', 'Distribution', 'Regional Sales'],
    focus: ['Insurance sector careers', 'Distribution and channel management', 'Regional operations'],
  },
  {
    slug: 'kamalini-paul',
    name: 'Kamalini Paul',
    mono: 'KP',
    role: 'Managing Director',
    org: 'De Sovrani · Poz Hotel · Food Aaj Kal · D C Paul Group',
    kind: 'mentor',
    short: 'Managing director across hospitality, food and construction businesses.',
    bio: [
      'Managing Director across De Sovrani, Poz Hotel, Food Aaj Kal and D C Paul Group Construction — a portfolio spanning hospitality, food and real estate.',
      'She mentors students on running a group of businesses rather than a single one, including the family-business questions that most syllabi avoid.',
    ],
    expertise: ['Hospitality', 'Family Business', 'Construction'],
    focus: ['Multi-business management', 'Family business transition', 'Hospitality operations'],
  },
  {
    slug: 'mohammad-faisal',
    name: 'Mohammad Faisal',
    mono: 'MF',
    role: 'National Head Operations',
    org: 'Aptech Limited',
    kind: 'mentor',
    short: 'National operations head in the education and training sector.',
    bio: [
      'National Head of Operations at Aptech Limited, running operations across a national training network.',
      'His mentoring covers process design and the discipline of making a service business repeatable across geographies.',
    ],
    expertise: ['Operations', 'Education', 'Process'],
    focus: ['National operations management', 'Service delivery at scale', 'Process standardisation'],
  },
  {
    slug: 'anirban-sen',
    name: 'Anirban Sen',
    mono: 'AS',
    role: 'MD & CEO',
    org: 'Powercab',
    kind: 'mentor',
    short: 'Managing Director and CEO of a manufacturing business.',
    bio: [
      'Managing Director and Chief Executive Officer of Powercab. He brings a manufacturer’s perspective to a classroom that otherwise skews toward services.',
      'He mentors on operations, capital allocation and the long feedback loops of industrial businesses.',
    ],
    expertise: ['Manufacturing', 'Leadership', 'Capital'],
    focus: ['Manufacturing operations', 'Capital allocation decisions', 'Industrial B2B sales'],
  },
  {
    slug: 'adarsh-tandon',
    name: 'CA Adarsh Tandon',
    mono: 'AT',
    role: 'Head of Training & Collateral Derivatives',
    org: 'HSBC Bank Kolkata',
    kind: 'mentor',
    short: 'Chartered accountant leading derivatives training at HSBC Kolkata.',
    bio: [
      'A chartered accountant heading training and collateral derivatives at HSBC Bank Kolkata. He works at the technical end of banking, where precision is not optional.',
      'He runs sessions for finance-track students on derivatives and collateral — material that rarely reaches an MBA classroom at this depth.',
    ],
    expertise: ['Banking', 'Derivatives', 'Training'],
    focus: ['Derivatives and collateral', 'Banking careers and credentials', 'Technical interview preparation'],
  },
  {
    slug: 'sanghamitra-dhar-mentor',
    name: 'Sanghamitra Dhar',
    mono: 'SD',
    role: 'CHRO, LinkedIn24x7',
    org: 'HR Instructor, ILS Networks',
    kind: 'mentor',
    short: 'CHRO and personal branding specialist — also teaches on the programme.',
    bio: [
      'CHRO at LinkedIn24x7 and HR Instructor at ILS Networks, serving both as faculty and on the industry mentor bench.',
      'As a mentor she works one-to-one with students on professional presence and the long game of a career, separate from her classroom teaching.',
    ],
    expertise: ['HR', 'Branding', 'Careers'],
    focus: ['Career strategy mentoring', 'Professional presence', 'HR function careers'],
  },
  {
    slug: 'lalith-dhanush',
    name: 'Lalith Dhanush',
    mono: 'LD',
    role: 'Education Expert',
    org: 'TEDx Speaker · Author · Building LIT School',
    kind: 'mentor',
    short: 'TEDx speaker, author, and builder of a new school model.',
    bio: [
      'An education expert, TEDx speaker and author currently building LIT School. His work is about what education should look like when it is designed rather than inherited.',
      'He mentors ASMi students on communication, personal positioning and the discipline of explaining an idea to an audience that did not ask for it.',
    ],
    expertise: ['Education', 'Speaking', 'Communication'],
    focus: ['Public speaking and narrative', 'Education innovation', 'Personal positioning'],
  },
];

export const LEADERSHIP = PEOPLE.filter((p) => p.kind === 'leadership');
export const FACULTY = PEOPLE.filter((p) => p.kind === 'faculty');
export const MENTORS = PEOPLE.filter((p) => p.kind === 'mentor');

export const getPerson = (slug: string) => PEOPLE.find((p) => p.slug === slug);
