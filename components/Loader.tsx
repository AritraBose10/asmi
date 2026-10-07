'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The landing page's branded preloader, ported from the original script.js.
 * Shows once per browser session — subsequent client-side navigations are
 * instant, so re-running it on every route would be noise rather than polish.
 */
export default function Loader() {
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let seen = true;
    try {
      seen = sessionStorage.getItem('asmi-loaded') === '1';
    } catch {
      seen = false; // private mode / blocked storage: just show it
    }
    if (seen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    document.body.classList.add('is-loading');

    // Particles
    const cont = particlesRef.current;
    if (cont) {
      for (let i = 0; i < 20; i++) {
        const p = document.createElement('span');
        p.className = 'loader-particle';
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${40 + Math.random() * 30}%`;
        p.style.animationDelay = `${Math.random() * 2}s`;
        p.style.animationDuration = `${2 + Math.random() * 2}s`;
        cont.appendChild(p);
      }
    }

    let progress = 0;
    let raf = 0;
    const timers: number[] = [];

    const tick = () => {
      const remaining = 100 - progress;
      const jump = Math.max(0.3, remaining * (0.02 + Math.random() * 0.04));
      progress = Math.min(progress + jump, 100);
      if (barRef.current) barRef.current.style.width = `${progress}%`;
      if (pctRef.current) pctRef.current.textContent = `${Math.round(progress)}%`;

      if (progress < 99.5) {
        raf = requestAnimationFrame(tick);
      } else {
        if (barRef.current) barRef.current.style.width = '100%';
        if (pctRef.current) pctRef.current.textContent = '100%';
        timers.push(
          window.setTimeout(() => {
            setExiting(true);
            document.body.classList.remove('is-loading');
            try {
              sessionStorage.setItem('asmi-loaded', '1');
            } catch {
              /* storage unavailable — the loader simply shows again next visit */
            }
            timers.push(window.setTimeout(() => setShow(false), 1000));
          }, 320)
        );
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      document.body.classList.remove('is-loading');
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className={`loader-screen${exiting ? ' loader-exit' : ''}`} id="loaderScreen">
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
