'use client';

import { useState } from 'react';

/**
 * Category filter shared by the blog listing and the forum thread list.
 * Children carry a `data-cat` attribute; filtering hides non-matching items.
 */
export default function FilterGrid({
  categories,
  children,
  listClassName,
  emptyNote,
}: {
  categories: string[];
  children: React.ReactElement<{ 'data-cat'?: string }>[];
  listClassName: string;
  emptyNote: string;
}) {
  const [active, setActive] = useState('All');
  const shown = children.filter((c) => active === 'All' || c.props['data-cat'] === active);

  return (
    <>
      <div className="filter-bar reveal-up" role="group" aria-label="Filter by topic">
        {['All', ...categories.filter((c) => c !== 'All')].map((c) => (
          <button
            key={c}
            className={`filter-chip${active === c ? ' is-active' : ''}`}
            aria-pressed={active === c}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className={listClassName}>{shown}</div>
      {shown.length === 0 && <p className="empty-note">{emptyNote}</p>}
    </>
  );
}
