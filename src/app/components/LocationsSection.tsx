'use client';

import React, { useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import ScrollReveal from '@/components/ui/ScrollReveal';

const environmentCategories = [
  { name: 'Restaurants', count: '100+ Screens', icon: 'TvIcon' },
  { name: 'Apartments', count: '30,000+ Screens', icon: 'HomeIcon' },
  { name: 'Corporate Offices', count: '1,300+ Screens', icon: 'BriefcaseIcon' },
  { name: 'Gyms & Malls', count: '470+ Screens', icon: 'HeartIcon' },
  { name: 'Playzones', count: '50+ Zones', icon: 'SparklesIcon' },
  { name: 'Hotels', count: '40+ Locations', icon: 'BuildingOfficeIcon' },
  { name: 'Transit Routes', count: '10+ Corridors', icon: 'TruckIcon' },
];

const featuredVenues = [
  {
    name: 'Ayodhya Sagar',
    area: 'Malleshwaram, Bengaluru',
    type: 'Vegetarian Restaurant',
    viewers: '2,500+ Daily',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
  },
  {
    name: 'Kadamba Veg',
    area: 'Rajajinagar, Bengaluru',
    type: 'Family Dining Hub',
    viewers: '3,000+ Daily',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
  },
  {
    name: 'Udupi Brindavana',
    area: 'Malleshwaram, Bengaluru',
    type: 'South Indian Fine Dining',
    viewers: '2,000+ Daily',
    img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
  },
  {
    name: 'Shivalaya Grand',
    area: 'Nagarbhavi, Bengaluru',
    type: 'Multi-Cuisine Restaurant',
    viewers: '2,800+ Daily',
    img: 'https://images.unsplash.com/photo-1673332989500-6005cbd867f3',
  },
  {
    name: 'Bakasura Bandi',
    area: 'Annapoorneshwari Nagar, Bengaluru',
    type: 'Casual Dining & Waiting Area',
    viewers: '2,200+ Daily',
    img: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c',
  },
];

export default function LocationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="locations"
      className="py-20 md:py-28 bg-[#090A0C] border-b border-[#252830] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
                NETWORK COVERAGE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15]">
                Your Audience Is Already There.
              </h2>
            </div>
            <p className="text-[#9A9CA5] text-base font-normal max-w-md leading-relaxed">
              High-footfall environments across Bengaluru where your target customers live, work,
              dine, and spend quality time.
            </p>
          </div>
        </ScrollReveal>

        {/* Environment Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-16">
          {environmentCategories.map((cat, idx) => (
            <ScrollReveal
              key={cat.name}
              direction="up"
              staggerIndex={idx}
              totalItems={environmentCategories.length}
              staggerDelay={90}
            >
              <div className="pro-card rounded-xl p-4 flex flex-col items-start gap-2 group cursor-pointer hover:border-[#B4233C]">
                <div className="w-8 h-8 rounded-lg bg-[#090A0C] flex items-center justify-center border border-[#252830] group-hover:border-[#B4233C]/50 transition-colors">
                  <Icon
                    name={cat.icon}
                    size={16}
                    className="text-[#F5F5F5] group-hover:text-[#B4233C] transition-colors"
                  />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#F5F5F5] leading-snug group-hover:text-white transition-colors">
                    {cat.name}
                  </div>
                  <div className="text-[11px] font-semibold text-[#B4233C]">{cat.count}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Featured Locations Visual Showcase Header with Scroll Controls */}
        <ScrollReveal direction="up" delay={100}>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-[#F5F5F5] tracking-tight">
                Featured Venue Partners in Bengaluru
              </h3>
              <p className="text-xs font-medium text-[#9A9CA5] mt-1">
                70+ Total Verified High-Footfall Venues
              </p>
            </div>

            {/* Scroll Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="w-9 h-9 rounded-xl bg-[#111318] border border-[#252830] flex items-center justify-center text-[#F5F5F5] hover:bg-[#1E222D] hover:border-[#B4233C] transition-all"
              >
                <Icon name="ChevronLeftIcon" size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="w-9 h-9 rounded-xl bg-[#111318] border border-[#252830] flex items-center justify-center text-[#F5F5F5] hover:bg-[#1E222D] hover:border-[#B4233C] transition-all"
              >
                <Icon name="ChevronRightIcon" size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Scrollable Container for Cards */}
        <ScrollReveal direction="up" delay={150}>
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-4 no-scrollbar custom-horizontal-scroll"
          >
            {featuredVenues.map((venue) => (
              <div
                key={venue.name}
                className="pro-card rounded-2xl overflow-hidden shrink-0 w-[300px] sm:w-[360px] group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#090A0C]">
                    <AppImage
                      src={venue.img}
                      alt={venue.name}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                      sizes="(max-width: 768px) 300px, 360px"
                    />
                    <div className="absolute top-3 right-3 bg-[#090A0C]/90 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-[11px] font-bold text-[#F5F5F5] flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#16C784] animate-pulse" />
                      Active Screen
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#B4233C] mb-1">
                      {venue.type}
                    </div>
                    <h4 className="text-lg font-extrabold text-[#F5F5F5] mb-1 tracking-tight group-hover:text-white transition-colors">
                      {venue.name}
                    </h4>
                    <p className="text-xs font-medium text-[#9A9CA5] mb-4">{venue.area}</p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="pt-3 border-t border-[#252830] flex items-center justify-between text-xs font-semibold text-[#F5F5F5]">
                    <span className="text-[#9A9CA5]">Reach per location</span>
                    <span className="text-[#B4233C] font-extrabold">{venue.viewers}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Request Full List Card */}
            <div className="pro-card border-dashed border-[#252830] rounded-2xl p-8 shrink-0 w-[300px] sm:w-[360px] flex flex-col justify-between items-start hover:border-[#B4233C] transition-all group">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B4233C] mb-2 block">
                  FULL NETWORK
                </span>
                <h4 className="text-xl font-extrabold text-[#F5F5F5] mb-3 tracking-tight group-hover:text-white transition-colors">
                  Target specific pin codes or neighborhoods?
                </h4>
                <p className="text-sm text-[#9A9CA5] leading-relaxed font-normal">
                  Custom location mapping available across Indiranagar, Koramangala, Whitefield, HSR
                  Layout, Malleshwaram, and Jayanagar.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#B4233C] hover:text-[#D13B55] transition-colors group-hover:translate-x-1"
              >
                Request Full Location Map & List
                <Icon name="ArrowRightIcon" size={14} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
