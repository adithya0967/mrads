'use client';

import React, { useState } from 'react';
import PageShell from '@/components/PageShell';
import ReachSection from '@/components/landing/ReachSection';
import DisplaySection from '@/components/landing/DisplaySection';
import MovingMediaSection from '@/components/landing/MovingMediaSection';
import OfflineSection from '@/components/landing/OfflineSection';
import LightboxModal from '@/components/landing/LightboxModal';
import { useRouter } from 'next/navigation';

export default function LocationsPage() {
  const router = useRouter();

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{
    title: string;
    img: string;
    desc: string;
  } | null>(null);

  const handleOpenLightbox = (title: string, img: string, desc: string) => {
    setLightboxData({ title, img, desc });
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const handlePrefill = (env: string | null, interest?: string | null) => {
    router.push('/contact');
  };

  return (
    <PageShell>
      <ReachSection onPrefill={handlePrefill} />
      <DisplaySection onPrefill={handlePrefill} />
      <MovingMediaSection onOpenLightbox={handleOpenLightbox} onPrefill={handlePrefill} />
      <OfflineSection onPrefill={handlePrefill} />

      <LightboxModal
        isOpen={lightboxOpen}
        data={lightboxData}
        onClose={handleCloseLightbox}
        onEnquire={() => {
          handleCloseLightbox();
          router.push('/contact');
        }}
      />
    </PageShell>
  );
}
