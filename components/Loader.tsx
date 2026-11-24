'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Branded page-transition loader.
 *
 * It does NOT run when the site first opens. It appears when a visitor clicks a link to another
 * page, stays up until that page has rendered (and for a short minimum so it never flashes), then
 * fades out. Reduced-motion users never see it.
 */
const MIN_VISIBLE_MS = 700; // never flash for less than this
const FAILSAFE_MS = 4000; // if the route never changes (cancelled/failed navigation), give up

export default function Loader() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);

  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Mutable state for the running transition; refs so the animation loop never goes stale.
  const startedAt = useRef(0);
  const pending = useRef(false); // a navigation is in flight
  const routeReady = useRef(false); // the new route has rendered
  const lastPath = useRef(pathname);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const finish = () => {
    if (!pending.current) return;
    pending.current = false;
    setExiting(true);
    document.body.classList.remove('is-loading');
    timers.current.push(
      window.setTimeout(() => {
        setShow(false);
        setExiting(false);
      }, 450)
    );
  };

  // Start the loader as soon as an in-site link to a different page is clicked.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
      let url: URL;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return; // external, mailto:, tel:
      if (url.pathname === window.location.pathname) return; // same page or just a #hash/?query
      if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/api')) return; // not client routes

      clearTimers();
      pending.current = true;
      routeReady.current = false;
      startedAt.current = performance.now();
      setExiting(false);
      setShow(true);
      document.body.classList.add('is-loading');
      timers.current.push(window.setTimeout(() => (routeReady.current = true), FAILSAFE_MS));
    };

    // Capture phase: Next's <Link> handles the click (and marks it as default-prevented) before a
    // bubbling listener would see it.
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      clearTimers();
      document.body.classList.remove('is-loading');
    };
  }, []);

  // The route changed: the destination page has rendered.
  useEffect(() => {
    if (pathname === lastPath.current) return;
    lastPath.current = pathname;
    if (pending.current) routeReady.current = true;
  }, [pathname]);

  // Drive the progress bar while the loader is up.
  useEffect(() => {
    if (!show) return;

    const cont = particlesRef.current;
    if (cont) {
      cont.textContent = '';
      for (let i = 0; i < 12; i++) {
        const p = document.createElement('span');
        p.className = 'loader-particle';
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${40 + Math.random() * 30}%`;
        p.style.animationDelay = `${Math.random() * 1.2}s`;
        p.style.animationDuration = `${1.6 + Math.random() * 1.6}s`;
        cont.appendChild(p);
      }
    }

    let progress = 0;
    let raf = 0;
    const tick = () => {
      // Creep toward 90% while waiting, then rush to 100% once the new page is ready.
      const target = routeReady.current ? 100 : 90;
      progress += (target - progress) * (routeReady.current ? 0.22 : 0.05);
      if (barRef.current) barRef.current.style.width = `${progress}%`;
      if (pctRef.current) pctRef.current.textContent = `${Math.round(progress)}%`;

      const longEnough = performance.now() - startedAt.current >= MIN_VISIBLE_MS;
      if (routeReady.current && longEnough && progress > 99) {
        finish();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // finish() only touches refs and setters, so it is safe to omit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  if (!show) return null;

  return (
    <div
      className={`loader-screen loader-nav${exiting ? ' loader-exit' : ''}`}
      id="loaderScreen"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="loader-bg-grid" />
      <div className="loader-orb loader-orb-1" />
      <div className="loader-orb loader-orb-2" />
      <div className="loader-orb loader-orb-3" />
      <div className="loader-morph" />
      <div className="loader-content">
        <div className="loader-logo-wrap">
          <img
            src="/assets/logo-white.png"
            alt="ASMi Business School · Techno India University"
            className="loader-logo-img"
            width={1014}
            height={170}
          />
        </div>
        <div className="loader-tagline">Where Leaders Are Made</div>
        <div className="loader-progress-wrap">
          <div className="loader-progress-track">
            <div className="loader-progress-bar" ref={barRef} />
          </div>
          <span className="loader-percent" ref={pctRef}>0%</span>
        </div>
        <div className="loader-particles" ref={particlesRef} />
      </div>
      <div className="loader-line loader-line-h" />
      <div className="loader-line loader-line-v" />
      <div className="loader-corners">
        <span className="lc lc-tl" />
        <span className="lc lc-tr" />
        <span className="lc lc-bl" />
        <span className="lc lc-br" />
      </div>
    </div>
  );
}
