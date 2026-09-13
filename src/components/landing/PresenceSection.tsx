import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const presenceVenues = [
  { label: 'Restaurants & Bistros', screens: '2,400+ screens', image: '/images/restaurant.jpg', to: '/locations#restaurant' },
  { label: 'Residential Apartments', screens: '1,100+ screens', image: '/images/apartment.jpg', to: '/locations#apartment' },
  { label: 'Corporate Tech Parks', screens: '420+ locations', image: '/images/corporate.jpg', to: '/locations#corporate' },
  { label: 'Shopping Malls', screens: '85+ hubs', image: '/images/mall.jpg', to: '/locations#mall' },
  { label: 'Fitness & Gym Centres', screens: '310+ locations', image: '/images/fitness.jpg', to: '/locations#fitness' },
  { label: 'Play Zones & Family Hubs', screens: '60+ zones', image: '/images/playzone.jpg', to: '/locations#play-zone' },
  { label: 'PG & Student Hostels', screens: '180+ clusters', image: '/images/hostel.jpg', to: '/locations#pg-hostel' },
  { label: 'Streets & City Transit', screens: 'Metropolitan Fleet', image: '/images/streets.jpg', to: '/advertising-on-the-move' },
];

export default function PresenceSection() {
  return (
    <section className="relative border-b border-line bg-[#0D0D0D]">
      <div className="container-site py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow text-[#929292]">Presence</p>
            <h2 className="mt-4 font-serif text-[32px] sm:text-[42px] leading-tight tracking-tight text-paper font-normal">
              Where your audience is.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-mute">
            Advertising works when it meets people in the places they already choose — not when it interrupts a journey they never take.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {presenceVenues.map((item) => (
            <Link
              key={item.label}
              href={item.to}
              className="group relative block rounded-xl overflow-hidden border border-white/[0.08] bg-[#141414] hover:border-brand/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(216,31,66,0.15)] transition-all duration-300"
            >
              <div className="img-zoom aspect-[4/3] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-[11px] font-semibold text-brand tracking-wider uppercase">
                  {item.screens}
                </p>
                <h3 className="mt-1 text-[14.5px] sm:text-[15.5px] font-semibold text-paper group-hover:text-white transition-colors">
                  {item.label}
                </h3>
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand text-white shadow-md">
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
