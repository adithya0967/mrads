'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

// Fictional world-class campaigns rotating inside the billboard screen
const CAMPAIGNS = [
  {
    id: 'velaris-ev',
    brand: 'VELARIS',
    brandSubtitle: 'A CLEANER TOMORROW TOGETHER',
    tagline: 'DRIVE A BRIGHTER TOMORROW',
    category: 'LUXURY AUTOMOTIVE',
    subText: 'SUSTAINABLE LUXURY FOR A BOLDER WORLD',
    accentColor: '#38BDF8',
    imageSrc: '/assets/images/velaris_car_ad.jpg',
  },
  {
    id: 'chrono-luxe',
    brand: 'CHRONO LUXE',
    brandSubtitle: 'SWISS PRECISION SINCE 1928',
    tagline: 'PRECISION ELEVATED',
    category: 'FINE TIMEPIECES',
    subText: 'SWISS AUTOMATIC 70-HOUR POWER RESERVE',
    accentColor: '#F59E0B',
    imageSrc: '/assets/images/chrono_luxe_watch_ad.jpg',
  },
  {
    id: 'bistro',
    brand: "L'ÉTOILE BISTRO",
    brandSubtitle: 'HAUTE CUISINE & COCKTAILS',
    tagline: 'EXQUISITE GASTRONOMY',
    category: 'GOURMET DINING',
    subText: 'WOOD-FIRED PIZZA & CRAFT COCKTAILS IN INDIRANAGAR',
    accentColor: '#10B981',
    imageSrc: '/assets/images/restaurant_ad.jpg',
  },
  {
    id: 'fashion',
    brand: 'MAISON AUTUMN',
    brandSubtitle: 'PARIS • MILAN • BENGALURU',
    tagline: 'MODERN URBAN ELEGANCE',
    category: 'HAUTE COUTURE',
    subText: 'AUTUMN CAPSULE COLLECTION AT LAVELLE ROAD',
    accentColor: '#EC4899',
    imageSrc: '/assets/images/fashion_luxury_ad.jpg',
  },
  {
    id: 'mrads-core',
    brand: 'MR. ADS',
    brandSubtitle: 'REAL PLACES. REAL PEOPLE. REAL IMPACT.',
    tagline: 'REACH CUSTOMERS WHERE THEY LIVE & DINE',
    category: 'HYPERLOCAL NETWORK',
    subText: 'PREMIUM DIGITAL & OUTDOOR ADVERTISING NETWORK ACROSS BENGALURU',
    accentColor: '#A855F7',
    imageSrc: '/assets/images/moving_media_ad.jpg',
  },
];

