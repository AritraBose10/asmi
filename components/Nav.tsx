'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/data/site';
import { PROGRAMS } from '@/data/programs';

const PRIMARY = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Programmes' },
  { href: '/placements', label: 'Placements' },
  { href: '/faculty', label: 'Faculty & Mentors' },
  { href: '/campus-life', label: 'Campus Life' },
  { href: '/clubs', label: 'Student Clubs' },
  { href: '/events', label: 'Events' },
  { href: '/study-tour', label: 'Study Tour' },
];

const SECONDARY = [
  { href: '/absat', label: 'ABSAT 2027' },
  { href: '/blog', label: 'Blog' },
  { href: '/forum', label: 'Discussion Forum' },
  { href: '/citations', label: 'Citations' },
  { href: '/faq', label: 'FAQ' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll + Escape to close
  useEffect(() => {
    document.body.classList.toggle('menu-is-open', open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-is-open');
    };
  }, [open]);

  const isCurrent = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  let i = 0;
  const step = () => ({ ['--i' as string]: i++ }) as React.CSSProperties;

  return (
    <>
      <header className={`header${open ? ' menu-open' : ''}`} id="header">
        <div className="header-inner">
          <Link
            href="/"
            className="logo"
            aria-label="ASMi Business School — Techno India University, home"
          >
            <img
              src="/assets/logo-white.png"
              alt="ASMi Business School · Techno India University"
              className="logo-img logo-img-light"
              width={1014}
              height={170}
            />
            <img
              src="/assets/logo-black.png"
              alt=""
              aria-hidden="true"
              className="logo-img logo-img-dark"
              width={1014}
              height={170}
            />
          </Link>

          <div className="nav-right">
            <a href={SITE.applyUrl} target="_blank" rel="noopener" className="btn-nav-apply">
              Apply Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <span className="menu-label">{open ? 'Close' : 'Menu'}</span>
            <button
              className="menu-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        className={`menu-overlay${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        {...(!open ? { inert: '' as unknown as boolean } : {})}
      >
        <div className="menu-grain" aria-hidden="true" />
        <div className="menu-glow menu-glow-1" aria-hidden="true" />
        <div className="menu-glow menu-glow-2" aria-hidden="true" />

        <div className="menu-inner">
          <nav className="menu-primary" aria-label="Main">
            <p className="menu-section-label" style={step()}>The School</p>
            {PRIMARY.map((item, n) => (
              <Link
                key={item.href}
                href={item.href}
                className={`menu-link${isCurrent(item.href) ? ' is-current' : ''}`}
                style={step()}
              >
                <span className="menu-index">{String(n + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            ))}

            <p className="menu-section-label" style={step()}>Community</p>
            {SECONDARY.map((item, n) => (
              <Link
                key={item.href}
                href={item.href}
                className={`menu-link${isCurrent(item.href) ? ' is-current' : ''}`}
                style={step()}
              >
                <span className="menu-index">{String(PRIMARY.length + n + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="menu-secondary">
            <div className="menu-card" style={step()}>
              <span className="menu-card-label">Programmes</span>
              <p className="menu-card-title">Three ways in</p>
              <p>Full-time MBA with six specializations, a four-year BBA in Business Analytics, and a modular Executive MBA.</p>
              <div className="menu-sublinks">
                {PROGRAMS.map((p) => (
                  <Link key={p.slug} href={`/programs/${p.slug}`} className="menu-sublink">
                    {p.code}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/absat" className="menu-card" style={step()}>
              <span className="menu-card-label">Entrance Test</span>
              <p className="menu-card-title">ABSAT 2027</p>
              <p>One test, two attempts, best score counts — the route into the full-time MBA for the 2027–29 batch.</p>
            </Link>

            <Link href="/specializations" className="menu-card" style={step()}>
              <span className="menu-card-label">MBA Tracks</span>
              <p className="menu-card-title">Six specializations</p>
              <p>Marketing, Finance, HR, Technology, Entrepreneurship and Sustainability — each with its own electives and outcomes.</p>
            </Link>

            <a href={SITE.applyUrl} target="_blank" rel="noopener" className="menu-card" style={step()}>
              <span className="menu-card-label">Admissions Open</span>
              <p className="menu-card-title">Apply for Batch 2026</p>
              <p>Six steps from application to your first day of class.</p>
            </a>
          </div>
        </div>

        <div className="menu-foot">
          <div className="menu-contact" style={step()}>
            <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
            <a href={`tel:${SITE.phoneAlt.replace(/\s/g, '')}`}>{SITE.phoneAlt}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <div className="menu-social" style={step()}>
            <a href={SITE.social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href={SITE.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
