'use client';

import React from 'react';
import Link from 'next/link';
import TargetShell from '@/components/TargetShell';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import CountUp from '@/components/ui/CountUp';
import Reveal from '@/components/ui/Reveal';

const categories = [
  { id: 'restaurant', label: 'Restaurant', image: '/images/restaurant.jpg' },
  { id: 'apartment', label: 'Apartment', image: '/images/apartment.jpg' },
  { id: 'corporate', label: 'Corporate', image: '/images/corporate.jpg' },
  { id: 'mall', label: 'Mall', image: '/images/mall.jpg' },
  { id: 'fitness', label: 'Fitness', image: '/images/fitness.jpg' },
  { id: 'play-zone', label: 'Play Zone', image: '/images/playzone.jpg' },
  { id: 'pg-hostel', label: 'PG & Hostel', image: '/images/hostel.jpg' },
];

const networkStats = [
  { value: '2,400+', label: 'Restaurant screens', note: 'Network opportunity' },
  { value: '1,100+', label: 'Apartment screens', note: 'Network opportunity' },
  { value: '420+', label: 'Corporate locations', note: 'Network opportunity' },
  { value: '85+', label: 'Mall properties', note: 'Network opportunity' },
  { value: '310+', label: 'Fitness centres', note: 'Network opportunity' },
  { value: '60+', label: 'Play zones & family hubs', note: 'Network opportunity' },
  { value: '180+', label: 'PG & Hostel clusters', note: 'Network opportunity' },
];

