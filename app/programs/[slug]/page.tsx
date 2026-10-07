import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROGRAMS, getProgram, SPECIALIZATIONS } from '@/data/programs';
import { getPerson } from '@/data/people';
import { SITE, PLACEMENT_STATS, RECRUITERS } from '@/data/site';
import {
  PageHero, SecHead, CtaBand, FaqBlock, Arrow, Pills, StatBand, Ladder, QuickFacts, TickList,
} from '@/components/Chrome';
import { FeatureGrid } from '@/components/Icon';

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) return {};
  return { title: `${p.name} in Kolkata`, description: p.dek };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const faculty = program.facultyPicks.map(getPerson).filter(Boolean);

  return (
    <>
      <PageHero
        theme={program.heroTheme}
        eyebrow={program.eyebrow}
        title={program.titleHtml}
        sub={program.dek}
        crumbs={[{ href: '/', label: 'Home' }, { href: '/programs', label: 'Programmes' }, { label: program.code }]}
        meta={program.meta}
        image={program.image}
        actions={
          <>
            <a href={SITE.applyUrl} target="_blank" rel="noopener" className="btn-cta-primary">
              Apply for Batch 2026 <Arrow />
            </a>
            <a href="#curriculum" className="btn-ghost-light">See the curriculum</a>
          </>
        }
      />

      <section className="sec sec-tight">
        <div className="container">
          <QuickFacts facts={program.facts} />
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SecHead
            eyebrow="Why this programme"
            heading={
              program.slug === 'mba'
                ? 'Built for the first ten years<br />of your career, not the first job'
                : program.slug === 'bba'
                ? 'An undergraduate degree<br />that graduates job-ready'
                : 'A room where everyone<br />already carries responsibility'
            }
            lead={
              program.slug === 'mba'
                ? 'Every element of the programme is designed around one question: what will make you useful in a room full of decision-makers?'
                : program.slug === 'bba'
                ? 'Most BBAs teach management theory and hope analytics arrives later. We inverted it.'
                : 'The EMBA cohort is deliberately senior. The case discussion is worth as much as the case itself.'
            }
          />
          <FeatureGrid items={program.features} cols={program.features.length === 4 ? 4 : 3} />
        </div>
      </section>

      {program.slug === 'mba' && (
        <section className="sec sec-muted" id="specializations">
          <div className="container">
            <SecHead
              eyebrow="Specializations"
              heading="Six tracks. Choose at<br />the end of your first year."
              lead="You spend the first two semesters on the common core, then specialise once you know where your strengths actually are."
            />
            <div className="spec-grid">
              {SPECIALIZATIONS.map((s, i) => (
                <Link key={s.slug} href={`/specializations/${s.slug}`} className="spec-card reveal-up" data-delay={i * 60}>
                  <span className="spec-num">{s.num}</span>
                  <h3>{s.name}</h3>
                  <span className="spec-kicker">{s.kicker}</span>
                  <p>{s.summary}</p>
                  <Pills items={s.tags} tight />
                  <span className="link-cta" style={{ marginTop: 16 }}>View track <Arrow size={14} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sec sec-dark" id="curriculum">
        <div className="container">
          <SecHead
            eyebrow="Curriculum"
            heading={
              program.slug === 'bba'
                ? 'Year by year,<br /><em>skill by skill</em>'
                : program.slug === 'emba' || program.slug === 'executive-mba'
                ? 'Built around the fact<br /><em>that you have a job</em>'
                : 'Four semesters,<br /><em>one trajectory</em>'
            }
            lead="The core builds the manager. The electives build the specialist. The projects prove both."
          />
          <Ladder steps={program.ladder} label={program.ladderLabel} />
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SecHead
            eyebrow="Faculty"
            heading="The people in front of the room"
            lead="IIT and IIM alumni, CXOs and industry veterans — 13 faculty and 12 industry mentors across the school."
          />
          <div className="fac-mini-grid">
            {faculty.map((f, i) => (
              <Link key={f!.slug} href={`/faculty/${f!.slug}`} className="fac-mini light reveal-up" data-delay={i * 70}>
                <div className="fac-mini-mono">{f!.mono}</div>
                <h3>{f!.name}</h3>
                <span className="fac-mini-role">{f!.role}</span>
                <p>{f!.short}</p>
              </Link>
            ))}
          </div>
          <div className="sec-foot reveal-up">
            <Link href="/faculty" className="link-cta">See all faculty &amp; mentors <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="sec sec-muted">
        <div className="container">
          <SecHead
            eyebrow="Placements"
            heading="Where our graduates land"
            lead={`Figures from the ${PLACEMENT_STATS.batch} graduating batch, verified by the ASMi Placement Cell.`}
          />
          <StatBand
            items={[
              { value: PLACEMENT_STATS.highest, label: 'Highest Package' },
              { value: PLACEMENT_STATS.average, label: 'Average Package' },
              { value: PLACEMENT_STATS.median, label: 'Median Package' },
              { value: '12+', label: 'Active Recruiters' },
            ]}
          />
          <Pills items={RECRUITERS} />
          <div className="sec-foot reveal-up">
            <Link href="/placements" className="link-cta">Read the full placement report <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="split-feature">
            <div className="split-media reveal-up">
              <img src="/assets/malaysia-tour.png" alt="International study tour, Malaysia" loading="lazy" />
            </div>
            <div className="split-body reveal-up" data-delay={100}>
              <p className="section-eyebrow">Global Exposure</p>
              <h2 className="sec-heading">Ten days that change<br />how you read a market</h2>
              <p className="sec-lead">
                Every cohort travels to Malaysia with INTI International University — industry sessions, factory floors
                and cultural fieldwork that no case study reproduces.
              </p>
              <TickList items={[
                'Industry sessions at INTI International University',
                'Royal Selangor pewter factory tour',
                'Barleys Chocolate factory visit',
                'Cultural heritage site fieldwork',
              ]} />
              <Link href="/study-tour" className="link-cta">About the study tour <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="container">
          <SecHead
            eyebrow="Admissions"
            heading="How to apply"
            lead="Six steps from application to first day of class. Applications for the 2026 batch are open."
          />
          <div className="steps-flow">
            {['Fill up application', 'Upload your documents', 'Authentication', 'Interview with our counsellor', 'Provisional offer letter', 'Programme begins'].map((s, i) => (
              <div className="step reveal-up" data-delay={i * 60} key={s}>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="step-label">{s}</span>
              </div>
            ))}
          </div>
          <div className="sec-foot reveal-up">
            <a href={SITE.applyUrl} target="_blank" rel="noopener" className="btn-cta-primary">
              Start your application <Arrow />
            </a>
          </div>
        </div>
      </section>

      <FaqBlock items={program.faq} />
      <CtaBand heading={program.ctaHeading} sub={program.ctaSub} />
    </>
  );
}
