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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Mr. Ads — Hyperlocal Advertising & Digital Solutions Partner',
  description:
    'Connect with customers across premium digital screens, outdoor transit, offline dark store inserts, corporate gifting, and bespoke Web/AI solutions. Plan your hyperlocal campaign in Bengaluru with Mr. Ads.',
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
