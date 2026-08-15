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
    <section id="locations" className="py-20 md:py-28 bg-[#090A0C] border-b border-[#252830]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
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
            High-footfall environments across Bengaluru where your target customers live, work, dine, and spend quality time.
          </p>
        </div>

        {/* Environment Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-16">
          {environmentCategories.map((cat) => (
            <div
              key={cat.name}
              className="bg-[#111318] border border-[#252830] rounded-xl p-4 flex flex-col items-start gap-2 hover:border-[#B4233C] transition-colors shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-[#090A0C] flex items-center justify-center border border-[#252830]">
                <Icon name={cat.icon} size={16} className="text-[#F5F5F5]" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-[#F5F5F5] leading-snug">{cat.name}</div>
                <div className="text-[11px] font-semibold text-[#B4233C]">{cat.count}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Locations Visual Showcase */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl font-extrabold text-[#F5F5F5] tracking-tight">
            Featured Venue Partners in Bengaluru
          </h3>
          <span className="text-xs font-semibold text-[#9A9CA5]">
            70+ Total Verified Venues
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVenues.map((venue) => (
            <div
              key={venue.name}
              className="bg-[#111318] border border-[#252830] rounded-xl overflow-hidden hover:border-[#B4233C] transition-all duration-300 group shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#090A0C]">
                <AppImage
                  src={venue.img}
                  alt={venue.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-[#090A0C]/90 backdrop-blur-sm border border-[#252830] rounded-md px-2.5 py-1 text-[11px] font-bold text-[#F5F5F5]">
                  Active Screen
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#B4233C] mb-1">
                  {venue.type}
                </div>
                <h4 className="text-lg font-extrabold text-[#F5F5F5] mb-1 tracking-tight">
                  {venue.name}
                </h4>
                <p className="text-xs font-medium text-[#9A9CA5] mb-4">
                  {venue.area}
                </p>

                <div className="pt-3 border-t border-[#252830] flex items-center justify-between text-xs font-semibold text-[#F5F5F5]">
                  <span>Reach per location</span>
                  <span className="text-[#B4233C]">{venue.viewers}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Request Full List Card */}
          <div className="bg-[#111318] border border-dashed border-[#252830] rounded-xl p-8 flex flex-col justify-between items-start hover:border-[#B4233C] transition-colors">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#9A9CA5] mb-2 block">
                FULL NETWORK
              </span>
              <h4 className="text-xl font-extrabold text-[#F5F5F5] mb-2 tracking-tight">
                Want to target a specific pin code or neighborhood?
              </h4>
              <p className="text-sm text-[#9A9CA5] leading-relaxed font-normal">
                We provide custom location mapping across Indiranagar, Koramangala, Whitefield, HSR Layout, Malleshwaram, and Jayanagar.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#B4233C] hover:underline"
            >
              Request Full Location List & Map →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
