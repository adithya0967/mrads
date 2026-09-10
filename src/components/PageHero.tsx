import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  copy?: string;
}

export default function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-ink">
      <div className="container-site py-16 md:py-24">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-serif text-[40px] leading-[1.08] tracking-tight text-paper md:text-[56px]">
            {title}
          </h1>
          {copy && (
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-mute">
              {copy}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
