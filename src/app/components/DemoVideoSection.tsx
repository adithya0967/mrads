'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

export default function DemoVideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="py-24 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
          See It Live
        </span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-foreground mb-4">
          See Mr. Ads in Action
        </h2>
        <p className="text-muted-foreground text-base mb-10 max-w-xl mx-auto">
          Experience how your brand appears across our restaurant display network.
        </p>

        {/* Video player mockup */}
        <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl shadow-black/40 group cursor-pointer aspect-video bg-background">
          {/* Poster image */}
          <AppImage
            src="https://images.unsplash.com/photo-1698265539672-f27e28ee0578"
            alt="Restaurant interior with digital display screen showing advertisement, warm ambient lighting, occupied dining tables"
            fill
            className="object-cover opacity-60"
            priority />
          

          {/* Dark scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />

          {/* Play button overlay */}
          {!playing &&
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 group/btn"
            aria-label="Play demo video">
            
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl group-hover/btn:scale-110 group-hover/btn:bg-accent/80 transition-all duration-300">
                <Icon name="PlayIcon" size={32} variant="solid" className="text-white ml-1" />
              </div>
              <span className="text-white text-sm font-bold uppercase tracking-widest opacity-80">
                Watch Demo
              </span>
            </button>
          }

          {playing &&
          <div className="absolute inset-0 flex items-center justify-center bg-background">
              <div className="text-center text-white">
                <Icon name="TvIcon" size={48} className="text-accent mx-auto mb-4" />
                <p className="font-bold text-lg">Demo Video</p>
                <p className="text-white/50 text-sm mt-1">
                  Connect your video source here
                </p>
              </div>
            </div>
          }

          {/* Bottom info bar */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-blink" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Mr. Ads Network</span>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-xs font-bold">30s spot · Bengaluru</span>
            </div>
          </div>
        </div>

        <p className="mt-6 text-muted-foreground text-sm">
          Want to see your brand on these screens?{' '}
          <a href="#contact" className="text-accent font-bold hover:underline">
            Book a slot today →
          </a>
        </p>
      </div>
    </section>);

}