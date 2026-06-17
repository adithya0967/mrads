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
    // Placeholder submit handler — connect to backend/CRM here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-foreground mb-4">
            Get Your Brand Featured in High-Footfall Restaurants.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Explore available locations and start reaching 2,000–3,000 customers daily per location.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact details panel */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Contact info card */}
            <div className="bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col gap-6">
              <div>
                <div className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] mb-2">Contact Us</div>
                <h3 className="font-extrabold text-xl text-white">Connect with us to plan your campaign across high-footfall locations.</h3>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="tel:+919686544644"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Icon name="PhoneIcon" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Call / WhatsApp</div>
                    <div className="font-bold text-white">+91 96865 44644</div>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Icon name="MapPinIcon" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Location</div>
                    <div className="font-bold text-white">Bengaluru, Karnataka</div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="tel:+919686544644"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-white text-accent rounded-full font-bold text-sm hover:bg-white/90 transition-colors"
                >
                  <Icon name="PhoneIcon" size={16} />
                  Click to Call
                </a>
                <a
                  href="https://wa.me/919686544644?text=Hi%2C%20I%27m%20interested%20in%20advertising%20with%20Mr.%20Ads.%20Please%20share%20available%20locations%2C%20pricing%2C%20and%20current%20slot%20availability."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full font-bold text-sm hover:bg-[#20ba59] transition-colors"
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Scarcity card */}
            <div className="scarcity-strip rounded-2xl p-6 border border-red-900/40">
              <div className="flex items-start gap-3">
                <Icon name="ExclamationTriangleIcon" size={18} className="text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-red-300 text-sm mb-1">Slots Filling Fast</div>
                  <p className="text-red-400/80 text-xs leading-relaxed">
                    High-demand locations fill quickly. Secure your ad slot in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lead form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center">
                    <Icon name="CheckCircleIcon" size={32} variant="solid" className="text-green-400" />
                  </div>
                  <h3 className="font-extrabold text-xl text-foreground">Request Received!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Thank you for your interest. Our team will call you back within 24 hours to discuss available slots.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-accent font-bold text-sm hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ravi Kumar"
                        className="px-4 py-3.5 bg-muted border border-border rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="business" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Business Name *
                      </label>
                      <input
                        id="business"
                        name="business"
                        type="text"
                        required
                        value={form.business}
                        onChange={handleChange}
                        placeholder="Your Brand / Company"
                        className="px-4 py-3.5 bg-muted border border-border rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
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
                        className="px-4 py-3.5 bg-muted border border-border rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="budget" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Monthly Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="px-4 py-3.5 bg-muted border border-border rounded-xl text-sm font-medium text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
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
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your campaign goals, target areas, or any specific requirements..."
                      className="px-4 py-3.5 bg-muted border border-border rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-accent text-accent-foreground rounded-full font-extrabold text-sm uppercase tracking-widest hover:bg-red-700 transition-all duration-300 amber-glow flex items-center justify-center gap-2"
                  >
                    <Icon name="PhoneArrowDownLeftIcon" size={18} />
                    Request a Callback
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    No commitment required. We'll reach out within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
