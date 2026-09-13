import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import '../styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mr-ads.in'),
  title: 'Mr. Ads (MR) — Hyperlocal Advertising Partner | Display, Outdoor, Offline & Digital',
  description:
    'Mr. Ads connects brands with the right local audience through restaurant, apartment, corporate, mall & fitness displays, moving media, offline distribution, print & creative, and website & AI solutions. Request a media plan.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'Mr. Ads (MR) — Hyperlocal Advertising Partner',
    description: 'Display, Outdoor, Offline & Digital Advertising Solutions.',
    images: [{ url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mr. Ads (MR)',
    description:
      'Hyperlocal Advertising: Display Advertising, Advertising on the Move, Offline Distribution, Print & Creative, Website & AI Solutions.',
    telephone: '+91 96865 44644',
    email: 'knowus@mr-ads.in',
    slogan: 'Your Hyperlocal Advertising Partner',
  };

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Serif+Display:ital@0;1&family=Instrument+Serif:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,300..700;1,14..32,300..700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}