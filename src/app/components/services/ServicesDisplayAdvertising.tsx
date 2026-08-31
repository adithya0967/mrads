import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ServiceRow from './ServiceRow';
import { mrAdsFacts } from '@/data/mrAdsFacts.data';
import PlaceholderMedia from '@/components/cinematic/scenes/PlaceholderMedia';

function VenueVisual({
  label,
  stat,
  statLabel,
}: {
  label: string;
  stat?: string;
  statLabel: string;
}) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#1c1e24] bg-[#0a0b0d]">
      <PlaceholderMedia label={label} tone="warm" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      {stat && (
        <div className="absolute bottom-5 left-5">
          <div className="text-white font-black text-3xl sm:text-4xl leading-none">{stat}</div>
          <div className="text-white/50 text-[11px] font-bold uppercase tracking-widest mt-1">
            {statLabel}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ServicesDisplayAdvertising() {
  return (
    <section
      id="display-advertising"
      className="py-16 md:py-24 bg-[#090A0C] border-b border-[#252830]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <ScrollReveal direction="up" className="max-w-2xl mb-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
            DISPLAY ADVERTISING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15]">
            Screens where your audience already spends time.
          </h2>
        </ScrollReveal>

        {mrAdsFacts.displayAdvertising.map((v, i) => (
          <ServiceRow
            key={v.id}
            align={i % 2 === 0 ? 'left' : 'right'}
            eyebrow={v.label}
            title={v.reachHeadline}
            bullets={v.bullets}
            visual={
              <VenueVisual
                label={`${v.label} display`}
                stat={v.screenSize}
                statLabel={v.screenSize ? 'Screen size' : ''}
              />
            }
          />
        ))}
      </div>
    </section>
  );
}