export default function BillboardTimesSquareHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  // Track scroll progress through this 400vh section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Rotate ad campaigns every 4 seconds inside screen
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % CAMPAIGNS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Stage 1 -> Stage 2 -> Stage 3 (Hero to Full-Screen Zoom In: 0.0 to 0.40 progress)
  // Background background color interpolates from white to dark night
  const bgOpacity = useTransform(scrollYProgress, [0.0, 0.25, 0.45], ['#FFFFFF', '#090A0F', '#040508']);
  
  // Left side Typography opacity & position
  const textOpacity = useTransform(scrollYProgress, [0.0, 0.15, 0.30], [1, 0.4, 0]);
  const textScale = useTransform(scrollYProgress, [0.0, 0.25], [1, 0.9]);
  const textX = useTransform(scrollYProgress, [0.0, 0.25], ['0%', '-20%']);

  // Billboard Scale, Position & Dimensions
  // Starts on the right half, zooms centered and scales up to 100vw fill, then pulls back for Times Square!
  const billboardScale = useTransform(
    scrollYProgress,
    [0.0, 0.20, 0.40, 0.50, 0.65, 0.85, 1.0],
    [1, 2.2, 4.8, 4.8, 1.3, 0.85, 0.75]
  );

  const billboardX = useTransform(
    scrollYProgress,
    [0.0, 0.20, 0.40, 0.50, 0.65, 0.85, 1.0],
    ['22%', '10%', '0%', '0%', '0%', '0%', '0%']
  );

  const billboardY = useTransform(
    scrollYProgress,
    [0.0, 0.20, 0.40, 0.50, 0.65, 0.85, 1.0],
    ['0%', '0%', '0%', '0%', '-4%', '-10%', '-15%']
  );

  // Perspective 3D rotation transform
  const billboardRotateY = useTransform(
    scrollYProgress,
    [0.0, 0.20, 0.40, 0.55, 0.75],
    [-8, -4, 0, 0, 0]
  );
  
  const billboardRotateX = useTransform(
    scrollYProgress,
    [0.0, 0.20, 0.40, 0.55, 0.85, 1.0],
    [4, 2, 0, 0, 8, 15]
  );

  // Full-Screen overlay message banner inside ad screen
  const adMessageOpacity = useTransform(scrollYProgress, [0.35, 0.42, 0.48, 0.54], [0, 1, 1, 0]);

  // Times Square Environment Reveal Opacity (Starts fading in at 0.52 scroll)
  const timesSquareOpacity = useTransform(scrollYProgress, [0.50, 0.62, 0.85], [0, 1, 1]);
  
  // Aerial view perspective elevation indicator (0.75 to 1.0)
  const aerialMessageOpacity = useTransform(scrollYProgress, [0.75, 0.85, 0.98], [0, 1, 1]);

  const activeAd = CAMPAIGNS[currentAdIndex];

  return (
    <div ref={containerRef} className="relative h-[450vh] w-full">
      {/* Sticky viewport frame holding the camera view */}
      <motion.div
        style={{ backgroundColor: bgOpacity }}
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center transition-colors duration-300"
      >
        {/* ========================================================================= */}
        {/* TIMES SQUARE PHOTOREALISTIC NIGHT ENVIRONMENT (Revealed during zoom-out) */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: timesSquareOpacity }}
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        >
          {/* Night Sky & Atmospheric Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-[#090A14] to-[#010206]" />

          {/* Skyscrapers Silhouette & Glowing Windows Grid */}
          <div className="absolute inset-0 opacity-70">
            {/* Left Skyscraper Tower */}
            <div className="absolute left-[-5%] bottom-0 w-[35%] h-[90%] bg-gradient-to-r from-slate-950 via-zinc-900 to-slate-900 border-r border-indigo-500/20 shadow-2xl">
              <div className="w-full h-full bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_24px] opacity-25" />
              {/* Vertical LED Ribbon */}
              <div className="absolute right-2 top-10 bottom-20 w-3 bg-gradient-to-b from-purple-500 via-cyan-400 to-pink-500 blur-[2px] animate-pulse" />
            </div>

            {/* Right Skyscraper Tower */}
            <div className="absolute right-[-5%] bottom-0 w-[35%] h-[92%] bg-gradient-to-l from-slate-950 via-zinc-900 to-slate-900 border-l border-purple-500/20 shadow-2xl">
              <div className="w-full h-full bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:18px_28px] opacity-25" />
              {/* Secondary Digital Billboard on Right Building */}
              <div className="absolute left-4 top-[20%] w-[80%] h-[25%] rounded-lg bg-gradient-to-br from-pink-600 to-indigo-900 border border-pink-400/40 p-4 shadow-xl overflow-hidden">
                <div className="text-[10px] font-black text-pink-300 uppercase tracking-widest">TIMES SQ MEDIA #04</div>
                <div className="text-sm font-bold text-white mt-1">LUXURY COUTURE</div>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent animate-pulse" />
              </div>
            </div>
          </div>

          {/* Adjacent LED Billboard Screens in Times Square */}
          <div className="absolute left-[8%] top-[25%] w-[220px] h-[320px] rounded-xl bg-gradient-to-b from-amber-600 via-red-900 to-black border border-amber-400/40 p-4 shadow-2xl shadow-amber-500/10 hidden md:block">
            <div className="text-xs font-black text-amber-300 tracking-wider">SPECTACULAR #02</div>
            <div className="text-xl font-black text-white mt-4 leading-tight">NEON CITY BROADWAY</div>
            <div className="mt-8 text-[11px] text-amber-200/80 font-medium">REACHING 1.5M DAILY PEDESTRIANS</div>
          </div>

          <div className="absolute right-[8%] top-[28%] w-[240px] h-[340px] rounded-xl bg-gradient-to-b from-cyan-600 via-blue-950 to-black border border-cyan-400/40 p-4 shadow-2xl shadow-cyan-500/10 hidden md:block">
            <div className="text-xs font-black text-cyan-300 tracking-wider">TOWER DISPLAY #07</div>
            <div className="text-xl font-black text-white mt-4 leading-tight">GLOBAL INNOVATION</div>
            <div className="mt-8 text-[11px] text-cyan-200/80 font-medium">REAL-WORLD IMPACT</div>
          </div>

          {/* Wet Asphalt Street & Yellow Taxis / Urban Traffic */}
          <div className="absolute bottom-0 inset-x-0 h-[28%] bg-gradient-to-t from-black via-slate-950 to-transparent">
            {/* Street reflection grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:4rem_2rem] opacity-30 [transform:perspective(500px)_rotateX(60deg)] origin-bottom" />

            {/* Animated Yellow Taxis & Taillights */}
            <div className="absolute bottom-6 left-[15%] flex gap-6 animate-pulse">
              <div className="w-16 h-7 rounded bg-amber-400 border border-amber-300 shadow-[0_0_20px_#f59e0b] flex items-center justify-between px-2">
                <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_#ef4444]" />
                <span className="text-[8px] font-black text-black">TAXI</span>
                <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_#ef4444]" />
              </div>
              <div className="w-20 h-8 rounded bg-amber-500 border border-amber-300 shadow-[0_0_25px_#f59e0b] flex items-center justify-between px-2">
                <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_#ef4444]" />
                <span className="text-[9px] font-black text-black">NYC CAB</span>
                <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_#ef4444]" />
              </div>
            </div>

            {/* Crowd Silhouettes */}
            <div className="absolute bottom-2 inset-x-0 h-10 bg-[radial-gradient(ellipse_at_bottom,#ffffff_1px,transparent_1px)] bg-[size:12px_12px] opacity-20" />
          </div>

          {/* Atmospheric Haze & Lens Flare Lighting */}
          <div className="absolute top-[15%] left-[50%] -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-purple-600/15 blur-[140px] pointer-events-none" />
          <div className="absolute top-[30%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none" />
        </motion.div>

        {/* ========================================================================= */}
        {/* STAGE 1 MINIMAL HERO TYPOGRAPHY (Left Side) */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: textOpacity, scale: textScale, x: textX }}
          className="absolute left-[6%] top-[22%] z-10 max-w-xl pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-ping" />
            Hyperlocal Advertising Solutions
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-slate-950 leading-[0.92] mb-6">
            WE BUILD<br />
            BRANDS IN THE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#C084FC]">
              REAL WORLD
            </span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl font-medium max-w-md leading-relaxed">
            Connecting brands with the right audience through high-impact outdoor, indoor display, moving media, and digital solutions.
          </p>

          {/* Scroll Prompt Indicator */}
          <div className="mt-10 flex items-center gap-3 text-slate-500 text-xs uppercase tracking-widest font-extrabold">
            <span className="w-8 h-[2px] bg-[#7C3AED]" />
            Scroll to explore the camera journey
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CENTRAL GIGANTIC DIGITAL BILLBOARD (Controlled by Spatial Scroll Camera) */}
        {/* ========================================================================= */}
        <motion.div
          style={{
            scale: billboardScale,
            x: billboardX,
            y: billboardY,
            rotateY: billboardRotateY,
            rotateX: billboardRotateX,
            transformPerspective: 1200,
          }}
          className="relative z-20 w-[92%] max-w-[660px] flex flex-col items-center select-none"
        >
          {/* Top Spotlight Mounting Fixtures (6 overhead lamps casting down) */}
          <div className="w-[92%] flex justify-between items-end px-6 -mb-1.5 z-30 relative">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                <div className="w-4 h-4 rounded-t-sm bg-gradient-to-b from-zinc-400 to-zinc-800 border border-zinc-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#f59e0b]" />
                </div>
                <div className="w-1 h-3 bg-zinc-700" />
                <div className="absolute top-4 -inset-x-6 h-32 bg-gradient-to-b from-amber-200/20 to-transparent blur-sm pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Billboard Screen Canvas Box & Frame */}
          <div className="relative w-full aspect-[16/9.5] rounded-xl overflow-hidden bg-black border-2 border-zinc-700 shadow-[0_25px_80px_rgba(0,0,0,0.8)] ring-1 ring-white/10 flex flex-col justify-between">
            {/* LED Matrix Screen Mesh & Glass Gloss Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4px_4px] z-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/10 pointer-events-none z-20" />

            {/* Dynamic Active Advertisement Canvas */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAd.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 z-10 w-full h-full flex flex-col justify-between p-4 sm:p-6 text-white"
              >
                {/* Background Photography */}
                <div className="absolute inset-0 z-0">
                  <AppImage
                    src={activeAd.imageSrc}
                    alt={activeAd.tagline}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 660px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/50" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Top Row: Category Badge (Left) & Brand Logo/Subtitle (Right) */}
                <div className="relative z-20 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/15">
                      {activeAd.category}
                    </span>
                  </div>

                  <div className="flex flex-col items-end text-right">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9z" strokeDasharray="30" strokeDashoffset="10" />
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                      </svg>
                      <span className="text-base sm:text-xl font-light tracking-[0.2em] text-white uppercase font-sans">
                        {activeAd.brand}
                      </span>
                    </div>
                    {activeAd.brandSubtitle && (
                      <span className="text-[7px] font-semibold tracking-widest uppercase text-white/75 mt-0.5">
                        {activeAd.brandSubtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Row: Headline (Left) & Powered by MR. ADS (Right) */}
                <div className="relative z-20 flex items-end justify-between gap-3 pt-4">
                  <div className="max-w-xs sm:max-w-sm space-y-1">
                    <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
                      {activeAd.tagline}
                    </h2>
                    <p className="text-[9px] sm:text-xs font-semibold tracking-wider text-gray-200 uppercase opacity-90 line-clamp-1">
                      {activeAd.subText}
                    </p>
                  </div>

                  <div className="flex flex-col items-end bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded border border-white/10 shadow-lg shrink-0">
                    <div className="text-[8px] font-bold text-gray-300 tracking-wider">
                      Powered by
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-black text-white tracking-tight">MR.</span>
                      <span className="text-xs font-black text-[#A855F7] tracking-tight">ADS</span>
                    </div>
                    <div className="text-[6px] font-extrabold tracking-widest text-gray-400 uppercase">
                      REAL PLACES. REAL PEOPLE. REAL IMPACT.
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ========================================================================= */}
            {/* FULL-SCREEN AD MESSAGING OVERLAY (Triggers during Stage 3 zoom climax) */}
            {/* ========================================================================= */}
            <motion.div
              style={{ opacity: adMessageOpacity }}
              className="absolute inset-0 z-40 bg-gradient-to-b from-[#4C1D95]/90 via-[#2E1065]/95 to-[#0F172A]/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center text-white pointer-events-none"
            >
              <span className="text-xs font-black uppercase tracking-[0.4em] text-purple-300 mb-3 px-4 py-1.5 rounded-full bg-purple-900/60 border border-purple-400/30">
                HYPERLOCAL ADVERTISING
              </span>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white max-w-2xl leading-none mb-4">
                CONNECTING BRANDS WITH THE RIGHT AUDIENCE
              </h2>
              <div className="w-16 h-1 bg-[#A855F7] rounded-full mb-4" />
              <p className="text-sm md:text-lg font-bold text-purple-200 tracking-widest uppercase">
                WE BUILD BRANDS IN THE REAL WORLD
              </p>
            </motion.div>
          </div>

          {/* Bottom Catwalk Safety Railing Mesh Structure */}
          <div className="w-[96%] flex flex-col items-center -mt-0.5">
            <div className="w-full h-2.5 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 border-t border-b border-zinc-500 shadow-inner flex items-center justify-around">
              <div className="w-full h-full bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:6px_3px] opacity-70" />
            </div>
            <div className="w-[98%] h-3 flex justify-between items-start border-t border-zinc-500 relative">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-0.5 h-full bg-zinc-600" />
              ))}
              <div className="absolute top-1.5 inset-x-0 h-0.5 bg-zinc-400" />
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* STAGE 5 AERIAL VIEW METAPHOR OVERLAY (Triggers during Times Square zoom out) */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: aerialMessageOpacity }}
          className="absolute bottom-12 inset-x-0 z-30 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        >
          <div className="max-w-2xl bg-black/80 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-white/20 shadow-2xl shadow-purple-950/40">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#A855F7] mb-2 block">
              REAL-WORLD BRAND PRESENCE
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-3">
              IMAGINE YOUR BRAND VISIBLE AT THIS SCALE
            </h3>
            <p className="text-xs md:text-sm text-slate-300 font-medium max-w-lg mx-auto">
              Times Square is the ultimate symbol of high-impact advertising. Mr. Ads brings this exact repeated visibility & powerful brand positioning to your target local markets.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
