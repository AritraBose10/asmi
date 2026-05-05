/* ═══════════════════════════════════════
   ASMi Business School — script.js
   Masters Union–style interactions
   ═══════════════════════════════════════ */

/* ── CUSTOM CURSOR ── */
const initCursor = () => {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring || window.matchMedia('(hover:none)').matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
  });

  const lerp = (a, b, t) => a + (b - a) * t;
  const tick = () => {
    rx = lerp(rx, mx, 0.1);
    ry = lerp(ry, my, 0.1);
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(tick);
  };
  tick();

  const hoverEls = 'a, button, .adv-card, .prog-card, .fac-card, .mentor-card, .pl-card, .testi-card, .why-stat, .logo-pill';
  document.querySelectorAll(hoverEls).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
};

/* ── STICKY HEADER ── */
const initHeader = () => {
  const header = document.getElementById('header');
  if (!header) return;
  let ticking = false;

  const update = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
};

/* ── MOBILE NAV ── */
const initMobileNav = () => {
  const hamburger   = document.getElementById('hamburger');
  const mobileNav   = document.getElementById('mobileNav');
  const closeBtn    = document.getElementById('mobileNavClose');
  if (!hamburger || !mobileNav) return;

  const open  = () => { mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { mobileNav.classList.remove('open'); document.body.style.overflow = ''; };

  hamburger.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  mobileNav.querySelectorAll('.mobile-link').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
};

/* ── HERO HEADING ANIMATION ── */
const initHeroText = () => {
  const lines = document.querySelectorAll('.hero-heading .line');
  lines.forEach((line, i) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(48px)';
    setTimeout(() => {
      line.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
      line.style.opacity = '1';
      line.style.transform = 'translateY(0)';
    }, 200 + i * 160);
  });

  const els = document.querySelectorAll('.hero-eyebrow, .hero-sub, .hero-actions');
  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 700 + i * 120);
  });
};

/* ── PARALLAX HERO ── */
const initParallax = () => {
  const img = document.getElementById('heroImg');
  if (!img) return;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY < window.innerHeight * 1.2) {
          img.style.transform = `scale(1.08) translateY(${window.scrollY * 0.25}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
};

/* ── SCROLL REVEAL ── */
const initReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseFloat(el.dataset.delay || 0);
      setTimeout(() => el.classList.add('in-view'), delay);
      observer.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
};

/* ── COUNTER ANIMATION ── */
const initCounters = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target   = parseFloat(el.dataset.target);
      const prefix   = el.dataset.prefix   || '';
      const suffix   = el.dataset.suffix   || '';
      const decimals = parseInt(el.dataset.decimals ?? 0);
      const duration = 2200;
      const start    = performance.now();

      const ease = t => 1 - Math.pow(1 - t, 4); // ease-out quartic

      const tick = now => {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = prefix + (ease(p) * target).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => observer.observe(el));
};

/* ── PROGRAMS CAROUSEL ── */
const initPrograms = () => {
  const track    = document.getElementById('programsTrack');
  const prevBtn  = document.getElementById('progPrev');
  const nextBtn  = document.getElementById('progNext');
  const tabs     = document.querySelectorAll('.prog-tab');
  if (!track) return;

  let offset = 0;
  const CARD_W = 360 + 24; // card width + gap

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const updatePosition = () => {
    const maxOffset = -(track.scrollWidth - track.parentElement.offsetWidth);
    offset = clamp(offset, maxOffset, 0);
    track.style.transform = `translateX(${offset}px)`;
  };

  nextBtn?.addEventListener('click', () => { offset -= CARD_W; updatePosition(); });
  prevBtn?.addEventListener('click', () => { offset += CARD_W; updatePosition(); });

  // Touch/drag scroll
  let startX = 0, isDragging = false, startOffset = 0;
  track.addEventListener('mousedown', e => { isDragging = true; startX = e.clientX; startOffset = offset; track.style.cursor = 'grabbing'; });
  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    offset = startOffset + (e.clientX - startX);
    updatePosition();
  });
  document.addEventListener('mouseup', () => { isDragging = false; track.style.cursor = ''; });
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; startOffset = offset; }, { passive: true });
  track.addEventListener('touchmove', e => {
    offset = startOffset + (e.touches[0].clientX - startX);
    updatePosition();
  }, { passive: true });

  // Tab filtering
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      offset = 0;
      const cat = tab.dataset.tab;
      track.querySelectorAll('.prog-card').forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
      });
      updatePosition();
    });
  });
};

/* ── FACULTY CAROUSEL ── */
const initFaculty = () => {
  const scroll  = document.getElementById('facultyScroll');
  const prevBtn = document.getElementById('facPrev');
  const nextBtn = document.getElementById('facNext');
  if (!scroll) return;

  const STEP = 260; // card width + gap
  prevBtn?.addEventListener('click', () => { scroll.scrollBy({ left: -STEP, behavior: 'smooth' }); });
  nextBtn?.addEventListener('click', () => { scroll.scrollBy({ left:  STEP, behavior: 'smooth' }); });

  // Touch drag
  let startX = 0, scrollStart = 0;
  scroll.addEventListener('touchstart', e => { startX = e.touches[0].clientX; scrollStart = scroll.scrollLeft; }, { passive: true });
  scroll.addEventListener('touchmove', e => {
    scroll.scrollLeft = scrollStart - (e.touches[0].clientX - startX);
  }, { passive: true });
};

/* ── FAQ ACCORDION ── */
const initFAQ = () => {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-a');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-a').style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
};

/* ── SMOOTH SCROLL ── */
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });
};

/* ── ACTIVE NAV LINK ON SCROLL ── */
const initActiveNav = () => {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active-nav'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active-nav');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
};

/* ── PAGE LOAD FADE ── */
const initPageLoad = () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });
  // fallback
  setTimeout(() => { document.body.style.opacity = '1'; }, 600);
};

/* ── INIT ALL ── */
document.addEventListener('DOMContentLoaded', () => {
  initPageLoad();
  initCursor();
  initHeader();
  initMobileNav();
  initHeroText();
  initParallax();
  initReveal();
  initCounters();
  initPrograms();
  initFaculty();
  initFAQ();
  initSmoothScroll();
  initActiveNav();
});
