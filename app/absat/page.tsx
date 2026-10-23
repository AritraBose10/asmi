import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';
import {
  ABSAT, PUBLISHED, HERO_STATS, MBA_SPECIALISATIONS, DATES, ELIGIBILITY, MERIT_WEIGHTS,
  PATTERN, PATTERN_TOTALS, PATTERN_NOTES, SYLLABUS, FEES, APPLY_STEPS, TEST_MODES,
  CENTRES, DOWNLOADS, NOTICES, FAQS, TBA, formatDate, attemptDates,
} from '@/data/absat';
import { Arrow } from '@/components/Chrome';
import Icon from '@/components/Icon';
import AbsatForm from '@/components/AbsatForm';
import AbsatSectionNav from '@/components/AbsatSectionNav';

const TITLE = 'ABSAT 2027 – ASMi Business School MBA Entrance Test | Dates, Syllabus, Registration';
const DESC =
  "ABSAT 2027 is ASMi Business School's MBA entrance test. Check exam dates, eligibility, pattern, syllabus, fees and test centres, and register online for the 2027–29 batch.";

export const metadata: Metadata = {
  // absolute: the spec's exact title, not the site-wide '%s | ASMi' template
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: ABSAT.canonical },
  // noindex until every value in data/absat.ts is confirmed and PUBLISHED flips.
  robots: PUBLISHED
    ? { index: true, follow: true, 'max-image-preview': 'large' }
    : { index: false, follow: true },
  openGraph: {
    type: 'website',
    title: 'ABSAT 2027 – MBA Entrance Test | ASMi Business School',
    description: 'One test, two attempts, best score counts. Register for ABSAT 2027.',
    url: ABSAT.canonical,
    siteName: 'ASMi Business School',
    images: [{ url: '/assets/campus-life.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

/** Renders a date as <time> when known, and as "To be announced" when not. */
function DateCell({ iso }: { iso: string | null }) {
  if (!iso) return <span className="tba">{TBA}</span>;
  return <time dateTime={iso}>{formatDate(iso)}</time>;
}

function jsonLd() {
  const { one, two } = attemptDates();
  const org = {
    '@type': 'CollegeOrUniversity',
    '@id': 'https://asmibschool.com/#organization',
    name: 'ASMi Business School',
    url: 'https://asmibschool.com/',
    logo: 'https://asmibschool.com/assets/logo-black.png',
    telephone: SITE.phoneAlt,
    email: ABSAT.helpdeskEmail ?? SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Godrej Genesis, 15th Floor, Block EP & GP, Sector V, Salt Lake',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      postalCode: '700091',
      addressCountry: 'IN',
    },
    parentOrganization: {
      '@type': 'CollegeOrUniversity',
      name: 'Techno India University, West Bengal',
    },
  };

  const course = {
    '@type': 'Course',
    name: 'Master of Business Administration (MBA)',
    description:
      'Two-year full-time MBA at ASMi Business School, Kolkata. Admission through ABSAT or a valid national entrance test score.',
    provider: { '@id': 'https://asmibschool.com/#organization' },
    educationalCredentialAwarded: 'MBA',
    timeRequired: 'P2Y',
    url: 'https://asmibschool.com/programs/mba',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'full-time',
      courseWorkload: 'P2Y',
    },
  };

  // Events are emitted only once real dates exist (spec §1.4).
  const events = [
    { name: 'ABSAT 2027 — Attempt 1', date: one },
    { name: 'ABSAT 2027 — Attempt 2', date: two },
  ]
    .filter((e) => e.date)
    .map((e) => ({
      '@type': 'Event',
      name: e.name,
      startDate: e.date,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
      organizer: { '@id': 'https://asmibschool.com/#organization' },
      location: [
        { '@type': 'VirtualLocation', url: ABSAT.canonical },
        {
          '@type': 'Place',
          name: 'ABSAT test centres',
          address: { '@type': 'PostalAddress', addressLocality: 'Kolkata', addressCountry: 'IN' },
        },
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        url: ABSAT.canonical,
        availability: 'https://schema.org/InStock',
      },
    }));

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://asmibschool.com/' },
      { '@type': 'ListItem', position: 2, name: 'Programmes', item: 'https://asmibschool.com/programs' },
      { '@type': 'ListItem', position: 3, name: 'ABSAT 2027', item: ABSAT.canonical },
    ],
  };

  const faq = {
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return { '@context': 'https://schema.org', '@graph': [org, course, ...events, breadcrumb, faq] };
}

