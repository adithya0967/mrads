import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import HeroStatsSection from './components/HeroStatsSection';
import AboutSection from './components/AboutSection';
import OfferSection from './components/OfferSection';
import LocationsSection from './components/LocationsSection';
import NetworkMapSection from './components/NetworkMapSection';
import WhyItWorksSection from './components/WhyItWorksSection';
import HowItWorksSection from './components/HowItWorksSection';
import PricingSection from './components/PricingSection';
import SocialProofSection from './components/SocialProofSection';
import DemoVideoSection from './components/DemoVideoSection';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white font-sans antialiased">
      <Header />

      <main>
        <HeroSection />
        <HeroStatsSection />
        <AboutSection />
        <OfferSection />
        <LocationsSection />
        <NetworkMapSection />
        <WhyItWorksSection />
        <HowItWorksSection />
        <PricingSection />
        <SocialProofSection />
        <DemoVideoSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}