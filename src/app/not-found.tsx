'use client';

import React from 'react';
import Link from 'next/link';
import TargetShell from '@/components/TargetShell';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <TargetShell>
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
        {/* Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D81F42]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-xl">
          <p className="eyebrow text-brand">404 Error</p>
          
          <h1 className="mt-4 font-serif text-[64px] sm:text-[88px] leading-none tracking-tight text-paper font-normal">
            Page not found.
          </h1>
          
          <p className="mt-6 text-[16px] sm:text-[18px] text-mute leading-relaxed max-w-md mx-auto">
            The media placement or page you’re looking for has moved or does not exist. Let’s get your campaign back on route.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="btn-arrow inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-brand hover:bg-brand-hover text-paper text-[13px] font-semibold tracking-wide shadow-lg shadow-brand/20 transition-all duration-200 w-full sm:w-auto"
            >
              <Home size={15} />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] text-paper text-[13px] font-semibold tracking-wide transition-all duration-200 w-full sm:w-auto"
            >
              <Compass size={15} />
              <span>Explore Solutions</span>
            </Link>
          </div>

          <div className="mt-14 pt-8 border-t border-line text-[13px] text-mute flex flex-wrap items-center justify-center gap-6">
            <Link href="/locations" className="hover:text-paper transition-colors">
              Display Locations
            </Link>
            <span>•</span>
            <Link href="/pricing" className="hover:text-paper transition-colors">
              Media Plan Starter
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-paper transition-colors">
              Contact Team
            </Link>
          </div>
        </div>
      </div>
    </TargetShell>
  );
}