const locationDisplays = [
  {
    id: 'restaurant',
    title: 'Restaurant Displays',
    image: '/images/restaurant-display.jpg',
    lead: 'Brands sit with the meal — in dining rooms and waiting areas, in front of guests who have already chosen to stay.',
    specs: [
      { label: 'Audience', value: 'Diners and waiting guests' },
      { label: 'Placement', value: 'Dining rooms and waiting areas' },
      { label: 'Format', value: 'Digital screens' },
      { label: 'Frequency', value: 'Loop through service hours' },
      { label: 'Hours', value: 'Typically lunch through late evening' },
    ],
  },
  {
    id: 'apartment',
    title: 'Apartment Displays',
    image: '/images/apartment.jpg',
    lead: 'Resident households pass the same lobby and lift every day. That repetition is the point.',
    specs: [
      { label: 'Audience', value: 'Resident households' },
      { label: 'Placement', value: 'Lift lobbies and common areas' },
      { label: 'Format', value: 'Digital screens' },
      { label: 'Frequency', value: 'Daily, repeated journeys' },
      { label: 'Hours', value: 'Building operating hours' },
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Displays',
    image: '/images/corporate.jpg',
    lead: 'Professionals and decision-makers in the places they work — lounges, lift banks and shared floors.',
    specs: [
      { label: 'Audience', value: 'Professionals and decision-makers' },
      { label: 'Placement', value: 'Office locations and common floors' },
      { label: 'Format', value: 'Digital screens' },
      { label: 'Frequency', value: 'Weekday occupancy cycles' },
      { label: 'Hours', value: 'Typical office hours' },
    ],
  },
  {
    id: 'mall',
    title: 'Mall Displays',
    image: '/images/mall.jpg',
    lead: 'Shoppers and families moving through retail and entertainment zones, with time to notice.',
    specs: [
      { label: 'Audience', value: 'Shoppers and families' },
      { label: 'Placement', value: 'Retail and entertainment zones' },
      { label: 'Format', value: 'Digital screens and site media' },
      { label: 'Frequency', value: 'Weekend and evening peaks' },
      { label: 'Hours', value: 'Mall trading hours' },
    ],
  },
  {
    id: 'fitness',
    title: 'Fitness Displays',
    image: '/images/fitness.jpg',
    lead: 'Active, health-conscious audiences in workout floors and waiting areas — a focused, returning public.',
    specs: [
      { label: 'Audience', value: 'Active, health-conscious members' },
      { label: 'Placement', value: 'Workout and waiting areas' },
      { label: 'Format', value: 'Digital screens' },
      { label: 'Frequency', value: 'Membership visit patterns' },
      { label: 'Hours', value: 'Early morning through evening' },
    ],
  },
  {
    id: 'play-zone',
    title: 'Play Zone Displays',
    image: '/images/playzone.jpg',
    lead: 'Parents waiting while children play — dwell time that few outdoor formats can match.',
    specs: [
      { label: 'Audience', value: 'Parents and children' },
      { label: 'Placement', value: 'Play and waiting areas' },
      { label: 'Format', value: 'Digital screens' },
      { label: 'Frequency', value: 'Session-based dwell' },
      { label: 'Hours', value: 'Venue operating hours' },
    ],
  },
  {
    id: 'pg-hostel',
    title: 'PG & Hostel Displays',
    image: '/images/hostel.jpg',
    lead: 'Students and young professionals in common rooms and reception — a concentrated, local audience.',
    specs: [
      { label: 'Audience', value: 'Students and young professionals' },
      { label: 'Placement', value: 'Common and reception areas' },
      { label: 'Format', value: 'Digital screens' },
      { label: 'Frequency', value: 'Daily residential traffic' },
      { label: 'Hours', value: 'Property operating hours' },
    ],
  },
];

export default function LocationsPage() {
  return (
    <TargetShell>
      {/* Hero */}
      <PageHero
        eyebrow="Locations / Display network"
        title="Opportunity to reach, at neighbourhood scale."
        copy="Digital screens in the rooms, lobbies and floors people already occupy. Figures below describe network opportunity — not guaranteed impressions."
      />

      {/* Categories quick jump */}
      <section className="border-b border-line bg-[#080808]">
        <div className="container-site py-12 md:py-16">
          <Reveal variant="fade-up">
            <p className="eyebrow">Categories</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="rounded-lg border border-line bg-white/[0.02] px-4 py-2 text-[13px] text-mute transition-all duration-200 hover:border-brand/50 hover:bg-[#D81F42]/10 hover:text-paper hover:-translate-y-0.5 active:translate-y-0"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Network Opportunity */}
      <section className="border-b border-line bg-graphite relative overflow-hidden">
        <div className="container-site py-20 md:py-24">
          <Reveal variant="fade-up">
            <p className="eyebrow">Network opportunity</p>
            <h2 className="mt-4 max-w-xl font-serif text-[28px] leading-tight tracking-tight md:text-[34px]">
              Scale to plan against — labelled clearly.
            </h2>
            <p className="mt-4 max-w-xl text-[14px] text-mute">
              Reach figures denote network opportunity to reach, not guaranteed impressions.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px bg-line md:grid-cols-4 lg:grid-cols-7 rounded-xl overflow-hidden border border-line">
            {networkStats.map((item, idx) => (
              <div key={item.label} className="bg-graphite px-4 py-6 hover:bg-white/[0.02] transition-colors">
                <p className="font-serif text-[32px] leading-none tracking-tight text-paper md:text-[36px]">
                  <CountUp value={item.value} />
                </p>
                <p className="mt-3 text-[12px] leading-snug text-mute">
                  {item.label}
                </p>
                <p className="mt-2 text-[10px] tracking-[0.14em] text-mute-2 uppercase">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Display Sections with Staggered Visual Reveal */}
      {locationDisplays.map((disp, index) => (
        <section
          key={disp.id}
          id={disp.id}
          className={`scroll-mt-24 border-b border-line ${
            index % 2 === 1 ? 'bg-graphite' : 'bg-ink'
          }`}
        >
          <div className="container-site grid items-center gap-10 py-16 md:grid-cols-12 md:gap-14 md:py-24">
            <div
              className={`md:col-span-7 ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}
            >
              <Reveal variant={index % 2 === 1 ? 'slide-right' : 'slide-left'}>
                <div className="img-reveal-box rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black shadow-2xl">
                  <img
                    src={disp.image}
                    alt={disp.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal variant={index % 2 === 1 ? 'slide-left' : 'slide-right'} delay={0.1}>
                <p className="eyebrow">Display</p>
                <h2 className="mt-4 font-serif text-[30px] leading-tight tracking-tight md:text-[36px]">
                  {disp.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-mute">
                  {disp.lead}
                </p>

                <dl className="mt-8 space-y-3.5 border-t border-line pt-6">
                  {disp.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid grid-cols-3 gap-4 text-[13px] py-1 -mx-2 px-2 rounded hover:bg-white/[0.02] transition-colors"
                    >
                      <dt className="text-mute-2">{spec.label}</dt>
                      <dd className="col-span-2 text-paper font-medium">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Cross links */}
      <section className="border-b border-line bg-[#080808]">
        <div className="container-site py-16">
          <Reveal variant="fade-up">
            <p className="text-[14.5px] text-mute">
              Looking for transit, print, creative or digital as well?{' '}
              <Link
                href="/advertising-on-the-move"
                className="text-paper underline decoration-brand/60 underline-offset-4 hover:text-brand transition-colors"
              >
                Advertising on the Move
              </Link>
              ,{' '}
              <Link
                href="/offline-print"
                className="text-paper underline decoration-brand/60 underline-offset-4 hover:text-brand transition-colors"
              >
                Offline & Print
              </Link>
              ,{' '}
              <Link
                href="/print-creative"
                className="text-paper underline decoration-brand/60 underline-offset-4 hover:text-brand transition-colors"
              >
                Print & Creative Design
              </Link>
              , or{' '}
              <Link
                href="/digital"
                className="text-paper underline decoration-brand/60 underline-offset-4 hover:text-brand transition-colors"
              >
                Digital & AI Solutions
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </TargetShell>
  );
}
