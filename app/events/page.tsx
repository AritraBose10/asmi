import type { Metadata } from 'next';
import Link from 'next/link';
import { EVENTS } from '@/data/campus';
import { SESSIONS, SCHEDULED, DIRECTORY_PERIOD, SPEAKER_ORGS, monogram, speakerDate } from '@/data/speakers';
import { PageHero, SecHead, CtaBand, Arrow, TickList, Pills } from '@/components/Chrome';
import Photo from '@/components/Photo';

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
          { value: '14', label: 'Speakers, Apr–Sep 2026' },
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
                <Photo src={e.photo} alt={e.title} ratio="card" className="event-photo" />
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

      {/* Speaker directory — real sessions, from data/speakers.ts */}
      <section className="sec sec-dark" id="speakers">
        <div className="container">
          <SecHead
            eyebrow="Speaker Directory"
            heading="Who has stood at<br /><em>the front</em>"
            lead={`Practitioners who addressed the school between ${DIRECTORY_PERIOD} — from IBM and AWS to Durham University Business School and the London Borough of Brent.`}
          />

          <div className="speaker-list">
            {SESSIONS.map((s, i) => (
              <article className="speaker-row reveal-up" data-delay={(i % 4) * 50} key={`${s.name}-${s.date}`}>
                <div className="speaker-mono">{monogram(s.name)}</div>
                <div className="speaker-row-body">
                  <time className="speaker-when" dateTime={s.date}>{speakerDate(s.date)}</time>
                  <h3>
                    {s.facultySlug
                      ? <Link href={`/faculty/${s.facultySlug}`}>{s.name}</Link>
                      : s.name}
                  </h3>
                  <p className="speaker-role">
                    {s.designation}{s.org ? <>, <span>{s.org}</span></> : null}
                  </p>
                  <p className="speaker-event">{s.event}</p>
                </div>
              </article>
            ))}
          </div>

          <h3 className="speaker-sub reveal-up">Scheduled — report on file pending</h3>
          <div className="table-wrap reveal-up" tabIndex={0} role="region" aria-label="Scheduled speaker sessions">
            <table className="data-table">
              <caption>Speakers in the schedule whose session report was not on file at compilation</caption>
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Speaker</th>
                  <th scope="col">Designation</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULED.map((s) => (
                  <tr key={`${s.name}-${s.date}`}>
                    <td><time dateTime={s.date}>{speakerDate(s.date)}</time></td>
                    <td><strong>{s.name}</strong></td>
                    <td>{s.designation}{s.org ? `, ${s.org}` : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="speaker-sub reveal-up">Organisations represented</h3>
          <Pills items={SPEAKER_ORGS} />
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
