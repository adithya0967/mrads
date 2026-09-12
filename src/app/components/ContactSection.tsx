'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/components/ui/ScrollReveal';

const budgetOptions = [
  { value: '', label: 'Select Monthly Budget' },
  { value: 'under-10k', label: 'Under ₹10,000' },
  { value: '10k-30k', label: '₹10,000 – ₹30,000' },
  { value: '30k-1L', label: '₹30,000 – ₹1,00,000' },
  { value: '1L+', label: '₹1,00,000+' },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    budget: '',
    message: '',
  });
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
    <section id="contact" className="bg-[#090A0C]">
      {/* Major CTA Block */}
      <div className="bg-[#111318] text-[#F5F5F5] py-20 md:py-28 border-b border-[#252830]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <ScrollReveal direction="up" delay={0} className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
              GET STARTED TODAY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.15] mb-4">
              Ready to Reach Your Next Customer?
            </h2>
            <p className="text-[#9A9CA5] text-base md:text-lg font-normal leading-relaxed">
              Let's build a hyperlocal campaign around your audience, locations, and goals.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="#inquiry-form"
              className="px-7 py-3.5 bg-[#B4233C] text-white rounded-lg font-bold text-base hover:bg-[#D13B55] transition-colors shadow-md shadow-black/50"
            >
              Book Your Ad Slot
            </a>
            <a
              href="tel:+919686544644"
              className="px-7 py-3.5 bg-[#090A0C] text-[#F5F5F5] border border-[#252830] rounded-lg font-bold text-base hover:border-[#F5F5F5] transition-colors"
            >
              Talk to Our Team
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Clean Lead Inquiry Form & Details */}
      <div id="inquiry-form" className="py-20 md:py-28 border-b border-[#252830]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Direct Contact Information */}
            <div className="lg:col-span-5 flex flex-col justify-between items-start gap-8">
              <ScrollReveal direction="right" delay={0}>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#B4233C] mb-3 block">
                    CONTACT DETAILS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] tracking-tight mb-4">
                    Speak Directly With Our Campaign Team
                  </h3>
                  <p className="text-[#9A9CA5] text-base leading-relaxed mb-8">
                    We'll provide exact screen counts, location availability, and campaign estimates
                    for your brand.
                  </p>

                  <div className="flex flex-col gap-6">
                    <a href="tel:+919686544644" className="pro-card p-4 rounded-2xl border border-white/10 flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#252B3B] to-[#12151E] border border-white/15 flex items-center justify-center group-hover:border-[#B4233C]/60 group-hover:scale-110 shadow-md transition-all">
                        <Icon name="PhoneIcon" size={20} className="text-[#E85D75]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#9A9CA5] uppercase tracking-wider">
                          Phone & WhatsApp
                        </div>
                        <div className="text-base font-extrabold text-[#F5F5F5] group-hover:text-white transition-colors">+91 96865 44644</div>
                      </div>
                    </a>

                    <a href="mailto:Knowus@mr-ads.in" className="pro-card p-4 rounded-2xl border border-white/10 flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#252B3B] to-[#12151E] border border-white/15 flex items-center justify-center group-hover:border-[#B4233C]/60 group-hover:scale-110 shadow-md transition-all">
                        <Icon name="EnvelopeIcon" size={20} className="text-[#E85D75]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#9A9CA5] uppercase tracking-wider">
                          Email Inquiry
                        </div>
                        <div className="text-base font-extrabold text-[#F5F5F5] group-hover:text-white transition-colors">
                          Knowus@mr-ads.in
                        </div>
                      </div>
                    </a>

                    <div className="pro-card p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#252B3B] to-[#12151E] border border-white/15 flex items-center justify-center shadow-md">
                        <Icon name="MapPinIcon" size={20} className="text-[#E85D75]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#9A9CA5] uppercase tracking-wider">
                          Headquarters
                        </div>
                        <div className="text-base font-extrabold text-[#F5F5F5]">
                          Bengaluru, Karnataka, India
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card-glow border border-white/10 rounded-2xl p-5 w-full mt-8 shadow-lg">
                  <div className="text-xs font-extrabold text-[#F5F5F5] mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#16C784]" />
                    Response Commitment
                  </div>
                  <p className="text-xs text-[#9A9CA5] leading-relaxed font-normal">
                    All campaign inquiries receive a custom proposal within 24 business hours.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: B2B Lead Form */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left" delay={100}>
              <div className="glass-card-glow border border-white/15 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#641C2B]/30 flex items-center justify-center text-[#B4233C]">
                      <Icon name="CheckCircleIcon" size={28} />
                    </div>
                    <h4 className="text-2xl font-extrabold text-[#F5F5F5]">Inquiry Received</h4>
                    <p className="text-sm text-[#9A9CA5] max-w-sm">
                      Thank you. Our advertising specialists will contact you shortly with campaign
                      recommendations.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs font-bold text-[#B4233C] uppercase tracking-wider hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="name"
                          className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]"
                        >
                          Your Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Vikram Sharma"
                          className="px-4 py-3 bg-[#090A0C] border border-[#252830] rounded-lg text-sm text-[#F5F5F5] placeholder:text-[#666666] focus:outline-none focus:border-[#B4233C] transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="business"
                          className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]"
                        >
                          Company / Brand *
                        </label>
                        <input
                          id="business"
                          name="business"
                          type="text"
                          required
                          value={form.business}
                          onChange={handleChange}
                          placeholder="e.g. Acme Tech Solutions"
                          className="px-4 py-3 bg-[#090A0C] border border-[#252830] rounded-lg text-sm text-[#F5F5F5] placeholder:text-[#666666] focus:outline-none focus:border-[#B4233C] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="phone"
                          className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="px-4 py-3 bg-[#090A0C] border border-[#252830] rounded-lg text-sm text-[#F5F5F5] placeholder:text-[#666666] focus:outline-none focus:border-[#B4233C] transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="budget"
                          className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]"
                        >
                          Monthly Campaign Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="px-4 py-3 bg-[#090A0C] border border-[#252830] rounded-lg text-sm text-[#F5F5F5] focus:outline-none focus:border-[#B4233C] transition-colors cursor-pointer"
                        >
                          {budgetOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="message"
                        className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5]"
                      >
                        Campaign Requirements (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us your target areas in Bengaluru, desired advertising channels, or start date..."
                        className="px-4 py-3 bg-[#090A0C] border border-[#252830] rounded-lg text-sm text-[#F5F5F5] placeholder:text-[#666666] focus:outline-none focus:border-[#B4233C] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#B4233C] text-white rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[#D13B55] transition-colors shadow-md shadow-black/50"
                    >
                      Submit Campaign Request
                    </button>
                  </form>
                )}
              </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
