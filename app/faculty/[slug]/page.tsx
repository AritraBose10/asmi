import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PEOPLE, getPerson } from '@/data/people';
import { SPECIALIZATIONS } from '@/data/programs';
import { PageHero, SecHead, CtaBand, Arrow, Pills, TickList } from '@/components/Chrome';
import LinkedInLink from '@/components/LinkedInLink';

export function generateStaticParams() {
  return PEOPLE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) return {};
  return { title: `${p.name} — ${p.role}`, description: p.short };
}

const KIND_LABEL = { leadership: 'Leadership', faculty: 'Faculty', mentor: 'Industry Mentor' } as const;

export default async function PersonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  const tracks = SPECIALIZATIONS.filter((s) => s.faculty.includes(person.slug));
  const peers = PEOPLE.filter((p) => p.kind === person.kind && p.slug !== person.slug).slice(0, 4);

  return (
    <>
      <PageHero
        theme={person.kind === 'mentor' ? 'ph-deep' : 'ph-dark'}
        eyebrow={KIND_LABEL[person.kind]}
        title={person.name}
        sub={person.short}
        crumbs={[{ href: '/', label: 'Home' }, { href: '/faculty', label: 'Faculty & Mentors' }, { label: person.name }]}
      />

      <section className="sec">
        <div className="container">
          <div className="article-layout">
            <aside className="article-rail">
              <Link href="/faculty" className="rail-back"><Arrow size={14} /> <span>All people</span></Link>
              <div className="profile-mono">{person.mono}</div>
              <div className="rail-block">
                <span className="rail-label">Role</span>
                <strong>{person.role}</strong>
                {person.org && <span className="rail-role">{person.org}</span>}
              </div>
              {person.teaches && (
                <div className="rail-block">
                  <span className="rail-label">Teaches</span>
                  <span className="rail-role">{person.teaches.join(' · ')}</span>
                </div>
              )}
              <div className="rail-block">
                <span className="rail-label">Expertise</span>
                <span className="rail-role">{person.expertise.join(' · ')}</span>
              </div>
              {person.linkedin && (
                <LinkedInLink url={person.linkedin} name={person.name} variant="rail" />
              )}
            </aside>

            <div className="prose">
              {person.bio.map((p, i) => (
                <p key={i} className={i === 0 ? 'lede' : undefined}>{p}</p>
              ))}

              <h2>Focus</h2>
              <TickList items={person.focus} />

              {tracks.length > 0 && (
                <>
                  <h2>Specializations</h2>
                  <p>Teaches on {tracks.length === 1 ? 'the following MBA track' : 'the following MBA tracks'}:</p>
                  <div className="pill-row">
                    {tracks.map((t) => (
                      <Link key={t.slug} href={`/specializations/${t.slug}`} className="pill pill-link">{t.name}</Link>
                    ))}
                  </div>
                </>
              )}

              <hr className="prose-rule" />
              <p className="prose-note">
                Profile details are maintained by ASMi Academic Affairs. Corrections to{' '}
                <a href="mailto:info@asmibschool.com">info@asmibschool.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="container">
          <SecHead eyebrow="More" heading={person.kind === 'mentor' ? 'Other industry mentors' : 'Other faculty'} />
          <div className="fac-mini-grid">
            {peers.map((p, i) => (
              <Link key={p.slug} href={`/faculty/${p.slug}`} className="fac-mini reveal-up" data-delay={i * 70}>
                <div className="fac-mini-mono">{p.mono}</div>
                <h3>{p.name}</h3>
                <span className="fac-mini-role">{p.role}</span>
                <p>{p.short}</p>
              </Link>
            ))}
          </div>
          <div className="sec-foot reveal-up">
            <Link href="/faculty" className="link-cta">See everyone <Arrow /></Link>
          </div>
        </div>
      </section>

      <CtaBand heading="Study with practitioners" sub="Applications for the 2026 batch are open across MBA, BBA and Executive MBA." />
    </>
  );
}
