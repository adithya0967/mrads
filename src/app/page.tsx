import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
import WhatsAppButton from './components/WhatsAppButton';

export default function LandingPage() {
  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <Header />

      <main>
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
      </main>

      <Footer />

      {/* Sticky WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}