import type { Metadata } from 'next';
import Link from 'next/link';
import { CLUBS } from '@/data/campus';
import { SITE, CAMPUS_GALLERY } from '@/data/site';
import { PageHero, SecHead, CtaBand, Arrow, Pills, Ladder } from '@/components/Chrome';
import { FeatureGrid } from '@/components/Icon';
import { PhotoGrid } from '@/components/Photo';

export const metadata: Metadata = {
  title: 'Campus Life at Sector V, Kolkata',
  description: 'Campus life at ASMi Business School — a vertical campus on the 15th floor of Godrej Genesis in Kolkata’s Sector V tech district.',
};

export default function CampusLife() {
  return (
    <>
      <PageHero
        theme="ph-dark"
        eyebrow="Campus Life"
        title="Life on the <em>15th floor</em>"
        sub="ASMi sits inside Godrej Genesis in Sector V — Kolkata's technology district. You study surrounded by the companies you are preparing to work for, which changes the texture of an ordinary Tuesday."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Campus Life' }]}
        meta={[
          { value: 'Sector V', label: 'Kolkata' },
          { value: '15th Floor', label: 'Godrej Genesis' },
          { value: '8', label: 'Student Clubs' },
          { value: 'Year-Round', label: 'Events' },
        ]}
        image="campus-life.png"
      />

      <section className="sec">
        <div className="container">
          <SecHead
            eyebrow="The Campus"
            heading="A vertical campus in the<br />middle of the working city"
            lead="Not a sprawling suburban campus you have to leave to find industry. The industry is in the building next door."
          />
          <FeatureGrid
            items={[
              { icon: 'book', title: 'Business library', desc: 'Print and digital business collections, case libraries and quiet study space for exam season.' },
              { icon: 'users', title: 'Case rooms', desc: 'Tiered discussion rooms built for the case method — every seat faces the argument.' },
              { icon: 'chart', title: 'Analytics lab', desc: 'Workstations for the IBM-powered analytics modules, open outside class hours for club clinics.' },
              { icon: 'cloud', title: 'Smart classrooms', desc: 'Connected teaching spaces for hybrid sessions, guest lectures and remote industry panels.' },
              { icon: 'spark', title: 'Student lounge', desc: 'Where club meetings, case prep and most of the friendships actually happen.' },
              { icon: 'globe', title: 'Sector V on your doorstep', desc: 'IT parks, corporate offices and the recruiters you will meet — all within walking distance.' },
            ]}
          />
        </div>
      </section>

      {CAMPUS_GALLERY.some((g) => g.src) && (
      <section className="sec sec-muted" id="gallery">
        <div className="container">
          <SecHead
            eyebrow="The Campus"
            heading="In photographs"
            lead="The 15th floor at Godrej Genesis, and the Sector V district it sits in."
          />
          <PhotoGrid items={CAMPUS_GALLERY} />
        </div>
      </section>
      )}

      <section className="sec sec-dark">
        <div className="container">
          <SecHead eyebrow="A Week Here" heading="What an ordinary<br /><em>week contains</em>" />
          <Ladder
            label="Day"
            steps={[
              { term: 'Mon', title: 'Core sessions and case prep', desc: 'The teaching week opens with core modules. Case groups form in the lounge by late afternoon.', bullets: ['Core lectures', 'Case group formation', 'Library hours'] },
              { term: 'Wed', title: 'Guest lecture or corporate connect', desc: 'A practitioner takes the room — a live problem from their own desk, fortnightly.', bullets: ['Guest lecture series', 'Corporate connect sessions', 'Q&amp;A with hiring managers'] },
              { term: 'Fri', title: 'Club activity', desc: 'The clubs own Friday: datathon heats, stock pitches, brand audits, rehearsals.', bullets: ['Club clinics and competitions', 'Council meetings', 'Open mic and cultural practice'] },
              { term: 'Sat', title: 'Workshops and field work', desc: 'Skill workshops, placement preparation, and the field visits that anchor coursework to real operations.', bullets: ['Placement workshops', 'Field and company visits', 'Community projects'] },
            ]}
          />
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SecHead eyebrow="Student Clubs" heading="Eight clubs, run end to end by students" />
          <div className="club-grid">
            {CLUBS.map((c, i) => (
              <Link key={c.slug} href={`/clubs/${c.slug}`} className="club-card reveal-up" data-delay={(i % 4) * 60}>
                <div className="club-mono">{c.mono}</div>
                <h3>{c.shortName}</h3>
                <span className="club-kicker">{c.kicker}</span>
                <p>{c.summary}</p>
              </Link>
            ))}
          </div>
          <div className="sec-foot reveal-up">
            <Link href="/clubs" className="link-cta">Explore the clubs <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="sec sec-muted">
        <div className="container">
          <SecHead eyebrow="Getting Here" heading="Two addresses, one school" />
          <div className="duo-grid">
            <article className="duo-card reveal-up">
              <p className="section-eyebrow">Campus</p>
              <h3>Godrej Genesis, 15th Floor</h3>
              <p>{SITE.campus}</p>
              <Pills items={['Classes', 'Library', 'Labs']} tight />
            </article>
            <article className="duo-card reveal-up" data-delay={100}>
              <p className="section-eyebrow">Admissions Office</p>
              <h3>Techno India University</h3>
              <p>{SITE.admissionsOffice}</p>
              <Pills items={['Counselling', 'Applications', 'Campus Visits']} tight />
            </article>
          </div>
          <div className="callout reveal-up">
            <strong>Visiting?</strong> Call {SITE.phone} to arrange a campus visit — prospective students are welcome at selected guest lectures.
            <Link href="/events" className="link-cta">See what&rsquo;s on <Arrow /></Link>
          </div>
        </div>
      </section>

      <CtaBand heading="Come and see the 15th floor" sub="Arrange a campus visit, or apply for the 2026 batch online." />
    </>
  );
}
