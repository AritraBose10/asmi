import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EVENTS, getEvent } from '@/data/campus';
import { PageHero, SecHead, CtaBand, Arrow, TickList, QuickFacts } from '@/components/Chrome';
import { PhotoGrid } from '@/components/Photo';

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) return {};
  return { title: `${e.title} — Events`, description: e.summary };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();
  const others = EVENTS.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <>
      <PageHero
        theme={event.tag === 'International' ? 'ph-gold' : 'ph-dark'}
        eyebrow={event.tag}
        title={event.title}
        sub={event.summary}
        crumbs={[{ href: '/', label: 'Home' }, { href: '/events', label: 'Events' }, { label: event.title }]}
        image={event.tag === 'International' ? 'malaysia-tour.png' : 'campus-life.png'}
      />

      {event.details && event.details.length > 0 && (
        <section className="sec sec-tight">
          <div className="container">
            <QuickFacts facts={event.details} />
          </div>
        </section>
      )}

      <section className="sec">
        <div className="container">
          <div className="article-layout">
            <aside className="article-rail">
              <Link href="/events" className="rail-back"><Arrow size={14} /> <span>All events</span></Link>
              {event.when && (
                <div className="rail-block">
                  <span className="rail-label">When</span>
                  <strong>{event.when}</strong>
                </div>
              )}
              {event.where && (
                <div className="rail-block">
                  <span className="rail-label">Where</span>
                  <strong>{event.where}</strong>
                </div>
              )}
              {event.who && (
                <div className="rail-block">
                  <span className="rail-label">Who attends</span>
                  <span className="rail-role">{event.who}</span>
                </div>
              )}
              {event.speakers && (
                <div className="rail-block">
                  <span className="rail-label">{event.speakers.length > 1 ? 'Speakers' : 'Speaker'}</span>
                  <span className="rail-role">{event.speakers.join(' · ')}</span>
                </div>
              )}
            </aside>

            <div className="prose">
              {event.intro
                ? event.intro.map((p, i) => <p key={i} className={i === 0 ? 'lede' : undefined}>{p}</p>)
                : <p className="lede">{event.summary}</p>}
              {event.highlights && (
                <>
                  <h2>What it includes</h2>
                  <TickList items={event.highlights} />
                </>
              )}
              {event.gallery && event.gallery.length > 0 && (
                <>
                  <h2>From the day</h2>
                  <PhotoGrid items={event.gallery.map((src) => ({ src, alt: event.title }))} />
                </>
              )}
              <hr className="prose-rule" />
              <p className="prose-note">
                Dates vary by academic year. To attend as a prospective student, call{' '}
                <a href="tel:08062642222">08062642222</a> or write to{' '}
                <a href="mailto:info@asmibschool.com">info@asmibschool.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="container">
          <SecHead eyebrow="More" heading="Other events" />
          <div className="speaker-grid">
            {others.map((e, i) => (
              <Link key={e.slug} href={`/events/${e.slug}`} className="speaker-card reveal-up" data-delay={i * 80}>
                <div className="speaker-mono">{e.tag.slice(0, 2).toUpperCase()}</div>
                <h3>{e.title}</h3>
                <span>{e.when}</span>
                <p>{e.summary}</p>
              </Link>
            ))}
          </div>
          <div className="sec-foot reveal-up">
            <Link href="/events" className="link-cta">See the full calendar <Arrow /></Link>
          </div>
        </div>
      </section>

      <CtaBand heading="The calendar is the curriculum's other half" sub="Applications for the 2026 batch are open across MBA, BBA and Executive MBA." />
    </>
  );
}
