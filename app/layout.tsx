import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { CustomCursor } from '@/components/custom-cursor';

export const metadata: Metadata = {
  title: 'SupportPRO — Managed IT & 24/7 Technical Support',
  description:
    'SupportPRO delivers 24/7 technical support, cloud and server management, NOC, DevOps, and white-label MSP services trusted by hosting providers and enterprises worldwide.',
  openGraph: {
    title: 'SupportPRO — Managed IT & 24/7 Technical Support',
    description:
      'SupportPRO delivers 24/7 technical support, cloud and server management, NOC, DevOps, and white-label MSP services trusted by hosting providers and enterprises worldwide.',
    type: 'website',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'SupportPRO Managed IT & Technical Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SupportPRO — Managed IT & 24/7 Technical Support',
    description:
      'SupportPRO delivers 24/7 technical support, cloud and server management, NOC, DevOps, and white-label MSP services trusted by hosting providers and enterprises worldwide.',
    images: ['/hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
        />
        {/* Inline theme script — runs before hydration to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t===null){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <Providers>
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
