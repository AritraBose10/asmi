import type { Metadata } from 'next';
import Link from 'next/link';
import { THREADS, FORUM_CATEGORIES, SITE } from '@/data/site';
import { PageHero, CtaBand, Arrow, TickList } from '@/components/Chrome';
import FilterGrid from '@/components/FilterGrid';
import StaticForm from '@/components/StaticForm';

export const metadata: Metadata = {
  title: 'Discussion Forum',
  description: 'Ask students, alumni and the admissions team at ASMi Business School — admissions, placements, campus life and programme questions.',
};

export default function Forum() {
  return (
    <>
      <PageHero
        theme="ph-deep"
        eyebrow="Community"
        title="Discussion <em>Forum</em>"
        sub="Questions answered by students, alumni and staff — admissions, placements, the study tour, and everything applicants actually want to know before they commit."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Discussion Forum' }]}
        photoKey="forum"
        meta={[
          { value: '8', label: 'Open Threads' },
          { value: '148', label: 'Replies' },
          { value: '3.2k', label: 'Views This Month' },
          { value: 'Students · Alumni', label: 'Who Answers' },
        ]}
      />

      <section className="sec">
        <div className="container">
          <div className="forum-layout">
            <div className="forum-main">
              <FilterGrid categories={FORUM_CATEGORIES} listClassName="thread-list" emptyNote="No threads in this category yet.">
                {THREADS.map((t, i) => (
                  <article className="thread reveal-up" data-delay={(i % 4) * 50} data-cat={t.cat} key={t.title}>
                    <div className="thread-mono">{t.mono}</div>
                    <div className="thread-body">
                      <div className="thread-top">
                        <span className="thread-cat">{t.cat}</span>
                        {t.pinned && <span className="thread-pin">Pinned</span>}
                        <span className="thread-when">{t.when}</span>
                      </div>
                      {/* Not links: the forum is a UI mockup with no per-thread pages yet. */}
                      <h3>{t.title}</h3>
                      <p>{t.body}</p>
                      <div className="thread-meta">
                        <span className="thread-author"><strong>{t.who}</strong> · {t.role}</span>
                        <span className="thread-stats">{t.replies} replies · {t.views} views</span>
                      </div>
                    </div>
                  </article>
                ))}
              </FilterGrid>
            </div>

            <aside className="forum-side">
              <div className="side-card reveal-up">
                <h3>Start a discussion</h3>
                <p>Ask anything about programmes, admissions or life at ASMi.</p>
                <StaticForm className="ask-form" note="Not connected yet — the forum needs a backend before posts can be saved. Email info@asmibschool.com in the meantime.">
                  <label className="sr-only" htmlFor="askTitle">Question</label>
                  <input type="text" id="askTitle" placeholder="Your question" required />
                  <label className="sr-only" htmlFor="askBody">Details</label>
                  <textarea id="askBody" rows={4} placeholder="Add any detail that would help someone answer" />
                  <button type="submit" className="btn-cta-primary">Post question</button>
                </StaticForm>
              </div>

              <div className="side-card reveal-up" data-delay={100}>
                <h3>Community guidelines</h3>
                <TickList items={[
                  'Use your real name and batch.',
                  'Ask specific questions — they get specific answers.',
                  'No sharing of fees, offers or personal data of others.',
                  'Staff answer admissions questions within two working days.',
                ]} />
              </div>

              <div className="side-card reveal-up" data-delay={160}>
                <h3>Rather ask privately?</h3>
                <p>The admissions office answers directly.</p>
                <a href={`mailto:${SITE.email}`} className="link-cta">{SITE.email} <Arrow /></a>
                <a href={`tel:${SITE.phone}`} className="link-cta">{SITE.phone} <Arrow /></a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand heading="Read enough? Apply." sub="Admissions for the 2026 batch are open across MBA, BBA and Executive MBA." />
    </>
  );
}
