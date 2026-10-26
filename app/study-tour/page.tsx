import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, SecHead, CtaBand, FaqBlock, Arrow } from '@/components/Chrome';
import { PhotoGrid } from '@/components/Photo';
import { TOUR_GALLERY } from '@/data/site';
import { FeatureGrid } from '@/components/Icon';

export const metadata: Metadata = {
  title: 'International Study Tour — Malaysia',
  description: 'The ASMi Business School study tour to Malaysia with INTI International University: industry immersion, factory visits and cultural fieldwork.',
};

export default function StudyTour() {
  return (
    <>
      <PageHero
        theme="ph-gold"
        eyebrow="Global Exposure"
        title="International <em>Study Tour</em>"
        sub="Every cohort travels abroad for an immersion built around how business is actually done in another market. The part of the programme students talk about years later."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'International Study Tour' }]}
        meta={[
          { value: 'Malaysia', label: 'Destination' },
          { value: 'INTI', label: 'University Partner' },
          { value: 'Annual', label: 'Frequency' },
          { value: 'MBA · EMBA', label: 'Cohorts' },
        ]}
        image="malaysia-tour.png"
      />

      <section className="sec">
        <div className="container">
          <SecHead
            eyebrow="This Year's Destination"
            heading="Malaysia"
            lead="Ten days with INTI International University — industry sessions, factory floors and cultural fieldwork. Not a sightseeing trip with a lecture attached: the itinerary is built around how businesses in another market actually operate."
          />
          <h3 className="absat-city-head reveal-up" style={{ marginTop: 0 }}>What the ten days contain</h3>
          <FeatureGrid
            cols={4}
            items={[
              { icon: 'book', title: 'Sessions at INTI International University', desc: 'Engagement with industry experts and global academics on the INTI campus — the academic spine of the tour.' },
              { icon: 'brief', title: 'Royal Selangor pewter factory', desc: 'A working manufacturing floor: craft production, quality systems and how a heritage brand scales.' },
              { icon: 'spark', title: 'Barleys Chocolate factory', desc: 'Food manufacturing end to end — supply chain, process control and brand storytelling in one visit.' },
              { icon: 'globe', title: 'Cultural heritage fieldwork', desc: 'Structured visits to heritage sites, reading a market through its culture rather than its spreadsheets.' },
            ]}
          />
        </div>
      </section>

      {TOUR_GALLERY.some((g) => g.src) && (
      <section className="sec sec-muted" id="gallery">
        <div className="container">
          <SecHead eyebrow="From The Tour" heading="On the ground" />
          <PhotoGrid items={TOUR_GALLERY} />
        </div>
      </section>
      )}

      <section className="sec sec-dark">
        <div className="container">
          <SecHead eyebrow="Why It Matters" heading="You cannot read a market<br /><em>from a case study</em>" />
          <div className="duo-grid">
            <article className="duo-card dark reveal-up">
              <h3>Business practice differs across borders</h3>
              <p>Negotiation norms, supply chain structures, consumer expectations and regulatory posture all shift the moment you cross a border. Seeing that first-hand is the fastest way to stop assuming your home market is the default.</p>
            </article>
            <article className="duo-card dark reveal-up" data-delay={100}>
              <h3>A cohort travels differently than a class sits</h3>
              <p>Ten days in an unfamiliar country does something to a group that two years of shared classrooms does not. Most alumni describe the tour as the point the batch became a network.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sec sec-muted">
        <div className="container">
          <SecHead eyebrow="Partner" heading="INTI International University" lead="A long-standing academic partner hosting ASMi cohorts for industry engagement and campus sessions in Malaysia." />
          <div className="callout reveal-up">
            <strong>Who travels.</strong> The study tour runs for the full-time MBA cohort, with a compact format for Executive MBA participants who cannot take an extended break from work.
            <Link href="/programs/mba" className="link-cta">See the MBA <Arrow /></Link>
          </div>
        </div>
      </section>

      <FaqBlock
        eyebrow="Study Tour"
        heading="Questions about<br /><em>the tour</em>"
        items={[
          { q: 'Is the study tour compulsory?', a: 'It is a scheduled part of the MBA programme in the third semester. Speak to the programme office about individual circumstances.' },
          { q: 'What does the tour cost cover?', a: 'Coverage varies by cohort and year. Contact the admissions office at info@asmibschool.com for the current cost structure and what the programme fee includes.' },
          { q: 'Do I need a passport before I enrol?', a: 'Not before enrolling, but you should begin the passport process early in your first year so visa processing is comfortable.' },
          { q: 'Can Executive MBA participants join?', a: 'Yes — a compact format is scheduled well in advance so working professionals can plan around it.' },
        ]}
      />

      <CtaBand heading="Your MBA includes a passport stamp" sub="Applications for the 2026 batch are open across MBA, BBA and Executive MBA." />
    </>
  );
}
