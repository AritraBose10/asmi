const Glyph = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/**
 * LinkedIn link for a person.
 *
 * On listing cards the whole card is already a stretched link to the profile,
 * so this sits above it on the z-axis (`.card-li`) to stay clickable, and the
 * card markup uses a <div>/<article> wrapper rather than nesting anchors.
 */
export default function LinkedInLink({
  url,
  name,
  variant = 'card',
}: {
  url: string;
  name: string;
  variant?: 'card' | 'rail';
}) {
  if (variant === 'rail') {
    return (
      <a href={url} target="_blank" rel="noopener" className="rail-linkedin">
        <Glyph />
        <span>LinkedIn profile</span>
      </a>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="card-li"
      aria-label={`${name} on LinkedIn`}
      title={`${name} on LinkedIn`}
    >
      <Glyph />
    </a>
  );
}
