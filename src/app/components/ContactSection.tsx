'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#0B0C0E]">
      {/* Major CTA Block */}
      <div className="bg-[#14151A] text-white py-20 md:py-28 border-b border-[#22242B]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#DC2626] mb-3 block">
              GET STARTED TODAY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Ready to Reach Your Next Customer?
            </h2>
            <p className="text-[#9A9AA4] text-base md:text-lg font-normal leading-relaxed">
              Let's build a hyperlocal campaign around your audience, locations, and goals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="#inquiry-form"
              className="px-7 py-3.5 bg-[#DC2626] text-white rounded-lg font-bold text-base hover:bg-[#B91C1C] transition-colors shadow-md shadow-black/50"
            >
              Book Your Ad Slot
            </a>
            <a
              href="tel:+919686544644"
              className="px-7 py-3.5 bg-[#0B0C0E] text-white border border-[#22242B] rounded-lg font-bold text-base hover:border-white transition-colors"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>

      {/* Clean Lead Inquiry Form & Details */}
      <div id="inquiry-form" className="py-20 md:py-28 border-b border-[#22242B]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Direct Contact Information */}
            <div className="lg:col-span-5 flex flex-col justify-between items-start gap-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#DC2626] mb-3 block">
                  CONTACT DETAILS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  Speak Directly With Our Campaign Team
                </h3>
                <p className="text-[#9A9AA4] text-base leading-relaxed mb-8">
                  We'll provide exact screen counts, location availability, and campaign estimates for your brand.
                </p>

                <div className="flex flex-col gap-6">
                  <a href="tel:+919686544644" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-lg bg-[#14151A] border border-[#22242B] flex items-center justify-center group-hover:border-[#DC2626] transition-colors">
                      <Icon name="PhoneIcon" size={18} className="text-[#DC2626]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#9A9AA4] uppercase tracking-wider">Phone & WhatsApp</div>
                      <div className="text-base font-extrabold text-white">+91 96865 44644</div>
                    </div>
                  </a>

                  <a href="mailto:Knowus@mr-ads.in" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-lg bg-[#14151A] border border-[#22242B] flex items-center justify-center group-hover:border-[#DC2626] transition-colors">
                      <Icon name="EnvelopeIcon" size={18} className="text-[#DC2626]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#9A9AA4] uppercase tracking-wider">Email Inquiry</div>
                      <div className="text-base font-extrabold text-white">Knowus@mr-ads.in</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#14151A] border border-[#22242B] flex items-center justify-center">
                      <Icon name="MapPinIcon" size={18} className="text-[#DC2626]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#9A9AA4] uppercase tracking-wider">Headquarters</div>
                      <div className="text-base font-extrabold text-white">Bengaluru, Karnataka, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#14151A] border border-[#22242B] rounded-xl p-5 w-full">
                <div className="text-xs font-bold text-white mb-1">Response Commitment</div>
                <p className="text-xs text-[#9A9AA4]">
                  All campaign inquiries receive a custom proposal within 24 business hours.
                </p>
              </div>
            </div>

            {/* Right: B2B Lead Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#14151A] border border-[#22242B] rounded-2xl p-8 md:p-10 shadow-md">
                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#DC2626]/15 flex items-center justify-center text-[#DC2626]">
                      <Icon name="CheckCircleIcon" size={28} />
                    </div>
                    <h4 className="text-2xl font-extrabold text-white">Inquiry Received</h4>
                    <p className="text-sm text-[#9A9AA4] max-w-sm">
                      Thank you. Our advertising specialists will contact you shortly with campaign recommendations.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs font-bold text-[#DC2626] uppercase tracking-wider hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-white">
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
                          className="px-4 py-3 bg-[#0B0C0E] border border-[#22242B] rounded-lg text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-[#DC2626] transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="business" className="text-xs font-bold uppercase tracking-wider text-white">
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
                          className="px-4 py-3 bg-[#0B0C0E] border border-[#22242B] rounded-lg text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-[#DC2626] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-white">
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
                          className="px-4 py-3 bg-[#0B0C0E] border border-[#22242B] rounded-lg text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-[#DC2626] transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-white">
                          Monthly Campaign Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="px-4 py-3 bg-[#0B0C0E] border border-[#22242B] rounded-lg text-sm text-white focus:outline-none focus:border-[#DC2626] transition-colors cursor-pointer"
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
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-white">
                        Campaign Requirements (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us your target areas in Bengaluru, desired advertising channels, or start date..."
                        className="px-4 py-3 bg-[#0B0C0E] border border-[#22242B] rounded-lg text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-[#DC2626] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#DC2626] text-white rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[#B91C1C] transition-colors shadow-md shadow-black/50"
                    >
                      Submit Campaign Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


