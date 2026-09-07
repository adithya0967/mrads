'use client';

import React, { FormEvent } from 'react';

interface ContactSectionProps {
  formName: string;
  setFormName: (val: string) => void;
  formCompany: string;
  setFormCompany: (val: string) => void;
  formPhone: string;
  setFormPhone: (val: string) => void;
  formEmail: string;
  setFormEmail: (val: string) => void;
  formCity: string;
  setFormCity: (val: string) => void;
  formReq: string;
  setFormReq: (val: string) => void;
  formMsg: string;
  setFormMsg: (val: string) => void;
  selectedInterests: string[];
  toggleInterest: (val: string) => void;
  formErr: string | null;
  formSuccess: boolean;
  refId: string;
  mailtoUrl: string;
  onSubmit: (e: FormEvent) => void;
}

const interestOptions = [
  'Media Plans',
  'Campaign Pricing',
  'Demo Videos',
  'Location List',
  'Creative Services',
  'Customized Solutions',
];

const requirementOptions = [
  'Restaurant Displays',
  'Apartment Displays',
  'Corporate Displays',
  'Mall Displays',
  'Fitness Space Displays',
  'Play Zone Displays',
  'PG & Hostel Displays',
  'Auto / Cab / Bus Branding',
  'Mobile Van / Bus Shelter / Roadshow',
  'Offline Flyer Distribution',
  'Newspaper & Quick Commerce Inserts',
  'Pharmacy Cover Advertising',
  'Print & Creative Design',
  'Website / AI Solutions',
  'Customized Advertising Solution',
];

