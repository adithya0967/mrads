'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const benefits = [
  {
    icon: 'ArrowPathIcon',
    title: 'Multi-Channel Synergy',
    description:
      'Reach customers multiple times in a single day—as they commute (transit), shop (malls), work (offices), dine (restaurants), and relax (apartments).',
  },
  {
    icon: 'HomeIcon',
    title: 'Deep Household Presence',
    description:
      'Get inside the living rooms and lift areas of premium apartments using digital screens, flyer drops, and official Quick Commerce bag inserts.',
  },
  {
    icon: 'ClockIcon',
    title: 'High Dwell-Time Captivity',
    description:
      'Capture maximum user attention in locations where people spend 30–60 minutes, like restaurants, lobbies, gym workout areas, and transit stops.',
  },
  {
    icon: 'MapPinIcon',
    title: 'Hyperlocal Corridor Targeting',
    description:
      'Advertise strictly within the exact neighborhoods and routes where your customers live, work, and buy—minimizing budget wastage.',
  },
  {
    icon: 'SparklesIcon',
    title: 'Integrated Tech & Creative',
    description:
      'Amplify real-world visibility with matching digital assets: custom business/e-commerce websites, AI lead-generation chatbots, and creative video shoots.',
  },
];

export default function WhyItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.benefit-tile').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
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
    <section id="why" ref={sectionRef} className="py-24 md:py-32 bg-[#0a0a14] text-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              The Science Behind It
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-white leading-[1.1]">
              Why Hyperlocal<br />Advertising Works
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm font-medium leading-relaxed">
            Multi-channel physical presence combined with smart digital tech maximizes brand recall and user action.
          </p>
        </div>

        {/* Benefit tiles — 3 top, 2 bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`benefit-tile group bg-white/5 border border-white/8 rounded-2xl p-7 hover:bg-white/10 hover:border-accent/30 transition-all duration-500 ${
                i === 3 ? 'lg:col-start-1' : ''
              }`}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `opacity 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.1}s, transform 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.1}s`,
              }}
            >
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors">
                <Icon name={b.icon as any} size={20} className="text-accent" />
              </div>
              <h3 className="font-extrabold text-white text-base mb-2 leading-tight">{b.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}

          {/* Last tile — CTA */}
          <div
            className="benefit-tile bg-accent rounded-2xl p-7 flex flex-col justify-between"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: `opacity 0.6s cubic-bezier(0.23,1,0.32,1) 0.5s, transform 0.6s cubic-bezier(0.23,1,0.32,1) 0.5s`,
            }}
          >
            <div>
              <div className="text-3xl font-extrabold text-accent-foreground mb-2">Ready to scale?</div>
              <p className="text-accent-foreground/70 text-sm leading-relaxed">
                Connect your business with our extensive hyperlocal network.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-full font-bold text-sm uppercase tracking-widest hover:bg-card transition-colors w-fit"
            >
              Plan Campaign
              <Icon name="ArrowRightIcon" size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}