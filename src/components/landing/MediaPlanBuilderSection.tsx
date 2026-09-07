'use client';

import React, { useState } from 'react';

interface MediaPlanBuilderProps {
  onSendBrief: (
    city: string,
    duration: string,
    budget: string,
    channels: string[]
  ) => void;
  onToast: (msg: string) => void;
}

const channelsList = [
  'Restaurant Displays',
  'Apartment Displays',
  'Corporate Displays',
  'Mall Displays',
  'Fitness Displays',
  'Play Zone',
  'PG & Hostel',
  'Auto / Cab / Bus',
  'Mobile Van / Roadshow',
  'Flyer Distribution',
  'Newspaper / QC Inserts',
  'Pharmacy Covers',
  'Creative Services',
  'Website / AI',
];

export default function MediaPlanBuilderSection({
  onSendBrief,
  onToast,
}: MediaPlanBuilderProps) {
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [city, setCity] = useState('');
  const [duration, setDuration] = useState('1 month');
  const [budget, setBudget] = useState('₹50k – ₹1.5L');

  const toggleChannel = (chan: string) => {
    setSelectedChannels((prev) =>
      prev.includes(chan) ? prev.filter((c) => c !== chan) : [...prev, chan]
    );
  };

  const handleClear = () => {
    setSelectedChannels([]);
  };

  const handleSend = () => {
    if (selectedChannels.length === 0) {
      onToast('Select at least one channel first');
      return;
    }
    onSendBrief(city, duration, budget, selectedChannels);
  };

  const displayCity = city.trim() || 'Your city';

  return (
    <section id="builder" className="bg-paper border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-[28px] border border-line shadow-lift overflow-hidden reveal in">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-3 p-6 sm:p-10">
              <p className="crumb">Interactive · Build your brief in 30 seconds</p>
              <h2 className="serif text-3xl sm:text-[36px] tracking-tight mt-2">
                Media-plan starter
              </h2>
              <p className="text-muted text-[14.5px] mt-2">
                Select channels, set a city & duration — we’ll draft your brief instantly and pre-fill the enquiry form.
              </p>
              <p className="spec-label mt-7 mb-3">1 · Choose channels (tap to select)</p>
              <div className="flex flex-wrap gap-2" id="builderChips">
                {channelsList.map((ch) => {
                  const isSelected = selectedChannels.includes(ch);
                  return (
                    <button
                      key={ch}
                      type="button"
                      onClick={() => toggleChannel(ch)}
                      className={`chip chip-red text-[12.5px] font-bold px-4 py-2 rounded-full ${
                        isSelected ? 'on' : ''
                      }`}
                    >
                      {ch.replace(' Displays', '')}
                    </button>
                  );
                })}
              </div>
              <div className="grid sm:grid-cols-3 gap-3 mt-6">
                <div>
                  <p className="spec-label mb-2">2 · City</p>
                  <input
                    id="bCity"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g., Bengaluru"
                    className="w-full border border-line rounded-xl px-4 py-3 text-sm bg-paper"
                  />
                </div>
                <div>
                  <p className="spec-label mb-2">Duration</p>
                  <select
                    id="bDur"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full border border-line rounded-xl px-4 py-3 text-sm bg-paper font-semibold"
                  >
                    <option>2 weeks</option>
                    <option>1 month</option>
                    <option>2–3 months</option>
                    <option>3+ months</option>
                  </select>
                </div>
                <div>
                  <p className="spec-label mb-2">Monthly budget</p>
                  <select
                    id="bBud"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full border border-line rounded-xl px-4 py-3 text-sm bg-paper font-semibold"
                  >
                    <option>Under ₹50k</option>
                    <option>₹50k – ₹1.5L</option>
                    <option>₹1.5L – ₹5L</option>
                    <option>₹5L+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-navy text-white p-6 sm:p-10 flex flex-col">
              <p className="text-[11px] font-bold tracking-[.18em] uppercase text-white/50">
                Your brief · live preview
              </p>
              <div
                id="builderOut"
                className="mt-4 bg-white/[.07] border border-white/10 rounded-2xl p-5 text-[13.5px] leading-relaxed text-white/80 min-h-[150px]"
              >
                {selectedChannels.length === 0 ? (
                  'Select at least one channel to generate your brief…'
                ) : (
                  <>
                    <p className="text-white font-bold">
                      Brief — {displayCity} · {duration} · {budget}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {selectedChannels.map((v) => (
                        <span
                          key={v}
                          className="text-[11.5px] font-bold bg-white/10 border border-white/15 px-2.5 py-1 rounded-full"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3">
                      Please share a media plan across the above ({selectedChannels.length} channel
                      {selectedChannels.length > 1 ? 's' : ''}) for{' '}
                      <b className="text-white">{displayCity}</b> — with recommended locations, formats, frequency, pricing and creative options.
                    </p>
                  </>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between text-[12.5px] font-bold text-white/60">
                <span id="chanCount">
                  {selectedChannels.length} channel{selectedChannels.length === 1 ? '' : 's'} selected
                </span>
                <button id="builderClear" type="button" onClick={handleClear} className="underline hover:text-white">
                  Clear
                </button>
              </div>
              <button
                id="builderSend"
                type="button"
                onClick={handleSend}
                className="mt-4 bg-brand hover:bg-white hover:text-navy transition text-white font-extrabold text-sm px-6 py-4 rounded-full w-full"
              >
                Send this brief → Request Media Plan
              </button>
              <p className="text-[11.5px] text-white/45 mt-3 text-center">
                No spam. We reply with plan, pricing & location list.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
