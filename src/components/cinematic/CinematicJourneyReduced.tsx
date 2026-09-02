import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { mrAdsFacts } from '@/data/mrAdsFacts.data';
import { adCampaigns } from './data/adCampaigns.data';
import AdArt from './scenes/surfaces/AdArt';

/**
 * Static, non-pinned rendering of the same story beats for
 * prefers-reduced-motion users: hero -> billboard immersion -> highway
 * reveal, as sequential reveal-on-scroll frames instead of a scrubbed camera.
 */
export default function CinematicJourneyReduced() {
  const featured = adCampaigns.slice(0, 3);

  return (
    <section className="bg-[#050506]">
      {/* Hero frame */}
      <div className="min-h-[80vh] flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-[1280px] mx-auto px-6 md:px-10 py-20">
        <ScrollReveal direction="up" className="flex-1">
          <h1 className="text-white font-black tracking-tight leading-[0.98] text-[12vw] sm:text-6xl">
            {mrAdsFacts.heroHeadline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-white/60 text-base font-medium tracking-wide uppercase">
            {mrAdsFacts.tagline}
          </p>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={120} className="flex-1 w-full">
          <div className="relative w-full aspect-[16/9] rounded-[6px] bg-[#050506] border-[10px] border-[#1c1e24] shadow-2xl overflow-hidden">
            <AdArt campaign={adCampaigns[0]} />
          </div>
        </ScrollReveal>
      </div>

      {/* Immersion frames: a few full-screen ad creatives */}
      {featured.map((campaign, i) => (
        <ScrollReveal key={campaign.id} direction="up" delay={i * 60} className="block">
          <div
            className="min-h-[70vh] flex flex-col justify-end p-8 md:p-16 relative overflow-hidden"
            style={{ backgroundColor: campaign.palette.base }}
          >
            <AdArt campaign={campaign} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="relative z-10">
              {campaign.poweredByMrAds && (
                <span className="block mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                  Powered by MR. ADS
                </span>
              )}
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] mb-2 block"
                style={{ color: campaign.palette.accent }}
              >
                {campaign.category}
              </span>
              <h3 className="text-white font-black tracking-tight leading-[1.05] text-4xl md:text-6xl max-w-2xl">
                {campaign.headline}
              </h3>
              <p className="mt-3 text-white/70 font-medium text-lg md:text-xl max-w-xl">
                {campaign.subhead}
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}

      {/* Highway reveal frame (final static shot) */}
      <ScrollReveal direction="up" className="block">
        <div className="min-h-[70vh] relative overflow-hidden flex items-end">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/assets/images/highway_dusk_skyline.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b32]/25 via-transparent to-[#0a0b0d]/85" />
          <div className="relative z-10 w-full p-8 md:p-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/50 block mb-3">
              The Mr. Ads Network
            </span>
            <h3 className="text-white font-black tracking-tight leading-[1.05] text-3xl md:text-5xl max-w-2xl">
              One highway. A network of screens, everywhere brands need to be seen.
            </h3>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
