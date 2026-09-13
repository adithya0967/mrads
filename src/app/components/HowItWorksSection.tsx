'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    number: '01',
    icon: 'DocumentArrowUpIcon',
    title: 'Share your ad creative',
    description:
      'Send us your 30-second video ad. Our team reviews and approves it for display across selected locations.',
  },
  {
    number: '02',
    icon: 'TvIcon',
    title: 'We display your ads across selected locations',
    description:
      'Your ad goes live on high-quality digital screens inside our restaurant network. No setup hassle — we handle it all.',
  },
  {
    number: '03',
    icon: 'UsersIcon',
    title: 'Customers see your brand while dining',
    description:
      'Your ad repeats every 5 minutes, reaching 2,000–3,000 attentive customers per location each day.',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.step-card').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 180);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            The Process
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-foreground">
            Simple. Effective. Impactful.
          </h2>
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-14 left-[calc(16.6%+1.5rem)] right-[calc(16.6%+1.5rem)] h-0.5 bg-gradient-to-r from-border via-accent to-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="step-card relative flex flex-col items-center text-center"
                style={{
                  opacity: 0,
                  transform: 'translateY(40px)',
                  transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 0.18}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 0.18}s`,
                }}
              >
                {/* Step number circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-extrabold text-lg mb-6 border-4 border-card shadow-lg shadow-black/30">
                  <Icon name={step.icon} size={22} className="text-accent" />
                </div>

                {/* Step label */}
                <div className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-2">
                  Step {step.number}
                </div>

                <h3 className="text-xl font-extrabold text-foreground mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-all duration-300"
          >
            Start Your Campaign
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}