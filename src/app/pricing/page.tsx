'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import TargetShell from '@/components/TargetShell';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Reveal from '@/components/ui/Reveal';
import { ArrowRight, Check, CheckCircle2, Sparkles } from 'lucide-react';

const pricingChannels = [
  { id: 'restaurant', label: 'Restaurant Displays' },
  { id: 'apartment', label: 'Apartment Lift Lobbies' },
  { id: 'corporate', label: 'Corporate Tech Parks' },
  { id: 'mall', label: 'Shopping Malls' },
  { id: 'fitness', label: 'Fitness & Gyms' },
  { id: 'play', label: 'Play Zones' },
  { id: 'pg', label: 'PG & Hostels' },
  { id: 'transit', label: 'Auto / Cab / Bus Wraps' },
  { id: 'van', label: 'Mobile Promo Van' },
  { id: 'flyer', label: 'Flyer Distribution' },
  { id: 'inserts', label: 'Newspaper & Dark Store Inserts' },
  { id: 'pharmacy', label: 'Pharmacy Covers' },
  { id: 'creative', label: 'Creative Studio Design' },
  { id: 'digital', label: 'Website / AI Solution' },
];

const durationOptions = ['1 month', '3 months', '6 months', '12 months'];

const budgetOptions = [
  'To be discussed',
  'Under ₹50,000 / month',
  '₹50,000 – ₹1.5 lakh / month',
  '₹1.5 – ₹5 lakh / month',
  '₹5 lakh+ / month',
];

const benchmarkPackages = [
  {
    name: 'Local Launch',
    ideal: 'Best for single-store retail, local clinics, gyms & restaurants',
    budget: '₹50,000 – ₹1.5 Lakh / month',
    highlight: 'Area Footfall',
    channels: [
      'Targeted restaurant & apartment screens in 1–2 PIN codes',
      'Door-to-door flyer drops or newspaper inserts',
      'Studio creative layout adaptation',
    ],
  },
  {
    name: 'Omni-Presence Growth',
    ideal: 'Best for regional brands, hospitals, schools & D2C expansion',
    budget: '₹1.5 – ₹5 Lakh / month',
    highlight: 'Most Popular',
    channels: [
      'Multi-hub display screens (Restaurants + Apartments + Malls)',
      'High-traffic auto or cab fleet wraps on daily commuter corridors',
      'Full print collateral & digital campaign landing page',
    ],
  },
  {
    name: 'Hyper-Density Takeover',
    ideal: 'Best for tech startups, real estate launches & major brands',
    budget: '₹5 Lakh+ / month',
    highlight: 'Maximum Reach',
    channels: [
      'City-wide digital screen dominance across corporate & malls',
      'Full metropolitan bus & mobile van roadshow activations',
      'End-to-end creative, doorstep insertion, and 24/7 AI chatbot triage',
    ],
  },
];

