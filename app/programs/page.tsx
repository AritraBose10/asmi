import type { Metadata } from 'next';
import Link from 'next/link';
import { PROGRAMS, SPECIALIZATIONS } from '@/data/programs';
import { PageHero, SecHead, CtaBand, Arrow, Pills } from '@/components/Chrome';

export const metadata: Metadata = {
  title: 'Programmes — MBA, BBA & Executive MBA',
  description: 'AICTE-approved MBA, BBA in Business Analytics and Executive MBA at ASMi Business School, Kolkata.',
};

export default function ProgramsIndex() {
  return (
    <>
      <PageHero
        theme="ph-dark"
        eyebrow="Our Programmes"
        title="Three ways<br /><em>in</em>"
        sub="A two-year full-time MBA with six specializations, a four-year BBA built around Business Analytics, and a modular Executive MBA for people who are not leaving their jobs."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Programmes' }]}
        meta={[
          { value: '3', label: 'Degree Programmes' },
          { value: '6', label: 'MBA Specializations' },
          { value: 'IBM', label: 'Curriculum Partner' },
          { value: 'AICTE', label: 'Approved' },
        ]}
        photoKey="programs"
      />

      <section className="sec">
        <div className="container">
          <SecHead
            eyebrow="Choose Your Route"
            heading="Future-focused programmes<br /><em>for tomorrow&rsquo;s leaders</em>"
            lead="Every programme shares the same spine — practitioner faculty, IBM-powered analytics and a placement cell that starts in semester one."
          />
          <div className="pg-grid">
            {PROGRAMS.map((p, i) => (
              <Link key={p.slug} href={`/programs/${p.slug}`} className="pg-card reveal-up" data-delay={i * 100}>
                <div className="pg-card-media">
                  <img src={`/assets/${p.image}`} alt={p.name} className="pg-card-img" />
                  <div className="pg-card-shade" />
                  <span className="pg-type">{p.code}</span>
                  <span className={`pg-badge${p.badge === 'Flagship' ? ' flagship' : ''}`}>{p.badge}</span>
                </div>
                <div className="pg-card-body">
                  <span className="pg-duration">{p.facts[0].value} · {p.facts[1].value}</span>
                  <h3 className="pg-card-title">{p.name}</h3>
                  <p className="pg-card-desc">{p.summary}</p>
                  <Pills items={p.tags} tight />
                  <div className="pg-reveal">
                    <ul className="pg-points">
                      {p.highlights.map((h) => <li key={h}>{h}</li>)}
                    </ul>
                  </div>
                  <span className="pg-cta">Explore Programme <Arrow size={18} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-muted">
        <div className="container">
          <SecHead
            eyebrow="MBA Specializations"
            heading="Six tracks inside the MBA"
            lead="Chosen at the end of the first year, once you have actually worked across every function."
          />
          <div className="spec-grid">
            {SPECIALIZATIONS.map((s, i) => (
              <Link key={s.slug} href={`/specializations/${s.slug}`} className="spec-card reveal-up" data-delay={i * 60}>
                <span className="spec-num">{s.num}</span>
                <h3>{s.name}</h3>
                <span className="spec-kicker">{s.kicker}</span>
                <p>{s.summary}</p>
                <span className="link-cta">View track <Arrow size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Applications for Batch 2026 are open"
        sub="MBA, BBA in Business Analytics and Executive MBA — apply online or call the admissions office."
      />
    </>
  );
}
