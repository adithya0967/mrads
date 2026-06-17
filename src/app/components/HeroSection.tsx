'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const adSlides = [
  {
    bg: 'from-red-700 to-red-900',
    brand: 'ZEE5',
    tagline: 'Stream Now',
    sub: 'India\'s Best OTT Platform',
  },
  {
    bg: 'from-blue-600 to-indigo-700',
    brand: 'Nandini',
    tagline: 'Pure & Fresh',
    sub: 'Karnataka\'s Trusted Dairy',
  },
  {
    bg: 'from-emerald-600 to-teal-700',
    brand: 'Bachpan',
    tagline: 'Enroll Now',
    sub: 'Play School Admissions Open',
  },
];

export default function HeroSection() {
  const currentSlide = useRef(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const prev = currentSlide.current;
      const next = (prev + 1) % adSlides.length;

      if (slideRefs.current[prev]) {
        slideRefs.current[prev]!.style.opacity = '0';
        slideRefs.current[prev]!.style.transform = 'scale(0.97)';
      }
      if (slideRefs.current[next]) {
        slideRefs.current[next]!.style.opacity = '1';
        slideRefs.current[next]!.style.transform = 'scale(1)';
      }
      currentSlide.current = next;
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24 pb-12"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-red-950/20 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-red-800/8 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/40 border border-red-800/40 w-fit">
              <span className="w-2 h-2 rounded-full bg-accent animate-blink" />
              <span className="text-xs font-bold tracking-widest uppercase text-red-400">
                Bengaluru's Hyperlocal Ad Network
              </span>
            </div>

            <h1 className="text-[clamp(2.6rem,6vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight text-foreground">
              Reach Customers<br />
              <span className="text-accent">Where They Spend</span> Time
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-xl">
              Reach <strong className="text-foreground font-bold">2,000–3,000 customers daily</strong> per location through
              digital displays inside high-footfall restaurants across Bengaluru.
            </p>

            <p className="text-sm font-semibold text-foreground/70 flex items-center gap-2">
              <Icon name="ArrowPathIcon" size={16} className="text-accent" />
              Your ad is seen multiple times during a single customer visit.
            </p>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-3">
              {['30-sec ad', 'Plays every 5 minutes', '2,000–3,000 daily audience per location'].map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 rounded-full bg-muted border border-border text-xs font-bold text-foreground/80 tracking-wide"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#contact"
                className="magnetic-btn px-7 py-4 bg-accent text-accent-foreground rounded-full font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-all amber-glow"
              >
                Block Your Ad Slot
              </a>
              <a
                href="#locations"
                className="magnetic-btn px-7 py-4 bg-card border-2 border-border text-foreground rounded-full font-bold text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-all"
              >
                View Locations
              </a>
              <a
                href="https://wa.me/919686544644?text=Hi%2C%20I%27m%20interested%20in%20advertising%20with%20Mr.%20Ads.%20Please%20share%20available%20locations%2C%20pricing%2C%20and%20current%20slot%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn px-7 py-4 bg-[#25D366] text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#20ba59] transition-all flex items-center gap-2"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Animated TV Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="animate-float relative">
              {/* TV Frame */}
              <div className="relative w-72 md:w-80 tv-screen-glow rounded-2xl overflow-hidden bg-[#0a0a14] p-3">
                {/* Screen area */}
                <div className="relative rounded-xl overflow-hidden bg-[#111120] aspect-video">
                  {/* Ad slides */}
                  {adSlides.map((slide, i) => (
                    <div
                      key={slide.brand}
                      ref={(el) => { slideRefs.current[i] = el; }}
                      className={`absolute inset-0 bg-gradient-to-br ${slide.bg} flex flex-col items-center justify-center p-6 transition-all duration-700`}
                      style={{
                        opacity: i === 0 ? 1 : 0,
                        transform: i === 0 ? 'scale(1)' : 'scale(0.97)',
                      }}
                    >
                      <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-2">Advertisement</div>
                      <div className="text-white font-extrabold text-3xl tracking-tight mb-1">{slide.brand}</div>
                      <div className="text-white/90 font-bold text-base">{slide.tagline}</div>
                      <div className="text-white/60 text-xs mt-1">{slide.sub}</div>
                    </div>
                  ))}

                  {/* Play indicator */}
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/40 rounded-full px-2 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-blink" />
                    <span className="text-white text-[9px] font-bold">LIVE</span>
                  </div>

                  {/* Timer bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
                    <div
                      className="h-full bg-accent"
                      style={{ animation: 'progress-bar 3.5s linear infinite' }}
                    />
                  </div>
                </div>

                {/* TV bottom bar */}
                <div className="flex items-center justify-between mt-2 px-1">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  <div className="text-white/30 text-[8px] font-bold tracking-widest uppercase">Mr.Ads Display</div>
                  <div className="w-6 h-1 rounded-full bg-white/20" />
                </div>
              </div>

              {/* TV Stand */}
              <div className="flex justify-center mt-1">
                <div className="w-16 h-3 bg-card rounded-b-lg" />
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-1.5 bg-muted rounded-full" />
              </div>

              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg shadow-black/40">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Daily Reach</div>
                <div className="text-xl font-extrabold text-foreground tracking-tight">2,000–3,000</div>
                <div className="text-[10px] text-muted-foreground font-semibold">/ Location</div>
              </div>
              <div className="absolute -bottom-2 -left-4 bg-accent text-accent-foreground rounded-2xl px-4 py-3 shadow-lg">
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Repeats</div>
                <div className="text-base font-extrabold">Every 5 min</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scarcity strip */}
        <div className="mt-14 scarcity-strip rounded-2xl px-6 py-4 flex items-center gap-3 border border-red-900/40">
          <Icon name="ExclamationTriangleIcon" size={18} className="text-red-400 shrink-0" />
          <p className="text-sm font-semibold text-red-300">
            <strong>Limited ad slots per display.</strong> High-demand locations fill quickly. Secure your ad slot in advance.
          </p>
          <a
            href="#contact"
            className="ml-auto shrink-0 px-4 py-2 bg-accent text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors"
          >
            Reserve Now
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}
