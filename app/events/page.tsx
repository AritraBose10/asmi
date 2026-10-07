import type { Metadata } from 'next';
import Link from 'next/link';
import { EVENTS } from '@/data/campus';
import { PageHero, SecHead, CtaBand, Arrow, TickList } from '@/components/Chrome';

export const metadata: Metadata = {
  title: 'Events, Bootcamps & Guest Lectures',
  description: 'Guest lectures, corporate connect sessions, the Sundarban MBA Boot Camp and the Malaysia study tour — the ASMi Business School events calendar.',
};

export default function EventsIndex() {
  return (
    <>
      <PageHero
        theme="ph-deep"
        eyebrow="What Happens Here"
        title="Events &amp; <em>Bootcamps</em>"
        sub="Guest lectures every fortnight, corporate connect sessions every month, a residential bootcamp in the Sundarbans and ten days in Malaysia. The calendar is the curriculum's other half."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Events' }]}
        meta={[
          { value: '10+', label: 'Event Formats' },
          { value: 'Fortnightly', label: 'Guest Lectures' },
          { value: 'Monthly', label: 'Corporate Connect' },
          { value: 'Annual', label: 'Study Tour' },
        ]}
        image="malaysia-tour.png"
      />

      <section className="sec">
        <div className="container">
          <SecHead
            eyebrow="The Calendar"
            heading="Ten formats that make up<br />the ASMi year"
            lead="From a residential field immersion in the Sundarbans to the last gathering before the winter break."
          />
          <div className="event-grid">
            {EVENTS.map((e, i) => (
              <Link key={e.slug} href={`/events/${e.slug}`} className="event-card reveal-up" data-delay={(i % 3) * 70}>
                <div className="event-top">
                  <span className="event-tag">{e.tag}</span>
                  <span className="event-when">{e.when}</span>
                </div>
                <h3>{e.title}</h3>
                <span className="event-where">{e.where}</span>
                <p>{e.summary}</p>
                <span className="link-cta" style={{ marginTop: 16 }}>Details <Arrow size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="container">
          <SecHead eyebrow="Speakers" heading="Who has stood at the front" lead="Leadership sessions run through the year, opened to the whole school." />
          <div className="speaker-grid">
            {[
              { mono: 'MR', slug: 'meghdut-roychowdhury', name: 'Meghdut Roychowdhury', role: 'Chief Innovation Officer & Executive Director, Techno India Group', note: 'Innovation, entrepreneurship and building technology ventures from Eastern India.' },
              { mono: 'KM', slug: 'kaustav-majumdar', name: 'Kaustav Majumdar', role: 'Chief Mentor, ASMi Business School', note: 'Strategy and leadership, drawn from decades of senior management practice.' },
              { mono: 'PL', slug: 'pauline-laravoire', name: 'Pauline Laravoire', role: 'Sustainability Director, Techno India Group', note: 'ESG, responsible business, and how sustainability rewrites the manager’s job.' },
            ].map((s, i) => (
              <Link key={s.slug} href={`/faculty/${s.slug}`} className="speaker-card reveal-up" data-delay={i * 80}>
                <div className="speaker-mono">{s.mono}</div>
                <h3>{s.name}</h3>
                <span>{s.role}</span>
                <p>{s.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-muted">
        <div className="container">
          <div className="split-feature">
            <div className="split-media reveal-up">
              <img src="/assets/campus-life.png" alt="MBA Boot Camp" loading="lazy" />
            </div>
            <div className="split-body reveal-up" data-delay={100}>
              <p className="section-eyebrow">Flagship</p>
              <h2 className="sec-heading">MBA Boot Camp,<br />Sundarban</h2>
              <p className="sec-lead">First-year students spend a residential week in Jharkhali running live field assignments with local enterprises — testing management frameworks where the constraints are real and the margins are thin.</p>
              <TickList items={['Residential field immersion', 'Live assignments with local enterprises', 'Team-based, assessed in the field', 'Runs annually for the incoming MBA cohort']} />
              <Link href="/events/mba-boot-camp-sundarban" className="link-cta">Read about the boot camp <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand heading="Come and see a session for yourself" sub="Prospective students are welcome at selected guest lectures and corporate connect sessions. Call the admissions office to arrange a visit." primaryLabel="Apply for Batch 2026" />
    </>
  );
}
