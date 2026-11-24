import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COURSES, COURSE_FACTS, getCourse } from '@/data/courses';
import { SITE } from '@/data/site';
import { PageHero, SecHead, CtaBand, Arrow, QuickFacts, TickList } from '@/components/Chrome';

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) return {};
  return { title: `${c.name} — ${c.tagline} | 3-Month Certificate Course in Kolkata`, description: c.summary };
}

const enquireHref = (name: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(`Enquiry: ${name} certificate course`)}`;

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  const others = COURSES.filter((c) => c.slug !== course.slug);

  return (
    <>
      <PageHero
        theme="ph-deep"
        eyebrow="Certificate Course · 3 Months"
        title={course.titleHtml}
        sub={course.intro[0]}
        crumbs={[{ href: '/', label: 'Home' }, { href: '/programs#certificate-courses', label: 'Certificate Courses' }, { label: course.code }]}
        meta={[
          { value: '3 Months', label: 'Duration' },
          { value: 'Physical', label: 'Classes' },
          { value: 'Limited', label: 'Seats' },
          { value: '5', label: 'Modules' },
        ]}
        actions={
          <>
            <a href={enquireHref(course.name)} className="btn-cta-primary">Enquire Now <Arrow /></a>
            <a href="#modules" className="btn-ghost-light">See the modules</a>
          </>
        }
      />

      <section className="sec sec-tight">
        <div className="container">
          <QuickFacts facts={[...COURSE_FACTS, { label: 'Credential', value: course.certification }]} />
        </div>
      </section>

      {course.intro.length > 1 && (
        <section className="sec">
          <div className="container">
            <div className="prose">
              {course.intro.slice(1).map((p) => <p key={p} className="lede">{p}</p>)}
            </div>
          </div>
        </section>
      )}

      <section className="sec sec-dark" id="modules">
        <div className="container">
          <SecHead eyebrow="Program Modules" heading="Five modules,<br /><em>three months</em>" />
          <div className="steps-flow steps-5">
            {course.modules.map((m, i) => (
              <div className="step reveal-up" data-delay={i * 60} key={m}>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="step-label">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="duo-grid">
            <article className="duo-card reveal-up">
              <p className="section-eyebrow">Why Choose This Course</p>
              <h3>What you get</h3>
              <TickList items={course.why} />
            </article>
            <article className="duo-card reveal-up" data-delay={100}>
              <p className="section-eyebrow">Outcomes</p>
              <h3>What you leave with</h3>
              <TickList items={course.outcomes} />
            </article>
          </div>
        </div>
      </section>

      <section className="sec sec-muted">
        <div className="container">
          <SecHead eyebrow="Who It’s For" heading="Students and<br /><em>working professionals</em>" />
          <div className="duo-grid">
            <article className="duo-card reveal-up">
              <p className="section-eyebrow">For Students</p>
              <h3>Internships &amp; placements</h3>
              <TickList items={course.internships} />
            </article>
            <article className="duo-card reveal-up" data-delay={100}>
              <p className="section-eyebrow">For Working Professionals</p>
              <h3>Career progression</h3>
              <TickList items={course.progression} />
            </article>
          </div>
          <div className="callout reveal-up">
            <strong>Course fee.</strong> Fees are shared on enquiry. Write to{' '}
            <a href={enquireHref(course.name)}>{SITE.email}</a> or call {SITE.phone}.
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SecHead eyebrow="Other Certificate Courses" heading="Also three months" />
          <div className="duo-grid">
            {others.map((c, i) => (
              <Link key={c.slug} href={`/courses/${c.slug}`} className="spec-card reveal-up" data-delay={i * 80}>
                <span className="spec-num">{c.code}</span>
                <h3>{c.tagline}</h3>
                <p>{c.summary}</p>
                <span className="link-cta">View course <Arrow size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Limited Seats · Physical Classes"
        heading={`Enquire about ${course.name}`}
        sub="Tell us whether you are a student or a working professional, and we will share the next batch dates and fees."
        primaryLabel="Enquire Now"
        primaryHref={enquireHref(course.name)}
      />
    </>
  );
}
