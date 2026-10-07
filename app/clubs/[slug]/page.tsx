import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CLUBS, getClub } from '@/data/campus';
import { PageHero, SecHead, CtaBand, Arrow, Pills } from '@/components/Chrome';

export function generateStaticParams() {
  return CLUBS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getClub(slug);
  if (!c) return {};
  return { title: `${c.name} — Student Clubs`, description: c.summary };
}

export default async function ClubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const club = getClub(slug);
  if (!club) notFound();
  const others = CLUBS.filter((c) => c.slug !== club.slug).slice(0, 4);

  return (
    <>
      <PageHero
        theme="ph-deep"
        eyebrow="Student Club"
        title={club.shortName}
        sub={club.summary}
        crumbs={[{ href: '/', label: 'Home' }, { href: '/clubs', label: 'Student Clubs' }, { label: club.shortName }]}
        meta={[
          { value: club.openTo.split(',')[0], label: 'Open To' },
          { value: club.activities.length.toString(), label: 'Core Activities' },
          { value: club.roles.length.toString(), label: 'Council Roles' },
          { value: 'Student-Led', label: 'Governance' },
        ]}
      />

      <section className="sec">
        <div className="container">
          <div className="article-layout">
            <aside className="article-rail">
              <Link href="/clubs" className="rail-back"><Arrow size={14} /> <span>All clubs</span></Link>
              <div className="profile-mono">{club.mono}</div>
              <div className="rail-block">
                <span className="rail-label">Focus</span>
                <strong>{club.kicker}</strong>
              </div>
              <div className="rail-block">
                <span className="rail-label">Meets</span>
                <strong>{club.meets}</strong>
              </div>
              <div className="rail-block">
                <span className="rail-label">Open to</span>
                <span className="rail-role">{club.openTo}</span>
              </div>
            </aside>

            <div className="prose">
              {club.intro.map((p, i) => <p key={i} className={i === 0 ? 'lede' : undefined}>{p}</p>)}

              <h2>What runs through the year</h2>
              <div className="elective-list">
                {club.calendar.map((c, i) => (
                  <div className="elective reveal-up" data-delay={i * 60} key={c.what}>
                    <strong>{c.what} <span className="elective-when">{c.when}</span></strong>
                    <span>{c.detail}</span>
                  </div>
                ))}
              </div>

              <h2>Council roles</h2>
              <Pills items={club.roles} />

              <hr className="prose-rule" />
              <p className="prose-note">
                Club details are maintained by the student council. Joining happens at the orientation-week club fair, or write to{' '}
                <a href="mailto:info@asmibschool.com">info@asmibschool.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="container">
          <SecHead eyebrow="More" heading="Other clubs" />
          <div className="fac-mini-grid">
            {others.map((c, i) => (
              <Link key={c.slug} href={`/clubs/${c.slug}`} className="fac-mini reveal-up" data-delay={i * 70}>
                <div className="fac-mini-mono">{c.mono}</div>
                <h3>{c.shortName}</h3>
                <span className="fac-mini-role">{c.kicker}</span>
                <p>{c.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading={`Join ${club.shortName} in your first term`} sub="The club fair runs during orientation week. Applications for Batch 2026 are open now." />
    </>
  );
}
