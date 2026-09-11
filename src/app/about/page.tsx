import React from 'react';
import type { Metadata } from 'next';
import TargetShell from '@/components/TargetShell';
import PageHero from '@/components/PageHero';
import AboutPhilosophy from '@/components/about/AboutPhilosophy';
import AboutDifferentiators from '@/components/about/AboutDifferentiators';
import AboutProcess from '@/components/about/AboutProcess';
import AboutFaq from '@/components/about/AboutFaq';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'About — Mr. Ads',
  description:
    'Mr. Ads is a hyperlocal advertising company. The work is media, production and digital, planned around neighbourhoods rather than generic city buys.',
};

export default function AboutPage() {
  return (
    <TargetShell>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="About / Why Mr. Ads"
        title="We know where audiences are — and how to make a brand visible there."
        copy="Mr. Ads is a hyperlocal advertising company. The work is media, production and digital, planned around neighbourhoods rather than generic city buys."
      />

      {/* 2. Philosophy */}
      <AboutPhilosophy />

      {/* 3. Differentiators */}
      <AboutDifferentiators />

      {/* 4. Process */}
      <AboutProcess />

      {/* 5. FAQ */}
      <AboutFaq />

      {/* 6. Final Call to Action */}
      <FinalCta />
    </TargetShell>
  );
}
