'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

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
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  return (
    <section id="locations" className="py-20 md:py-28 bg-[#0B0C0E] border-b border-[#22242B]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#DC2626] mb-3 block">
              NETWORK COVERAGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Your Audience Is Already There.
            </h2>
          </div>
          <p className="text-[#9A9AA4] text-base font-normal max-w-md leading-relaxed">
            High-footfall environments across Bengaluru where your target customers live, work, dine, and spend quality time.
          </p>
        </div>

        {/* Environment Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-16">
          {environmentCategories.map((cat) => (
            <div
              key={cat.name}
              className="bg-[#14151A] border border-[#22242B] rounded-xl p-4 flex flex-col items-start gap-2 hover:border-[#DC2626] transition-colors shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0B0C0E] flex items-center justify-center border border-[#22242B]">
                <Icon name={cat.icon} size={16} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white leading-snug">{cat.name}</div>
                <div className="text-[11px] font-semibold text-[#DC2626]">{cat.count}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Locations Visual Showcase */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl font-extrabold text-white tracking-tight">
            Featured Venue Partners in Bengaluru
          </h3>
          <span className="text-xs font-semibold text-[#9A9AA4]">
            70+ Total Verified Venues
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVenues.map((venue) => (
            <div
              key={venue.name}
              className="bg-[#14151A] border border-[#22242B] rounded-xl overflow-hidden hover:border-[#DC2626] transition-all duration-300 group shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0C0E]">
                <AppImage
                  src={venue.img}
                  alt={venue.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-[#0B0C0E]/90 backdrop-blur-sm border border-[#22242B] rounded-md px-2.5 py-1 text-[11px] font-bold text-white">
                  Active Screen
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                  {venue.type}
                </div>
                <h4 className="text-lg font-extrabold text-white mb-1 tracking-tight">
                  {venue.name}
                </h4>
                <p className="text-xs font-medium text-[#9A9AA4] mb-4">
                  {venue.area}
                </p>

                <div className="pt-3 border-t border-[#22242B] flex items-center justify-between text-xs font-semibold text-white">
                  <span>Reach per location</span>
                  <span className="text-[#DC2626]">{venue.viewers}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Request Full List Card */}
          <div className="bg-[#14151A] border border-dashed border-[#22242B] rounded-xl p-8 flex flex-col justify-between items-start hover:border-[#DC2626] transition-colors">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#9A9AA4] mb-2 block">
                FULL NETWORK
              </span>
              <h4 className="text-xl font-extrabold text-white mb-2 tracking-tight">
                Want to target a specific pin code or neighborhood?
              </h4>
              <p className="text-sm text-[#9A9AA4] leading-relaxed font-normal">
                We provide custom location mapping across Indiranagar, Koramangala, Whitefield, HSR Layout, Malleshwaram, and Jayanagar.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#DC2626] hover:underline"
            >
              Request Full Location List & Map →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
