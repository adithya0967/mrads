'use client';

import React from 'react';
import PageShell from '@/components/PageShell';
import MediaPlanBuilderSection from '@/components/landing/MediaPlanBuilderSection';
import CreativeSection from '@/components/landing/CreativeSection';
import DigitalAiSection from '@/components/landing/DigitalAiSection';
import { useRouter } from 'next/navigation';

export default function PricingPage() {
  const router = useRouter();

  const handlePrefill = () => {
    router.push('/contact');
  };

  const handleSendBrief = (city: string, duration: string, budget: string, channels: string[]) => {
    router.push('/contact');
  };

  return (
    <PageShell>
      <MediaPlanBuilderSection
        onSendBrief={handleSendBrief}
        onToast={() => {}}
      />
      <CreativeSection onPrefill={handlePrefill} />
      <DigitalAiSection onPrefill={handlePrefill} />
    </PageShell>
  );
}
