'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import TargetShell from '@/components/TargetShell';
import PageHero from '@/components/PageHero';

const pricingChannels = [
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'apartment', label: 'Apartment' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'mall', label: 'Mall' },
  { id: 'fitness', label: 'Fitness' },
  { id: 'play', label: 'Play Zone' },
  { id: 'pg', label: 'PG & Hostel' },
  { id: 'transit', label: 'Auto / Cab / Bus' },
  { id: 'van', label: 'Mobile Van / Roadshow' },
  { id: 'flyer', label: 'Flyer Distribution' },
  { id: 'inserts', label: 'Newspaper / Quick Commerce' },
  { id: 'pharmacy', label: 'Pharmacy Covers' },
  { id: 'creative', label: 'Creative Services' },
  { id: 'digital', label: 'Website / AI' },
];

const durationOptions = ['1 month', '3 months', '6 months', '12 months'];

const budgetOptions = [
  'To be discussed',
  'Under ₹50,000 / month',
  '₹50,000 – ₹1.5 lakh / month',
  '₹1.5 – ₹5 lakh / month',
  '₹5 lakh+ / month',
];

export default function PricingPage() {
  const router = useRouter();
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    'restaurant',
    'apartment',
  ]);
  const [city, setCity] = useState('');
  const [duration, setDuration] = useState('3 months');
  const [budget, setBudget] = useState(budgetOptions[2]);

  const channelLabels = useMemo(
    () =>
      pricingChannels
        .filter((ch) => selectedChannels.includes(ch.id))
        .map((ch) => ch.label),
    [selectedChannels]
  );

  function toggleChannel(id: string) {
    setSelectedChannels((prev) =>
      prev.includes(id) ? prev.filter((ch) => ch !== id) : [...prev, id]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const brief = [
      city ? `City: ${city}` : 'City: not specified',
      `Duration: ${duration}`,
      `Monthly budget: ${budget}`,
      channelLabels.length
        ? `Channels: ${channelLabels.join(', ')}`
        : 'Channels: to be advised',
    ].join('\n');

    const params = new URLSearchParams();
    params.set('brief', brief);
    params.set('requirement', 'A combined media plan');
    params.set('interest', 'Media Plans,Campaign Pricing');

    router.push(`/contact?${params.toString()}`);
  }

  return (
    <TargetShell>
      <PageHero
        eyebrow="Pricing / Media plan"
        title="Media Plan Starter."
        copy="Select channels, a city, duration and a monthly budget. We use this as a brief — not a checkout. Pricing is prepared for your market."
      />

      <section className="border-b border-line">
        <div className="container-site py-16 md:py-24">
          <form onSubmit={handleSubmit} className="grid items-start gap-12 lg:grid-cols-12">
            {/* Left Options Form */}
            <div className="lg:col-span-7">
              <fieldset>
                <legend className="eyebrow">Channels</legend>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pricingChannels.map((ch) => {
                    const isSelected = selectedChannels.includes(ch.id);
                    return (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => toggleChannel(ch.id)}
                        aria-pressed={isSelected}
                        className={`rounded-sm border px-3.5 py-2 text-[13px] transition-colors duration-200 ${
                          isSelected
                            ? 'border-brand bg-brand/10 text-paper'
                            : 'border-line text-mute hover:border-paper/30 hover:text-paper'
                        }`}
                      >
                        {ch.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <label className="block">
                  <span className="eyebrow">City</span>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Bengaluru, Hyderabad…"
                    className="mt-3 w-full border-0 border-b border-line bg-transparent py-3 text-[15px] text-paper placeholder:text-mute-2 focus:border-brand focus:ring-0 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="eyebrow">Campaign duration</span>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="mt-3 w-full appearance-none border-0 border-b border-line bg-transparent py-3 text-[15px] text-paper focus:border-brand focus:outline-none"
                  >
                    {durationOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-ink text-paper">
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="eyebrow">Monthly budget</span>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="mt-3 w-full appearance-none border-0 border-b border-line bg-transparent py-3 text-[15px] text-paper focus:border-brand focus:outline-none"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-ink text-paper">
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <aside className="border border-line bg-graphite p-7 lg:sticky lg:top-24 lg:col-span-5">
              <p className="eyebrow">Live summary</p>
              <h2 className="mt-4 font-serif text-[26px] leading-tight text-paper">
                Your brief
              </h2>

              <dl className="mt-8 space-y-5 text-[14px]">
                <div className="border-t border-line pt-4">
                  <dt className="text-mute-2">City</dt>
                  <dd className="mt-1 text-paper">{city || 'Not specified'}</dd>
                </div>
                <div className="border-t border-line pt-4">
                  <dt className="text-mute-2">Duration</dt>
                  <dd className="mt-1 text-paper">{duration}</dd>
                </div>
                <div className="border-t border-line pt-4">
                  <dt className="text-mute-2">Monthly budget</dt>
                  <dd className="mt-1 text-paper">{budget}</dd>
                </div>
                <div className="border-t border-line pt-4">
                  <dt className="text-mute-2">Selected channels</dt>
                  <dd className="mt-2 text-paper">
                    {channelLabels.length ? channelLabels.join(' · ') : 'None selected'}
                  </dd>
                </div>
              </dl>

              <p className="mt-8 text-[12px] leading-relaxed text-mute-2">
                This is a planning brief. We will respond with a media plan — not an automated quote.
              </p>

              <div className="mt-6">
                <button
                  type="submit"
                  className="btn-arrow inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand px-5 py-2.5 text-[13px] font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-brand-hover"
                >
                  Send this Brief → Request Media Plan
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </aside>
          </form>
        </div>
      </section>
    </TargetShell>
  );
}
