'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const locations = [
{
  name: 'Ayodhya Sagar',
  area: 'Malleshwaram',
  type: 'Vegetarian Restaurant',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_11521d3e0-1774103234852.png",
  alt: 'Warm restaurant interior with wooden tables and soft lighting, ideal for digital display advertising'
},
{
  name: 'Kadamba Veg',
  area: 'Rajajinagar',
  type: 'Family Dining',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1619fb222-1766590827288.png",
  alt: 'Bustling family restaurant with multiple dining tables and bright ambient lighting'
},
{
  name: 'Udupi Brindavana',
  area: 'Malleshwaram',
  type: 'South Indian',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_15bd7534e-1772164144159.png",
  alt: 'South Indian restaurant with traditional decor and well-lit dining area'
},
{
  name: 'Shivalaya Grand',
  area: 'Nagarbhavi',
  type: 'Multi-Cuisine',
  img: "https://images.unsplash.com/photo-1673332989500-6005cbd867f3",
  alt: 'Grand restaurant interior with high ceilings, decorative lights, and spacious seating'
},
{
  name: 'Bakasura Bandi',
  area: 'Annapoorneshwari Nagar',
  type: 'Street-Style Dining',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d09dbfea-1775246725226.png",
  alt: 'Vibrant casual dining space with colourful decor and lively atmosphere'
}];


export default function LocationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.loc-card').forEach((el, i) => {
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
    <section id="locations" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              Our Network
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-foreground">
              Our Active Locations
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm font-medium leading-relaxed">
            Strategically placed in Bengaluru's most popular dining destinations.
          </p>
        </div>

        {/* Locations grid — 3 top, 2 bottom centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc, i) =>
          <div
            key={loc.name}
            className={`loc-card group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:border-accent/30 transition-all duration-500 ${
            i === 3 ? 'lg:col-start-1' : ''}`
            }
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: `opacity 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.1}s, transform 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.1}s`
            }}>
            
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                src={loc.img}
                alt={loc.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-blink" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-wide">Active</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-extrabold text-foreground text-base leading-tight">{loc.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <Icon name="MapPinIcon" size={13} className="text-accent" />
                      <span className="text-xs font-semibold text-muted-foreground">{loc.area}</span>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 bg-accent/15 border border-accent/25 rounded-full text-[10px] font-bold text-red-400 text-nowrap">
                    {loc.type}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5">
                    <Icon name="UsersIcon" size={13} className="text-muted-foreground" />
                    <span className="text-xs font-bold text-muted-foreground">2,000–3,000 / day</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="TvIcon" size={13} className="text-muted-foreground" />
                    <span className="text-xs font-bold text-muted-foreground">Display Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-border text-foreground rounded-full font-bold text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300">
            
            View All Locations
            <Icon name="ArrowRightIcon" size={15} />
          </a>
        </div>
      </div>
    </section>);

}