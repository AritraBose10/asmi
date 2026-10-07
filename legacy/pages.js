/* ═══════════════════════════════════════
   ASMi Business School — pages.js
   Behaviour shared by the inner pages
   ═══════════════════════════════════════ */

/* ── DROPDOWN NAV: keyboard + touch support ──
   Hover is handled in CSS; this adds click/Enter toggling
   and closes the menu on Escape or outside click.        */
const initNavDropdowns = () => {
  const dds = document.querySelectorAll('.nav-dd');
  if (!dds.length) return;

  const closeAll = except => {
    dds.forEach(dd => {
      if (dd === except) return;
      dd.classList.remove('is-open');
      dd.querySelector('.nav-dd-btn')?.setAttribute('aria-expanded', 'false');
    });
  };

  dds.forEach(dd => {
    const btn = dd.querySelector('.nav-dd-btn');
    if (!btn) return;

    btn.addEventListener('click', e => {
      e.preventDefault();
      const open = dd.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      closeAll(dd);
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-dd')) closeAll(null);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAll(null);
  });
};

/* ── CATEGORY FILTERS (blog + forum) ── */
const initFilters = () => {
  const bars = document.querySelectorAll('.filter-bar');
  if (!bars.length) return;

  bars.forEach(bar => {
    // The list this bar filters is the next sibling element that holds items.
    const list = bar.parentElement.querySelector('.post-grid, .thread-list');
    if (!list) return;
    const items = Array.from(list.children);
    const empty = bar.parentElement.querySelector('.empty-note');

    bar.addEventListener('click', e => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;

      bar.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');

      const want = chip.dataset.filter;
      let shown = 0;

      items.forEach(item => {
        const match = want === 'All' || item.dataset.cat === want;
        item.hidden = !match;
        if (match) shown++;
      });

      if (empty) empty.hidden = shown !== 0;
    });
  });
};

/* ── STATIC FORMS ──
   The blog subscribe box and the forum composer have no backend yet.
   Rather than silently doing nothing, surface the note under the form. */
const initStaticForms = () => {
  document.querySelectorAll('[data-static-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const note = form.parentElement.querySelector('[data-form-note]');
      if (note) {
        note.hidden = false;
        note.setAttribute('role', 'status');
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initNavDropdowns();
  initFilters();
  initStaticForms();
});
