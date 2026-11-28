import type { Metadata } from 'next';
import { PageHero, SecHead, Arrow } from '@/components/Chrome';
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
      <PageHero
        eyebrow="Admissions Open"
        title="Start your <em>application</em>"
        sub="One form, four short steps. Tell us about yourself and where you want to go. A counsellor will take it from there."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Apply Now' }]}
        meta={[
          { value: '~10 min', label: 'To complete' },
          { value: '4 steps', label: 'In the form' },
          { value: 'MBA · BBA', label: 'Programmes' },
        ]}
        photoKey="apply"
      />

      <section className="sec apply-sec">
        <div className="container">
          <SecHead
            eyebrow="Apply Now"
            heading="Let&rsquo;s get <em>started</em>"
            lead="Fields marked * are required. Your details go only to the ASMi admissions office."
          />
          <div className="apply-layout">
            <aside className="apply-aside reveal-left">
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
            <div className="reveal-up"><ApplyForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}