export default function AbsatPage() {
  const helpdeskEmail = ABSAT.helpdeskEmail ?? SITE.email;
  const registrationTarget = ABSAT.portalSignupUrl ?? '#register';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />

      {/* Notice strip + hero together fill the first viewport */}
      <div className="absat-top">
      {/* ── §2.3 Notice strip ── */}
      <aside className="absat-latest" id="latest" aria-label="Latest ABSAT notice">
        <div className="container absat-latest-inner">
          <span className="absat-latest-tag">Latest</span>
          <p>
            ABSAT 2027 registration dates are being finalised. Registered candidates are notified by
            email and SMS as soon as the window opens.
          </p>
          <a href="#notices" className="absat-latest-link" data-cta="absat_all_notices">
            All notices <Arrow size={14} />
          </a>
        </div>
      </aside>

      {/* ── §2.4 Hero ── */}
      <section className="page-hero ph-gold absat-hero" id="hero" aria-labelledby="absat-h1">
        <div className="ph-media">
          <img src="/assets/campus-life.png" alt="" aria-hidden="true" />
          <div className="ph-media-shade" />
        </div>
        <div className="ph-grain" aria-hidden="true" />
        <div className="container ph-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span aria-hidden="true">/</span>
            <Link href="/programs">Programmes</Link> <span aria-hidden="true">/</span>
            <span aria-current="page">ABSAT 2027</span>
          </nav>

          <div className="absat-hero-grid">
            <div className="ph-inner">
              <p className="ph-eyebrow">MBA Entrance Test · {ABSAT.batch} Batch</p>
              <h1 className="ph-title" id="absat-h1">
                <span className="absat-h1-mark">ABSAT 2027</span>{' '}
                One test. Your route to the <em>ASMi MBA</em>.
              </h1>
              <p className="ph-sub">
                ABSAT is the entrance test for admission to the full-time, two-year MBA at ASMi
                Business School, Kolkata. Take it online from home or at a test centre, attempt it up
                to twice, and the better score counts.
              </p>
              <div className="ph-actions">
                <a href={registrationTarget} className="btn-cta-primary" data-cta="absat_register_hero">
                  Register for ABSAT 2027 <Arrow />
                </a>
                <a href="#downloads" className="btn-ghost-light" data-cta="absat_bulletin_hero">
                  Information Bulletin
                </a>
              </div>

              <dl className="absat-stats">
                {HERO_STATS.map((s) => (
                  <div className="absat-stat" key={s.label}>
                    <dt className="absat-stat-label">{s.label}</dt>
                    <dd className="absat-stat-value">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* ── §2.5 Registration card ── */}
            <div className="absat-reg-card reveal-up" id="register">
              <h2>Candidate Registration</h2>
              <p className="absat-reg-help">
                New candidates create an account first. Your ABSAT ID will be sent to your registered
                email and mobile number.
              </p>
              <AbsatForm />
              {ABSAT.portalLoginUrl && (
                <p className="absat-reg-login">
                  Already registered?{' '}
                  <a href={ABSAT.portalLoginUrl} data-cta="absat_login">Log in with your ABSAT ID</a>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      </div>

      <AbsatSectionNav />

      {/* ── §2.6 About ── */}
      <section className="sec" id="about" aria-labelledby="absat-about-h">
        <div className="container">
          <div className="sec-head reveal-up">
            <p className="section-eyebrow">About ABSAT</p>
            <h2 className="sec-heading" id="absat-about-h" data-text-reveal>
              A standardised measure of<br />managerial aptitude
            </h2>
          </div>

          <div className="absat-about-grid">
            <div className="absat-about-copy reveal-up">
              <p className="sec-lead">
                The ASMi Business School Assessment Test (ABSAT) is a computer-based test of verbal,
                quantitative, reasoning and business-awareness skills. It is conducted by ASMi
                Business School, Kolkata — an AICTE-approved institution and part of Techno India
                University, West Bengal.
              </p>
              <p className="sec-lead">
                ABSAT scores are used to shortlist candidates for the Written Ability Test and
                Personal Interview stage of MBA admissions. Candidates with valid scores in CAT, XAT,
                MAT, CMAT, ATMA or GMAT may also apply directly; ABSAT gives every applicant a common,
                widely accessible route.
              </p>
            </div>

            <div className="absat-prog-card reveal-up" data-delay={100}>
              <h3>ABSAT 2027 is the admission test for</h3>
              <Link href="/programs/mba" className="absat-prog-link" data-cta="absat_to_mba">
                <strong>Master of Business Administration (MBA)</strong>
                <span>2 years, full-time</span>
                <Arrow size={18} />
              </Link>
              <p className="absat-prog-meta">
                Degree awarded by Techno India University, West Bengal · Includes an International
                Study Tour with INTI International University, Malaysia
              </p>
              <ul className="pill-row tight absat-spec-list">
                {MBA_SPECIALISATIONS.map((s) => <li className="pill" key={s}>{s}</li>)}
              </ul>
              <p className="absat-prog-foot">
                Intake: {ABSAT.seats ? `${ABSAT.seats} seats` : <span className="tba">{TBA}</span>} ·
                Campus: Godrej Genesis, Sector V, Salt Lake, Kolkata
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── §2.7 Important dates ── */}
      <section className="sec sec-dark" id="dates" aria-labelledby="absat-dates-h">
        <div className="container">
          <div className="sec-head reveal-up">
            <p className="section-eyebrow">Schedule</p>
            <h2 className="sec-heading" id="absat-dates-h" data-text-reveal>
              Important <em>dates</em>
            </h2>
            <p className="sec-lead">
              Dates for the {ABSAT.batch} cycle are being finalised with the examination partner.
              This table updates as each one is confirmed.
            </p>
          </div>

          <div className="table-wrap reveal-up" tabIndex={0} role="region" aria-label="ABSAT 2027 important dates">
            <table className="data-table">
              <caption>ABSAT 2027 important dates</caption>
              <thead>
                <tr>
                  <th scope="col">Event</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {DATES.map((d) => (
                  <tr key={d.event}>
                    <td><strong>{d.event}</strong></td>
                    <td><DateCell iso={d.date} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="sb-note">
            All dates are subject to change. Official updates are posted under{' '}
            <a href="#notices">Notices</a> and sent to registered candidates.
          </p>
        </div>
      </section>

      {/* ── §2.8 Eligibility and selection ── */}
      <section className="sec" id="eligibility" aria-labelledby="absat-elig-h">
        <div className="container">
          <div className="sec-head reveal-up">
            <p className="section-eyebrow">Who Can Apply</p>
            <h2 className="sec-heading" id="absat-elig-h" data-text-reveal>Eligibility</h2>
          </div>

          <div className="duo-grid">
            <div className="duo-card reveal-up">
              <h3>Academic eligibility</h3>
              <ul className="tick-list">
                {ELIGIBILITY.map((e) => <li key={e.slice(0, 24)}>{e}</li>)}
              </ul>
              <p className="absat-note">
                Provisional admissions must be regularised by submitting the degree and marksheets by{' '}
                {ABSAT.documentDeadline
                  ? <time dateTime={ABSAT.documentDeadline}>{formatDate(ABSAT.documentDeadline)}</time>
                  : <span className="tba">a date to be announced</span>}.
              </p>
            </div>

            <div className="duo-card reveal-up" data-delay={100}>
              <h3>Selection process</h3>
              <ol className="num-list">
                <li><strong>ABSAT score</strong> — or a valid national test score — determines the shortlist.</li>
                <li><strong>Written Ability Test and Personal Interview</strong>, on campus or online.</li>
                <li>
                  <strong>Final merit</strong> combines the following, with weights published before
                  the interview stage:
                  <ul className="pill-row tight absat-merit">
                    {MERIT_WEIGHTS.map((m) => (
                      <li className="pill" key={m.component}>
                        {m.component}{m.weight !== null ? ` ${m.weight}%` : ''}
                      </li>
                    ))}
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── §2.9 Test pattern ── */}
      <section className="sec sec-muted" id="pattern" aria-labelledby="absat-pattern-h">
        <div className="container">
          <div className="sec-head reveal-up">
            <p className="section-eyebrow">The Test</p>
            <h2 className="sec-heading" id="absat-pattern-h" data-text-reveal>Test pattern</h2>
            <p className="sec-lead">
              Computer-based test in English · Multiple-choice questions with four options · Sections
              may be attempted in any order within the overall time.
            </p>
          </div>

          <div className="absat-duration reveal-up">
            <span className="absat-duration-label">Duration</span>
            <span className="absat-duration-value">{PATTERN_TOTALS.duration}</span>
          </div>

          <div className="table-wrap reveal-up" tabIndex={0} role="region" aria-label="ABSAT 2027 section-wise pattern">
            <table className="data-table">
              <caption>ABSAT 2027 section-wise pattern</caption>
              <thead>
                <tr>
                  <th scope="col">Section</th>
                  <th scope="col">Questions</th>
                  <th scope="col">Marks</th>
                </tr>
              </thead>
              <tbody>
                {PATTERN.map((r) => (
                  <tr key={r.section}>
                    <td><strong>{r.section}</strong></td>
                    <td>{r.questions}</td>
                    <td>{r.marks}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Total</th>
                  <td><strong>{PATTERN_TOTALS.questions}</strong></td>
                  <td><strong>{PATTERN_TOTALS.marks}</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="feature-grid cols-4 absat-notes">
            {PATTERN_NOTES.map((n, i) => (
              <article className="feature-card reveal-up" data-delay={i * 70} key={n.title}>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── §2.10 Syllabus ── */}
      <section className="sec" id="syllabus" aria-labelledby="absat-syllabus-h">
        <div className="container">
          <div className="sec-head reveal-up">
            <p className="section-eyebrow">What To Prepare</p>
            <h2 className="sec-heading" id="absat-syllabus-h" data-text-reveal>Syllabus</h2>
          </div>
          <div className="feature-grid cols-4">
            {SYLLABUS.map((s, i) => (
              <article className="feature-card reveal-up" data-delay={i * 70} key={s.title}>
                <div className="feature-icon"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <div className="sec-foot reveal-up">
            <a href="#downloads" className="link-cta">Detailed syllabus and sample questions <Arrow /></a>
          </div>
        </div>
      </section>

      {/* ── §2.11 Fees + how to apply ── */}
      <section className="sec sec-dark" id="fees" aria-labelledby="absat-fees-h">
        <div className="container">
          <div className="absat-fees-grid">
            <div>
              <div className="sec-head reveal-up">
                <p className="section-eyebrow">Cost</p>
                <h2 className="sec-heading" id="absat-fees-h" data-text-reveal>Registration fee</h2>
              </div>
              <div className="table-wrap reveal-up" tabIndex={0} role="region" aria-label="ABSAT 2027 registration fee">
                <table className="data-table">
                  <caption>ABSAT 2027 registration fee</caption>
                  <thead>
                    <tr>
                      <th scope="col">Option</th>
                      <th scope="col">Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEES.map((f) => (
                      <tr key={f.option}>
                        <td><strong>{f.option}</strong></td>
                        <td>
                          {f.fee !== null
                            ? `₹${f.fee.toLocaleString('en-IN')} + GST`
                            : <span className="tba">{TBA}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="sb-note">
                Pay online by debit card, credit card, UPI or net banking. The fee is non-refundable
                and non-transferable. Test date and mode cannot be changed after payment.
              </p>
            </div>

            <div id="apply">
              <div className="sec-head reveal-up">
                <p className="section-eyebrow">Process</p>
                <h2 className="sec-heading" data-text-reveal>How to apply</h2>
              </div>
              <ol className="absat-steps">
                {APPLY_STEPS.map((s, i) => (
                  <li className="absat-step reveal-up" data-delay={i * 60} key={s.title}>
                    <span className="absat-step-num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{s.title}</strong>
                      <span>{s.body}</span>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="sec-foot reveal-up">
                <a href={registrationTarget} className="btn-cta-primary" data-cta="absat_register_apply">
                  Start registration <Arrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── §2.12 Test modes and centres ── */}
      <section className="sec" id="centres" aria-labelledby="absat-centres-h">
        <div className="container">
          <div className="sec-head reveal-up">
            <p className="section-eyebrow">Where You Test</p>
            <h2 className="sec-heading" id="absat-centres-h" data-text-reveal>
              Test modes and <em>centres</em>
            </h2>
          </div>

          <div className="duo-grid">
            {TEST_MODES.map((m, i) => (
              <article className="duo-card reveal-up" data-delay={i * 100} key={m.title}>
                <div className="feature-icon"><Icon name={m.icon} /></div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>

          <h3 className="absat-city-head reveal-up">Centre cities</h3>
          <ul className="pill-row absat-cities reveal-up">
            {CENTRES.map((c) => <li className="pill" key={c}>{c}</li>)}
          </ul>
          <p className="sb-note">
            Centre allotment is subject to availability; the final venue is printed on your admit card.
          </p>
        </div>
      </section>

      {/* ── §2.13 Downloads + notices ── */}
      <section className="sec sec-muted" id="downloads" aria-labelledby="absat-downloads-h">
        <div className="container">
          <div className="absat-dl-grid">
            <div>
              <div className="sec-head reveal-up">
                <p className="section-eyebrow">Resources</p>
                <h2 className="sec-heading" id="absat-downloads-h" data-text-reveal>Downloads</h2>
              </div>
              <ul className="absat-downloads">
                {DOWNLOADS.map((d, i) => (
                  <li className="absat-download reveal-up" data-delay={i * 50} key={d.title}>
                    {d.href ? (
                      <a href={d.href} data-cta="absat_download">
                        <span className="absat-dl-title">{d.title}</span>
                        <span className="absat-dl-meta">
                          {d.kind}{d.size ? ` · ${d.size}` : ''} <Arrow size={14} />
                        </span>
                      </a>
                    ) : (
                      <div className="absat-dl-pending">
                        <span className="absat-dl-title">{d.title}</span>
                        <span className="absat-dl-meta tba">{d.note ?? 'Available soon'}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div id="notices">
              <div className="sec-head reveal-up">
                <p className="section-eyebrow">Updates</p>
                <h2 className="sec-heading" data-text-reveal>Notices</h2>
              </div>
              <ol className="absat-notices">
                {NOTICES.map((n, i) => (
                  <li className="absat-notice reveal-up" data-delay={i * 60} key={n.text}>
                    {n.date
                      ? <time dateTime={n.date}>{formatDate(n.date)}</time>
                      : <span className="tba">Date to be announced</span>}
                    <p>{n.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── §2.14 FAQ ── */}
      <section className="sec sec-dark" id="faq" aria-labelledby="absat-faq-h">
        <div className="container narrow">
          <div className="sec-head reveal-up">
            <p className="section-eyebrow">Answers</p>
            <h2 className="sec-heading" id="absat-faq-h" data-text-reveal>
              Frequently asked <em>questions</em>
            </h2>
          </div>
          <div className="absat-faq reveal-up">
            {FAQS.map((f) => (
              <details className="absat-faq-item" key={f.q}>
                <summary>
                  <span>{f.q}</span>
                  <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 10H15M10 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </summary>
                <div className="absat-faq-a"><p>{f.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── §2.15 Contact ── */}
      <section className="sec" id="contact" aria-labelledby="absat-contact-h">
        <div className="container">
          <div className="absat-contact">
            <div className="reveal-up">
              <h2 className="sec-heading" id="absat-contact-h">ABSAT Helpdesk</h2>
              <ul className="absat-contact-list">
                <li>
                  <span>Email</span>
                  <a href={`mailto:${helpdeskEmail}`}>{helpdeskEmail}</a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href={`tel:${ABSAT.helpdeskPhone.replace(/\s/g, '')}`}>{ABSAT.helpdeskPhone}</a>
                </li>
                <li>
                  <span>Hours</span>
                  <p>{ABSAT.helpdeskHours}</p>
                </li>
              </ul>
            </div>

            <div className="reveal-up" data-delay={100}>
              <h3>ASMi Business School</h3>
              <address className="absat-address">
                Godrej Genesis, 15th Floor, Block EP &amp; GP,<br />
                Sector V, Salt Lake, Kolkata 700091,<br />
                West Bengal
              </address>
              <div className="absat-quick">
                <a href={ABSAT.mbaAdmissionsUrl} target="_blank" rel="noopener">MBA admissions</a>
                <Link href="/programs/mba">MBA programme</Link>
                <a href="#faq">ABSAT FAQs</a>
                {ABSAT.grievanceUrl && <a href={ABSAT.grievanceUrl}>Grievance redressal</a>}
                {ABSAT.privacyPolicyUrl && <a href={ABSAT.privacyPolicyUrl}>Privacy policy</a>}
              </div>
              <p className="absat-legal">
                &copy; {new Date().getFullYear()} ASMi Business School, Kolkata. ABSAT is conducted by
                ASMi Business School. A Techno India Group institution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
