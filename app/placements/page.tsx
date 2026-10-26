import type { Metadata } from 'next';
import { PLACEMENT_STATS, PLACED, RECRUITERS, TESTIMONIALS } from '@/data/site';
import { PageHero, SecHead, CtaBand, Pills, StatBand, Ladder } from '@/components/Chrome';
import Photo from '@/components/Photo';

export const metadata: Metadata = {
  title: 'Placements & Recruiters',
  description: 'ASMi Business School placement report: ₹20.38 LPA highest package, ₹14.20 LPA average, ₹13.50 LPA median for the 2023–25 batch.',
};

export default function Placements() {
  return (
    <>
      <PageHero
        theme="ph-dark"
        eyebrow="Placement Report"
        title="Where our graduates<br /><em>go to work</em>"
        sub="Verified figures from the 2023–25 graduating batch. Preparation begins in the first semester, not the last — and the numbers reflect it."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Placements' }]}
        meta={[
          { value: PLACEMENT_STATS.highest, label: 'Highest Package' },
          { value: PLACEMENT_STATS.average, label: 'Average Package' },
          { value: PLACEMENT_STATS.median, label: 'Median Package' },
          { value: PLACEMENT_STATS.batch, label: 'Batch' },
        ]}
        image="campus-life.png"
      />

      <section className="sec">
        <div className="container">
          <SecHead eyebrow="The Numbers" heading="The 2023–25 batch,<br />in full" />
          <StatBand
            items={[
              { value: PLACEMENT_STATS.highest, label: 'Highest Package' },
              { value: PLACEMENT_STATS.average, label: 'Average Package' },
              { value: PLACEMENT_STATS.median, label: 'Median Package' },
              { value: '12+', label: 'Active Recruiters' },
            ]}
            note={`Source: ${PLACEMENT_STATS.source}`}
          />
          <SecHead eyebrow="Recruiters" heading="Organisations that hire from ASMi" />
          <Pills items={RECRUITERS} />
          <div className="table-wrap reveal-up">
            <table className="data-table">
              <caption>Featured placements — 2023–25 batch</caption>
              <thead>
                <tr><th scope="col">Student</th><th scope="col">Batch</th><th scope="col">Organisation</th></tr>
              </thead>
              <tbody>
                {PLACED.map((p) => (
                  <tr key={p.name}>
                    <td>
                      <div className="placed-cell">
                        <Photo src={p.photo} alt={`${p.name}, placed at ${p.company}`} ratio="square"
                               mono={p.name.split(' ').map((w) => w[0]).slice(0, 2).join('')} className="placed-photo" />
                        <strong>{p.name}</strong>
                      </div>
                    </td>
                    <td>{p.batch}</td>
                    <td>{p.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="duo-grid" style={{ marginTop: '2.5rem' }}>
            <div className="callout reveal-up">
              <strong>MBA 2nd Year SIP Status: 2026.</strong> Track the live Summer Internship Programme status sheet for the current batch.
              <a href="https://docs.google.com/spreadsheets/d/1gPW4sThzORRhakp1IecLDjHzT0p_zwXsW6shHrIkM8o/edit?usp=sharing" className="link-cta" target="_blank" rel="noopener noreferrer">View SIP Status Sheet →</a>
            </div>
            <div className="callout reveal-up" data-delay={100}>
              <strong>Internship & Placement Photos.</strong> Browse student internship experiences and placement milestones from recent batches.
              <a href="https://drive.google.com/drive/folders/1oCX8AWO1JEGd7Clee0gMBjMdzXkCwjv6" className="link-cta" target="_blank" rel="noopener noreferrer">View Internship Photo Drive →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="container">
          <SecHead eyebrow="The Process" heading="How the placement cell works" lead="Placement support is a two-year process, not a two-week scramble at the end." />
          <Ladder
            label="Stage"
            steps={[
              { term: '01', title: 'Profile building', desc: 'From the first semester: CV construction, LinkedIn presence and a clear read on which roles actually fit you.', bullets: ['CV and profile clinics', 'LinkedIn and personal branding with our CHRO faculty', 'Role and sector mapping'] },
              { term: '02', title: 'Skill preparation', desc: 'Aptitude, case method, domain revision and the analytics tooling recruiters test for.', bullets: ['Case interview practice', 'Aptitude and domain drills', 'IBM-powered analytics practice'] },
              { term: '03', title: 'Industry exposure', desc: 'Corporate connect sessions, live projects and the summer internship that often converts.', bullets: ['Monthly corporate connect', 'Summer internship', 'Live industry projects'] },
              { term: '04', title: 'Placement season', desc: 'Mock panels with practising managers, then the recruitment process itself.', bullets: ['Mock interview panels', 'Recruiter engagement', 'Offer negotiation guidance'] },
            ]}
          />
        </div>
      </section>

      <section className="sec sec-muted">
        <div className="container">
          <SecHead eyebrow="Student Voices" heading="From the batch that<br />just graduated" />
          <div className="quote-grid">
            {TESTIMONIALS.map((t, i) => (
              <article className="quote-card reveal-up" data-delay={(i % 2) * 90} key={t.name}>
                <div className="quote-mark" aria-hidden="true">&ldquo;</div>
                <blockquote>{t.quote}</blockquote>
                <div className="quote-author">
                  <Photo src={t.photo} alt={`${t.name}, ${t.batch}`} ratio="square" mono={t.mono} className="quote-photo" />
                  <div><strong>{t.name}</strong><span>{t.batch}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Join the batch that posts the next set of numbers" sub="MBA, BBA and Executive MBA admissions for 2026 are open." />
    </>
  );
}
