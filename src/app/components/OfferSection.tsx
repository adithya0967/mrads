'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const categories = [
  {
    icon: 'TvIcon',
    title: 'Digital Display Network',
    tagline: 'High-Impact Digital Screens',
    description: 'Get premium visibility on carefully placed digital screens where your target audience naturally gathers and dwells.',
    metrics: '30,000+ Screens · 20M+ Combined Reach',
    accent: false,
    colSpan: 'lg:col-span-6',
    items: [
      { label: 'Apartments', spec: '30,000+ screens' },
      { label: 'Restaurants', spec: '100+ screens' },
      { label: 'Corporate Offices', spec: '1,300+ screens' },
      { label: 'Gyms & Malls', spec: '300+ screens' },
      { label: 'Playzones / Hostels', spec: 'Common zones' }
    ]
  },
  {
    icon: 'TruckIcon',
    title: 'Transit & Outdoor Media',
    tagline: 'Advertising on the Move',
    description: 'Drive city-wide brand awareness by placing your message on moving vehicles and highly visible transit corridors.',
    metrics: 'Mysuru & Bengaluru Key Routes',
    accent: false,
    colSpan: 'lg:col-span-6',
    items: [
      { label: 'Auto Branding', spec: 'City-wide' },
      { label: 'Cab Branding', spec: 'Urban routes' },
      { label: 'Bus Branding', spec: 'High-traffic' },
      { label: 'Bus Shelters', spec: 'Mysuru (10 Shelters)' },
      { label: 'Mobile Vans & Road Shows', spec: 'Promotional' }
    ]
  },
  {
    icon: 'DocumentTextIcon',
    title: 'Offline & Dark Store inserts',
    tagline: 'Direct-to-Home Delivery',
    description: 'Reach customers straight at home through flyers and official inserts inside bags from top quick-commerce apps.',
    metrics: 'Swiggy Instamart · Zepto · Blinkit Partner',
    accent: false,
    colSpan: 'lg:col-span-7',
    items: [
      { label: 'Quick Commerce Inserts', spec: 'Zepto, Instamart, Blinkit' },
      { label: 'Newspaper Inserts', spec: 'Hyperlocal targeting' },
      { label: 'Pharmacy Cover Ads', spec: 'Take-home branding' },
      { label: 'Flyer Distribution', spec: 'Hand-to-Hand & Door-to-Door' },
      { label: 'Apartment Campaigns', spec: 'Event promotions' }
    ]
  },
  {
    icon: 'FilmIcon',
    title: 'Content Creation & Production',
    tagline: 'End-to-End Creative Assets',
    description: 'From creative concept to final delivery, we produce engaging promotional videos and motion graphics that convert.',
    metrics: 'Plan · Shoot · Edit · Deliver',
    accent: true,
    colSpan: 'lg:col-span-5',
    items: [
      { label: 'Promo Video Shoots', spec: 'Professional' },
      { label: 'Motion Graphics & VFX', spec: 'Modern' },
      { label: 'Creative Campaign Concepts', spec: 'Tailored' },
      { label: 'Ready-to-Publish Ads', spec: 'Optimized' }
    ]
  },
  {
    icon: 'GiftIcon',
    title: 'Corporate Gifting Solutions',
    tagline: 'Premium Custom Merchandise',
    description: 'Strengthen business relationships and build internal brand affinity with thoughtful, premium, custom-branded gifts.',
    metrics: 'Curated & Customized Products',
    accent: false,
    colSpan: 'lg:col-span-5',
    items: [
      { label: 'Employee Welcome Kits', spec: 'Onboarding' },
      { label: 'Joining & Milestone Kits', spec: 'Corporate' },
      { label: 'Festive Gift Hampers', spec: 'Premium curated' },
      { label: 'Custom Merchandise', spec: 'Branded shirts, bags' },
      { label: 'Event & Conference Gifts', spec: 'Bulk order' }
    ]
  },
  {
    icon: 'CodeBracketIcon',
    title: 'Web Design & AI Solutions',
    tagline: 'Smart Digital Tech',
    description: 'Establish a powerful, scalable online presence with modern web development, e-commerce stores, and custom AI integrations.',
    metrics: 'Mobile Friendly · SEO Ready · Secure',
    accent: false,
    colSpan: 'lg:col-span-7',
    items: [
      { label: 'Business Web Development', spec: 'Modern UI' },
      { label: 'E-Commerce Platforms', spec: 'Shopify / Custom' },
      { label: 'Custom AI Chatbots', spec: 'Lead generation' },
      { label: 'Hosting & Maintenance', spec: '24x7 support' },
      { label: 'Website Redesigns', spec: 'Optimized speed' }
    ]
  }
];

export default function OfferSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.offer-card').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="offer" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              What We Do
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.1] text-foreground">
              Hyperlocal Advertising.<br />Digital Solutions.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm font-medium leading-relaxed">
            Every campaign is built on high-impact channels—reaching your audience where they live, work, dine, travel, and buy.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`offer-card ${cat.colSpan} rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[360px] border transition-all duration-500 hover:scale-[0.99] ${
                cat.accent
                  ? 'bg-accent text-accent-foreground border-transparent shadow-xl'
                  : 'bg-card border-border hover:border-accent/30 hover:shadow-lg'
              }`}
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                transition: 'opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)'
              }}
            >
              {/* Card Header */}
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${
                  cat.accent
                    ? 'bg-white/20 border-white/30'
                    : 'bg-accent/10 border-accent/20'
                }`}>
                  <Icon
                    name={cat.icon}
                    size={24}
                    className={cat.accent ? 'text-white' : 'text-accent'}
                  />
                </div>
                
                <span className={`text-[10px] font-bold uppercase tracking-widest ${cat.accent ? 'text-white/60' : 'text-accent/80'} mb-1.5 block`}>
                  {cat.tagline}
                </span>
                
                <h3 className={`text-2xl font-extrabold mb-3 tracking-tight ${cat.accent ? 'text-white' : 'text-foreground'}`}>
                  {cat.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-6 ${cat.accent ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {cat.description}
                </p>
              </div>

              {/* Sub-items / Features */}
              <div className="mb-6 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item.label}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                      cat.accent
                        ? 'bg-white/10 text-white border border-white/10'
                        : 'bg-muted text-foreground/80 border border-border hover:border-accent/20'
                    }`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>

              {/* Card Footer Metric info */}
              <div className={`pt-4 border-t flex items-center justify-between ${
                cat.accent ? 'border-white/10 text-white/80' : 'border-border text-muted-foreground'
              }`}>
                <span className="text-xs font-extrabold uppercase tracking-wider">
                  {cat.metrics}
                </span>
                <Icon
                  name="ArrowRightIcon"
                  size={14}
                  className={cat.accent ? 'text-white' : 'text-accent'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
