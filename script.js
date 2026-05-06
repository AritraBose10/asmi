/* ═══════════════════════════════════════
   ASMi Business School — script.js
   Supreme Animation Edition
   ═══════════════════════════════════════ */

/* ── LOADING SCREEN ── */
const initLoader = () => {
  const screen  = document.getElementById('loaderScreen');
  const bar     = document.getElementById('loaderBar');
  const percent = document.getElementById('loaderPercent');
  const pCont   = document.getElementById('loaderParticles');
  if (!screen) return;

  // Spawn loader particles
  if (pCont) {
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('span');
      p.className = 'loader-particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top  = (40 + Math.random() * 30) + '%';
      p.style.animationDelay = (Math.random() * 3) + 's';
      p.style.animationDuration = (2 + Math.random() * 2) + 's';
      pCont.appendChild(p);
    }
  }

  let progress = 0;
  const ease = t => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;

  const tick = () => {
    // Accelerate towards 100
    const remaining = 100 - progress;
    const jump = Math.max(0.3, remaining * (0.02 + Math.random() * 0.04));
    progress = Math.min(progress + jump, 100);

    if (bar)     bar.style.width     = progress + '%';
    if (percent) percent.textContent = Math.round(progress) + '%';

    if (progress < 99.5) {
      requestAnimationFrame(tick);
    } else {
      // Finished
      if (bar)     bar.style.width     = '100%';
      if (percent) percent.textContent = '100%';

      setTimeout(() => {
        screen.classList.add('loader-exit');
        document.body.classList.remove('is-loading');
        setTimeout(() => {
          screen.remove();
          // Trigger hero animations after loader is gone
          initHeroText();
        }, 900);
      }, 400);
    }
  };

  // Start after a brief pause so logo animation plays
  setTimeout(tick, 1200);
};

/* ── CUSTOM CURSOR ── */
const initCursor = () => {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring || window.matchMedia('(hover:none)').matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
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

  const hoverSel = 'a, button, .adv-card, .prog-card, .fac-card, .mentor-card, .pl-card, .testi-card, .why-stat, .logo-pill';
  document.querySelectorAll(hoverSel).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
};

/* ── SCROLL PROGRESS BAR ── */
const initScrollProgress = () => {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  let ticking = false;

  const update = () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    // scaleX instead of width — compositor-only, no layout thrash
    bar.style.transform = docH > 0
      ? `scaleX(${Math.min(window.scrollY / docH, 1)})`
      : 'scaleX(0)';
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  update(); // paint initial state
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
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const closeBtn  = document.getElementById('mobileNavClose');
  if (!hamburger || !mobileNav) return;

  const open  = () => { mobileNav.classList.add('open');  document.body.style.overflow = 'hidden'; };
  const close = () => { mobileNav.classList.remove('open'); document.body.style.overflow = ''; };

  hamburger.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  mobileNav.querySelectorAll('.mobile-link').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
};

/* ── HERO HEADING STAGGER ── */
const initHeroText = () => {
  document.querySelectorAll('.hero-heading .line').forEach((line, i) => {
    line.style.opacity   = '0';
    line.style.transform = 'translateY(52px) rotateX(-15deg)';
    setTimeout(() => {
      line.style.transition = 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)';
      line.style.opacity    = '1';
      line.style.transform  = 'translateY(0) rotateX(0)';
    }, 200 + i * 180);
  });

  document.querySelectorAll('.hero-eyebrow, .hero-sub, .hero-actions').forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
      el.style.opacity    = '1';
      el.style.transform  = 'translateY(0)';
    }, 700 + i * 150);
  });

  // Animate hero stats bar
  const statsBar = document.querySelector('.hero-stats-bar');
  if (statsBar) {
    statsBar.style.opacity = '0';
    statsBar.style.transform = 'translateY(20px)';
    setTimeout(() => {
      statsBar.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)';
      statsBar.style.opacity = '1';
      statsBar.style.transform = 'translateY(0)';
    }, 1200);
  }
};

