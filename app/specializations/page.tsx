import type { Metadata } from 'next';
import Link from 'next/link';
import { SPECIALIZATIONS } from '@/data/programs';
import { PageHero, SecHead, CtaBand, Arrow, Pills } from '@/components/Chrome';

export const metadata: Metadata = {
  title: 'MBA Specializations',
  description: 'Six MBA specializations at ASMi Business School: Marketing, Finance, Human Resources, Technology, Entrepreneurship and Sustainability.',
};

export default function SpecializationsIndex() {
  return (
    <>
      <PageHero
        theme="ph-deep"
        eyebrow="MBA Tracks"
        title="Six <em>specializations</em>"
        sub="Chosen at the end of the first year, once you have worked across marketing, finance, operations and people — and know where your strengths actually are."
        crumbs={[{ href: '/', label: 'Home' }, { href: '/programs', label: 'Programmes' }, { label: 'Specializations' }]}
        meta={[
          { value: '6', label: 'Tracks' },
          { value: 'Year 2', label: 'When You Choose' },
          { value: '5', label: 'Electives Each' },
          { value: 'ESG', label: 'Threaded Throughout' },
        ]}
      />

      <section className="sec">
        <div className="container">
          <SecHead
            eyebrow="The Tracks"
            heading="Depth, after breadth"
            lead="Each track carries five electives, a dedicated faculty group and a set of career outcomes the placement cell prepares for specifically."
          />
          <div className="spec-grid">
            {SPECIALIZATIONS.map((s, i) => (
              <Link key={s.slug} href={`/specializations/${s.slug}`} className="spec-card reveal-up" data-delay={i * 60}>
                <span className="spec-num">{s.num}</span>
                <h3>{s.name}</h3>
                <span className="spec-kicker">{s.kicker}</span>
                <p>{s.summary}</p>
                <Pills items={s.tags} tight />
                <span className="link-cta" style={{ marginTop: 16 }}>View track <Arrow size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Specialise where you are strongest" sub="Applications for the 2026 MBA batch are open across all six tracks." />
    </>
  );
}
