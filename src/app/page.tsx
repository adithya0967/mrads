import React from 'react';
import TargetShell from '@/components/TargetShell';
import Hero from '@/components/hero/Hero';
import PresenceSection from '@/components/landing/PresenceSection';
import AdvantageSection from '@/components/landing/AdvantageSection';
import WhySection from '@/components/landing/WhySection';
import SolutionsSection from '@/components/landing/SolutionsSection';
import DigitalSection from '@/components/landing/DigitalSection';
import FinalCta from '@/components/FinalCta';

export default function HomePage() {
  return (
    <TargetShell>
      {/* Production-Quality Mr. Ads Hero Experience: Own the City's Attention */}
      <Hero />

      {/* 2. Presence section: Where your audience is. */}
      <PresenceSection />

      {/* 3. The hyperlocal advantage: The problem vs The Mr. Ads approach */}
      <AdvantageSection />

      {/* 4. Why Mr. Ads: Six reasons brands stay with one partner. */}
      <WhySection />

      {/* 5. Advertising solutions: One network. Several ways to be seen. */}
      <SolutionsSection />

      {/* 6. Digital solutions: The online presence that supports the local one. */}
      <DigitalSection />

      {/* 7. Final Call to Action */}
      <FinalCta />
    </TargetShell>
  );
}
