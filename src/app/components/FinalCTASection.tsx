'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { mrAdsFacts } from '@/data/mrAdsFacts.data';

const budgetOptions = [
  { value: '', label: 'Select Monthly Budget' },
  { value: 'under-10k', label: 'Under ₹10,000' },
  { value: '10k-30k', label: '₹10,000 – ₹30,000' },
  { value: '30k-1L', label: '₹30,000 – ₹1,00,000' },
  { value: '1L+', label: '₹1,00,000+' },
];

export default function FinalCTASection() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#090A0C] py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <ScrollReveal direction="up" className="text-center mb-14 md:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F5F5] leading-[1.05]">
            {mrAdsFacts.finalCTA.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm font-semibold text-[#9A9CA5]">
            {mrAdsFacts.finalCTA.options.map((o) => (
              <span key={o}>{o}</span>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <ScrollReveal direction="right" className="lg:col-span-5 flex flex-col gap-6">
            <a href={mrAdsFacts.contact.phoneHref} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#111318] border border-white/10 flex items-center justify-center group-hover:border-[#B4233C]/60 transition-all shrink-0">
                <Icon name="PhoneIcon" size={20} className="text-[#E85D75]" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#9A9CA5] uppercase tracking-wider">
                  Phone & WhatsApp
                </div>
                <div className="text-base font-extrabold text-[#F5F5F5] group-hover:text-white">
                  {mrAdsFacts.contact.phone}
                </div>
              </div>
            </a>
            <a href={mrAdsFacts.contact.emailHref} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#111318] border border-white/10 flex items-center justify-center group-hover:border-[#B4233C]/60 transition-all shrink-0">
                <Icon name="EnvelopeIcon" size={20} className="text-[#E85D75]" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#9A9CA5] uppercase tracking-wider">
                  Email
                </div>
                <div className="text-base font-extrabold text-[#F5F5F5] group-hover:text-white">
                  {mrAdsFacts.contact.email}
                </div>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={100} className="lg:col-span-7">
            <div className="border border-white/10 rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center gap-3">
                  <Icon name="CheckCircleIcon" size={28} className="text-[#B4233C]" />
                  <h4 className="text-xl font-extrabold text-[#F5F5F5]">Inquiry Received</h4>
                  <p className="text-sm text-[#9A9CA5] max-w-sm">
                    Thank you. Our advertising specialists will contact you shortly with campaign
                    recommendations.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-[#B4233C] uppercase tracking-wider hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="px-4 py-3 bg-[#0a0b0d] border border-[#252830] rounded-lg text-sm text-[#F5F5F5] placeholder:text-[#666] focus:outline-none focus:border-[#B4233C]"
                    />
                    <input
                      name="business"
                      required
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Company / brand"
                      className="px-4 py-3 bg-[#0a0b0d] border border-[#252830] rounded-lg text-sm text-[#F5F5F5] placeholder:text-[#666] focus:outline-none focus:border-[#B4233C]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="px-4 py-3 bg-[#0a0b0d] border border-[#252830] rounded-lg text-sm text-[#F5F5F5] placeholder:text-[#666] focus:outline-none focus:border-[#B4233C]"
                    />
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="px-4 py-3 bg-[#0a0b0d] border border-[#252830] rounded-lg text-sm text-[#F5F5F5] focus:outline-none focus:border-[#B4233C]"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Campaign requirements (optional)"
                    className="px-4 py-3 bg-[#0a0b0d] border border-[#252830] rounded-lg text-sm text-[#F5F5F5] placeholder:text-[#666] focus:outline-none focus:border-[#B4233C] resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#B4233C] text-white rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[#D13B55] transition-colors"
                  >
                    Contact Us
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
