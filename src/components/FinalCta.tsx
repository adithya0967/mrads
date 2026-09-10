import React from 'react';
import Link from 'next/link';

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
        <div className="max-w-2xl">
          <p className="eyebrow">Next step</p>
          <h2 className="mt-5 font-serif text-[34px] leading-tight tracking-tight text-paper md:text-[46px]">
            {title}
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-mute">{copy}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn-arrow inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-5 py-2.5 text-[13px] font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-brand-hover"
            >
              Get a Media Plan
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+919686544644"
              className="text-[13px] text-mute transition-colors duration-200 hover:text-paper"
            >
              Or call +91 96865 44644
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
