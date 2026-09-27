'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { PITCH_DECK_SERVICES } from '@/data/pitchDeckServices';

export default function HeroServiceRow() {
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Ensure enough items in the track for seamless continuous looping on desktop
  const repeatCount = Math.max(2, Math.ceil(8 / Math.max(PITCH_DECK_SERVICES.length, 1)));
  const rollingItems = Array(repeatCount).fill(PITCH_DECK_SERVICES).flat();

  // Track scroll position on mobile to update active card index and thumb controls
  const handleScroll = useCallback(() => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    // Calculate the most visible card in the viewport
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) return;

    const containerCenter = scrollLeft + clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const scrollToIndex = (index: number) => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const targetChild = el.children[index] as HTMLElement;
    if (targetChild) {
      targetChild.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    scrollToIndex(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    scrollToIndex(Math.min(PITCH_DECK_SERVICES.length - 1, activeIndex + 1));
  };

  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    handleScroll();
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative w-full select-none">
      {/* ========================================================================= */}
      {/* MOBILE EXPERIENCE: THUMB-SCROLLABLE & SWIPEABLE CAROUSEL (< sm)           */}
      {/* ========================================================================= */}
      <div className="block sm:hidden w-full">
        {/* Mobile Header: Swipe Instruction & Thumb Step Counter */}
        <div className="flex items-center justify-between px-6 pb-2.5">
          <div className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-wider text-[#A0A0A0]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#DE4A5C] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C83A4B]" />
            </span>
            <span>Swipe Solutions</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono font-medium tracking-tight text-[#DE4A5C]">
              0{activeIndex + 1}
            </span>
            <span className="text-[11px] font-mono text-[#555555]">/</span>
            <span className="text-[11px] font-mono text-[#777777]">
              0{PITCH_DECK_SERVICES.length}
            </span>

            {/* Quick Touch Arrow Buttons */}
            <div className="ml-2 flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canScrollLeft}
                aria-label="Previous service"
                className={`flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all active:scale-95 ${
                  canScrollLeft
                    ? 'text-white hover:bg-white/[0.1] active:bg-[#C83A4B]'
                    : 'cursor-not-allowed opacity-30 text-white/40'
                }`}
              >
                <ChevronLeft size={13} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canScrollRight}
                aria-label="Next service"
                className={`flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all active:scale-95 ${
                  canScrollRight
                    ? 'text-white hover:bg-white/[0.1] active:bg-[#C83A4B]'
                    : 'cursor-not-allowed opacity-30 text-white/40'
                }`}
              >
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Thumb-Scrollable Container */}
        <div className="relative w-full">
          {/* Edge shadow gradient indicators */}
          {canScrollLeft && (
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-6 bg-gradient-to-r from-[#080808] to-transparent transition-opacity duration-300" />
          )}
          {canScrollRight && (
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-6 bg-gradient-to-l from-[#080808] to-transparent transition-opacity duration-300" />
          )}

          <div
            ref={mobileScrollRef}
            className="flex gap-3.5 overflow-x-auto px-6 py-2 snap-x snap-mandatory scroll-smooth overscroll-x-contain touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {PITCH_DECK_SERVICES.map((service, idx) => {
              const isActive = idx === activeIndex;
              return (
                <Link
                  key={`mobile-hero-service-${service.id}`}
                  href={service.link}
                  className={`group/card relative flex w-[80vw] max-w-[290px] flex-shrink-0 snap-center flex-col justify-between rounded-2xl border p-3.5 transition-all duration-300 active:scale-[0.99] ${
                    isActive
                      ? 'border-[#DE4A5C]/60 bg-[#121212] shadow-[0_10px_30px_rgba(0,0,0,0.8)] shadow-[#C83A4B]/10'
                      : 'border-white/[0.08] bg-[#0E0E0E] opacity-90'
                  }`}
                >
                  {/* Thumbnail & Badges */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black border border-white/[0.06]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-black/20 to-transparent" />
                    
                    {/* Category & Badge */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1">
                      <span className="rounded-full border border-white/20 bg-black/85 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#F4F1EC] backdrop-blur-md">
                        {service.categoryLabel.split(' ')[0]}
                      </span>
                      <span className="rounded-full bg-[#C83A4B] px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-sm">
                        {service.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-2 right-2 rounded-lg border border-white/20 bg-black/80 p-1 text-white backdrop-blur-md">
                      <Maximize2 size={11} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-2.5 flex flex-1 flex-col justify-between">
                    <div>
                      <h3
                        className={`text-[13.5px] font-semibold transition-colors line-clamp-1 ${
                          isActive ? 'text-[#DE4A5C]' : 'text-[#F4F1EC]'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-relaxed text-[#8A8A8A] line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="mt-2.5 grid grid-cols-2 gap-1.5 border-t border-white/[0.06] pt-2">
                      {service.metrics.slice(0, 2).map((m) => (
                        <div
                          key={m.label}
                          className="rounded-lg border border-white/[0.04] bg-white/[0.03] p-1.5"
                        >
                          <div className="truncate text-[8.5px] font-semibold uppercase text-[#7A7A7A]">
                            {m.label}
                          </div>
                          <div className="mt-0.5 truncate text-[10.5px] font-bold text-[#F4F1EC]">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-2.5 flex items-center justify-between border-t border-white/[0.04] pt-2 text-[10.5px] font-semibold uppercase tracking-wider text-[#DE4A5C]">
                      <span>Inspect Solution</span>
                      <ArrowRight size={11} className="transition-transform group-hover/card:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Pagination Dot Indicators */}
        <div className="mt-2 flex items-center justify-center gap-1.5 py-1">
          {PITCH_DECK_SERVICES.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={`dot-${idx}`}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-6 bg-[#C83A4B] shadow-[0_0_8px_rgba(200,58,75,0.6)]'
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP EXPERIENCE: SEAMLESS CONTINUOUS ROLLING MARQUEE (sm:)             */}
      {/* ========================================================================= */}
      <div className="hidden sm:block relative w-full overflow-hidden py-3 group">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#080808] via-[#080808]/85 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 w-max animate-marquee-ltr" style={{ willChange: 'transform' }}>
          {rollingItems.map((service, idx) => (
            <Link
              key={`desktop-hero-service-${service.id}-${idx}`}
              href={service.link}
              className="group/card relative flex w-[280px] lg:w-[320px] flex-shrink-0 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0E0E0E] hover:bg-[#141414] p-4 cursor-pointer transition-all duration-300 hover:border-[#DE4A5C]/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/[0.06]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-black/20 to-transparent" />
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
                  <span className="rounded-full border border-white/15 bg-black/85 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-[#F4F1EC] backdrop-blur-md">
                    {service.categoryLabel.split(' ')[0]}
                  </span>
                  <span className="rounded-full bg-[#C83A4B] px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-white shadow-sm">
                    {service.badge}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-lg p-1.5">
                  <Maximize2 size={12} />
                </div>
              </div>

              {/* Content */}
              <div className="mt-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="line-clamp-1 text-[14.5px] font-semibold text-[#F4F1EC] transition-colors group-hover/card:text-[#DE4A5C]">
                    {service.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-[#8A8A8A]">
                    {service.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="mt-3 grid grid-cols-2 gap-1.5 pt-2.5 border-t border-white/[0.06]">
                  {service.metrics.slice(0, 2).map((m: { label: string; value: string }) => (
                    <div key={m.label} className="bg-white/[0.03] rounded-lg p-1.5 border border-white/[0.04]">
                      <div className="text-[9px] uppercase font-semibold text-[#7A7A7A] truncate">{m.label}</div>
                      <div className="mt-0.5 text-[11.5px] font-bold text-[#F4F1EC] truncate">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/[0.04] text-[11px] font-semibold uppercase tracking-wider text-[#DE4A5C]">
                  <span>Inspect Solution</span>
                  <ArrowRight
                    size={11}
                    className="transform group-hover/card:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
