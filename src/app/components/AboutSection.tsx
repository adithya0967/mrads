'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const stats = [
{ value: '70+', label: 'Active Locations' },
{ value: '2,000–3,000', label: 'Daily Viewers / Location' },
{ value: '30s', label: 'Ad Duration' },
{ value: '12×', label: 'Plays Per Hour' }];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-card overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left: Image with floating card */}
          <div className="lg:col-span-5 relative reveal-item" style={{ opacity: 0, transform: 'translateY(40px)', transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1)' }}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-slate-900/12">
              <AppImage
                src="https://images.unsplash.com/photo-1556700485-cc335d219007"
                alt="Restaurant interior with warm lighting, dining tables, and ambient atmosphere perfect for digital advertising displays"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-accent text-accent-foreground p-6 rounded-2xl shadow-2xl max-w-[220px]">
              <Icon name="EyeIcon" size={20} className="text-accent mb-3" />
              <p className="text-sm font-semibold leading-relaxed opacity-90">
                Customers are relaxed, engaged, and attentive — your ideal ad moment.
              </p>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div
              className="reveal-item"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1) 0.1s' }}>
              
              <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
                Who We Are
              </span>
              <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight leading-[1.1] text-foreground">
                Bengaluru's
                <span className="text-accent"> Hyperlocal Advertising</span> Network
              </h2>
            </div>

            <div
              className="flex flex-col gap-4 reveal-item"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s' }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mr. Ads helps brands connect with customers inside high-footfall restaurants across Bengaluru.
                Our digital displays are placed in dining and waiting areas, ensuring your brand gets repeated
                visibility when customers are relaxed and attentive. Ads play every 5 minutes, ensuring
                repeated visibility during dining time.
              </p>
              <p className="text-sm font-semibold text-foreground/70">
                Your ad is seen multiple times during a single customer visit.
              </p>
            </div>

            {/* Stats grid */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 reveal-item"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1) 0.3s' }}>
              
              {stats.map((stat) =>
              <div key={stat.label} className="border-l-2 border-accent pl-4">
                  <div className="text-2xl font-extrabold text-foreground tracking-tight">{stat.value}</div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}