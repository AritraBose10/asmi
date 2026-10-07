const PATHS: Record<string, React.ReactNode> = {
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 4 5.6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.6-4-9s1.5-6.3 4-9z" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0113 0M16 5.2a3.5 3.5 0 010 6.6M18 20a6.5 6.5 0 00-2-4.7" /></>,
  spark: <path d="M12 2l2.4 6.2L21 10.4l-5.3 4.1 1.1 6.5L12 17.7 7.2 21l1.1-6.5L3 10.4l6.6-2.2L12 2z" />,
  brief: <><rect x="2.5" y="7" width="19" height="13" rx="2.5" /><path d="M8.5 7V5a2 2 0 012-2h3a2 2 0 012 2v2M2.5 12.5h19" /></>,
  book: <path d="M3 4.5h6a3 3 0 013 3v12a2.5 2.5 0 00-2.5-2.5H3zM21 4.5h-6a3 3 0 00-3 3v12a2.5 2.5 0 012.5-2.5H21z" />,
  cloud: <path d="M7 18a4.5 4.5 0 01-.3-9 6 6 0 0111.4 1.6A3.9 3.9 0 0117 18z" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5.5l3.5 2" /></>,
  shield: <path d="M12 3l7.5 3v6c0 4.4-3 8.3-7.5 9.5C7.5 20.3 4.5 16.4 4.5 12V6z" />,
  leaf: <path d="M20 4C9 4 4 9.5 4 16c0 1.6.3 3 .8 4.2M4.8 20.2C10 21 20 17 20 4M4.8 20.2C7 15 11 11.5 16 9.5" />,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11.5a6.5 6.5 0 0013 0M12 18v3" /></>,
};

export default function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name] ?? PATHS.spark}
    </svg>
  );
}

export function FeatureGrid({ items, cols = 3 }: { items: { icon: string; title: string; desc: string }[]; cols?: 3 | 4 }) {
  return (
    <div className={`feature-grid cols-${cols}`}>
      {items.map((f, i) => (
        <article className="feature-card reveal-up" data-delay={i * 70} key={f.title}>
          <div className="feature-icon"><Icon name={f.icon} /></div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </article>
      ))}
    </div>
  );
}
