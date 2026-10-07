/**
 * Blog posts. PLACEHOLDER — all editorial copy is invented, on-brand filler.
 * Bylines name real people from asmi_website_data.md: get sign-off before publishing.
 * `body` is trusted HTML authored in this repo, rendered with dangerouslySetInnerHTML.
 */

export interface Post {
  slug: string;
  category: string;
  title: string;
  dek: string;
  date: string;
  read: string;
  mono: string;
  author: string;
  authorRole: string;
  image: string;
  body: string;
}

export const POSTS: Post[] = [
  {
    slug: "ey-offer-from-the-inside",
    category: "Placements",
    title: "What a ₹20.38 LPA offer actually looks like from the inside",
    dek: "Arindam Dhali (MBA 2023–25) walks through his EY interview loop — the case rounds, the follow-ups, and the preparation that mattered most.",
    date: "12 Mar 2026",
    read: "8 min read",
    mono: "AD",
    author: "Arindam Dhali",
    authorRole: "MBA 2023–25 · Placed at EY",
    image: "campus-life.png",
    body: "<p class=\"lede\">The number people ask about is ₹20.38 lakh. The number that actually mattered to me was four: the number of times I rehearsed the same twelve-minute story about a failed college project before anyone in a suit heard it.</p>\n\n<p>I joined ASMi in 2023 with a commerce degree, no work experience and a vague belief that an MBA would sort the rest out. It did not sort anything out on its own. What it did was put me in a building where the preparation started early enough that, by the time the EY process began, the interview felt less like an examination and more like a conversation I had already had.</p>\n\n<h2>The loop, in order</h2>\n\n<p>The EY process ran over three weeks and four stages. There was a written aptitude round, a case discussion in a group of six, a technical interview that went deep on accounting fundamentals, and a partner-level conversation that was ostensibly about fit and was, in reality, about whether I could hold an opinion under mild pressure.</p>\n\n<p>Nobody failed the aptitude round because it was hard. People failed it because they had not practised the specific pattern of question under a clock. Our placement cell had been running timed drills since the second semester, which by March had stopped feeling like preparation and started feeling like habit.</p>\n\n<h2>The group case is not about being right</h2>\n\n<p>Six candidates, one prompt about a retail client with declining margins in tier-two cities, twenty minutes. I watched two genuinely sharp candidates talk themselves out of the process by treating it as a debate to win.</p>\n\n<blockquote>The panel is not scoring your conclusion. They are scoring whether the group got somewhere better because you were in it.</blockquote>\n\n<p>What worked for me was small and unglamorous: I structured the problem out loud in the first ninety seconds, wrote the structure down, and then spent most of the remaining time asking other people to fill parts of it. The structure came from the case sessions in the marketing and operations core — not from a book on case cracking.</p>\n\n<h2>The technical round rewarded boring depth</h2>\n\n<p>This is where the classroom paid for itself. I was asked to walk through how a working-capital change flows through three statements, and then asked the same question again with a specific inventory write-down layered on top. There was no trick. There was just whether I actually understood the mechanics or had memorised a diagram.</p>\n\n<p>Dr. Manta Dey's finance sessions had a habit of stopping mid-explanation and asking someone to continue. It is an uncomfortable teaching method and it is the reason I could keep talking when the interviewer went quiet.</p>\n\n<h2>What I would do differently</h2>\n\n<ul class=\"tick-list\">\n  <li>Start the internship conversation earlier. My summer internship shaped half of my interview answers, and I picked it late.</li>\n  <li>Keep a written log of every project, with numbers. I reconstructed mine from memory in week one of placement season and it showed.</li>\n  <li>Do fewer mock interviews with friends and more with people who will actually tell you that an answer was weak.</li>\n</ul>\n\n<h2>The part nobody puts in the brochure</h2>\n\n<p>Between the third and fourth round I was reasonably certain I had lost it. The technical interviewer had spent ten minutes on a question I fumbled, and I spent that evening in the student lounge convinced the process was over. It was not. The feedback afterwards noted that I had corrected myself unprompted, which apparently counted for more than getting it right first time.</p>\n\n<p>If you are reading this while deciding whether to apply somewhere, the honest version is this: the offer is the visible part of a two-year process that is mostly invisible, mostly repetitive, and almost entirely about how early you start.</p>",
  },
  {
    slug: "analytics-spine-of-the-bba",
    category: "Analytics",
    title: "Why we made Business Analytics the spine of the BBA",
    dek: "The four-year BBA was rebuilt around analytics for a reason. A look at the labour-market data behind the decision.",
    date: "28 Feb 2026",
    read: "6 min read",
    mono: "SC",
    author: "Soumyadeep Chakraborty",
    authorRole: "Director & Chief Digital Officer",
    image: "hero-bg.png",
    body: "<p class=\"lede\">Most undergraduate business degrees teach management first and analytics later, usually as a final-year elective taught by whoever is available. We inverted that, and the reasoning was not pedagogical fashion. It was what happens to entry-level job descriptions.</p>\n\n<h2>What changed in the job description</h2>\n\n<p>Ten years ago, an entry-level business role asked for communication skills, a working knowledge of Excel and a willingness to learn. The same roles today ask for the ability to query a database, build a dashboard, and explain what the dashboard means to someone who will not open it themselves.</p>\n\n<p>That third skill is the one that still separates candidates, and it is the one that only appears when analytical training and management training happen together rather than sequentially.</p>\n\n<h2>Why sequence matters more than content</h2>\n\n<p>If you teach marketing in year two and analytics in year four, students learn marketing as a set of narratives and then learn, too late, that the narratives are testable. If you teach the analytical toolkit first, every functional subject that follows can be taught as a measurable system.</p>\n\n<blockquote>A student who learns segmentation after learning clustering understands segmentation differently — and permanently.</blockquote>\n\n<p>So the BBA opens with spreadsheets, statistics and data fundamentals in year one, adds databases and visualisation in year two, and only then moves into predictive work and business intelligence in the specialisation year. The functional subjects are interleaved throughout, deliberately, so that each one arrives with a measurement lens already attached.</p>\n\n<h2>The IBM component</h2>\n\n<p>Curriculum and lab content across the analytics track are co-designed with IBM, and the wider Techno India Group's partnership with Google Cloud opens additional skilling pathways. What that means in practice for a student is unremarkable and important: the tooling in the lab resembles the tooling in the job.</p>\n\n<h2>The objection we hear most</h2>\n\n<p>Parents ask whether this makes the degree narrow — whether a student who wants marketing or HR is being pushed into a technical corner. The answer is the opposite. The analytics core is what lets a marketing student argue for a budget and an HR student defend a retention programme. It is general-purpose literacy, not a specialisation.</p>\n\n<h2>What we are still working on</h2>\n\n<p>Honesty requires noting the gap. Analytical fluency develops faster than the communication skills needed to use it, and we see students in year three who can build a model and cannot present it in five slides. The capstone and the club-led datathons are partly a corrective for that, and it is the part of the programme we revise most often.</p>",
  },
  {
    slug: "ten-days-in-malaysia",
    category: "Study Tour",
    title: "Ten days in Malaysia: what a study tour teaches that a classroom cannot",
    dek: "From INTI International University's labs to the Royal Selangor pewter floor — field notes from the 2025 cohort.",
    date: "14 Feb 2026",
    read: "9 min read",
    mono: "AR",
    author: "ASMi Editorial",
    authorRole: "Editorial Desk",
    image: "malaysia-tour.png",
    body: "<p class=\"lede\">On the fourth morning, standing on a factory floor in Selangor watching pewter being cast, one of our students asked the plant manager what the defect rate was. He answered, and she wrote it down, and the operations module she had sat through in November suddenly had a number attached to it.</p>\n\n<p>That is the case for the international study tour, and it is difficult to make in a brochure.</p>\n\n<h2>What the ten days contain</h2>\n\n<p>The academic spine is INTI International University, where sessions run with industry experts and global academics. Around that sit the site visits: the Royal Selangor pewter factory, the Barleys Chocolate facility, and structured visits to cultural heritage sites that are not tourism breaks but fieldwork with a reading list.</p>\n\n<ul class=\"tick-list\">\n  <li>Industry sessions and campus engagement at INTI International University</li>\n  <li>Royal Selangor — craft manufacturing, quality systems, heritage brand at scale</li>\n  <li>Barleys Chocolate — food supply chain, process control and brand storytelling</li>\n  <li>Cultural heritage fieldwork — reading a market through its culture</li>\n</ul>\n\n<h2>The manufacturing days</h2>\n\n<p>Two factory visits in a week does something specific to a cohort that has spent a year drawing supply chains on whiteboards. Royal Selangor is the more instructive of the two because the tension is visible: a heritage craft product being made at industrial volume, with every station a compromise between hand-finishing and throughput.</p>\n\n<blockquote>You can teach the trade-off between craft and scale. You cannot teach what it smells like on the floor where the trade-off is actually being made.</blockquote>\n\n<p>At Barleys the lesson is different and mostly about tolerance. Food manufacturing lives inside regulatory and temperature constraints that are invisible in a case study and unavoidable on site.</p>\n\n<h2>What the students actually report</h2>\n\n<p>When we collect feedback afterwards, the factory visits rank highly but they are not what people write about. What they write about is the discovery that business practice is culturally situated — that negotiation norms, hierarchy, timekeeping and the role of relationship-building all shift the moment you cross a border, and that the version they grew up with is not the default.</p>\n\n<h2>And the part that has nothing to do with business</h2>\n\n<p>Ten days in an unfamiliar country does something to a group that two years of shared classrooms does not. Alumni consistently describe the tour as the point where the batch stopped being classmates and became a network — which, five years later, is the part of an MBA that keeps paying.</p>",
  },
  {
    slug: "interview-questions-nobody-prepares-for",
    category: "Careers",
    title: "The MBA interview questions nobody prepares for",
    dek: "Our placement cell reviewed two seasons of interview feedback. These are the questions that decided outcomes.",
    date: "30 Jan 2026",
    read: "7 min read",
    mono: "RB",
    author: "Rituraj Brahmachari",
    authorRole: "Senior Management, Business Development",
    image: "campus-life.png",
    body: "<p class=\"lede\">We reviewed two seasons of recruiter feedback across the placement cycle. The technical questions were rarely decisive. These were.</p>\n\n<h2>\"What did you get wrong?\"</h2>\n\n<p>Almost every candidate has a prepared failure story. Almost none of them have a prepared <em>wrongness</em> story — a case where they held a position, argued it, and turned out to be mistaken. Recruiters ask the second version because it tests whether you update.</p>\n\n<p>The answers that work are specific, have a named consequence, and end with what changed in how you now operate. The answers that fail are the ones where the failure is secretly a strength.</p>\n\n<h2>\"Who disagreed with you on that project, and what did they say?\"</h2>\n\n<p>This is the question that exposes whether a project was real. Candidates who did the work can reconstruct the disagreement in detail, including the other person's reasoning. Candidates who supervised a slide deck cannot.</p>\n\n<blockquote>If you cannot state the strongest version of the opposing argument, the panel concludes you were not close enough to the work.</blockquote>\n\n<h2>\"What would you need to believe for this to be a bad decision?\"</h2>\n\n<p>An inversion question. It appears most often in consulting and strategy loops and it is testing intellectual honesty under mild social pressure — whether you will argue against a conclusion you have just presented.</p>\n\n<h2>\"Why this, and not the obvious alternative?\"</h2>\n\n<p>Asked about your specialisation, your internship, your city. The failure mode is answering with enthusiasm instead of reasoning. Interviewers are not testing conviction; they are testing whether a choice was made or defaulted into.</p>\n\n<h2>\"What are you not good at that this role needs?\"</h2>\n\n<p>The trap is answering with a non-weakness. The better answer names something real, then describes the compensating mechanism you have already built. Recruiters are not looking for a complete candidate. They are looking for a candidate with an accurate self-model.</p>\n\n<h2>How to prepare for questions that resist preparation</h2>\n\n<ul class=\"tick-list\">\n  <li>Keep a project log through the programme — decisions, disagreements, numbers, outcomes.</li>\n  <li>Practise with people who will tell you an answer was thin. Friends will not.</li>\n  <li>Rehearse structure, not scripts. Scripted answers collapse on the second follow-up.</li>\n  <li>Use the mock panels. The discomfort is the point; it is cheaper here than in the room that counts.</li>\n</ul>",
  },
  {
    slug: "esg-is-a-job-requirement",
    category: "Sustainability",
    title: "ESG is no longer a specialisation — it's a job requirement",
    dek: "Why sustainability moved from an elective to a thread running through every MBA specialisation at ASMi.",
    date: "18 Jan 2026",
    read: "5 min read",
    mono: "PL",
    author: "Pauline Laravoire",
    authorRole: "Sustainability Director, Techno India Group",
    image: "malaysia-tour.png",
    body: "<p class=\"lede\">Ten years ago sustainability sat in a corner of the curriculum where interested students could find it. That arrangement no longer matches what happens to graduates once they start work.</p>\n\n<h2>The regulatory floor moved</h2>\n\n<p>Disclosure requirements, supply chain scrutiny and investor expectations have all converged on the same outcome: a mid-level manager in almost any function now has some reporting obligation with a sustainability dimension attached. That is not an ethical claim. It is an operational one.</p>\n\n<h2>What this changes in a classroom</h2>\n\n<p>If ESG is an elective, students learn it as a worldview. If it runs through every specialisation, they learn it as a constraint — which is how it actually arrives at work.</p>\n\n<blockquote>A finance student should meet climate risk inside valuation, not in a separate module about values.</blockquote>\n\n<p>So the marketing track meets it as claims substantiation and greenwashing risk. The finance track meets it in disclosure and climate-adjusted risk. Operations meets it in circularity and supply chain traceability. HR meets it in workforce and governance metrics. The sustainability specialisation still exists for students who want depth — but nobody now graduates without the literacy.</p>\n\n<h2>The honest limitation</h2>\n\n<p>Teaching sustainability inside every function risks diluting it into a paragraph at the end of each syllabus. We are alert to that, and the guard against it is assessment: if the ESG component is not assessed within the functional module, it becomes decorative. Where we have got this right, the sustainability question is part of the main case, not an appendix to it.</p>\n\n<h2>What students should expect</h2>\n\n<p>Expect to be asked, in an operations exam, what a circular model does to your unit economics. Expect a marketing case where the sustainability claim is legally exposed. Expect, in interviews, to be asked what you would measure — because increasingly, recruiters are.</p>",
  },
  {
    slug: "building-a-venture-during-your-mba",
    category: "Entrepreneurship",
    title: "Building a venture while finishing your MBA",
    dek: "Three student founders on splitting their week between coursework, customers, and the Udyam incubation desk.",
    date: "05 Jan 2026",
    read: "10 min read",
    mono: "UD",
    author: "Udyam E-Cell",
    authorRole: "Student Entrepreneurship Cell",
    image: "campus-life.png",
    body: "<p class=\"lede\">Three student founders currently run ventures out of the Udyam incubation desk while completing coursework. We asked them the only question that matters to anyone considering it: what does the week actually look like?</p>\n\n<h2>The week, honestly</h2>\n\n<p>All three described roughly the same split. Mornings belong to the programme and are non-negotiable — attendance and coursework are not something the cell can protect you from. Afternoons are fragmented. Evenings and Sundays belong to the venture.</p>\n\n<blockquote>The thing nobody tells you is that customers do not care that you have a submission on Thursday.</blockquote>\n\n<p>The founder running a logistics venture put it most bluntly: the calendar conflict is permanent and the only real skill is deciding quickly which side loses this week.</p>\n\n<h2>What the programme gives you that you could not buy</h2>\n\n<ul class=\"tick-list\">\n  <li><strong>A free customer panel.</strong> Ninety classmates who will tell you your pricing is wrong before the market does.</li>\n  <li><strong>Faculty with operating history.</strong> Several teach precisely because they have run companies; office hours become a de facto advisory board.</li>\n  <li><strong>The mentor bench.</strong> Industry Connect mentors include founders who have raised capital in this region and will say plainly what is fundable.</li>\n  <li><strong>A deadline structure.</strong> The annual pitch day forces a version of the product to exist by a specific date.</li>\n</ul>\n\n<h2>What it costs</h2>\n\n<p>All three were candid that their grades are not what they would have been. Two said placement preparation was the real casualty — a rational trade if the venture works and an expensive one if it does not. The cell's standing advice is to decide early which outcome you are optimising for, because trying to do both at full intensity produces a mediocre version of each.</p>\n\n<h2>If you are considering it</h2>\n\n<p>Start in the first year, not the second. Use the club structure before the incubation desk — a case competition is a cheap way to discover whether an idea survives contact with people who are not your friends. And tell your faculty early; they are considerably more accommodating when they are not finding out from your attendance record.</p>",
  },
  {
    slug: "reading-a-balance-sheet",
    category: "Finance",
    title: "Reading a balance sheet the way a recruiter wants you to",
    dek: "A practical walkthrough from the Finance Club's valuation bootcamp, with a worked Indian listed-company example.",
    date: "20 Dec 2025",
    read: "11 min read",
    mono: "MD",
    author: "Dr. Manta Dey",
    authorRole: "Associate Professor, Finance",
    image: "hero-bg.png",
    body: "<p class=\"lede\">Most students can define every line on a balance sheet and still cannot say what a company is doing. The gap between those two states is the entire point of the Finance Club's valuation bootcamp, and it closes faster than people expect.</p>\n\n<h2>Start with the shape, not the lines</h2>\n\n<p>Before reading a single number, look at proportions. What share of assets is fixed? How much of the balance sheet is funded by others' money? Is the current ratio comfortable or strained? Five seconds of shape-reading tells you what kind of business you are looking at, and every subsequent number either confirms or complicates that first read.</p>\n\n<h2>Three questions that do most of the work</h2>\n\n<ol class=\"num-list\">\n  <li><strong>Where is the money tied up?</strong> Inventory, receivables and fixed assets each imply a different operating model and a different set of risks.</li>\n  <li><strong>Who funded it?</strong> The debt-equity mix tells you about risk appetite, cost of capital, and how much room management has if a bad year arrives.</li>\n  <li><strong>Is it getting better or worse?</strong> A single balance sheet is a photograph. Three years is a story, and the story is what recruiters ask about.</li>\n</ol>\n\n<h2>A worked example, in outline</h2>\n\n<p>Take a mid-cap Indian manufacturer. Receivables rising faster than revenue over three years is the signal to chase: either the company has extended credit terms to hold volume, or collections have deteriorated. Both are legitimate, and the difference matters enormously to valuation. Reading only the income statement, you would see growth. Reading the balance sheet alongside it, you see growth being bought.</p>\n\n<blockquote>Revenue tells you what a company sold. The balance sheet tells you what it gave up to sell it.</blockquote>\n\n<h2>Where students consistently lose marks</h2>\n\n<ul class=\"tick-list\">\n  <li>Treating working capital as an afterthought rather than a driver of cash.</li>\n  <li>Quoting ratios without stating the comparison — a 2.1 current ratio means nothing without the peer or the prior year.</li>\n  <li>Ignoring the notes. The interesting liabilities are rarely on the face of the statement.</li>\n  <li>Describing rather than concluding. An interviewer wants a judgement, then the evidence.</li>\n</ul>\n\n<h2>How to practise</h2>\n\n<p>Pick one listed company in a sector you find genuinely interesting and read three consecutive annual reports. Write one page on what changed and why. Do this four times with four companies and you will interview better than candidates who have read twenty valuation frameworks.</p>",
  },
  {
    slug: "a-week-at-godrej-genesis",
    category: "Campus",
    title: "A week in the life at Godrej Genesis, 15th floor",
    dek: "Classes, club meetings, case prep and the 6pm view over Sector V — what an ordinary ASMi week actually contains.",
    date: "08 Dec 2025",
    read: "6 min read",
    mono: "AR",
    author: "ASMi Editorial",
    authorRole: "Editorial Desk",
    image: "campus-life.png",
    body: "<p class=\"lede\">ASMi occupies the 15th floor of Godrej Genesis in Sector V. That fact shapes an ordinary week more than any line in the prospectus, because the companies students are preparing to join are visible through the window.</p>\n\n<h2>Monday — the teaching week opens</h2>\n\n<p>Core sessions run through the morning. By late afternoon the student lounge fills with case groups forming for the week, which is a polite way of saying that the seating is contested and the coffee runs out.</p>\n\n<h2>Wednesday — someone from outside takes the room</h2>\n\n<p>The guest lecture series runs fortnightly and the corporate connect sessions monthly. The format is deliberately unglamorous: a practitioner brings a live problem from their own desk and the room works on it. Hiring managers who run these sessions frequently meet the same students again, on the other side of a table, eighteen months later.</p>\n\n<h2>Friday — the clubs own the building</h2>\n\n<p>Datathon heats from Decode, stock pitches from The Bourse, brand audits from Kanvas, rehearsals from Rangmanch in whichever room is free. It is the noisiest day of the week and the one most likely to end with people still in the building at nine.</p>\n\n<blockquote>The thing you remember later is not a lecture. It is arguing about a pricing model at 8pm with the lights of Sector V behind you.</blockquote>\n\n<h2>Saturday — workshops and field work</h2>\n\n<p>Placement workshops, skill sessions, company visits, and the community projects run through Prayaas. Not every Saturday is occupied, but enough of them are that students plan around it.</p>\n\n<h2>The geography matters</h2>\n\n<p>A vertical campus in a working district is a different experience from a residential campus outside the city. There is no quadrangle and no cricket ground downstairs. What there is instead: IT parks, corporate offices and recruiters within walking distance, and a commute that puts you among working professionals twice a day. It changes the texture of an ordinary Tuesday more than you would expect.</p>",
  },
  {
    slug: "your-application-read-by-admissions",
    category: "Admissions",
    title: "Your application, read by the person who reads applications",
    dek: "What the admissions committee looks for in the statement of purpose, and the three mistakes we see every cycle.",
    date: "22 Nov 2025",
    read: "7 min read",
    mono: "AD",
    author: "Admissions Office",
    authorRole: "ASMi Admissions",
    image: "hero-bg.png",
    body: "<p class=\"lede\">We read every application that arrives. This is what the process actually looks like from this side of the desk, and the three mistakes we see in every cycle.</p>\n\n<h2>What we are reading for</h2>\n\n<p>Not eloquence. The statement exists to answer three questions: why business education, why now, and why here. An application that answers all three plainly will beat a beautifully written one that answers none of them.</p>\n\n<h2>Mistake one — the generic ambition</h2>\n\n<p>\"I want to be a leader in the corporate world\" tells us nothing, and we read it several hundred times a cycle. Replace it with something specific enough to be wrong: a function, a sector, a problem you want to work on, a company you have actually looked at.</p>\n\n<blockquote>Specificity is not a risk. It is the only thing that distinguishes one application from the next.</blockquote>\n\n<h2>Mistake two — hiding the interesting part</h2>\n\n<p>Applicants routinely bury the most compelling thing about themselves in a subordinate clause. The year spent running a family business, the failed venture, the two years of work in a field unrelated to management — these are the parts of a file that make a committee sit up, and they are consistently understated because applicants assume they look like detours.</p>\n\n<h2>Mistake three — no evidence</h2>\n\n<p>Claims without instances do not travel. \"Strong analytical skills\" is a claim. \"I rebuilt our inventory tracking in a spreadsheet and cut stockouts over a quarter\" is an instance, and it makes the claim unnecessary.</p>\n\n<h2>The interview</h2>\n\n<p>The counsellor interview is not an interrogation and it is not a formality. It exists to check that the person in the file and the person in the room are the same, and to be honest with you about fit. Candidates sometimes leave that conversation with a recommendation to apply to a different programme — including, occasionally, to come back in two years with work experience. That is a real outcome and not a rejection.</p>\n\n<h2>Practical notes</h2>\n\n<ul class=\"tick-list\">\n  <li>Apply before the deadline crush; the counsellor conversation is unhurried earlier in the cycle.</li>\n  <li>Final-year students may apply and submit results before enrolment.</li>\n  <li>International applicants should write to us first — documentation requirements differ.</li>\n  <li>If something in your record needs explaining, explain it in the application rather than hoping it goes unnoticed. It does not.</li>\n</ul>",
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const relatedPosts = (slug: string, count = 3) => {
  const i = POSTS.findIndex((p) => p.slug === slug);
  if (i < 0) return POSTS.slice(0, count);
  return [...POSTS.slice(i + 1), ...POSTS.slice(0, i)].slice(0, count);
};

export const POST_CATEGORIES = Array.from(new Set(POSTS.map((p) => p.category))).sort();
