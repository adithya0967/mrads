import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import ScrollNavigation from './ui/ScrollNavigation';

export default function TargetShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-brand/30 selection:text-paper font-sans">
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <ScrollNavigation />
    </div>
  );
}