/* ── PARALLAX HERO ── */
const initParallax = () => {
  const img = document.getElementById('heroImg');
  const shapes = document.querySelectorAll('[data-parallax-speed]');
  if (!img && shapes.length === 0) return;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const sy = window.scrollY;
        if (img && sy < window.innerHeight * 1.3) {
          img.style.transform = `scale(1.08) translateY(${sy * 0.25}px)`;
        }
        // Parallax floating shapes
        shapes.forEach(s => {
          const speed = parseFloat(s.dataset.parallaxSpeed) || 0.02;
          s.style.transform = `translateY(${sy * speed * -50}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
};

/* ── AUTO STAGGER ── */
const initStagger = () => {
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    const base = parseInt(parent.dataset.stagger) || 80;
    Array.from(parent.children).forEach((child, i) => {
      const hasReveal = ['reveal-up','reveal-left','reveal-right','reveal-scale']
        .some(c => child.classList.contains(c));
      if (!hasReveal) child.classList.add('reveal-up');

      if (!child.hasAttribute('data-delay')) {
        child.setAttribute('data-delay', i * base);
      }
    });
  });
};

/* ── SCROLL REVEAL ── */
const initReveal = () => {
  const CLASSES = '.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .section-divider-animated';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
      const delay = parseFloat(el.dataset.delay || 0);
      setTimeout(() => el.classList.add('in-view'), delay);
      observer.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(CLASSES).forEach(el => observer.observe(el));
};

/* ── TEXT REVEAL (word-by-word) ── */
const initTextReveal = () => {
  const els = document.querySelectorAll('[data-text-reveal]');

  els.forEach(el => {
    // Walk through child nodes preserving HTML structure
    const wrapWords = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        if (!text.trim()) return;
        const frag = document.createDocumentFragment();
        const words = text.split(/(\s+)/);
        words.forEach(word => {
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
        node.parentNode.replaceChild(frag, node);
      } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'BR') {
        // Recursively wrap text inside inline elements like <em>
        Array.from(node.childNodes).forEach(child => wrapWords(child));
      }
    };

    Array.from(el.childNodes).forEach(child => wrapWords(child));

    // Stagger the word delays
    const wordInners = el.querySelectorAll('.word-inner');
    wordInners.forEach((w, i) => {
      w.style.transitionDelay = (i * 0.06) + 's';
    });
  });

  // Observe for viewport entry
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('text-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  els.forEach(el => observer.observe(el));
};

/* ── COUNTER ANIMATION ── */
const initCounters = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el       = entry.target;
      const target   = parseFloat(el.dataset.target);
      const prefix   = el.dataset.prefix   || '';
      const suffix   = el.dataset.suffix   || '';
      const decimals = parseInt(el.dataset.decimals ?? 0);
      const duration = 2200;
      const start    = performance.now();

      const ease = t => 1 - Math.pow(1 - t, 4); // quartic ease-out

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

/* ── LAZY IMAGE LOADING ── */
const initLazyImages = () => {
  const blurUp = img => {
    const reveal = () => {
      img.classList.add('loaded');
      img.closest('.img-wrap')?.classList.add('img-loaded');
    };
    if (img.complete && img.naturalWidth > 0) {
      reveal();
    } else {
      img.addEventListener('load',  reveal, { once: true });
      img.addEventListener('error', reveal, { once: true });
    }
  };
  document.querySelectorAll('img.lazy').forEach(blurUp);

  if ('loading' in HTMLImageElement.prototype) return;

  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
      o.unobserve(img);
    });
  }, { rootMargin: '400px 0px' });

  document.querySelectorAll('img[data-src]').forEach(img => obs.observe(img));
};

/* ── PROGRAMS (Replaced with pure CSS expanding accordion) ── */
/* ── FACULTY CAROUSEL ── */
const initFaculty = () => {
  const scroll  = document.getElementById('facultyScroll');
  const prevBtn = document.getElementById('facPrev');
  const nextBtn = document.getElementById('facNext');
  if (!scroll) return;

  const STEP = 260;
  prevBtn?.addEventListener('click', () => scroll.scrollBy({ left: -STEP, behavior: 'smooth' }));
  nextBtn?.addEventListener('click', () => scroll.scrollBy({ left:  STEP, behavior: 'smooth' }));

  let tStartX = 0, tScrollLeft = 0;
  scroll.addEventListener('touchstart', e => {
    tStartX = e.touches[0].clientX; tScrollLeft = scroll.scrollLeft;
  }, { passive: true });
  scroll.addEventListener('touchmove', e => {
    scroll.scrollLeft = tScrollLeft - (e.touches[0].clientX - tStartX);
  }, { passive: true });
};

/* ── FAQ ACCORDION ── */
const initFAQ = () => {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-a');
      const isOpen = item.classList.contains('open');

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
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    });
  });
};

/* ── ACTIVE NAV LINK ── */
const initActiveNav = () => {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.remove('active-nav'));
      document.querySelector(`.nav-link[href="#${entry.target.id}"]`)?.classList.add('active-nav');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
};

/* ── ADVANTAGE CARDS — 3D TILT + CURSOR GLOW ── */
const initAdvTilt = () => {
  if (window.matchMedia('(hover: none)').matches) return;

  document.querySelectorAll('.adv-card').forEach(card => {
    let rafId;

    const onMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const nx = x / rect.width - 0.5;
        const ny = y / rect.height - 0.5;
        card.style.transform = `translateY(-6px) rotateX(${(-ny * 8).toFixed(2)}deg) rotateY(${(nx * 8).toFixed(2)}deg)`;
        card.style.background = `radial-gradient(circle at ${Math.round(x)}px ${Math.round(y)}px, rgba(201,168,76,0.06) 0%, var(--white) 65%)`;
      });
    };

    const onLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1), background 0.4s ease, box-shadow 0.45s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease';
      card.style.transform = '';
      card.style.background = '';
      setTimeout(() => { card.style.transition = ''; }, 520);
    };

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
  });
};

/* ── MAGNETIC TILT FOR ALL CARDS ── */
const initMagneticCards = () => {
  if (window.matchMedia('(hover: none)').matches) return;

  const cards = document.querySelectorAll('.pl-card, .mentor-card, .testi-card, .fac-card');

  cards.forEach(card => {
    let rafId;
    card.addEventListener('mousemove', e => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translateY(-5px) rotateX(${(-ny * 5).toFixed(2)}deg) rotateY(${(nx * 5).toFixed(2)}deg) scale(1.02)`;
      });
    });
    card.addEventListener('mouseleave', () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease';
      card.style.transform = '';
      setTimeout(() => { card.style.transition = ''; }, 520);
    });
  });
};

/* ── CTA PARTICLES ── */
const initCTAParticles = () => {
  const container = document.getElementById('ctaParticles');
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const p = document.createElement('span');
    p.className = 'cta-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top  = Math.random() * 100 + '%';
    p.style.animationDelay    = (Math.random() * 4) + 's';
    p.style.animationDuration = (3 + Math.random() * 3) + 's';
    container.appendChild(p);
  }
};

/* ── INIT ALL ── */
document.addEventListener('DOMContentLoaded', () => {
  // Loading screen runs first
  initLoader();

  initCursor();
  initHeader();
  initScrollProgress();
  initMobileNav();
  initParallax();
  initStagger();
  initReveal();
  initTextReveal();
  initLazyImages();
  initCounters();
  initFaculty();
  initFAQ();
  initSmoothScroll();
  initActiveNav();
  initAdvTilt();
  initMagneticCards();
  initCTAParticles();
});
