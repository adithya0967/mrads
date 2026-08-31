'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CONTACT_SOLUTIONS = [
  'Media Plans',
  'Campaign Pricing',
  'Demo Videos',
  'Location Lists',
  'Creative Services',
  'Customized Solutions',
];

export default function FinalCTASection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Media Plans',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
    }, 2500);
  };

  return (
    <section id="contact" className="relative py-32 bg-[#090A0F] text-white border-t border-white/10 overflow-hidden">
      {/* Calm Ambient Purple Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/15 blur-[220px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Top Calm Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-black uppercase tracking-[0.25em] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
          Mr. Ads Visual Resolution
        </div>

        <h2 className="text-4xl sm:text-7xl font-black tracking-tighter text-white leading-none mb-6">
          YOUR HYPERLOCAL<br />
          <span className="text-[#A855F7]">ADVERTISING PARTNER</span>
        </h2>

        <p className="text-slate-300 text-lg md:text-xl font-medium max-w-xl mx-auto mb-12">
          Ready to scale your brand presence across real-world display, moving media, and targeted hyperlocal networks?
        </p>

        {/* Connect Checklist Pills */}
        <div className="mb-14">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
            CONNECT WITH US FOR
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {CONTACT_SOLUTIONS.map((sol) => (
              <span
                key={sol}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider hover:border-purple-500/50 hover:bg-purple-950/40 transition-all"
              >
                {sol}
              </span>
            ))}
          </div>
        </div>

        {/* Big Action CTA & Direct Contact Cards */}
        <div className="flex flex-col items-center justify-center gap-8 mb-16">
          <button
            onClick={() => setModalOpen(true)}
            className="px-10 py-5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-2xl shadow-purple-600/50 hover:shadow-purple-500/80 hover:scale-105"
          >
            CONTACT US
          </button>

          {/* Phone & Email direct metrics */}
          <div className="flex flex-col sm:flex-row items-center gap-8 text-base font-bold text-slate-300">
            <a
              href="tel:+919686544644"
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400 hover:text-white transition-all"
            >
              <span className="text-xl">📞</span>
              <span>+91 96865 44644</span>
            </a>
            <a
              href="mailto:knowus@mr-ads.in"
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400 hover:text-white transition-all"
            >
              <span className="text-xl">✉️</span>
              <span>knowus@mr-ads.in</span>
            </a>
          </div>
        </div>

        {/* Footer Copyright Statement */}
        <div className="border-t border-white/10 pt-10 text-xs font-medium text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-[#7C3AED] text-white flex items-center justify-center font-black text-[10px]">
              MA
            </span>
            <span className="font-extrabold text-slate-300">MR. ADS</span>
            <span>— Connecting Brands with the Right Audience.</span>
          </div>
          <div>© {new Date().getFullYear()} Mr. Ads. All Rights Reserved.</div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE INQUIRY MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl p-8 bg-gradient-to-b from-[#130f24] to-[#090a0f] border border-purple-500/40 shadow-2xl text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-colors"
              >
                ✕
              </button>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 text-3xl flex items-center justify-center mx-auto mb-4 border border-purple-500/40">
                    ✓
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">Inquiry Received</h3>
                  <p className="text-sm text-slate-300 font-medium">
                    Our media strategy team will contact you within 2 business hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-black uppercase tracking-widest text-[#A855F7]">
                      MR. ADS CAMPAIGN INQUIRY
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">Get Your Media Plan</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                          Work Email
                        </label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Select Advertising Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#130f24] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                      >
                        {CONTACT_SOLUTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Campaign Details (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your target location, budget, or timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-purple-600/40"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
