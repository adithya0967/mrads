import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CinematicJourneyRouter from '@/components/cinematic/CinematicJourneyRouter';
import ServicesDisplayAdvertising from './components/services/ServicesDisplayAdvertising';
import ServicesOnTheMove from './components/services/ServicesOnTheMove';
import ServicesOfflineCreative from './components/services/ServicesOfflineCreative';
import ServicesNewspaperQuickCommerce from './components/services/ServicesNewspaperQuickCommerce';
import ServicesPharmacyCover from './components/services/ServicesPharmacyCover';
import ServicesWebsiteAI from './components/services/ServicesWebsiteAI';
import WhyMrAdsSection from './components/WhyMrAdsSection';
import FinalCTASection from './components/FinalCTASection';
import WhatsAppButton from './components/WhatsAppButton';

export default function LandingPage() {
  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <Header />

      <main>
        <CinematicJourneyRouter />
        <ServicesDisplayAdvertising />
        <ServicesOnTheMove />
        <ServicesOfflineCreative />
        <ServicesNewspaperQuickCommerce />
        <ServicesPharmacyCover />
        <ServicesWebsiteAI />
        <WhyMrAdsSection />
        <FinalCTASection />
      </main>

      <Footer />

      {/* Sticky WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}