import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
    <section className="border-t border-line bg-graphite">
      <div className="container-site py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Next step</p>
          <h2 className="mt-5 font-serif text-[34px] leading-[1.12] tracking-tight text-paper md:text-[46px]">
            {title}
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-mute">{copy}</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="btn-arrow inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-5 py-2.5 text-[13px] font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-brand-hover"
            >
              Get a Media Plan
              <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
