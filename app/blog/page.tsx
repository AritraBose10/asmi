import type { Metadata } from 'next';
import Link from 'next/link';
import { POSTS, POST_CATEGORIES } from '@/data/posts';
import { PageHero, CtaBand, Arrow } from '@/components/Chrome';
import FilterGrid from '@/components/FilterGrid';
import StaticForm from '@/components/StaticForm';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Essays and field notes from ASMi Business School — placements, analytics, study tours, careers and campus life.',
};

export default function Blog() {
  const [feat, ...rest] = POSTS;

  return (
    <>
      <PageHero
        theme="ph-dark"
        eyebrow="Writing"
        title="The ASMi <em>Blog</em>"
        sub="Field notes from faculty, the placement cell and students — written for people deciding what to study and people already in the middle of it."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Blog' }]}
      />

      <section className="sec">
        <div className="container">
          <article className="post-feature reveal-up">
            <div className="post-feature-body">
              <span className="post-tag">{feat.category}</span>
              <h2><Link href={`/blog/${feat.slug}`}>{feat.title}</Link></h2>
              <p>{feat.dek}</p>
              <div className="post-foot">
                <div className="post-mono">{feat.mono}</div>
                <div className="post-by"><strong>{feat.author}</strong><span>{feat.date} · {feat.read}</span></div>
              </div>
              <Link href={`/blog/${feat.slug}`} className="link-cta">Read the piece <Arrow /></Link>
            </div>
            <div className="post-feature-media">
              <Link href={`/blog/${feat.slug}`}>
                <img src={`/assets/${feat.image}`} alt="" loading="lazy" />
              </Link>
            </div>
          </article>

          <FilterGrid categories={POST_CATEGORIES} listClassName="post-grid" emptyNote="No posts in this topic yet.">
            {rest.map((p, i) => (
              <article className="post-card reveal-up" data-delay={(i % 3) * 60} data-cat={p.category} key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="post-link">
                  <span className="post-tag">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.dek}</p>
                  <div className="post-foot">
                    <div className="post-mono">{p.mono}</div>
                    <div className="post-by"><strong>{p.author}</strong><span>{p.date} · {p.read}</span></div>
                  </div>
                </Link>
              </article>
            ))}
          </FilterGrid>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="container narrow">
          <div className="subscribe-card reveal-up">
            <h2>Get new pieces by email</h2>
            <p>Occasional essays on business education, placements and analytics. No newsletter theatre.</p>
            <StaticForm className="subscribe-form" note="Not connected yet — this form needs a mailing backend before it can accept sign-ups.">
              <label className="sr-only" htmlFor="subEmail">Email address</label>
              <input type="email" id="subEmail" placeholder="you@example.com" required />
              <button type="submit" className="btn-cta-primary">Subscribe</button>
            </StaticForm>
          </div>
        </div>
      </section>

      <CtaBand heading="Reading about it is step one" sub="Applications for the 2026 batch are open across MBA, BBA and Executive MBA." />
    </>
  );
}
