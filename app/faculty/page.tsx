import type { Metadata } from 'next';
import Link from 'next/link';
import { LEADERSHIP, FACULTY, MENTORS } from '@/data/people';
import { PageHero, SecHead, CtaBand, Arrow, Pills } from '@/components/Chrome';
import LinkedInLink from '@/components/LinkedInLink';
import Photo, { PhotoBand } from '@/components/Photo';
import { SECTION } from '@/data/photos';
import { FeatureGrid } from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Faculty & Industry Mentors',
  description: 'Meet the faculty and industry mentors at ASMi Business School — IIT and IIM alumni, CXOs, founders and industry veterans.',
};

export default function FacultyIndex() {
  return (
    <>
      <PageHero
        theme="ph-dark"
        eyebrow="The People"
        title="Faculty &amp; <em>Mentors</em>"
        sub={`${FACULTY.length} faculty, ${MENTORS.length} industry mentors, and a chief-mentor bench drawn from one of Eastern India's largest education groups. Most of them still do the work they teach.`}
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Faculty' }]}
        meta={[
          { value: `${FACULTY.length}+`, label: 'Faculty' },
          { value: `${MENTORS.length}+`, label: 'Industry Mentors' },
          { value: 'IIT · IIM', label: 'Alumni' },
          { value: 'CXO', label: 'Practitioners' },
        ]}
        photoKey="faculty"
      />

      <section className="sec">
        <div className="container">
          <SecHead eyebrow="Leadership" heading="The chief mentors" lead="The people who set the direction of ASMi Business School and the wider Techno India Group." />
          <div className="lead-grid">
            {LEADERSHIP.map((p, i) => (
              <article key={p.slug} className="lead-card reveal-up" data-delay={i * 70}>
                <Link href={`/faculty/${p.slug}`} className="card-link" aria-label={`${p.name} — ${p.role}`} />
                <Photo src={p.photo} alt={`${p.name}, ${p.role}`} ratio="square" mono={p.mono} className="card-portrait" />
                <div>
                  <h3>{p.name}</h3>
                  <span className="lead-role">{p.role}</span>
                  <p>{p.short}</p>
                </div>
                {p.linkedin && <LinkedInLink url={p.linkedin} name={p.name} />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-dark" id="faculty">
        <div className="container">
          <SecHead
            eyebrow="Faculty"
            heading="Learn from<br /><em>industry leaders</em>"
            lead="Advanced degrees from IIT Kanpur, Jadavpur and IIM Bangalore, alongside serving CXOs and independent directors. Teaching is interactive, participatory and built on live cases."
          />
          <div className="fac-full-grid">
            {FACULTY.map((p, i) => (
              <article key={p.slug} className="fac-full reveal-up" data-delay={(i % 4) * 70}>
                <Link href={`/faculty/${p.slug}`} className="card-link" aria-label={`${p.name} — ${p.role}`} />
                <div className="fac-full-top">
                  <Photo src={p.photo} alt={`${p.name}, ${p.role}`} ratio="square" mono={p.mono} className="card-portrait" />
                  <span className="fac-full-num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{p.name}</h3>
                <span className="fac-full-role">{p.role}</span>
                <p>{p.short}</p>
                <div className="card-foot">
                  <Pills items={p.expertise.slice(0, 2)} tight />
                  {p.linkedin && <LinkedInLink url={p.linkedin} name={p.name} />}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PhotoBand slot={SECTION.facultyTeaching} eyebrow="In The Room" heading="Taught by people who still do the work" />

      <section className="sec sec-muted" id="mentors">
        <div className="container">
          <SecHead
            eyebrow="Industry Connect"
            heading="Mentors from<br />the field"
            lead="Twelve practising CXOs, founders and industry leaders who mentor students through their programme — not as guest speakers, but as a standing bench."
          />
          <div className="mentor-grid">
            {MENTORS.map((p, i) => (
              <article key={p.slug} className="mentor-card reveal-up" data-delay={(i % 4) * 60}>
                <Link href={`/faculty/${p.slug}`} className="card-link" aria-label={`${p.name} — ${p.role}`} />
                <Photo src={p.photo} alt={`${p.name}, ${p.role}`} ratio="square" mono={p.mono} className="card-portrait" />
                <div>
                  <h3>{p.name}</h3>
                  <span className="mentor-role">{p.role}</span>
                  <p>{p.org}</p>
                </div>
                {p.linkedin && <LinkedInLink url={p.linkedin} name={p.name} />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SecHead eyebrow="How We Teach" heading="What our faculty actually do differently" />
          <FeatureGrid
            cols={4}
            items={[
              { icon: 'users', title: 'Interactive and participatory', desc: 'Sessions are built around discussion and defence of decisions rather than transmission of notes.' },
              { icon: 'brief', title: 'Industry-anchored', desc: 'Faculty hold or have held senior positions — the examples come from their own desks.' },
              { icon: 'book', title: 'Research-active', desc: 'Faculty conduct research and publish, keeping the classroom connected to current thinking.' },
              { icon: 'target', title: 'Individually mentored', desc: 'Small cohorts mean faculty mentor individual students through specialisation and placement.' },
            ]}
          />
        </div>
      </section>

      <CtaBand heading="Learn from people who have done the job" sub="Applications for the 2026 batch are open across MBA, BBA and Executive MBA." />
    </>
  );
}
