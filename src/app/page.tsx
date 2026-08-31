import React from 'react';
import Header from '@/components/Header';
<<<<<<< Updated upstream
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
=======
import BillboardTimesSquareHero from '@/components/cinematic/BillboardTimesSquareHero';
import DisplayAdvertisingSection from '@/components/cinematic/DisplayAdvertisingSection';
import AdvertisingOnTheMove from '@/components/cinematic/AdvertisingOnTheMove';
import OfflineCreativeSection from '@/components/cinematic/OfflineCreativeSection';
import DigitalAndAISolutions from '@/components/cinematic/DigitalAndAISolutions';
import WhyMrAdsSection from '@/components/cinematic/WhyMrAdsSection';
import FinalCTASection from '@/components/cinematic/FinalCTASection';
>>>>>>> Stashed changes
import WhatsAppButton from './components/WhatsAppButton';

export default function LandingPage() {
  return (
<<<<<<< Updated upstream
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
=======
    <div className="min-h-screen bg-[#060709] text-[#F5F5F5] font-sans antialiased selection:bg-purple-600 selection:text-white">
      {/* Premium Minimal Navigation Header */}
      <Header />

      <main className="relative">
        {/* Signature Billboard → Zoom In → Full Screen → Camera Pullback → Times Square Reveal Engine */}
        <BillboardTimesSquareHero />

        {/* Display Advertising Ecosystem (Restaurants, Apartments, Corporate, Malls, Fitness, Play Zones, Hostels) */}
        <DisplayAdvertisingSection />

        {/* Moving Vehicles & Transit Media (Autos, Cabs, Buses, Mobile Vans, Bus Shelters, Roadshows) */}
        <AdvertisingOnTheMove />

        {/* Offline & Creative Advertising + Distribution (Print, Newspaper Inserts, Pharmacy Covers, Hand-to-Hand) */}
        <OfflineCreativeSection />

        {/* Digital Ecosystem Extension (Web Application Development, E-Commerce & AI Chatbots) */}
        <DigitalAndAISolutions />

        {/* Why Mr. Ads (The 6 Strategic Pillars of Hyperlocal Real-World Presence) */}
        <WhyMrAdsSection />

        {/* Final Brand CTA & Contact Resolution */}
        <FinalCTASection />
      </main>

      {/* Floating WhatsApp Action Button */}
>>>>>>> Stashed changes
      <WhatsAppButton />
    </>
  );
}