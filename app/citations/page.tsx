import type { Metadata } from 'next';
import { PRESS, ACCREDITATIONS, SOURCES } from '@/data/site';
import { PageHero, SecHead, CtaBand, Arrow } from '@/components/Chrome';

export const metadata: Metadata = {
  title: 'Citations, Recognition & Sources',
  description: 'Press mentions, accreditations and the sources behind the figures published by ASMi Business School, Kolkata.',
};

export default function Citations() {
  return (
    <>
      <PageHero
        theme="ph-dark"
        eyebrow="Transparency"
        title="Citations &amp; <em>Recognition</em>"
        sub="Where ASMi and Techno India University have been cited, what we are accredited by, and the source behind every figure published on this site."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Citations & Recognition' }]}
        meta={[
          { value: 'AICTE', label: 'Approved' },
          { value: 'TIU', label: 'Awarding University' },
          { value: 'IBM · Google', label: 'Partners' },
          { value: '2025', label: 'Latest Audit' },
        ]}
      />

      <section className="sec">
        <div className="container">
          <SecHead eyebrow="Press &amp; Media" heading="Where we have been<br />written about" lead="Coverage of ASMi Business School and the wider Techno India Group." />
          <div className="press-grid">
            {PRESS.map((p, i) => (
              <article className="press-item reveal-up" data-delay={(i % 3) * 60} key={p.title}>
                <span className="press-date">{p.date}</span>
                <h3>{p.title}</h3>
                <span className="press-source">{p.source}</span>
                <p>{p.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="container">
          <SecHead eyebrow="Accreditation &amp; Partnerships" heading="What we are<br /><em>recognised by</em>" lead="Approvals, affiliations and the partnerships that shape the curriculum." />
          <div className="acc-grid">
            {ACCREDITATIONS.map((a, i) => (
              <article className="acc-card reveal-up" data-delay={(i % 3) * 60} key={a.title}>
                <div className="acc-mono">{a.mono}</div>
                <h3>{a.title}</h3>
                <p>{a.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-muted">
        <div className="container">
          <SecHead
            eyebrow="Sources"
            heading="The figures on this site,<br />and where they come from"
            lead="Every statistic published across these pages traces back to a record held by the school. If a number here is out of date, write to us and we will correct it."
          />
          <div className="table-wrap reveal-up">
            <table className="data-table">
              <caption>Claims and their sources</caption>
              <thead><tr><th scope="col">Claim</th><th scope="col">Source</th></tr></thead>
              <tbody>
                {SOURCES.map((s) => (
                  <tr key={s.claim}>
                    <td><strong>{s.claim}</strong><span className="src-detail">{s.detail}</span></td>
                    <td>{s.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="callout reveal-up">
            <strong>Citing ASMi?</strong> Researchers and journalists may cite these figures with attribution to &ldquo;ASMi Business School, Techno India University, West Bengal&rdquo; and the relevant report year.
            <a href="mailto:info@asmibschool.com" className="link-cta">Request the underlying data <Arrow /></a>
          </div>
        </div>
      </section>

      <CtaBand heading="Built on figures we can show you" sub="Applications for the 2026 batch are open across MBA, BBA and Executive MBA." />
    </>
  );
}
