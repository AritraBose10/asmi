'use client';

import { useEffect, useState } from 'react';
import { SECTION_NAV } from '@/data/absat';

/**
 * Sticky in-page section nav (spec §2.2) with scroll-spy, so the current
 * section is marked while reading. Falls back to plain anchor links if
 * IntersectionObserver is unavailable.
 */
export default function AbsatSectionNav() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const ids = SECTION_NAV.map((s) => s.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-120px 0px -65% 0px', threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="absat-subnav" aria-label="ABSAT 2027 sections">
      <div className="container absat-subnav-inner">
        <ul>
          {SECTION_NAV.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className={active === s.href.slice(1) ? 'is-current' : undefined}
                aria-current={active === s.href.slice(1) ? 'true' : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
