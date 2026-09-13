'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const networks = [
  {
    name: 'Apartment Displays',
    screens: '30,000+ Screens',
    reach: '15 Million+ Reach',
    spec: 'Size: 32" · 10s Slots · Plays 720x/day',
    desc: 'Lobby & lift screens in premium residential communities.',
    icon: 'HomeIcon',
    tag: 'Residential'
  },
  {
    name: 'Corporate Displays',
    screens: '1,300+ Screens',
    reach: '1.6 Million+ Reach',
    spec: 'Size: 32" · 10s Slots · Plays 420x/day',
    desc: 'Reaching working professionals & corporate decision-makers.',
    icon: 'BriefcaseIcon',
    tag: 'Corporate'
  },
  {
    name: 'Fitness Space Displays',
    screens: '170+ Screens',
    reach: '2 Million+ Reach',
    spec: 'Size: 55" · 15s Slots · Plays 480x/day',
    desc: 'Placed in high-dwell workout and waiting zones of gyms.',
    icon: 'HeartIcon',
    tag: 'Fitness'
  },
  {
    name: 'Restaurant Displays',
    screens: '100+ Screens',
    reach: '1.5 Million+ Reach',
    spec: 'Size: 50" · 25s Slots · Plays 180x/day',
    desc: 'Screens mounted in busy dining & waiting sections.',
    icon: 'TvIcon',
    tag: 'Dining'
  },
  {
    name: 'Mall Displays',
    screens: '145+ Screens',
    reach: '1.1 Million+ Reach',
    spec: '12 Hours (10 AM - 10 PM) · BTL & Digital',
    desc: 'Influencing purchase decisions in retail environments.',
    icon: 'ShoppingBagIcon',
    tag: 'Retail'
  },
  {
    name: 'Bus Shelter Branding',
    screens: '10 Shelters',
    reach: '40,000+ Daily Reach',
    spec: '230 Sq Ft Area · 24x7 Constant Exposure',
    desc: 'Large-format outdoor presence on key Mysuru routes.',
    icon: 'MapPinIcon',
    tag: 'Transit'
  }
];

const locations = [
  {
    name: 'Ayodhya Sagar',
    area: 'Malleshwaram',
    type: 'Vegetarian Restaurant',
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_11521d3e0-1774103234852.png",
    alt: 'Warm restaurant interior with wooden tables and soft lighting, ideal for digital display advertising'
  },
  {
    name: 'Kadamba Veg',
    area: 'Rajajinagar',
    type: 'Family Dining',
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_1619fb222-1766590827288.png",
    alt: 'Bustling family restaurant with multiple dining tables and bright ambient lighting'
  },
  {
    name: 'Udupi Brindavana',
    area: 'Malleshwaram',
    type: 'South Indian',
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_15bd7534e-1772164144159.png",
    alt: 'South Indian restaurant with traditional decor and well-lit dining area'
  },
  {
    name: 'Shivalaya Grand',
    area: 'Nagarbhavi',
    type: 'Multi-Cuisine',
    img: "https://images.unsplash.com/photo-1673332989500-6005cbd867f3",
    alt: 'Grand restaurant interior with high ceilings, decorative lights, and spacious seating'
  },
  {
    name: 'Bakasura Bandi',
    area: 'Annapoorneshwari Nagar',
    type: 'Street-Style Dining',
    img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d09dbfea-1775246725226.png",
    alt: 'Vibrant casual dining space with colourful decor and lively atmosphere'
  }
];

export default function LocationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<'network' | 'venues'>('network');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-card').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <section id="locations" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Section Title */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              Our Active Reach
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-foreground">
              Explore Our Networks
            </h2>
          </div>
          
          {/* Tab Switcher */}
          <div className="flex bg-muted p-1 border border-border rounded-xl">
            <button
              onClick={() => setActiveTab('network')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'network' ? 'bg-accent text-white shadow' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Network Stats
            </button>
            <button
              onClick={() => setActiveTab('venues')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'venues' ? 'bg-accent text-white shadow' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Featured Restaurants
            </button>
          </div>
        </div>

        {/* Tab 1: Network Stats Dashboard */}
        {activeTab === 'network' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networks.map((net, i) => (
              <div
                key={net.name}
                className="reveal-card group bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-black/20 transition-all duration-500"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: `opacity 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s, transform 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s`
                }}
              >
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center border border-accent/20">
                    <Icon name={net.icon} size={22} className="text-accent" />
                  </div>
                  <span className="px-2.5 py-1 bg-muted border border-border rounded-full text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    {net.tag}
                  </span>
                </div>

                <h3 className="font-extrabold text-foreground text-lg mb-1 leading-tight group-hover:text-accent transition-colors">
                  {net.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  {net.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-border/60">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Screens</span>
                    <span className="text-sm font-extrabold text-foreground">{net.screens}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Reach</span>
                    <span className="text-sm font-extrabold text-accent">{net.reach}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[9px] font-bold text-muted-foreground/60 tracking-wider">Specs: {net.spec}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Featured Restaurants (Existing Listing) */}
        {activeTab === 'venues' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc, i) => (
              <div
                key={loc.name}
                className="reveal-card group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:border-accent/30 transition-all duration-500"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: `opacity 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s, transform 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s`
                }}
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={loc.img}
                    alt={loc.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-blink" />
                    <span className="text-white text-[10px] font-bold uppercase tracking-wide">Active</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-extrabold text-foreground text-base leading-tight">{loc.name}</h3>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Icon name="MapPinIcon" size={13} className="text-accent" />
                        <span className="text-xs font-semibold text-muted-foreground">{loc.area}</span>
                      </div>
                    </div>
                    <span className="shrink-0 px-2.5 py-1 bg-accent/15 border border-accent/25 rounded-full text-[10px] font-bold text-red-400 text-nowrap">
                      {loc.type}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5">
                      <Icon name="UsersIcon" size={13} className="text-muted-foreground" />
                      <span className="text-xs font-bold text-muted-foreground">2,000–3,000 / day</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="TvIcon" size={13} className="text-muted-foreground" />
                      <span className="text-xs font-bold text-muted-foreground">Display Active</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-border text-foreground rounded-full font-bold text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
          >
            Request Full Network List
            <Icon name="ArrowRightIcon" size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}