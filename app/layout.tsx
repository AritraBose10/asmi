import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import SiteMotion from '@/components/SiteMotion';
import Loader from '@/components/Loader';
import { Footer } from '@/components/Chrome';

export const metadata: Metadata = {
  metadataBase: new URL('https://asmibschool.com'),
  title: {
    default: 'ASMi Business School | Best Business School in Kolkata',
    template: '%s | ASMi Business School',
  },
  description:
    'ASMi Business School — Best Business School in Kolkata, Eastern India. AICTE-approved MBA, BBA and Executive MBA programmes powered by IBM.',
  icons: { icon: '/assets/logo-black.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400;1,9..40,700&family=Fraunces:ital,opsz,wght@1,9..144,300;1,9..144,400;1,9..144,500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Loader />
        <div className="scroll-progress" id="scrollProgress" />
        <div className="cursor-dot" id="cursorDot" />
        <div className="cursor-ring" id="cursorRing" />
        <Nav />
        <main>{children}</main>
        <Footer />
        <SiteMotion />
      </body>
    </html>
  );
}
