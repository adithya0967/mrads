'use client';

import React from 'react';
import PageShell from '@/components/PageShell';
import HeroSection from '@/components/landing/HeroSection';
import AdvantageSection from '@/components/landing/AdvantageSection';
import WhyPreviewSection from '@/components/landing/WhyPreviewSection';
import SolutionsPreviewSection from '@/components/landing/SolutionsPreviewSection';

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <AdvantageSection />
      <WhyPreviewSection />
      <SolutionsPreviewSection />
    </PageShell>
  );
}