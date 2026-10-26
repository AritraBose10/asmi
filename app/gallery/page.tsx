import type { Metadata } from 'next';
import { PageHero, SecHead, CtaBand } from '@/components/Chrome';
import GalleryView from '@/components/GalleryView';
import { GALLERY_ITEMS } from '@/data/gallery';

export const metadata: Metadata = {
  title: 'Gallery — Campus Life, Guest Lectures & Study Tour',
  description:
    'Visual directory and gallery of ASMi Business School: guest lectures, executive speaker sessions from the April–September 2026 directory, 15th floor Godrej Genesis campus life, and the Malaysia study tour.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        theme="ph-dark"
        eyebrow="Visual Directory"
        title="Moments, Sessions &amp; <em>Campus Life</em>"
        sub="A photographic record of leadership sessions, global corporate connect speakers, daily life on the 15th floor of Godrej Genesis, and the international study tour."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Gallery' }]}
        meta={[
          { value: '14', label: 'Speaker Sessions' },
          { value: 'Sector V', label: 'Kolkata Campus' },
          { value: 'Malaysia', label: 'Global Immersion' },
          { value: '25+', label: 'Visual Archives' },
        ]}
        photoKey="gallery"
      />

      <section className="sec" id="gallery-archive">
        <div className="container">
          <SecHead
            eyebrow="The Archive"
            heading="Explore life inside and beyond<br /><em>the lecture theatre</em>"
            lead="Filter by documented speaker sessions from the April–September 2026 directory, high-rise campus facilities in Kolkata's IT corridor, and international study tour moments."
          />

          <GalleryView items={GALLERY_ITEMS} />
        </div>
      </section>

      <CtaBand
        heading="Experience the campus for yourself"
        sub="Prospective students are welcome to attend selected corporate connect lectures and tour the 15th floor Godrej Genesis campus."
        primaryLabel="Apply for Batch 2026"
      />
    </>
  );
}
