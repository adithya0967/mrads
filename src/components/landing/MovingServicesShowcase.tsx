'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  X,
  ExternalLink,
  Radio,
  Layers,
  Tv,
  Zap,
  Code2,
  Bus,
  Film,
  Gift,
} from 'lucide-react';
import { PITCH_DECK_SERVICES, PitchDeckService } from '@/data/pitchDeckServices';

export default function MovingServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<PitchDeckService | null>(null);

  // Filter services based on tab
  const filteredServices =
    activeCategory === 'all'
      ? PITCH_DECK_SERVICES
      : PITCH_DECK_SERVICES.filter((s) => s.category === activeCategory);

  // Ensure enough items in the track for seamless looping
  const repeatCount = Math.max(2, Math.ceil(8 / Math.max(filteredServices.length, 1)));
  const rollingItems = Array(repeatCount).fill(filteredServices).flat();

  const categories = [
    { id: 'all', label: 'All Channels', icon: Layers },
    { id: 'display', label: 'Display DOOH', icon: Tv },
    { id: 'quick-commerce', label: 'Quick Commerce', icon: Zap },
    { id: 'software-tech', label: 'Software & AI', icon: Code2 },
    { id: 'content-video', label: 'Video & Creative', icon: Film },
    { id: 'corporate-gifting', label: 'Corporate Gifting', icon: Gift },
  ];

  return (
    <section
      className="relative border-b border-line bg-[#080808] overflow-hidden py-20 md:py-28"
      id="solutions"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#C83A4B]/[0.045] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#C83A4B]/[0.035] rounded-full blur-[140px] pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-semibold text-brand tracking-widest uppercase mb-4">
            <Radio size={12} className="text-brand animate-pulse" />
            <span>Full-Service Network</span>
          </div>
          <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[48px] leading-tight tracking-tight text-paper font-normal">
            One Integrated Partner. <br />
            <span className="text-brand font-serif italic">Every Channel You Need.</span>
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-mute">
            Explore our end-to-end advertising network — spanning Display DOOH screens, Quick Commerce dark stores, and Software & AI solutions.
          </p>
        </div>

        {/* Simplified Category Filter Pills */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12.5px] font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'border-brand bg-brand text-white shadow-lg shadow-brand/20'
                    : 'border-white/10 bg-white/[0.03] text-mute hover:border-white/20 hover:text-paper hover:bg-white/[0.06]'
                }`}
              >
                <Icon size={13} className={isActive ? 'text-white' : 'text-mute'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SINGLE ROLLING ROW — FILTERED BY THE ACTIVE CATEGORY TAB                   */}
      {/* ========================================================================= */}
      <div className="relative mt-8 w-full overflow-hidden group">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent z-20 pointer-events-none" />

        <div className="flex gap-6 w-max animate-marquee-ltr" style={{ willChange: 'transform' }}>
          {rollingItems.map((service, idx) => (
            <ServiceCard
              key={`showcase-${service.id}-${idx}`}
              service={service}
              onSelect={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="container-site mt-14">
        <div className="rounded-2xl border border-white/[0.08] bg-[#0D0D0D]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0 shadow-[0_0_20px_rgba(200,58,75,0.2)]">
              <Sparkles size={22} />
            </div>
            <div>
              <h4 className="text-[17px] sm:text-[18px] font-semibold text-paper">
                Need a synchronized multi-channel media plan?
              </h4>
              <p className="mt-1 text-[13.5px] text-mute">
                Combine 50&quot; restaurant displays, 10-min quick commerce bag inserts, and a
                custom Next.js conversion website in a single managed campaign.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto flex-shrink-0">
            <Link
              href="/pricing"
              className="btn-sheen btn-arrow inline-flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand-hover px-6 py-3 text-[13.5px] font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-200 w-full sm:w-auto"
            >
              <span>Get Full Rate Card</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08] px-5 py-3 text-[13.5px] font-medium text-paper transition-all duration-200 w-full sm:w-auto"
            >
              <span>Custom Strategy</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PITCH DECK SPECIFICATION MODAL DRAWER                                     */}
      {/* ========================================================================= */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0D0D0D] text-paper shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-paper transition-colors"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 text-brand text-[12px] font-semibold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Solution Details</span>
            </div>

            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <h3 className="font-serif text-[26px] sm:text-[32px] text-paper font-normal">
                  {selectedService.title}
                </h3>
                <p className="text-[14px] text-mute">{selectedService.subtitle}</p>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-brand/20 border border-brand/40 text-brand text-[11px] font-bold uppercase tracking-wider">
                {selectedService.badge}
              </span>
            </div>

            {/* Image Preview & Description */}
            <div className="mt-6 grid sm:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] text-white/90 font-medium">
                  {selectedService.categoryLabel}
                </div>
              </div>

              <div>
                <p className="text-[14.5px] leading-relaxed text-mute">
                  {selectedService.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {selectedService.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="text-[10.5px] text-mute uppercase font-semibold">
                        {m.label}
                      </div>
                      <div className="text-[13.5px] text-paper font-semibold mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Specs from Pitch Deck */}
            <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-paper flex items-center gap-2">
                <CheckCircle2 size={14} className="text-brand" />
                <span>Deliverables & Mediums</span>
              </h4>

              {selectedService.specs.availableMediums && (
                <div className="flex flex-wrap gap-2">
                  {selectedService.specs.availableMediums.map((med) => (
                    <span
                      key={med}
                      className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[12px] text-paper"
                    >
                      • {med}
                    </span>
                  ))}
                </div>
              )}

              {selectedService.specs.coreBenefits && (
                <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                  {selectedService.specs.coreBenefits.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-[13px] text-mute">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/10 text-[13px] text-mute hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                Close Spec Sheet
              </button>
              <Link
                href={selectedService.link}
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand-hover px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-lg shadow-brand/25 transition-all"
              >
                <span>{selectedService.ctaText}</span>
                <ExternalLink size={13} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// =========================================================================
// INDIVIDUAL MOVING SERVICE CARD (LEFT-TO-RIGHT ROLLING DISPLAY)
// =========================================================================
function ServiceCard({ service, onSelect }: { service: PitchDeckService; onSelect: () => void }) {
  return (
    <div
      onClick={onSelect}
      className="card-interactive group relative w-[320px] sm:w-[360px] flex-shrink-0 rounded-2xl border border-white/[0.08] hover:border-brand/50 bg-[#0E0E0E] hover:bg-[#131313] p-5 cursor-pointer transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] hover:shadow-brand/10 flex flex-col justify-between"
    >
      {/* Top Image Box with Category Badge */}
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/[0.06]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-black/30 to-transparent" />

        {/* Priority & Channel Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
          <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-semibold uppercase tracking-wider text-paper">
            {service.categoryLabel.split(' ')[0]}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-brand text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
            {service.badge}
          </span>
        </div>

        {/* Inspect Icon on Hover */}
        <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-lg p-1.5">
          <Maximize2 size={12} />
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-[17px] font-semibold text-paper group-hover:text-brand transition-colors line-clamp-1">
            {service.title}
          </h3>
          <p className="mt-1.5 text-[13px] text-mute line-clamp-2 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Metric Pill Grid */}
        <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-white/[0.06]">
          {service.metrics.slice(0, 2).map((metric) => (
            <div
              key={metric.label}
              className="bg-white/[0.03] rounded-lg p-2 border border-white/[0.04]"
            >
              <div className="text-[9.5px] uppercase font-semibold text-mute">{metric.label}</div>
              <div className="text-[12px] font-bold text-paper truncate mt-0.5">{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Card Footer Action */}
        <div className="mt-4 flex items-center justify-between text-[11.5px] font-semibold uppercase tracking-wider text-brand">
          <span className="group-hover:underline">View Details</span>
          <span className="w-6 h-6 rounded-full bg-white/[0.04] group-hover:bg-brand group-hover:text-white flex items-center justify-center transition-all">
            <ArrowRight
              size={11}
              className="transform group-hover:translate-x-0.5 transition-transform"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
