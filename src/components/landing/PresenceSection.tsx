import React from 'react';
import Link from 'next/link';

export const presenceVenues = [
  { label: 'Restaurants', image: '/images/restaurant.jpg', to: '/locations#restaurant' },
  { label: 'Apartments', image: '/images/apartment.jpg', to: '/locations#apartment' },
  { label: 'Corporate', image: '/images/corporate.jpg', to: '/locations#corporate' },
  { label: 'Malls', image: '/images/mall.jpg', to: '/locations#mall' },
  { label: 'Fitness Centres', image: '/images/fitness.jpg', to: '/locations#fitness' },
  { label: 'Play Zones', image: '/images/playzone.jpg', to: '/locations#play-zone' },
  { label: 'PG & Hostels', image: '/images/hostel.jpg', to: '/locations#pg-hostel' },
  { label: 'Streets / Transit', image: '/images/streets.jpg', to: '/advertising-on-the-move' },
];

export default function PresenceSection() {
  return (
    <section className="border-b border-line bg-graphite">
      <div className="container-site py-20 md:py-28">
        <div>
          <p className="eyebrow">Presence</p>
          <h2 className="mt-4 max-w-xl font-serif text-[32px] leading-tight tracking-tight text-paper md:text-[40px]">
            Where your audience is.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mute">
            Advertising works when it meets people in the places they already choose — not when it interrupts a journey they never take.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {presenceVenues.map((item) => (
            <Link
              key={item.label}
              href={item.to}
              className="group relative block bg-ink"
            >
              <div className="img-zoom aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-[13px] text-paper font-medium">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
