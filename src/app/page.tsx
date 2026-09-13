import React from 'react';
import TargetShell from '@/components/TargetShell';
import HomeHero from '@/components/home/HomeHero';
import HomeStats from '@/components/home/HomeStats';
import AboutSection from './components/AboutSection';
import OfferSection from './components/OfferSection';
import LocationsSection from './components/LocationsSection';
import NetworkMapSection from './components/NetworkMapSection';
import WhyItWorksSection from './components/WhyItWorksSection';
import HowItWorksSection from './components/HowItWorksSection';
import PricingSection from './components/PricingSection';
import SocialProofSection from './components/SocialProofSection';
import DemoVideoSection from './components/DemoVideoSection';
import FinalCta from '@/components/FinalCta';
import WhatsAppButton from './components/WhatsAppButton';

export default function LandingPage() {
  return (
    <TargetShell>
      <HomeHero />
      <HomeStats />
      <AboutSection />
      <OfferSection />
      <LocationsSection />
      <NetworkMapSection />
      <WhyItWorksSection />
      <HowItWorksSection />
      <PricingSection />
      <SocialProofSection />
      <DemoVideoSection />
      <FinalCta />
      <WhatsAppButton />
    </TargetShell>
  );
}
