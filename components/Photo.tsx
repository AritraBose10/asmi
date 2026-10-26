import Image from 'next/image';

/**
 * Every photo on the site goes through this component.
 *
 * Two reasons it exists:
 *  1. Photos arrive in batches. Any slot whose `src` is still empty falls back
 *     to the monogram or gradient that is there today, so a half-populated
 *     site never looks broken — it just looks like the current one.
 *  2. Ratios are fixed per context, so a photographer's crop can vary without
 *     the layout moving. Nothing here changes height when an image loads.
 */

export type PhotoRatio = 'portrait' | 'card' | 'wide' | 'square' | 'tall';

const RATIO: Record<PhotoRatio, string> = {
  portrait: '4 / 5',   // people
  card: '16 / 10',     // clubs, events, specializations
  wide: '16 / 7',      // section banners
  square: '1 / 1',     // avatars, small grid tiles
  tall: '3 / 4',       // gallery accents
};

/** Rough rendered widths, so the browser fetches a sensibly sized file. */
const SIZES: Record<PhotoRatio, string> = {
  portrait: '(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 320px',
  card: '(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 420px',
  wide: '100vw',
  square: '(max-width: 768px) 40vw, 120px',
  tall: '(max-width: 768px) 100vw, 33vw',
};

export default function Photo({
  src,
  alt,
  ratio = 'card',
  mono,
  className = '',
  priority = false,
  rounded = true,
}: {
  /** Path under /public, e.g. /photos/faculty/kaustav-majumdar.jpg */
  src?: string;
  /** Required whenever src is set. Describes the person or place, not the file. */
  alt?: string;
  ratio?: PhotoRatio;
  /** Initials shown when there is no photo yet. */
  mono?: string;
  className?: string;
  priority?: boolean;
  rounded?: boolean;
}) {
  const classes = `photo photo-${ratio}${rounded ? ' photo-rounded' : ''}${className ? ' ' + className : ''}`;

  if (!src) {
    return (
      <div className={`${classes} photo-empty`} aria-hidden={!mono}>
        {mono && <span className="photo-mono">{mono}</span>}
      </div>
    );
  }

  return (
    <div className={classes} style={{ aspectRatio: RATIO[ratio] }}>
      <Image
        src={src}
        alt={alt ?? ''}
        fill
        sizes={SIZES[ratio]}
        priority={priority}
        className="photo-img"
      />
    </div>
  );
}

/**
 * A gallery of photos that tolerates gaps: slots without a file render as a
 * labelled placeholder rather than disappearing, so the grid keeps its rhythm
 * while the set is being filled.
 */
export function PhotoGrid({
  items,
  ratio = 'card',
}: {
  items: { src?: string; alt?: string; caption?: string }[];
  ratio?: PhotoRatio;
}) {
  return (
    <div className="photo-grid">
      {items.map((it, i) => (
        <figure className="photo-figure reveal-up" data-delay={(i % 3) * 70} key={it.caption ?? i}>
          {it.src ? (
            <Photo src={it.src} alt={it.alt ?? it.caption ?? ''} ratio={ratio} />
          ) : (
            <div className={`photo photo-${ratio} photo-rounded photo-empty`} style={{ aspectRatio: RATIO[ratio] }}>
              <span className="photo-pending">Photo to come</span>
            </div>
          )}
          {it.caption && <figcaption>{it.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
