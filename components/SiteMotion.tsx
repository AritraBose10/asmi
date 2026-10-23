'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * The landing page's animation stack, ported from the original script.js and
 * re-armed on every route change so each page animates identically.
 *
 * Covers: scroll progress, header state, reveal-on-scroll, word-by-word text
 * reveal, counters, lazy image blur-up, stagger groups, parallax, FAQ accordion,
 * the custom cursor and magnetic card tilt.
 */
export default function SiteMotion() {
  const pathname = usePathname();

  // ── Per-route: observers and DOM-dependent behaviour ──────────────────────
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scroll to top on route change so the hero animation reads from the start
    window.scrollTo(0, 0);

    // ── Reveal on scroll ──
    const revealEls = document.querySelectorAll<HTMLElement>(
      '.reveal-up, .reveal-left, .reveal-right, .reveal-scale'
    );
    if (prefersReduced) {
      revealEls.forEach((el) => el.classList.add('in-view'));
    } else {
      const revealObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || '0', 10);
            window.setTimeout(() => el.classList.add('in-view'), delay);
            revealObs.unobserve(el);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );
      revealEls.forEach((el) => revealObs.observe(el));
      cleanups.push(() => revealObs.disconnect());
    }

    // ── Word-by-word text reveal ──
    const textEls = document.querySelectorAll<HTMLElement>('[data-text-reveal]');
    const wrapWords = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        if (!text.trim()) return;
        const frag = document.createDocumentFragment();
        text.split(/(\s+)/).forEach((word) => {
          if (/^\s+$/.test(word)) {
            frag.appendChild(document.createTextNode(word));
          } else if (word) {
            const wrap = document.createElement('span');
            wrap.className = 'word-wrap';
            const inner = document.createElement('span');
            inner.className = 'word-inner';
            inner.textContent = word;
            wrap.appendChild(inner);
            frag.appendChild(wrap);
          }
        });
        node.parentNode?.replaceChild(frag, node);
      } else if (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName !== 'BR') {
        Array.from(node.childNodes).forEach(wrapWords);
      }
    };
    textEls.forEach((el) => {
      if (el.dataset.textSplit === 'done') return;
      Array.from(el.childNodes).forEach(wrapWords);
      el.dataset.textSplit = 'done';
      el.querySelectorAll<HTMLElement>('.word-inner').forEach((w, i) => {
        w.style.transitionDelay = `${i * 0.06}s`;
      });
    });
    if (prefersReduced) {
      textEls.forEach((el) => el.classList.add('text-revealed'));
    } else {
      const textObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('text-revealed');
            textObs.unobserve(entry.target);
          });
        },
        { threshold: 0.2 }
      );
      textEls.forEach((el) => textObs.observe(el));
      cleanups.push(() => textObs.disconnect());
    }

    // ── Counters ──
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.target || '0');
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';
          const decimals = parseInt(el.dataset.decimals || '0', 10);
          const duration = 2200;
          const start = performance.now();
          const ease = (t: number) => 1 - Math.pow(1 - t, 4);

          if (prefersReduced) {
            el.textContent = prefix + target.toFixed(decimals) + suffix;
          } else {
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              el.textContent = prefix + (ease(p) * target).toFixed(decimals) + suffix;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
          counterObs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('[data-counter]').forEach((el) => counterObs.observe(el));
    cleanups.push(() => counterObs.disconnect());

    // ── Stagger groups ──
    document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((parent) => {
      Array.from(parent.children).forEach((child, i) => {
        (child as HTMLElement).style.setProperty('--stagger-delay', `${i * 0.08}s`);
      });
    });

    // ── Hero entrance ──
    if (!prefersReduced) {
      document
        .querySelectorAll<HTMLElement>('.hero-heading .line')
        .forEach((line, i) => {
          line.style.opacity = '0';
          line.style.transform = 'translateY(100%) rotateX(-40deg)';
          window.setTimeout(() => {
            line.style.transition =
              'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0) rotateX(0)';
          }, 200 + i * 180);
        });
      document
        .querySelectorAll<HTMLElement>('.hero-eyebrow, .hero-sub, .hero-actions')
        .forEach((el, i) => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(30px)';
          window.setTimeout(() => {
            el.style.transition =
              'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, 700 + i * 150);
        });
    }

    // ── Parallax ──
    const heroImg = document.getElementById('heroImg');
    const shapes = document.querySelectorAll<HTMLElement>('[data-parallax-speed]');
    if (!prefersReduced && (heroImg || shapes.length)) {
      let ticking = false;
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (heroImg && y < window.innerHeight * 1.2) {
            heroImg.style.transform = `translateY(${y * 0.28}px) scale(1.06)`;
          }
          shapes.forEach((s) => {
            const speed = parseFloat(s.dataset.parallaxSpeed || '0');
            s.style.transform = `translateY(${y * speed * -1}px)`;
          });
          ticking = false;
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onScroll));
    }

    // ── Lazy image blur-up ──
    document.querySelectorAll<HTMLImageElement>('img.lazy').forEach((img) => {
      const done = () => img.classList.add('loaded');
      if (img.complete) done();
      else img.addEventListener('load', done, { once: true });
    });

    // ── FAQ accordion ──
    const faqHandler = (e: Event) => {
      const btn = (e.target as HTMLElement).closest('.faq-q');
      if (!btn) return;
      const item = btn.closest('.faq-item');
      if (!item) return;
      const answer = item.querySelector<HTMLElement>('.faq-a');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach((el) => {
        el.classList.remove('open');
        const a = el.querySelector<HTMLElement>('.faq-a');
        if (a) a.style.maxHeight = '0';
      });
      if (!isOpen && answer) {
        item.classList.add('open');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    };
    document.addEventListener('click', faqHandler);
    cleanups.push(() => document.removeEventListener('click', faqHandler));

    // ── Magnetic card tilt ──
    if (!window.matchMedia('(hover: none)').matches && !prefersReduced) {
      const cards = document.querySelectorAll<HTMLElement>(
        '.pl-card, .mentor-card, .testi-card, .fac-card, .feature-card, .club-card, .event-card, .post-card, .spec-card'
      );
      cards.forEach((card) => {
        let rafId = 0;
        const onMove = (e: MouseEvent) => {
          if (rafId) cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const nx = (e.clientX - rect.left) / rect.width - 0.5;
            const ny = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `translateY(-5px) rotateX(${(-ny * 4).toFixed(2)}deg) rotateY(${(nx * 4).toFixed(2)}deg) scale(1.015)`;
          });
        };
        const onLeave = () => {
          if (rafId) cancelAnimationFrame(rafId);
          card.style.transition =
            'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease';
          card.style.transform = '';
          window.setTimeout(() => {
            card.style.transition = '';
          }, 520);
        };
        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);
        cleanups.push(() => {
          card.removeEventListener('mousemove', onMove);
          card.removeEventListener('mouseleave', onLeave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  // ── Once per session: header, scroll progress, cursor ─────────────────────
  useEffect(() => {
    const header = document.getElementById('header');
    const bar = document.getElementById('scrollProgress');

    const onScroll = () => {
      const y = window.scrollY;
      header?.classList.toggle('scrolled', y > 60);
      if (bar) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = `${h > 0 ? (y / h) * 100 : 0}%`;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Custom cursor — pointer devices only
    let cursorCleanup = () => {};
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const dot = document.getElementById('cursorDot');
      const ring = document.getElementById('cursorRing');
      if (dot && ring) {
        document.body.classList.add('has-custom-cursor');
        let mx = window.innerWidth / 2;
        let my = window.innerHeight / 2;
        let rx = mx;
        let ry = my;
        let raf = 0;

        // The trailing translate(-50%,-50%) re-applies the centring the CSS
        // declares; setting transform here would otherwise replace it and
        // position both elements by their top-left corner, which offsets the
        // dot from the ring by half the difference in their sizes.
        const onMove = (e: MouseEvent) => {
          mx = e.clientX;
          my = e.clientY;
          dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
        };
        const tick = () => {
          rx += (mx - rx) * 0.16;
          ry += (my - ry) * 0.16;
          ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
          raf = requestAnimationFrame(tick);
        };
        const over = (e: MouseEvent) => {
          if ((e.target as HTMLElement).closest('a, button, .faq-q, [role="button"]')) {
            document.body.classList.add('cursor-hover');
          }
        };
        const out = (e: MouseEvent) => {
          if ((e.target as HTMLElement).closest('a, button, .faq-q, [role="button"]')) {
            document.body.classList.remove('cursor-hover');
          }
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseover', over);
        document.addEventListener('mouseout', out);
        raf = requestAnimationFrame(tick);

        cursorCleanup = () => {
          cancelAnimationFrame(raf);
          document.removeEventListener('mousemove', onMove);
          document.removeEventListener('mouseover', over);
          document.removeEventListener('mouseout', out);
          document.body.classList.remove('has-custom-cursor');
        };
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      cursorCleanup();
    };
  }, []);

  return null;
}