export default function PricingPage() {
  const router = useRouter();
  const [selectedChannels, setSelectedChannels] = useState<string[]>(['restaurant', 'apartment']);
  const [city, setCity] = useState('');
  const [duration, setDuration] = useState('3 months');
  const [budget, setBudget] = useState(budgetOptions[2]);

  const channelLabels = useMemo(
    () => pricingChannels.filter((ch) => selectedChannels.includes(ch.id)).map((ch) => ch.label),
    [selectedChannels]
  );

  function toggleChannel(id: string) {
    setSelectedChannels((prev) =>
      prev.includes(id) ? prev.filter((ch) => ch !== id) : [...prev, id]
    );
  }

  function handlePackageSelect(pkgChannels: string[], pkgBudget: string) {
    setBudget(pkgBudget);
    const mappedIds = pricingChannels
      .filter((ch) => pkgChannels.some((item) => item.toLowerCase().includes(ch.id)))
      .map((ch) => ch.id);
    if (mappedIds.length) {
      setSelectedChannels(mappedIds);
    }
    const formEl = document.getElementById('briefForm');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const brief = [
      city ? `City: ${city}` : 'City: not specified',
      `Duration: ${duration}`,
      `Monthly budget: ${budget}`,
      channelLabels.length ? `Channels: ${channelLabels.join(', ')}` : 'Channels: to be advised',
    ].join('\n');

    const params = new URLSearchParams();
    params.set('brief', brief);
    params.set('requirement', 'A combined media plan');
    params.set('interest', 'Media Plans,Campaign Pricing');

    router.push(`/contact?${params.toString()}`);
  }

  return (
    <TargetShell>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Pricing / Media Plan Starter"
        title="Transparent pricing built for your specific market."
        copy="Hyperlocal advertising costs depend on chosen screens, transit routes, and distribution volume. Configure your requirements below to receive a detailed, line-item media plan."
      />

      {/* 2. Interactive Brief Builder Section */}
      <section id="briefForm" className="scroll-mt-24 border-b border-line bg-[#080808]">
        <div className="container-site py-16 md:py-24">
          <form onSubmit={handleSubmit} className="grid items-start gap-12 lg:grid-cols-12">
            {/* Left Options Form */}
            <div className="lg:col-span-7">
              <Reveal variant="fade-up">
                <fieldset>
                  <div className="flex items-center justify-between mb-4">
                    <legend className="eyebrow text-[#888888]">
                      1. Select Channels of Interest
                    </legend>
                    <span className="text-[12px] text-mute">
                      {selectedChannels.length} selected
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {pricingChannels.map((ch) => {
                      const isSelected = selectedChannels.includes(ch.id);
                      return (
                        <button
                          key={ch.id}
                          type="button"
                          onClick={() => toggleChannel(ch.id)}
                          aria-pressed={isSelected}
                          className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                            isSelected
                              ? 'border-brand bg-brand text-white shadow-md shadow-brand/25'
                              : 'border-white/10 bg-white/[0.02] text-mute hover:border-white/20 hover:text-paper hover:bg-white/[0.05]'
                          }`}
                        >
                          {isSelected && <Check size={13} strokeWidth={2.8} />}
                          <span>{ch.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              </Reveal>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <Reveal variant="fade-up" delay={0.1} className="block">
                  <label className="block">
                    <span className="eyebrow text-[#888888]">2. Target City / Neighbourhood</span>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Bengaluru, Indiranagar, HSR Layout…"
                      className="input-field mt-2.5"
                    />
                  </label>
                </Reveal>

                <Reveal variant="fade-up" delay={0.15} className="block">
                  <label className="block">
                    <span className="eyebrow text-[#888888]">3. Campaign Duration</span>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="input-field mt-2.5 appearance-none cursor-pointer"
                    >
                      {durationOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0D0D0D] text-paper">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </label>
                </Reveal>

                <Reveal variant="fade-up" delay={0.2} className="block sm:col-span-2">
                  <label className="block">
                    <span className="eyebrow text-[#888888]">4. Target Monthly Budget</span>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="input-field mt-2.5 appearance-none cursor-pointer"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0D0D0D] text-paper">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </label>
                </Reveal>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <aside className="border border-white/10 rounded-2xl bg-[#0D0D0D] p-7 sm:p-8 lg:sticky lg:top-24 lg:col-span-5 shadow-2xl">
              <Reveal variant="fade-up" delay={0.1}>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <p className="eyebrow text-brand">Live Brief Summary</p>
                  <span className="text-[11px] font-mono text-[#888888]">ESTIMATE STARTER</span>
                </div>

                <h2 className="mt-4 font-serif text-[24px] sm:text-[28px] leading-tight text-paper font-normal">
                  Your Campaign Scope
                </h2>

                <dl className="mt-6 space-y-4 text-[13.5px]">
                  <div className="flex items-center justify-between border-t border-white/[0.06] pt-3.5">
                    <dt className="text-[#888888]">Target Market</dt>
                    <dd className="text-paper font-medium">{city || 'All Metro Clusters'}</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/[0.06] pt-3.5">
                    <dt className="text-[#888888]">Flight Duration</dt>
                    <dd className="text-paper font-medium">{duration}</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/[0.06] pt-3.5">
                    <dt className="text-[#888888]">Monthly Budget</dt>
                    <dd className="text-brand font-semibold">{budget}</dd>
                  </div>
                  <div className="border-t border-white/[0.06] pt-3.5">
                    <dt className="text-[#888888] mb-2">
                      Selected Surfaces ({channelLabels.length})
                    </dt>
                    <dd className="text-[#D8D4CE] leading-relaxed text-[13px]">
                      {channelLabels.length
                        ? channelLabels.join(' • ')
                        : 'No channels selected yet'}
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-[12px] leading-relaxed text-[#777777]">
                  We review your brief and reply with a complete media plan including verified
                  screen lists, pricing discounts, and route maps.
                </p>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="btn-sheen btn-arrow inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-brand hover:bg-brand-hover px-6 py-3.5 text-[13.5px] font-semibold tracking-wide text-paper shadow-lg shadow-brand/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Submit Brief → Request Media Plan</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </Reveal>
            </aside>
          </form>
        </div>
      </section>

      {/* 3. Benchmark Strategy Packages */}
      <section className="border-b border-line bg-[#0D0D0D]">
        <div className="container-site py-20 md:py-28">
          <Reveal variant="fade-up" className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-brand">Campaign Packages</p>
            <h2 className="mt-3 font-serif text-[32px] sm:text-[40px] leading-tight text-paper font-normal">
              Benchmark configurations to guide your plan.
            </h2>
            <p className="mt-3 text-[15px] text-mute">
              Select any package below to prefill your brief, or request custom configurations
              tailored to your exact budget.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {benchmarkPackages.map((pkg, idx) => (
              <Reveal
                key={pkg.name}
                variant="fade-up"
                staggerIndex={idx}
                delay={0.1}
                className="h-full"
              >
                <div
                  className={`card-interactive h-full relative rounded-2xl border p-7 sm:p-8 flex flex-col justify-between ${
                    pkg.highlight === 'Most Popular'
                      ? 'border-brand/40 bg-gradient-to-b from-[#141414] to-[#0D0D0D] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(216,31,66,0.15)]'
                      : 'border-white/[0.08] bg-[#141414]/60 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#888888]">
                        {pkg.highlight}
                      </span>
                      {pkg.highlight === 'Most Popular' && (
                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand text-[10px] font-bold text-white uppercase tracking-wider shadow-sm shadow-brand/40">
                          <Sparkles size={11} className="animate-pulse" /> Featured
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-[21px] font-semibold text-paper">{pkg.name}</h3>

                    <p className="mt-2 text-[13px] text-mute leading-relaxed min-h-[40px]">
                      {pkg.ideal}
                    </p>

                    <div className="mt-5 pb-5 border-b border-white/[0.08]">
                      <span className="font-serif text-[24px] font-bold text-paper">
                        {pkg.budget}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {pkg.channels.map((ch) => (
                        <li key={ch} className="flex items-start gap-2.5 text-[13.5px] text-mute">
                          <CheckCircle2 size={15} className="text-brand shrink-0 mt-0.5" />
                          <span className="text-[#D8D4CE]">{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.06]">
                    <button
                      type="button"
                      onClick={() => handlePackageSelect(pkg.channels, pkg.budget)}
                      className="btn-sheen w-full py-3 rounded-lg border border-white/15 hover:border-brand hover:bg-brand hover:text-white text-paper text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Select this Package
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <FinalCta />
    </TargetShell>
  );
}
