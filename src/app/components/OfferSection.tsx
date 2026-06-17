'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const offers = [
  {
    icon: 'MapPinIcon',
    title: 'Premium Locations',
    description:
      'Advertise across carefully selected, high-footfall restaurants in Bengaluru. Every location is vetted for maximum dwell time and audience quality.',
    accent: true,
    colSpan: 'lg:col-span-5',
  },
  {
    icon: 'TvIcon',
    title: 'Digital Display Network',
    description:
      'High-quality screens placed for maximum attention and repeated visibility. Your ad plays in the most visible spots — where eyes naturally go.',
    accent: false,
    colSpan: 'lg:col-span-7',
  },
  {
    icon: 'CursorArrowRaysIcon',
    title: 'Hyperlocal Targeting',
    description:
      'Reach the right audience based on location and dining behavior. Bengaluru neighbourhoods, specific restaurant types, peak meal times — your campaign, your audience.',
    accent: false,
    colSpan: 'lg:col-span-12',
  },
];

export default function OfferSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.offer-card').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="offer" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              What We Offer
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.1] text-foreground">
              Premium Advertising.<br />Real Visibility.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm font-medium leading-relaxed">
            Every campaign is built on real locations, real screens, and a real audience that's there to stay.
          </p>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Card 1 — accent, tall left */}
          <div
            className="offer-card lg:col-span-5 bg-accent text-accent-foreground rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] border border-transparent hover:scale-[0.99] transition-transform duration-500"
            style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)' }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
              <Icon name="MapPinIcon" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold mb-3 text-white">Premium Locations</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Advertise across carefully selected, high-footfall restaurants in Bengaluru. Every location is vetted for maximum dwell time and audience quality.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
              <span>5+ Active Locations</span>
              <Icon name="ArrowRightIcon" size={14} />
            </div>
          </div>

          {/* Card 2 — dark card, right wide */}
          <div
            className="offer-card lg:col-span-7 bg-card rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-500"
            style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s cubic-bezier(0.23,1,0.32,1) 0.15s, transform 0.7s cubic-bezier(0.23,1,0.32,1) 0.15s' }}
          >
            <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-6 border border-accent/20">
              <Icon name="TvIcon" size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold mb-3 text-foreground">Digital Display Network</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                High-quality screens placed for maximum attention and repeated visibility. Your ad plays in the most visible spots — where eyes naturally go.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-muted rounded-xl px-4 py-3">
                <div className="text-lg font-extrabold text-foreground">30s</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Ad Slot Duration</div>
              </div>
              <div className="bg-muted rounded-xl px-4 py-3">
                <div className="text-lg font-extrabold text-foreground">Every 5 min</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Repeat Frequency</div>
              </div>
            </div>
          </div>

          {/* Card 3 — full width */}
          <div
            className="offer-card lg:col-span-12 bg-gradient-to-r from-red-950/30 to-red-900/15 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-red-900/30 hover:shadow-lg transition-all duration-500"
            style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s cubic-bezier(0.23,1,0.32,1) 0.3s, transform 0.7s cubic-bezier(0.23,1,0.32,1) 0.3s' }}
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30">
                <Icon name="CursorArrowRaysIcon" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-2 text-foreground">Hyperlocal Targeting</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  Reach the right audience based on location and dining behavior. Bengaluru neighbourhoods, specific restaurant types, peak meal times — your campaign, your audience.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              {['Malleshwaram', 'Rajajinagar', 'Nagarbhavi', '+ More'].map((area) => (
                <span key={area} className="px-3 py-1.5 bg-card border border-border rounded-full text-xs font-bold text-foreground/80">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
