import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

interface FinalCtaProps {
  title?: string;
  copy?: string;
}

export default function FinalCta({
  title = 'Make Your Brand Visible Where Your Audience Is.',
  copy = 'Tell us your city, audience and goal — we’ll build a hyperlocal media plan around the right screens, streets and homes.',
}: FinalCtaProps) {
  return (
    <section className="relative border-t border-line bg-[#0D0D0D] overflow-hidden">
      {/* Ambient Crimson Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#D81F42]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-site py-20 md:py-28 relative z-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-[#929292]">Next Step</p>
          <h2 className="mt-4 font-serif text-[36px] sm:text-[48px] leading-[1.1] tracking-tight text-paper font-normal">
            {title}
          </h2>
          <p className="mt-5 text-[16px] sm:text-[18px] leading-relaxed text-mute">{copy}</p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="btn-arrow inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand hover:bg-brand-hover px-7 py-3.5 text-[13.5px] font-semibold tracking-wide text-paper shadow-lg shadow-brand/20 transition-all duration-200 w-full sm:w-auto"
            >
              <span>Get a Media Plan</span>
              <ArrowRight size={14} strokeWidth={2} />
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.06] px-6 py-3.5 text-[13.5px] font-medium text-paper transition-all duration-200 w-full sm:w-auto"
            >
              <Compass size={14} />
              <span>Interactive Plan Starter</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