export default function ContactSection({
  formName,
  setFormName,
  formCompany,
  setFormCompany,
  formPhone,
  setFormPhone,
  formEmail,
  setFormEmail,
  formCity,
  setFormCity,
  formReq,
  setFormReq,
  formMsg,
  setFormMsg,
  selectedInterests,
  toggleInterest,
  formErr,
  formSuccess,
  refId,
  mailtoUrl,
  onSubmit,
}: ContactSectionProps) {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 text-white">
      <div className="reveal in">
        <p className="crumb">
          <a href="#home">Home</a> / Contact · Request a Media Plan
        </p>
        <h2 className="serif text-3xl sm:text-[42px] tracking-tight mt-2 text-white">Request a Media Plan</h2>
        <p className="text-slate-400 mt-3 max-w-2xl">
          Tell us where your audience is — we’ll come back with environments, locations, pricing and creative options.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 mt-10">
        <div className="lg:col-span-4 grid gap-5">
          <div className="bg-[#162238] border border-slate-700 text-white rounded-3xl p-7 shadow-lift reveal in">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center font-extrabold text-white">
                MR
              </div>
              <div>
                <p className="font-extrabold text-white">Mr. Ads (MR)</p>
                <p className="text-[12px] text-slate-400 font-semibold">Your Hyperlocal Advertising Partner</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              <a
                href="tel:+919686544644"
                className="flex items-center gap-3 bg-[#121B2D] hover:bg-[#1C2A44] border border-slate-700/80 rounded-2xl p-4 transition"
              >
                <span className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center shrink-0 text-white">
                  <i className="fa-solid fa-phone text-sm"></i>
                </span>
                <span>
                  <span className="block text-[11px] font-bold tracking-widest uppercase text-slate-400">Call us</span>
                  <span className="font-extrabold text-white">+91 96865 44644</span>
                </span>
              </a>
              <a
                href="mailto:knowus@mr-ads.in"
                className="flex items-center gap-3 bg-[#121B2D] hover:bg-[#1C2A44] border border-slate-700/80 rounded-2xl p-4 transition"
              >
                <span className="w-10 h-10 rounded-xl bg-[#162238] border border-slate-700 text-brand flex items-center justify-center shrink-0">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <span>
                  <span className="block text-[11px] font-bold tracking-widest uppercase text-slate-400">Email</span>
                  <span className="font-extrabold break-all text-white">knowus@mr-ads.in</span>
                </span>
              </a>
            </div>
            <div className="mt-5 flex gap-2">
              <a
                href="tel:+919686544644"
                className="flex-1 bg-brand text-white text-center font-extrabold text-sm py-3 rounded-full hover:bg-brand-dark transition"
              >
                Call now
              </a>
              <a
                href="mailto:knowus@mr-ads.in?subject=Media%20Plan%20Request%20—%20Mr.%20Ads"
                className="flex-1 border border-slate-700 text-center font-bold text-sm py-3 rounded-full text-slate-200 hover:text-white hover:border-slate-500 transition"
              >
                Email us
              </a>
            </div>
          </div>

          <div className="bg-[#121B2D] border border-slate-800 rounded-3xl p-6 shadow-card reveal in reveal-d1 text-white">
            <p className="font-extrabold text-white">What happens next?</p>
            <ol className="mt-3 space-y-2.5 text-[13.5px] text-slate-400">
              <li className="flex gap-2.5">
                <span className="w-6 h-6 shrink-0 rounded-full bg-[#162238] border border-slate-700 text-white text-[11px] font-bold flex items-center justify-center">
                  1
                </span>{' '}
                We review your requirement & city.
              </li>
              <li className="flex gap-2.5">
                <span className="w-6 h-6 shrink-0 rounded-full bg-[#162238] border border-slate-700 text-white text-[11px] font-bold flex items-center justify-center">
                  2
                </span>{' '}
                You receive a tailored media plan + pricing.
              </li>
              <li className="flex gap-2.5">
                <span className="w-6 h-6 shrink-0 rounded-full bg-[#162238] border border-slate-700 text-white text-[11px] font-bold flex items-center justify-center">
                  3
                </span>{' '}
                On approval: creatives, locations & launch.
              </li>
            </ol>
            <div className="mt-4 bg-[#162238] border border-slate-700/80 rounded-2xl p-4 text-[12.5px] text-slate-400">
              <i className="fa-solid fa-circle-info text-brand mr-1.5"></i>Prefer talking? Call{' '}
              <a className="font-bold text-white hover:text-brand" href="tel:+919686544644">
                +91 96865 44644
              </a>{' '}
              — Mon–Sat, business hours.
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <form
            id="leadForm"
            onSubmit={onSubmit}
            className="bg-[#121B2D] border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-card reveal in reveal-d1 text-white"
            noValidate
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="font-extrabold text-xl text-white">High-conversion enquiry form</h3>
              <span className="text-[11px] font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 px-3 py-1.5 rounded-full">
                <i className="fa-solid fa-bolt mr-1"></i> Replies within 1 business day
              </span>
            </div>

            <p className="spec-label mt-6 mb-3 text-slate-400">
              I’m interested in <span className="text-brand">*</span>{' '}
              <span className="normal-case font-medium tracking-normal text-slate-400">(tap all that apply)</span>
            </p>
            <div className="flex flex-wrap gap-2" id="interestChips">
              {interestOptions.map((opt) => {
                const isSelected = selectedInterests.includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleInterest(opt)}
                    className={`chip text-[12.5px] font-bold px-4 py-2 rounded-full ${isSelected ? 'on' : ''}`}
                    data-v={opt}
                  >
                    {opt === 'Customized Solutions' ? 'Customized Solutions' : opt}
                  </button>
                );
              })}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div>
                <label className="spec-label text-slate-400" htmlFor="fName">
                  Name *
                </label>
                <input
                  id="fName"
                  required
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Your full name"
                  className="mt-2 w-full border border-slate-700 rounded-xl px-4 py-3 text-sm bg-[#090D16] text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="spec-label text-slate-400" htmlFor="fCompany">
                  Company
                </label>
                <input
                  id="fCompany"
                  type="text"
                  value={formCompany}
                  onChange={(e) => setFormCompany(e.target.value)}
                  placeholder="Brand / business name"
                  className="mt-2 w-full border border-slate-700 rounded-xl px-4 py-3 text-sm bg-[#090D16] text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="spec-label text-slate-400" htmlFor="fPhone">
                  Phone *
                </label>
                <input
                  id="fPhone"
                  required
                  type="tel"
                  inputMode="tel"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  placeholder="+91 …"
                  className="mt-2 w-full border border-slate-700 rounded-xl px-4 py-3 text-sm bg-[#090D16] text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="spec-label text-slate-400" htmlFor="fEmail">
                  Email *
                </label>
                <input
                  id="fEmail"
                  required
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="mt-2 w-full border border-slate-700 rounded-xl px-4 py-3 text-sm bg-[#090D16] text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="spec-label text-slate-400" htmlFor="fCity">
                  City / Location *
                </label>
                <input
                  id="fCity"
                  required
                  type="text"
                  value={formCity}
                  onChange={(e) => setFormCity(e.target.value)}
                  placeholder="e.g., Bengaluru — Koramangala"
                  className="mt-2 w-full border border-slate-700 rounded-xl px-4 py-3 text-sm bg-[#090D16] text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="spec-label text-slate-400" htmlFor="fReq">
                  Advertising Requirement *
                </label>
                <select
                  id="fReq"
                  required
                  value={formReq}
                  onChange={(e) => setFormReq(e.target.value)}
                  className="mt-2 w-full border border-slate-700 rounded-xl px-4 py-3 text-sm bg-[#090D16] text-white font-semibold"
                >
                  <option value="" className="bg-[#090D16]">Select a requirement…</option>
                  {requirementOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#090D16]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="spec-label text-slate-400" htmlFor="fMsg">
                  Message
                </label>
                <textarea
                  id="fMsg"
                  rows={4}
                  value={formMsg}
                  onChange={(e) => setFormMsg(e.target.value)}
                  placeholder="Audience, locations, timing, budget — anything that helps us plan better."
                  className="mt-2 w-full border border-slate-700 rounded-xl px-4 py-3 text-sm bg-[#090D16] text-white placeholder:text-slate-500 resize-y"
                ></textarea>
              </div>
            </div>

            {formErr && (
              <p id="formErr" className="mt-4 text-[13px] font-bold text-brand bg-brand/10 border border-brand/40 rounded-xl px-4 py-3">
                {formErr}
              </p>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="btn-primary flex-1 font-extrabold text-[15px] px-7 py-4 rounded-full inline-flex justify-center items-center gap-2"
              >
                Request a Media Plan <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
              <a
                href="tel:+919686544644"
                className="btn-ghost font-bold text-[15px] px-7 py-4 rounded-full text-slate-200 hover:text-white inline-flex justify-center items-center gap-2"
              >
                <i className="fa-solid fa-phone text-xs"></i> +91 96865 44644
              </a>
            </div>

            <p className="text-[12px] text-slate-400 mt-4 text-center">
              By submitting, you agree to be contacted about your enquiry at the details provided.
            </p>

            {formSuccess && (
              <div id="formSuccess" className="mt-6 bg-emerald-950/80 border border-emerald-800/80 rounded-2xl p-6 text-center text-white">
                <span className="w-12 h-12 rounded-full bg-emerald-500 text-white inline-flex items-center justify-center text-xl">
                  <i className="fa-solid fa-check"></i>
                </span>
                <h4 className="font-extrabold text-lg mt-3 text-white">Brief received. We’ll be in touch shortly.</h4>
                <p className="text-[13.5px] text-slate-300 mt-1">
                  Reference: <b id="refId" className="text-emerald-400">{refId}</b> · A copy of your brief is ready below — or reach us instantly:
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
                  <a
                    href="tel:+919686544644"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-full transition"
                  >
                    Call +91 96865 44644
                  </a>
                  <a
                    id="mailBrief"
                    href={mailtoUrl}
                    className="bg-[#121B2D] border border-emerald-500 text-emerald-400 font-bold text-sm px-6 py-3 rounded-full hover:bg-[#162238] transition"
                  >
                    Email your brief
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
