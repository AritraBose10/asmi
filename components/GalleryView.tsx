'use client';

import { useState, useEffect } from 'react';
import { GalleryItem, GalleryCategory, GALLERY_CATEGORIES } from '@/data/gallery';

export default function GalleryView({ items }: { items: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = items.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  // Close modal on Escape, arrow navigation
  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setActiveItem(filteredItems[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setActiveItem(filteredItems[prevIndex]);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem, filteredItems]);

  const countForCategory = (cat: GalleryCategory) =>
    cat === 'All' ? items.length : items.filter((it) => it.category === cat).length;

  return (
    <>
      {/* Category Filter Chips */}
      <div className="filter-bar reveal-up" role="group" aria-label="Filter gallery by category">
        {GALLERY_CATEGORIES.map((cat) => {
          const count = countForCategory(cat);
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              className={`filter-chip${isActive ? ' is-active' : ''}`}
              aria-pressed={isActive}
              onClick={() => setActiveCategory(cat)}
            >
              <span>{cat}</span>
              <span className="gallery-chip-badge">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <article
            key={item.id}
            className={`gallery-card reveal-up${item.featured ? ' is-featured' : ''}`}
            data-delay={(index % 3) * 60}
            onClick={() => setActiveItem(item)}
            tabIndex={0}
            role="button"
            aria-label={`View photo for ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveItem(item);
              }
            }}
          >
            <div className="gallery-card-media">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="gallery-card-img"
                />
              ) : (
                <div className="gallery-card-empty photo-empty">
                  <span className="gallery-card-mono">{item.mono || 'AS'}</span>
                  <span className="gallery-card-pending">Photo on Archive File</span>
                </div>
              )}
              <div className="gallery-card-badges">
                <span className="gallery-badge-tag">{item.tag}</span>
                {item.date && <span className="gallery-badge-date">{item.date}</span>}
              </div>
              <div className="gallery-card-overlay">
                <span className="gallery-card-zoom" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="gallery-card-body">
              <span className="gallery-card-cat">{item.category}</span>
              <h3 className="gallery-card-title">{item.title}</h3>
              {item.sub && <p className="gallery-card-sub">{item.sub}</p>}
              <p className="gallery-card-caption">{item.caption}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveItem(null);
          }}
        >
          <div className="gallery-lightbox-panel">
            <button
              className="gallery-lightbox-close"
              aria-label="Close dialog"
              onClick={() => setActiveItem(null)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="gallery-lightbox-main">
              <div className="gallery-lightbox-media">
                {activeItem.image ? (
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="gallery-lightbox-img"
                  />
                ) : (
                  <div className="gallery-lightbox-empty photo-empty">
                    <span className="gallery-lightbox-mono">{activeItem.mono || 'AS'}</span>
                    <span className="gallery-card-pending">Documented Archive Entry</span>
                  </div>
                )}
              </div>

              <div className="gallery-lightbox-info">
                <div className="gallery-lightbox-top">
                  <span className="gallery-badge-tag">{activeItem.tag}</span>
                  <span className="gallery-badge-cat">{activeItem.category}</span>
                  {activeItem.date && <span className="gallery-badge-date">{activeItem.date}</span>}
                </div>

                <h2 className="gallery-lightbox-title">{activeItem.title}</h2>
                {activeItem.sub && <p className="gallery-lightbox-sub">{activeItem.sub}</p>}
                <p className="gallery-lightbox-desc">{activeItem.caption}</p>

                <div className="gallery-lightbox-nav">
                  <button
                    className="gallery-nav-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
                      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
                      setActiveItem(filteredItems[prevIndex]);
                    }}
                    aria-label="Previous item"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Previous
                  </button>
                  <span className="gallery-nav-counter">
                    {filteredItems.findIndex((it) => it.id === activeItem.id) + 1} / {filteredItems.length}
                  </span>
                  <button
                    className="gallery-nav-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
                      const nextIndex = (currentIndex + 1) % filteredItems.length;
                      setActiveItem(filteredItems[nextIndex]);
                    }}
                    aria-label="Next item"
                  >
                    Next
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
