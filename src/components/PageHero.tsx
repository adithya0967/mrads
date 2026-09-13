'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';
import { ArrowDown } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  copy?: string;
}

export default function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  const handleScrollDown = () => {
    if (typeof window !== 'undefined') {
      window.scrollBy({ top: window.innerHeight * 0.72, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative border-b border-line bg-ink overflow-hidden">
      {/* Ambient background depth */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#C83A4B]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="container-site py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <Reveal variant="fade-up">
            <p className="eyebrow text-[#929292]">{eyebrow}</p>
          </Reveal>
          <Reveal variant="fade-up" delay={0.1}>
            <h1 className="mt-5 font-serif text-[40px] leading-[1.08] tracking-tight text-paper md:text-[56px]">
              {title}
            </h1>
          </Reveal>
          {copy && (
            <Reveal variant="fade-up" delay={0.2}>
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-mute">{copy}</p>
            </Reveal>
          )}

          <Reveal variant="fade-up" delay={0.28} className="mt-8">
            <button
              type="button"
              onClick={handleScrollDown}
              className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-wider uppercase text-mute hover:text-paper transition-colors group cursor-pointer select-none"
              aria-label="Scroll down to page content"
            >
              <span>Explore Section Details</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white/10 group-hover:border-brand text-brand transition-colors">
                <ArrowDown size={11} className="animate-bounce" />
              </span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
