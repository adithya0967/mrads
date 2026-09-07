'use client';

import React from 'react';
import PageShell from '@/components/PageShell';
import WhyFullSection from '@/components/landing/WhyFullSection';
import AdvantageSection from '@/components/landing/AdvantageSection';

export default function AboutPage() {
  return (
    <PageShell>
      <WhyFullSection />
      <AdvantageSection />
    </PageShell>
  );
}
