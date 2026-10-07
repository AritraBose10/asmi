import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SPECIALIZATIONS, getSpecialization } from '@/data/programs';
import { getPerson } from '@/data/people';
import { PageHero, SecHead, CtaBand, Arrow, Pills } from '@/components/Chrome';

export function generateStaticParams() {
  return SPECIALIZATIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSpecialization(slug);
  if (!s) return {};
  return { title: `MBA in ${s.name}`, description: s.summary };
}

export default async function SpecializationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const spec = getSpecialization(slug);
  if (!spec) notFound();

  const people = spec.faculty.map(getPerson).filter(Boolean);
  const others = SPECIALIZATIONS.filter((s) => s.slug !== spec.slug);

  return (
    <>
      <PageHero
        theme="ph-dark"
        eyebrow={`MBA Specialization ${spec.num}`}
        title={`${spec.name}<br /><em>track</em>`}
        sub={spec.summary}
        crumbs={[
          { href: '/', label: 'Home' },
          { href: '/programs/mba', label: 'MBA' },
          { href: '/specializations', label: 'Specializations' },
          { label: spec.name },
        ]}
        meta={[
          { value: '5', label: 'Electives' },
          { value: 'Year 2', label: 'Specialisation Year' },
          { value: String(spec.careers.length), label: 'Career Routes' },
          { value: 'IBM', label: 'Tooling' },
        ]}
      />

      <section className="sec">
        <div className="container">
          <div className="article-layout">
            <aside className="article-rail">
              <Link href="/specializations" className="rail-back"><Arrow size={14} /> <span>All tracks</span></Link>
              <div className="rail-block">
                <span className="rail-label">Focus</span>
                <strong>{spec.kicker}</strong>
              </div>
              <div className="rail-block">
                <span className="rail-label">Programme</span>
                <strong>Master of Business Administration</strong>
                <span className="rail-role">2 years, full time</span>
              </div>
              <div className="rail-block">
                <span className="rail-label">Skills built</span>
                <span className="rail-role">{spec.skills.join(' · ')}</span>
              </div>
            </aside>

            <div className="prose">
              {spec.intro.map((p, i) => (
                <p key={i} className={i === 0 ? 'lede' : undefined}>{p}</p>
              ))}

              <h2>Electives</h2>
              <div className="elective-list">
                {spec.electives.map((e, i) => (
                  <div className="elective reveal-up" data-delay={i * 50} key={e.title}>
                    <strong>{e.title}</strong>
                    <span>{e.desc}</span>
                  </div>
                ))}
              </div>

              <h2>Where it leads</h2>
              <Pills items={spec.careers} />
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="container">
          <SecHead eyebrow="Who teaches it" heading={`Faculty on the ${spec.name.toLowerCase()} track`} />
          <div className="fac-mini-grid">
            {people.map((f, i) => (
              <Link key={f!.slug} href={`/faculty/${f!.slug}`} className="fac-mini reveal-up" data-delay={i * 70}>
                <div className="fac-mini-mono">{f!.mono}</div>
                <h3>{f!.name}</h3>
                <span className="fac-mini-role">{f!.role}</span>
                <p>{f!.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-muted">
        <div className="container">
          <SecHead eyebrow="Other Tracks" heading="The other five specializations" />
          <div className="spec-grid">
            {others.map((s, i) => (
              <Link key={s.slug} href={`/specializations/${s.slug}`} className="spec-card reveal-up" data-delay={i * 60}>
                <span className="spec-num">{s.num}</span>
                <h3>{s.name}</h3>
                <span className="spec-kicker">{s.kicker}</span>
                <p>{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading={`Specialise in ${spec.name}`} sub="Applications for the 2026 MBA batch are open. Specialisation is chosen at the end of your first year." />
    </>
  );
}
