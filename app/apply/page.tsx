import type { Metadata } from 'next';
import { PageHero, Arrow } from '@/components/Chrome';
import ApplyForm from '@/components/ApplyForm';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Apply Now: MBA & BBA Admissions',
  description:
    'Apply to ASMi Business School, Kolkata. Complete the online application for the MBA or BBA: it takes about ten minutes.',
  alternates: { canonical: 'https://asmibschool.com/apply' },
};

const PROCESS = [
  { n: '01', t: 'Complete the online application', d: 'Fill in the form on this page. Essays are optional but strengthen your profile.' },
  { n: '02', t: 'Application review', d: 'The admissions team reviews your academic record and statement.' },
  { n: '03', t: 'Personal interview', d: 'A counsellor speaks with you about your goals and fit.' },
  { n: '04', t: 'Enrolment confirmation', d: 'Receive your provisional offer letter and confirm your seat.' },
];

export default function ApplyPage() {
  return (
    <>
      <div className="apply-top">
      <PageHero
        eyebrow="Admissions Open"
        title="Start your <em>application</em>"
        sub="Four short steps, about ten minutes. Fields marked * are required."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Apply Now' }]}
        photoKey="apply"
      />
      </div>

      <section className="sec apply-sec">
        <div className="container">
          <div className="apply-layout">
            <aside className="apply-aside">
              <h3>What happens next</h3>
              <ol className="apply-process">
                {PROCESS.map((p) => (
                  <li key={p.n}>
                    <span className="apply-n">{p.n}</span>
                    <div><strong>{p.t}</strong><p>{p.d}</p></div>
                  </li>
                ))}
              </ol>
              <div className="apply-help">
                <p>Need a hand with the form?</p>
                <a href={`tel:${SITE.phone}`}>Call {SITE.phone} <Arrow size={14} /></a>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </aside>
            <div className="apply-form-wrap"><ApplyForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}
