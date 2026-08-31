import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
<<<<<<< Updated upstream
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import OfferSection from './components/OfferSection';
import HowItWorksSection from './components/HowItWorksSection';
import LocationsSection from './components/LocationsSection';
import PricingSection from './components/PricingSection';
import WhyItWorksSection from './components/WhyItWorksSection';
import SocialProofSection from './components/SocialProofSection';
import DemoVideoSection from './components/DemoVideoSection';
import ContactSection from './components/ContactSection';
=======
import CinematicJourneyRouter from '@/components/cinematic/CinematicJourneyRouter';
import ServicesDisplayAdvertising from './components/services/ServicesDisplayAdvertising';
import ServicesOnTheMove from './components/services/ServicesOnTheMove';
import ServicesOfflineCreative from './components/services/ServicesOfflineCreative';
import ServicesNewspaperQuickCommerce from './components/services/ServicesNewspaperQuickCommerce';
import ServicesPharmacyCover from './components/services/ServicesPharmacyCover';
import ServicesWebsiteAI from './components/services/ServicesWebsiteAI';
import WhyMrAdsSection from './components/WhyMrAdsSection';
import FinalCTASection from './components/FinalCTASection';
>>>>>>> Stashed changes
import WhatsAppButton from './components/WhatsAppButton';

export default function LandingPage() {
  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <Header />

      <main>
<<<<<<< Updated upstream
        <HeroSection />
        <AboutSection />
        <OfferSection />
        <HowItWorksSection />
        <LocationsSection />
        <PricingSection />
        <WhyItWorksSection />
        <SocialProofSection />
        <DemoVideoSection />
        <ContactSection />
=======
        <CinematicJourneyRouter />
        <ServicesDisplayAdvertising />
        <ServicesOnTheMove />
        <ServicesOfflineCreative />
        <ServicesNewspaperQuickCommerce />
        <ServicesPharmacyCover />
        <ServicesWebsiteAI />
        <WhyMrAdsSection />
        <FinalCTASection />
>>>>>>> Stashed changes
      </main>

      <Footer />

      {/* Sticky WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}