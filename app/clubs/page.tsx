import type { Metadata } from 'next';
import Link from 'next/link';
import { CLUBS } from '@/data/campus';
import { PageHero, SecHead, CtaBand, Arrow, Pills, TickList } from '@/components/Chrome';

export const metadata: Metadata = {
  title: 'Student Clubs & Societies',
  description: 'Eight student-led clubs at ASMi Business School — finance, marketing, analytics, HR, entrepreneurship, social impact, culture and sport.',
};

export default function ClubsIndex() {
  return (
    <>
      <PageHero
        theme="ph-deep"
        eyebrow="Student Life"
        title="Student <em>Clubs</em>"
        sub="Eight clubs, each owned end to end by students — their own calendars, their own budgets, their own competitions. The fastest way to find out whether you actually like a function is to run something inside it."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Student Clubs' }]}
        meta={[
          { value: '8', label: 'Active Clubs' },
          { value: 'Student-Led', label: 'Governance' },
          { value: 'Year-Round', label: 'Calendar' },
          { value: 'All Years', label: 'Open To' },
        ]}
        image="campus-life.png"
      />

      <section className="sec">
        <div className="container">
          <SecHead eyebrow="The Clubs" heading="Eight communities,<br />run by students" />
          <div className="club-grid">
            {CLUBS.map((c, i) => (
              <Link key={c.slug} href={`/clubs/${c.slug}`} className="club-card reveal-up" data-delay={(i % 4) * 60}>
                <div className="club-mono">{c.mono}</div>
                <h3>{c.shortName}</h3>
                <span className="club-kicker">{c.kicker}</span>
                <p>{c.summary}</p>
                <Pills items={c.activities} tight />
                <span className="link-cta" style={{ marginTop: 16 }}>Visit club <Arrow size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="container">
          <SecHead eyebrow="How It Works" heading="Joining, running,<br /><em>and leading one</em>" />
          <div className="steps-flow">
            {['Club fair in orientation week', 'Join up to two clubs per term', 'Take a role on an event team', 'Stand for the club council'].map((s, i) => (
              <div className="step reveal-up" data-delay={i * 60} key={s}>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="step-label">{s}</span>
              </div>
            ))}
          </div>
          <p className="sb-note">Club leadership sits on your CV as real management experience — budgets, teams and deadlines that belong to you.</p>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="split-feature flip">
            <div className="split-media reveal-up">
              <img src="/assets/malaysia-tour.png" alt="Club activity beyond campus" loading="lazy" />
            </div>
            <div className="split-body reveal-up" data-delay={100}>
              <p className="section-eyebrow">Beyond Campus</p>
              <h2 className="sec-heading">Clubs take the work<br />outside the building</h2>
              <p className="sec-lead">Case competitions in other cities, brand audits for Kolkata businesses, NGO partnerships and the inter-university sports meet — most club calendars end somewhere off campus.</p>
              <TickList items={['Inter-college case competitions', 'Live brand audits for local businesses', 'NGO and community partnerships', 'TIU inter-university sports meet']} />
              <Link href="/events" className="link-cta">See the events calendar <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand heading="Find your people in your first week" sub="The club fair runs during orientation. Applications for Batch 2026 are open now." />
    </>
  );
}
