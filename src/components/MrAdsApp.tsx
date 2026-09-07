'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import TopBar from './landing/TopBar';
import Navbar from './landing/Navbar';
import HeroSection from './landing/HeroSection';
import AdvantageSection from './landing/AdvantageSection';
import WhyPreviewSection from './landing/WhyPreviewSection';
import ReachSection from './landing/ReachSection';
import SolutionsPreviewSection from './landing/SolutionsPreviewSection';
import DisplaySection from './landing/DisplaySection';
import MovingMediaSection from './landing/MovingMediaSection';
import OfflineSection from './landing/OfflineSection';
import CreativeSection from './landing/CreativeSection';
import DigitalAiSection from './landing/DigitalAiSection';
import WhyFullSection from './landing/WhyFullSection';
import MediaPlanBuilderSection from './landing/MediaPlanBuilderSection';
import ContactSection from './landing/ContactSection';
import Footer from './landing/Footer';
import LightboxModal from './landing/LightboxModal';

export default function MrAdsApp() {
  // Navigation & Scroll state
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navShadow, setNavShadow] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toast state
  const [toastMsg, setToastMsg] = useState('Done');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2600);
  };

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

  // Contact / Form State
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formReq, setFormReq] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [formErr, setFormErr] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [refId, setRefId] = useState('MR-0000');
  const [mailtoUrl, setMailtoUrl] = useState('mailto:knowus@mr-ads.in');

  const toggleInterest = (val: string) => {
    setSelectedInterests((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]
    );
  };

  const handlePrefill = (env: string | null, interest?: string | null) => {
    if (env) {
      setFormReq(env);
      triggerToast('Requirement set: ' + env);
    }
    if (interest) {
      setSelectedInterests((prev) => (prev.includes(interest) ? prev : [...prev, interest]));
    }
  };

  const handleSendBriefFromBuilder = (
    city: string,
    duration: string,
    budget: string,
    channels: string[]
  ) => {
    if (city.trim()) {
      setFormCity(city.trim());
    }
    if (channels.length > 0) {
      setFormReq(channels[0]);
    }
    const message = `Hi Mr. Ads — please share a media plan.\nCity: ${
      city.trim() || '—'
    }\nDuration: ${duration}\nBudget: ${budget}\nChannels: ${channels.join(
      ', '
    )}\nPlease include locations, formats, frequency & pricing.`;
    setFormMsg(message);

    setSelectedInterests((prev) => {
      const next = [...prev];
      if (!next.includes('Media Plans')) next.push('Media Plans');
      if (!next.includes('Campaign Pricing')) next.push('Campaign Pricing');
      return next;
    });

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    triggerToast('Brief ready — complete the form to send');
  };

  const handleLightboxEnquire = (title: string) => {
    handleCloseLightbox();
    const reqName = title.includes('Road')
      ? 'Mobile Van / Bus Shelter / Roadshow'
      : 'Auto / Cab / Bus Branding';
    setFormReq(reqName);
    triggerToast('Requirement set: ' + title);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormErr(null);

    const name = formName.trim();
    const phone = formPhone.trim();
    const email = formEmail.trim();
    const city = formCity.trim();
    const req = formReq;

    let msg = '';
    if (!name) msg = 'Please enter your name.';
    else if (!phone || phone.replace(/\D/g, '').length < 10)
      msg = 'Please enter a valid phone number (10+ digits).';
    else if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      msg = 'Please enter a valid email address.';
    else if (!city) msg = 'Please enter your city / location.';
    else if (!req) msg = 'Please select your advertising requirement.';
    else if (selectedInterests.length === 0)
      msg = 'Please tap at least one interest (e.g., Media Plans).';

    if (msg) {
      setFormErr(msg);
      const errEl = document.getElementById('leadForm');
      if (errEl) errEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const generatedRef = 'MR-' + Math.floor(1000 + Math.random() * 9000);
    setRefId(generatedRef);

    const brief =
      'Name: ' +
      name +
      '%0D%0ACompany: ' +
      (formCompany.trim() || '—') +
      '%0D%0APhone: ' +
      phone +
      '%0D%0AEmail: ' +
      email +
      '%0D%0ACity: ' +
      city +
      '%0D%0ARequirement: ' +
      req +
      '%0D%0AInterests: ' +
      selectedInterests.join(', ') +
      '%0D%0AMessage: ' +
      (formMsg.trim() || '—') +
      '%0D%0ARef: ' +
      generatedRef;

    const mailLink =
      'mailto:knowus@mr-ads.in?subject=' +
      encodeURIComponent('Media Plan Request ' + generatedRef + ' — ' + name) +
      '&body=' +
      brief;

    setMailtoUrl(mailLink);
    setFormSuccess(true);
    triggerToast('Enquiry ready · Ref ' + generatedRef);
  };

  // Scroll Progress & Active Nav IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const progress = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrollProgress(progress);
      setNavShadow(h.scrollTop > 10);
      setShowToTop(h.scrollTop > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const secIds = ['home', 'solutions', 'display', 'moving', 'offline', 'digital', 'why', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    secIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Scroll Progress Bar */}
      <div id="progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Top Bar */}
      <TopBar />

      {/* Header / Navbar */}
      <Navbar
        activeNav={activeNav}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navShadow={navShadow}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AdvantageSection />
        <WhyPreviewSection />
        <ReachSection onPrefill={handlePrefill} />
        <SolutionsPreviewSection />
        <DisplaySection onPrefill={handlePrefill} />
        <MovingMediaSection onOpenLightbox={handleOpenLightbox} onPrefill={handlePrefill} />
        <OfflineSection onPrefill={handlePrefill} />
        <CreativeSection onPrefill={handlePrefill} />
        <DigitalAiSection onPrefill={handlePrefill} />
        <WhyFullSection />
        <MediaPlanBuilderSection onSendBrief={handleSendBriefFromBuilder} onToast={triggerToast} />
        <ContactSection
          formName={formName}
          setFormName={setFormName}
          formCompany={formCompany}
          setFormCompany={setFormCompany}
          formPhone={formPhone}
          setFormPhone={setFormPhone}
          formEmail={formEmail}
          setFormEmail={setFormEmail}
          formCity={formCity}
          setFormCity={setFormCity}
          formReq={formReq}
          setFormReq={setFormReq}
          formMsg={formMsg}
          setFormMsg={setFormMsg}
          selectedInterests={selectedInterests}
          toggleInterest={toggleInterest}
          formErr={formErr}
          formSuccess={formSuccess}
          refId={refId}
          mailtoUrl={mailtoUrl}
          onSubmit={handleFormSubmit}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile sticky CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-line px-4 py-3 flex gap-2">
        <a href="tel:+919686544644" className="btn-ghost flex-1 text-center font-bold text-sm py-3 rounded-full text-navy">
          <i className="fa-solid fa-phone mr-1.5 text-xs"></i> Call
        </a>
        <a href="#contact" className="btn-primary flex-[2] text-center font-bold text-sm py-3 rounded-full">
          Get a Media Plan
        </a>
      </div>
      <div className="sm:hidden h-[68px]"></div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        data={lightboxData}
        onClose={handleCloseLightbox}
        onEnquire={handleLightboxEnquire}
      />

      {/* Toast Notification */}
      <div id="toast" className={`fixed bottom-24 sm:bottom-6 left-1/2 -translate-x-1/2 z-[95] ${showToast ? 'block' : 'hidden'}`}>
        <div className="bg-navy text-white text-[13.5px] font-bold px-5 py-3.5 rounded-full shadow-lift flex items-center gap-2.5 whitespace-nowrap">
          <i className="fa-solid fa-circle-check text-emerald-400"></i>
          <span id="toastMsg">{toastMsg}</span>
        </div>
      </div>

      {/* Back to Top */}
      <button
        id="toTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-40 w-11 h-11 rounded-full bg-navy text-white shadow-lift ${
          showToTop ? 'flex' : 'hidden'
        } items-center justify-center hover:bg-brand transition`}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up text-sm"></i>
      </button>
    </div>
  );
}
