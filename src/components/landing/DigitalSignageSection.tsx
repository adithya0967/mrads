'use client';

import React from 'react';
import DigitalSignageBoard from '../signage/DigitalSignageBoard';

export default function DigitalSignageSection() {
  return (
    <section
      id="signage-demo"
      className="bg-[#0B101D] border-t border-slate-800 text-white py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full bg-brand/10 blur-[120px]"></div>
        <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#121B2D] border border-slate-800 rounded-full px-4 py-1.5 text-[12px] font-bold text-slate-200 mb-4 shadow-card">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>COMMERCIAL DIGITAL SIGNAGE PLATFORM</span>
          </div>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
            24/7 Autonomous <span className="italic text-slate-300">Advertising Player</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Continuous commercial broadcast player with dual-buffer preloading, Ken Burns motion
            design, zero-flicker transitions, time-of-day scheduling, and an operator control desk.
          </p>
        </div>

        {/* Interactive Digital Signage Engine & Control Desk */}
        <DigitalSignageBoard />
      </div>
    </section>
  );
}
