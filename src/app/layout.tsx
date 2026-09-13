import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
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
    title: 'Mr. Ads — Hyperlocal Advertising & Digital Solutions Partner',
    description:
      'Premium digital displays, outdoor transit, print distribution, gifting, and web/AI solutions in Bengaluru.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
