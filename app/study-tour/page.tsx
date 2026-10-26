import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, SecHead, CtaBand, FaqBlock, Arrow } from '@/components/Chrome';
import { PhotoGrid } from '@/components/Photo';
import { FeatureGrid } from '@/components/Icon';

const TOUR_2024_PHOTOS = [
  { caption: 'Sessions at INTI International University' },
  { caption: 'Royal Selangor Pewter Factory visit' },
  { caption: 'Barleys Chocolate Factory tour' },
  { caption: 'Cultural heritage fieldwork, Kuala Lumpur' },
  { caption: '2024 cohort on campus, INTI University' },
  { caption: 'Group activity, Malaysia 2024' },
];

const TOUR_2025_PHOTOS = [
  { caption: 'Global session at Universiti Malaya' },
  { caption: 'Session at Asia Pacific University (APU)' },
  { caption: 'Bufori Motor Car Company — manufacturing floor' },
  { caption: 'LiGNO Biotech — biotech innovation visit' },
  { caption: 'Petronas Twin Towers, Kuala Lumpur' },
  { caption: 'Putrajaya — government precinct visit' },
];

export const metadata: Metadata = {
  title: 'International Study Tours: Where Classrooms Go Global',
  description: 'At ASMi Business School, every cohort travels abroad. From INTI International University in 2024 to Universiti Malaya and APU in 2025 — industry immersion, factory visits and cultural fieldwork in Malaysia.',
};

export default function StudyTour() {
  return (
    <>
      <PageHero
        theme="ph-gold"
        eyebrow="Global Exposure"
        title="International Study Tours: <em>Where Classrooms Go Global</em>"
        sub="At ASMi Business School, learning goes beyond campus. Every cohort travels abroad for an immersion built around how business is actually done in another market — the part of the programme students talk about years later."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'International Study Tour' }]}
        meta={[
          { value: 'Malaysia', label: 'Destination' },
          { value: '2024 & 2025', label: 'Cohorts' },
          { value: 'Annual', label: 'Frequency' },
          { value: 'MBA · EMBA', label: 'Programmes' },
        ]}
        image="malaysia-tour.png"
      />

      <section className="sec">
        <div className="container">
          <SecHead
            eyebrow="2024 Cohort"
            heading="Malaysia — INTI International University"
            lead="In 2024, MBA students explored Malaysia, engaging with experts at INTI International University and touring Royal Selangor Pewter and Barleys Chocolate — insightful, inspiring and fun."
          />
          <FeatureGrid
            cols={4}
            items={[
              { icon: 'book', title: 'Sessions at INTI International University', desc: 'Engagement with industry experts and global academics on the INTI campus — the academic spine of the 2024 tour.' },
              { icon: 'brief', title: 'Royal Selangor Pewter Factory', desc: 'A working manufacturing floor: craft production, quality systems and how a heritage brand scales globally.' },
              { icon: 'spark', title: 'Barleys Chocolate Factory', desc: 'Food manufacturing end to end — supply chain, process control and brand storytelling in one visit.' },
              { icon: 'globe', title: 'Cultural Heritage Fieldwork', desc: 'Structured visits to heritage sites, reading a market through its culture rather than its spreadsheets.' },
            ]}
          />
          <PhotoGrid items={TOUR_2024_PHOTOS} />
        </div>
      </section>

      <section className="sec sec-muted">
        <div className="container">
          <SecHead
            eyebrow="2025 Cohort"
            heading="Malaysia — Universiti Malaya & APU"
            lead="In 2025, the MBA 2nd-year cohort experienced Malaysia through global sessions at Universiti Malaya and APU, luxury insights at Bufori Motor Car Company, biotech innovation at LiGNO Biotech, and landmark visits to the Petronas Twin Towers and Putrajaya."
          />
          <FeatureGrid
            cols={4}
            items={[
              { icon: 'book', title: 'Universiti Malaya & APU', desc: 'Global academic sessions at two of Malaysia\'s leading institutions — Universiti Malaya and Asia Pacific University.' },
              { icon: 'brief', title: 'Bufori Motor Car Company', desc: 'Luxury automotive manufacturing: bespoke engineering, brand exclusivity strategy, and artisan production models.' },
              { icon: 'spark', title: 'LiGNO Biotech', desc: 'Biotech innovation on the ground — sustainable materials science, green chemistry, and startup-scale manufacturing.' },
              { icon: 'globe', title: 'Petronas Twin Towers & Putrajaya', desc: 'Landmark visits connecting business education to Malaysia\'s iconic economic and government infrastructure.' },
            ]}
          />
          <PhotoGrid items={TOUR_2025_PHOTOS} />
        </div>
      </section>

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
          <SecHead eyebrow="Partners" heading="Our University Partners" lead="ASMi has partnered with leading Malaysian institutions — INTI International University (2024) and Universiti Malaya & APU (2025) — hosting cohorts for global industry engagement and campus sessions." />
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
