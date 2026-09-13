'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AdCampaign, SAMPLE_CAMPAIGNS, CampaignCategory } from '@/data/billboardAds.data';
import AdCreative from './AdCreative';

export default function DigitalSignageBoard() {
  const [campaigns, setCampaigns] = useState<AdCampaign[]>(SAMPLE_CAMPAIGNS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState<'all' | CampaignCategory>('all');
  const [isCmsOpen, setIsCmsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [systemTime, setSystemTime] = useState<string>('');

  // Form State for Adding Custom Campaign in CMS Desk
  const [newBrandName, setNewBrandName] = useState('');
  const [newHeadline, setNewHeadline] = useState('');
  const [newSubheadline, setNewSubheadline] = useState('');
  const [newSupporting, setNewSupporting] = useState('');
  const [newCtaText, setNewCtaText] = useState('');
  const [newCategory, setNewCategory] = useState<CampaignCategory>('telecom');
  const [newVisualUrl, setNewVisualUrl] = useState('');
  const [newDuration, setNewDuration] = useState(10);

  const containerRef = useRef<HTMLDivElement>(null);

  // Filtered active campaigns
  const activePlaylist = campaigns.filter(
    (c) => categoryFilter === 'all' || c.category === categoryFilter
  );

  const safeIndex = activePlaylist.length > 0 ? currentIndex % activePlaylist.length : 0;
  const activeCampaign = activePlaylist[safeIndex] || SAMPLE_CAMPAIGNS[0];
  const nextIndex = activePlaylist.length > 0 ? (safeIndex + 1) % activePlaylist.length : 0;
  const upcomingCampaign = activePlaylist[nextIndex] || SAMPLE_CAMPAIGNS[1];

  // Preload upcoming campaign visuals for seamless crossfade
  useEffect(() => {
    if (upcomingCampaign?.visualUrl) {
      const img = new Image();
      img.src = upcomingCampaign.visualUrl;
    }
  }, [upcomingCampaign]);

  // Live broadcast system clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Main playback timer with smooth progress timeline
  useEffect(() => {
    if (isPaused || activePlaylist.length <= 1) return;

    const durationMs = Math.min(activeCampaign?.duration || 10, 6) * 1000;
    const crossfadeMs = 700;
    const intervalMs = 50;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / durationMs) * 100, 100));

      // Trigger crossfade before transition
      if (durationMs - elapsed <= crossfadeMs) {
        setIsTransitioning(true);
      }

      if (elapsed >= durationMs) {
        clearInterval(timer);
        setCurrentIndex((prev) => (prev + 1) % activePlaylist.length);
        setIsTransitioning(false);
        setProgress(0);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [currentIndex, activeCampaign, activePlaylist.length, isPaused]);

  // Manual jump to specific campaign
  const handleSelectCampaign = (index: number) => {
    if (index === safeIndex) return;
    setIsTransitioning(true);
    setProgress(0);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 400);
  };

  // Add custom campaign handler
  const handleAddCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBrandName || !newHeadline || !newVisualUrl) return;

    const newCampaign: AdCampaign = {
      id: `custom-${Date.now()}`,
      category: newCategory,
      brandName: newBrandName.toUpperCase(),
      brandSub: 'COMMERCIAL CAMPAIGN',
      badge: 'FEATURED LAUNCH',
      headline: newHeadline.toUpperCase(),
      subheadline: newSubheadline || 'Next-Generation Experience',
      supportingCopy:
        newSupporting || 'Crafted with uncompromising precision and designed for modern life.',
      ctaText: (newCtaText || 'DISCOVER MORE').toUpperCase(),
      visualUrl: newVisualUrl,
      visualAlt: newHeadline,
      accentColor: '#00F0FF',
      accentGlow: 'rgba(0, 240, 255, 0.35)',
      duration: newDuration,
      layoutVariant: newCategory,
    };

    setCampaigns((prev) => [...prev, newCampaign]);
    setNewBrandName('');
    setNewHeadline('');
    setNewSubheadline('');
    setNewSupporting('');
    setNewCtaText('');
    setNewVisualUrl('');
  };

  const categories: { id: 'all' | CampaignCategory; label: string }[] = [
    { id: 'all', label: 'All Campaigns (6)' },
    { id: 'telecom', label: '5G Telecom' },
    { id: 'fashion', label: 'Luxury Fashion' },
    { id: 'automotive', label: 'Automotive EV' },
    { id: 'culinary', label: 'Artisan Culinary' },
    { id: 'electronics', label: 'Consumer Tech' },
    { id: 'hospitality', label: 'Luxury Resort' },
  ];

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${isFullscreen ? 'fixed inset-0 z-50 bg-black p-4 sm:p-8 overflow-y-auto' : ''}`}
    >
      {/* ---------------------------------------------------------------------
       * TOP OPERATOR CONTROL DESK BAR (Outside the player)
       * --------------------------------------------------------------------- */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-[#0B101D]/90 backdrop-blur-md border border-slate-800 p-3 rounded-2xl shadow-card">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-brand text-white font-black flex items-center justify-center text-xs tracking-tight shadow-md">
            MR
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-wide">
                COMMERCIAL SIGNAGE BROADCAST NETWORK
              </h3>
            </div>
            <p className="text-[10.5px] font-semibold text-slate-400">
              City Center 4K Grid · {systemTime || '24/7 LIVE'}
            </p>
          </div>
        </div>

        {/* Quick Campaign Switcher Tabs */}
        <div className="hidden xl:flex items-center gap-1.5 bg-[#121B2D] p-1 rounded-xl border border-slate-800">
          {activePlaylist.map((camp, idx) => (
            <button
              key={camp.id}
              onClick={() => handleSelectCampaign(idx)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
                idx === safeIndex
                  ? 'bg-brand text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {camp.brandName}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Play/Pause Toggle */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className={`px-3 py-2 rounded-xl text-[11.5px] font-bold border transition flex items-center gap-1.5 ${
              isPaused
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-[#1E293B] hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
            title={isPaused ? 'Resume Broadcast' : 'Freeze Ad Frame'}
          >
            <i
              className={`fa-solid ${isPaused ? 'fa-play text-amber-400' : 'fa-pause'} text-xs`}
            ></i>
            <span className="hidden sm:inline">{isPaused ? 'Paused' : 'Playing'}</span>
          </button>

          {/* CMS Desk Toggle */}
          <button
            onClick={() => setIsCmsOpen(!isCmsOpen)}
            className={`px-3.5 py-2 rounded-xl text-[11.5px] font-bold transition flex items-center gap-2 border ${
              isCmsOpen
                ? 'bg-brand text-white border-brand shadow-lg shadow-brand/20'
                : 'bg-[#1E293B] hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
          >
            <i className="fa-solid fa-sliders text-xs"></i>
            <span>{isCmsOpen ? 'Close Desk' : 'Operator CMS'}</span>
          </button>

          {/* Kiosk Mode Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="px-3 py-2 rounded-xl text-[11.5px] font-bold bg-[#1E293B] hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center gap-1.5"
            title="Toggle Fullscreen Kiosk"
          >
            <i className={`fa-solid ${isFullscreen ? 'fa-compress' : 'fa-expand'} text-xs`}></i>
            <span className="hidden sm:inline">{isFullscreen ? 'Exit Kiosk' : 'Kiosk'}</span>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* ---------------------------------------------------------------------
         * MAIN COMMERCIAL DISPLAY HARDWARE ENCLOSURE (16:9 Cinema Viewport)
         * --------------------------------------------------------------------- */}
        <div
          className={`${isCmsOpen ? 'lg:col-span-8' : 'lg:col-span-12'} transition-all duration-300`}
        >
          {/* Exterior Hardware Bezel & Housing */}
          <div className="w-full p-3.5 sm:p-5 bg-gradient-to-b from-slate-700 via-slate-800 to-[#0A0F1D] rounded-[30px] sm:rounded-[42px] border-2 border-slate-600/70 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(255,77,82,0.18)] relative">
            {/* 16:9 Screen Panel Viewport (Holds PURE AD CREATIVE without any overlays) */}
            <div className="w-full relative rounded-[20px] sm:rounded-[28px] overflow-hidden border border-slate-900 bg-black aspect-[16/9] shadow-2xl">
              {/* ACTIVE AD LAYER */}
              <div
                key={`active-${activeCampaign.id}-${safeIndex}`}
                className={`absolute inset-0 z-10 transition-opacity duration-800 ease-in-out ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <AdCreative campaign={activeCampaign} isActive={!isTransitioning} />
              </div>

              {/* UPCOMING AD LAYER (Pre-buffered in background for 0-flicker crossfade) */}
              <div
                key={`upcoming-${upcomingCampaign.id}-${nextIndex}`}
                className={`absolute inset-0 z-0 transition-opacity duration-800 ease-in-out ${
                  isTransitioning ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <AdCreative campaign={upcomingCampaign} isActive={false} />
              </div>
            </div>
          </div>

          {/* Industry Category Filter Strip */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
              Filter By Industry:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setCategoryFilter(cat.id);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                  categoryFilter === cat.id
                    ? 'bg-brand text-white shadow-md'
                    : 'bg-[#121B2D] text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------------------------
         * OPERATOR CMS CONTROL DESK DRAWER (Expandable)
         * --------------------------------------------------------------------- */}
        {isCmsOpen && (
          <div className="lg:col-span-4 bg-[#0B101D] border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-6 animate-ad-fade-up">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-wider">
                  Operator Control Desk
                </h4>
                <p className="text-[11px] text-slate-400 font-semibold">
                  Campaign Management & Live Dispatch
                </p>
              </div>
              <button
                onClick={() => setIsCmsOpen(false)}
                className="text-slate-400 hover:text-white text-sm p-1"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Campaign Playlist Preview List */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Active Campaign Schedule ({activePlaylist.length})
                </span>
                <span className="text-[10px] font-bold text-brand uppercase">
                  Click to Dispatch
                </span>
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {activePlaylist.map((camp, idx) => (
                  <div
                    key={camp.id}
                    onClick={() => handleSelectCampaign(idx)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition ${
                      idx === safeIndex
                        ? 'bg-brand/15 border-brand/60 text-white'
                        : 'bg-[#121B2D] border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-7 rounded-md overflow-hidden bg-black flex-shrink-0 border border-slate-800">
                        <img
                          src={camp.visualUrl}
                          alt={camp.brandName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold">{camp.brandName}</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 uppercase font-semibold">
                            {camp.category}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 truncate max-w-[170px]">
                          {camp.headline}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-400">{camp.duration}s</span>
                      {idx === safeIndex && (
                        <span className="w-2 h-2 rounded-full bg-brand animate-ping"></span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Custom Campaign Form */}
            <form onSubmit={handleAddCampaign} className="border-t border-slate-800 pt-4 space-y-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Inject Custom Campaign
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. VOLT TECH"
                    value={newBrandName}
                    onChange={(e) => setNewBrandName(e.target.value)}
                    required
                    className="w-full bg-[#121B2D] border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                    Industry
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as CampaignCategory)}
                    className="w-full bg-[#121B2D] border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  >
                    <option value="telecom">5G Telecom</option>
                    <option value="fashion">Luxury Fashion</option>
                    <option value="automotive">Automotive</option>
                    <option value="culinary">Artisan Dining</option>
                    <option value="electronics">Consumer Tech</option>
                    <option value="hospitality">Resort / Travel</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                  Main Headline
                </label>
                <input
                  type="text"
                  placeholder="e.g. INTELLIGENCE IN MOTION"
                  value={newHeadline}
                  onChange={(e) => setNewHeadline(e.target.value)}
                  required
                  className="w-full bg-[#121B2D] border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                  Image URL (Unsplash or CDN)
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={newVisualUrl}
                  onChange={(e) => setNewVisualUrl(e.target.value)}
                  required
                  className="w-full bg-[#121B2D] border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                    Call To Action
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. GET STARTED"
                    value={newCtaText}
                    onChange={(e) => setNewCtaText(e.target.value)}
                    className="w-full bg-[#121B2D] border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                    Duration (sec)
                  </label>
                  <input
                    type="number"
                    min={5}
                    max={30}
                    value={newDuration}
                    onChange={(e) => setNewDuration(Number(e.target.value))}
                    className="w-full bg-[#121B2D] border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-brand hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-plus text-xs"></i>
                Publish Campaign to Broadcast
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
