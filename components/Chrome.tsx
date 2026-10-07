import Link from 'next/link';
import { SITE } from '@/data/site';
import { PROGRAMS } from '@/data/programs';

export const Arrow = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Page hero ──────────────────────────────────────────────────────────────
export function PageHero({
  theme = 'ph-dark',
  eyebrow,
  title,
  sub,
  crumbs,
  meta,
  actions,
  image,
}: {
  theme?: string;
  eyebrow: string;
  title: string;
  sub: string;
  crumbs: { href?: string; label: string }[];
  meta?: { value: string; label: string }[];
  actions?: React.ReactNode;
  image?: string;
}) {
  return (
    <section className={`page-hero ${theme}`}>
      {image && (
        <div className="ph-media">
          <img src={`/assets/${image}`} alt="" aria-hidden="true" />
          <div className="ph-media-shade" />
        </div>
      )}
      <div className="ph-grain" aria-hidden="true" />
      <div className="container ph-container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={i} style={{ display: 'contents' }}>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
            </span>
          ))}
        </nav>
        <div className="ph-inner">
          <p className="ph-eyebrow">{eyebrow}</p>
          <h1 className="ph-title" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="ph-sub">{sub}</p>
          {actions && <div className="ph-actions">{actions}</div>}
          {meta && (
            <div className="ph-meta">
              {meta.map((m) => (
                <div className="ph-meta-item" key={m.label}>
                  <span className="ph-meta-val">{m.value}</span>
                  <span className="ph-meta-lbl">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Section header ─────────────────────────────────────────────────────────
export function SecHead({
  eyebrow,
  heading,
  lead,
  center = false,
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`sec-head reveal-up${center ? ' center' : ''}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="sec-heading" data-text-reveal dangerouslySetInnerHTML={{ __html: heading }} />
      {lead && <p className="sec-lead">{lead}</p>}
    </div>
  );
}

// ── CTA band ───────────────────────────────────────────────────────────────
export function CtaBand({
  heading,
  sub,
  primaryLabel = 'Start Your Application',
}: {
  heading: string;
  sub: string;
  primaryLabel?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-band-inner reveal-up">
          <div>
            <p className="cta-band-eyebrow">Admissions Open — Batch 2026</p>
            <h2 className="cta-band-heading">{heading}</h2>
            <p className="cta-band-sub">{sub}</p>
          </div>
          <div className="cta-band-actions">
            <a href={SITE.applyUrl} target="_blank" rel="noopener" className="btn-cta-primary">
              {primaryLabel} <Arrow />
            </a>
            <a href={`tel:${SITE.phone}`} className="btn-cta-secondary">Call {SITE.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ block ──────────────────────────────────────────────────────────────
export function FaqBlock({
  items,
  eyebrow = 'Got Questions?',
  heading = 'Frequently<br /><em>asked questions</em>',
}: {
  items: { q: string; a: string }[];
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-left reveal-left">
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 className="section-heading" dangerouslySetInnerHTML={{ __html: heading }} />
            <p className="faq-contact-note">Can&rsquo;t find your answer?</p>
            <a href={`mailto:${SITE.email}`} className="btn-outline-dark">Contact Us <Arrow /></a>
          </div>
          <div className="faq-right reveal-right">
            <div className="faq-list">
              {items.map((item) => (
                <div className="faq-item" key={item.q}>
                  <button className="faq-q">
                    <span>{item.q}</span>
                    <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10H15M10 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className="faq-a"><p>{item.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/assets/logo-white.png" alt="ASMi Business School · Techno India University" width={1014} height={170} />
            </div>
            <p>
              &ldquo;ASMI&rdquo; — Sanskrit for &ldquo;I am.&rdquo; Symbolizing self-belief, identity, and
              individual potential. Part of Techno India University, West Bengal.
            </p>
            <div className="footer-social">
              <a href={SITE.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="soc-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="soc-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="soc-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              {/* YouTube is omitted until a real channel URL is set in data/site.ts */}
              {SITE.social.youtube !== '#' && (
                <a href={SITE.social.youtube} target="_blank" rel="noopener" aria-label="YouTube" className="soc-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>
                </a>
              )}
            </div>
          </div>

          <div className="footer-col">
            <h5>Programmes</h5>
            {PROGRAMS.map((p) => (
              <Link key={p.slug} href={`/programs/${p.slug}`}>{p.name}</Link>
            ))}
            <Link href="/specializations">MBA Specializations</Link>
          </div>

          <div className="footer-col">
            <h5>Navigate</h5>
            <Link href="/faculty">Faculty &amp; Mentors</Link>
            <Link href="/placements">Placement Report</Link>
            <Link href="/events">Events</Link>
            <Link href="/study-tour">International Study Tour</Link>
            <Link href="/campus-life">Campus Life</Link>
            <Link href="/clubs">Student Clubs</Link>
          </div>

          <div className="footer-col">
            <h5>Community</h5>
            <Link href="/blog">Blog</Link>
            <Link href="/forum">Discussion Forum</Link>
            <Link href="/citations">Citations &amp; Recognition</Link>
            <Link href="/faq">FAQ</Link>
            <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 ASMi Business School. Part of Techno India University. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/citations">Citations</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/forum">Forum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Small shared pieces ────────────────────────────────────────────────────
export const Pills = ({ items, tight = false }: { items: string[]; tight?: boolean }) => (
  <div className={`pill-row${tight ? ' tight' : ''}`}>
    {items.map((p) => <span className="pill" key={p}>{p}</span>)}
  </div>
);

export const TickList = ({ items }: { items: string[] }) => (
  <ul className="tick-list">
    {items.map((b) => <li key={b} dangerouslySetInnerHTML={{ __html: b }} />)}
  </ul>
);

export function StatBand({ items, note }: { items: { value: string; label: string }[]; note?: string }) {
  return (
    <>
      <div className="stat-band">
        {items.map((s, i) => (
          <div className="sb-item reveal-up" data-delay={i * 70} key={s.label}>
            <span className="sb-num">{s.value}</span>
            <span className="sb-label">{s.label}</span>
          </div>
        ))}
      </div>
      {note && <p className="sb-note">{note}</p>}
    </>
  );
}

export function Ladder({ steps, label }: { steps: { term: string; title: string; desc: string; bullets: string[] }[]; label: string }) {
  return (
    <div className="ladder">
      {steps.map((s, i) => (
        <div className="ladder-item reveal-up" data-delay={i * 80} key={s.term}>
          <div className="ladder-marker"><span>{s.term}</span><em>{label}</em></div>
          <div className="ladder-body">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <TickList items={s.bullets} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function QuickFacts({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <div className="quick-facts reveal-up">
      <div className="qf-row">
        {facts.map((f) => (
          <div className="qf-item" key={f.label}>
            <span className="qf-label">{f.label}</span>
            <span className="qf-value">{f.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
