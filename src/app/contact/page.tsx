'use client';

import React, { useState, useEffect } from 'react';
import TargetShell from '@/components/TargetShell';
import { phoneText, phoneTel, contactEmail, contactMailto } from '@/components/SiteHeader';
import Reveal from '@/components/ui/Reveal';
import { ArrowRight, Phone, Mail, CheckCircle2, Shield, Clock } from 'lucide-react';

const requirements = [
  'Display advertising (Screens)',
  'Advertising on the move (Transit & Fleet)',
  'Offline & print distribution (Flyers & Inserts)',
  'Print & creative design',
  'Website / development / AI solutions',
  'A combined multi-channel media plan',
];

const interestOptions = [
  'Media Plans',
  'Campaign Pricing',
  'Demo Videos',
  'Location Lists',
  'Creative Services',
  'Customized Solutions',
];

function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [interests, setInterests] = useState<string[]>(['Media Plans']);
  const [requirement, setRequirement] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const briefParam = params.get('brief');
      const reqParam = params.get('requirement');
      const interestParam = params.get('interest');

      if (briefParam) setMessage(briefParam);
      if (reqParam) setRequirement(reqParam);
      if (interestParam) {
        setInterests(interestParam.split(',').map((s) => s.trim()));
      }
    }
  }, []);

  function toggleInterest(item: string) {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const generatedRef = 'MR-' + Math.floor(1000 + Math.random() * 9000);
    setRefId(generatedRef);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <section className="border-b border-line bg-[#080808] relative overflow-hidden">
      {/* Subtle ambient red highlight */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#D81F42]/[0.035] rounded-full blur-[150px] pointer-events-none" />

      <div className="container-site grid gap-16 py-16 md:grid-cols-12 md:py-24 relative z-10">
        {/* Left Column: Context & Contact Details */}
        <div className="md:col-span-5">
          <Reveal variant="slide-left">
            <p className="eyebrow text-brand">Contact Planning Team</p>
            <h1 className="mt-4 font-serif text-[38px] sm:text-[48px] leading-[1.08] tracking-tight text-paper font-normal">
              Request a Considered Media Plan.
            </h1>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-mute">
              Tell us who you need to reach, your target localities, and your timeline. A senior media planner will review your brief and respond with a customized proposal.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={phoneTel}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-[#0D0D0D] hover:border-brand/40 transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-all shadow-sm">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider">
                    Direct Line
                  </p>
                  <p className="text-[15px] font-medium text-paper group-hover:text-white transition-colors">
                    {phoneText}
                  </p>
                </div>
              </a>

              <a
                href={contactMailto}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-[#0D0D0D] hover:border-brand/40 transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-all shadow-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider">
                    Enquiries Desk
                  </p>
                  <p className="text-[15px] font-medium text-paper group-hover:text-white transition-colors">
                    {contactEmail}
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2.5 text-[13px] text-mute">
                <Clock size={15} className="text-brand shrink-0" />
                <span>Turnaround: Response within 24 business hours</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-mute">
                <Shield size={15} className="text-brand shrink-0" />
                <span>Zero vendor spam • Strict confidentiality</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Form Container */}
        <div className="md:col-span-7">
          <Reveal variant="slide-right" delay={0.1}>
            {submitted ? (
              <div className="rounded-2xl border border-brand/40 bg-gradient-to-b from-[#141414] to-[#0D0D0D] p-8 sm:p-12 shadow-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/15 border border-brand/30 text-[11px] font-bold text-brand uppercase tracking-wider mb-4 shadow-sm shadow-brand/20">
                  <CheckCircle2 size={13} />
                  <span>Brief Successfully Received</span>
                </div>

                <h2 className="font-serif text-[28px] sm:text-[34px] leading-tight text-paper font-normal">
                  Thank you, {name || 'Partner'}.
                </h2>

                <p className="mt-4 text-[15px] leading-relaxed text-mute">
                  We have assigned reference <span className="font-mono font-bold text-paper px-2 py-0.5 rounded bg-white/10">{refId}</span> to your enquiry. Our planning team is preparing route availability and venue metrics for your review.
                </p>

                <div className="mt-8 p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                  <p className="text-[13px] text-[#D8D4CE]">
                    Need immediate activation or custom route mapping?
                  </p>
                  <a
                    href={phoneTel}
                    className="mt-3 inline-flex items-center gap-2 text-[14px] font-bold text-brand hover:text-brand-hover transition-colors"
                  >
                    <Phone size={14} />
                    <span>Call {phoneText} for urgent requirements</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-[#0D0D0D] p-8 sm:p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="eyebrow text-[#888888]">Your Full Name *</span>
                      <input
                        required
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aditi Sharma"
                        className="input-field mt-2"
                      />
                    </label>

                    <label className="block">
                      <span className="eyebrow text-[#888888]">Company / Brand Name *</span>
                      <input
                        required
                        name="company"
                        autoComplete="organization"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Nexus Healthcare"
                        className="input-field mt-2"
                      />
                    </label>

                    <label className="block">
                      <span className="eyebrow text-[#888888]">Phone Number *</span>
                      <input
                        required
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="input-field mt-2"
                      />
                    </label>

                    <label className="block">
                      <span className="eyebrow text-[#888888]">Email Address *</span>
                      <input
                        required
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="input-field mt-2"
                      />
                    </label>

                    <label className="block sm:col-span-2">
                      <span className="eyebrow text-[#888888]">Target City & Localities *</span>
                      <input
                        required
                        name="city"
                        autoComplete="address-level2"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Bengaluru (Koramangala, Indiranagar, Whitefield)"
                        className="input-field mt-2"
                      />
                    </label>

                    <label className="block sm:col-span-2">
                      <span className="eyebrow text-[#888888]">Primary Advertising Requirement *</span>
                      <select
                        name="requirement"
                        value={requirement}
                        onChange={(e) => setRequirement(e.target.value)}
                        required
                        className="input-field mt-2 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0D0D0D] text-paper">
                          Select a requirement
                        </option>
                        {requirements.map((req) => (
                          <option key={req} value={req} className="bg-[#0D0D0D] text-paper">
                            {req}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  {/* Interest Multi-select */}
                  <div>
                    <legend className="eyebrow text-[#888888] mb-2.5">Specific Deliverables of Interest</legend>
                    <div className="flex flex-wrap gap-2">
                      {interestOptions.map((item) => {
                        const checked = interests.includes(item);
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleInterest(item)}
                            className={`px-3.5 py-1.5 rounded-lg border text-[12.5px] font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                              checked
                                ? 'border-brand bg-brand text-white shadow-md shadow-brand/20'
                                : 'border-white/10 bg-white/[0.02] text-mute hover:border-white/25 hover:text-paper hover:bg-white/[0.05]'
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <label className="block">
                    <span className="eyebrow text-[#888888]">Campaign Details & Special Requirements</span>
                    <textarea
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="input-field mt-2 resize-y"
                      placeholder="Tell us about your target customer, campaign objectives, preferred dates or any specific venues."
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn-sheen btn-arrow inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-brand hover:bg-brand-hover px-7 py-3.5 text-[14px] font-semibold tracking-wide text-paper shadow-lg shadow-brand/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Submit Media Plan Request</span>
                    <ArrowRight size={15} />
                  </button>
                </form>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <TargetShell>
      <ContactContent />
    </TargetShell>
  );
}
