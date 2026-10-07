import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POSTS, getPost, relatedPosts } from '@/data/posts';
import { PageHero, SecHead, CtaBand, Arrow } from '@/components/Chrome';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return { title: p.title, description: p.dek };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = relatedPosts(slug);

  return (
    <>
      <section className="page-hero ph-dark article-hero">
        <div className="ph-media">
          <img src={`/assets/${post.image}`} alt="" aria-hidden="true" />
          <div className="ph-media-shade" />
        </div>
        <div className="ph-grain" aria-hidden="true" />
        <div className="container ph-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link> <span aria-hidden="true">/</span>
            <span aria-current="page">{post.category}</span>
          </nav>
          <div className="ph-inner article-head">
            <span className="post-tag on-dark">{post.category}</span>
            <h1 className="article-title">{post.title}</h1>
            <p className="ph-sub">{post.dek}</p>
            <div className="article-byline">
              <div className="post-mono">{post.mono}</div>
              <div className="article-by">
                <strong>{post.author}</strong>
                <span>{post.authorRole}</span>
              </div>
              <div className="article-when">
                <span>{post.date}</span>
                <span>{post.read}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec article-section">
        <div className="container">
          <div className="article-layout">
            <aside className="article-rail">
              <Link href="/blog" className="rail-back"><Arrow size={14} /> <span>All posts</span></Link>
              <div className="rail-block">
                <span className="rail-label">Written by</span>
                <strong>{post.author}</strong>
                <span className="rail-role">{post.authorRole}</span>
              </div>
              <div className="rail-block">
                <span className="rail-label">Published</span>
                <strong>{post.date}</strong>
                <span className="rail-role">{post.read}</span>
              </div>
              <div className="rail-block">
                <span className="rail-label">Topic</span>
                <strong>{post.category}</strong>
              </div>
            </aside>

            <article className="prose">
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
              <hr className="prose-rule" />
              <p className="prose-note">
                Written for prospective and current students of ASMi Business School. Questions about anything here?
                Ask on the <Link href="/forum">discussion forum</Link> or write to{' '}
                <a href="mailto:info@asmibschool.com">info@asmibschool.com</a>.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="sec sec-muted">
        <div className="container">
          <SecHead eyebrow="Keep Reading" heading="More from the blog" />
          <div className="post-grid">
            {related.map((p, i) => (
              <article className="post-card reveal-up" data-delay={i * 70} key={p.slug}>
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
          </div>
          <div className="sec-foot reveal-up">
            <Link href="/blog" className="link-cta">See every post <Arrow /></Link>
          </div>
        </div>
      </section>

      <CtaBand heading="Applications for Batch 2026 are open" sub="MBA, BBA in Business Analytics and Executive MBA — apply online or call the admissions office." />
    </>
  );
}
