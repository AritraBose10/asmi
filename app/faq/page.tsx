import type { Metadata } from 'next';
import { PageHero, CtaBand } from '@/components/Chrome';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers about programmes, eligibility, placements, campus and admissions at ASMi Business School, Kolkata.',
};

const GROUPS: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: 'The School',
    items: [
      { q: 'What is ASMi Business School?', a: 'ASMi Business School is affiliated with Techno India University, West Bengal, and offers AICTE-approved business programmes from its campus at Godrej Genesis, Sector V, Kolkata. "ASMI" is Sanskrit for "I am" — self-belief, identity and individual potential.' },
      { q: 'Is ASMi accredited?', a: 'Yes. Programmes are AICTE-approved and ASMi is part of Techno India University, a recognised and accredited institution. Degrees are awarded by the university.' },
      { q: 'Who are the industry partners?', a: 'IBM powers analytics and emerging-technology content across the MBA and BBA. The wider Techno India Group is also one of Google’s largest education partners in India, opening Google Cloud skilling pathways.' },
    ],
  },
  {
    title: 'Programmes',
    items: [
      { q: 'What programmes does ASMi offer?', a: 'A two-year full-time MBA with six specializations, a four-year BBA in Business Analytics, an Executive MBA for working professionals, and three-month certification courses in Marketing 4.0, HR Excellence and Entrepreneurship 4.0.' },
      { q: 'What is the teaching methodology?', a: 'A blend of theory and practice: lectures, case studies, group discussions, seminars, workshops and direct industry interaction. Faculty are practitioners as well as academics.' },
      { q: 'When do MBA students choose a specialization?', a: 'At the end of the first year, after two semesters of common core across marketing, finance, operations and people.' },
      { q: 'Do I need a maths background for Business Analytics?', a: 'No. Statistics and data modules start from first principles in the BBA — comfort reasoning through numbers matters more than prior coursework.' },
    ],
  },
  {
    title: 'Admissions',
    items: [
      { q: 'How do I apply?', a: 'Apply online through the application form. The process has six steps: application, document upload, authentication, counsellor interview, provisional offer letter, and programme start.' },
      { q: 'What is the eligibility for each programme?', a: 'MBA: a bachelor’s degree in any discipline. BBA: 10+2 from a recognised board in any stream. Executive MBA: substantial professional experience — the counsellor interview assesses fit.' },
      { q: 'Can international students apply?', a: 'Yes. ASMi welcomes international applicants; the process may carry additional documentation requirements. Write to info@asmibschool.com before applying.' },
      { q: 'Are scholarships available?', a: 'Speak to the admissions office about current scholarship and fee assistance options for your programme and cycle — these vary by intake.' },
    ],
  },
  {
    title: 'Placements & Careers',
    items: [
      { q: 'Are there placement opportunities?', a: 'Yes. A dedicated placement cell handles corporate relations, profile building, interview preparation and recruiter engagement, starting in the first semester.' },
      { q: 'What were the most recent placement figures?', a: 'For the 2023–25 batch: ₹20.38 LPA highest package, ₹14.20 LPA average and ₹13.50 LPA median. Recruiters include EY, HDFC Bank, HSBC, E-Intellisense and Lifestyle International.' },
      { q: 'Do students get internships?', a: 'Yes — a summer internship sits in the MBA third semester and the BBA third year, alongside live industry projects each year.' },
    ],
  },
  {
    title: 'Campus & Student Life',
    items: [
      { q: 'What is the campus like?', a: 'A vertical campus on the 15th floor of Godrej Genesis in Sector V, with modern classrooms, a business library, an analytics lab, case rooms and student lounge — in the middle of Kolkata’s technology district.' },
      { q: 'Are there extracurricular activities?', a: 'Eight student-led clubs cover finance, marketing, analytics, HR, entrepreneurship, social impact, culture and sport, alongside a year-round events calendar.' },
      { q: 'What is the international study tour?', a: 'An annual immersion in Malaysia with INTI International University: industry sessions, factory visits including Royal Selangor and Barleys Chocolate, and cultural fieldwork.' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { q: 'How do I get in touch?', a: 'Call 08062642222 or +91 8100203639, or email info@asmibschool.com. The admissions office is at Techno India University, Ground Floor, EM-4, EM Block, Sector V, Kolkata 700091.' },
      { q: 'Can I visit the campus before applying?', a: 'Yes. Call the admissions office to arrange a visit; prospective students are also welcome at selected guest lectures and corporate connect sessions.' },
    ],
  },
];

export default function Faq() {
  return (
    <>
      <PageHero
        theme="ph-deep"
        eyebrow="Answers"
        title="Frequently asked<br /><em>questions</em>"
        sub="Programmes, eligibility, placements, campus and the application process. If something is still unclear, the admissions office answers email quickly."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'FAQ' }]}
        actions={
          <>
            <a href={`mailto:${SITE.email}`} className="btn-ghost-light">Email admissions</a>
            <a href={`tel:${SITE.phone}`} className="btn-ghost-light">Call {SITE.phone}</a>
          </>
        }
      />

      {GROUPS.map((g, gi) => (
        <section className={`sec sec-tight${gi % 2 ? ' sec-muted' : ''}`} key={g.title}>
          <div className="container narrow">
            <h2 className="faq-group-title reveal-up">{g.title}</h2>
            <div className="faq-list reveal-up">
              {g.items.map((item) => (
                <div className="faq-item" key={item.q}>
                  <button className="faq-q">
                    <span>{item.q}</span>
                    <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10H15M10 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className="faq-a"><p>{item.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand heading="Still have a question?" sub="Email info@asmibschool.com or call 08062642222 — a counsellor will walk you through it." primaryLabel="Apply for Batch 2026" />
    </>
  );
}
