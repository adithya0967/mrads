'use client';

import React, { useState, useEffect } from 'react';
import TargetShell from '@/components/TargetShell';
import { phoneText, phoneTel, contactEmail, contactMailto } from '@/components/SiteHeader';

const requirements = [
  'Display advertising',
  'Advertising on the move',
  'Offline & print distribution',
  'Print & creative',
  'Website / development / AI',
  'A combined media plan',
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
  const [message, setMessage] = useState('');

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
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const inputClass =
    'mt-3 w-full border-0 border-b border-line bg-transparent py-3 text-[15px] text-paper placeholder:text-mute-2 focus:border-brand focus:outline-none';

  return (
    <section className="border-b border-line">
      <div className="container-site grid gap-16 py-16 md:grid-cols-12 md:py-24">
        {/* Left Column */}
        <div className="md:col-span-5">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 font-serif text-[40px] leading-[1.08] tracking-tight text-paper md:text-[52px]">
            Request a Media Plan
          </h1>
          <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-mute">
            Tell us who you need to reach, and where. A member of the planning
            team will respond with a considered next step.
          </p>

          <dl className="mt-12 space-y-6 border-t border-line pt-8">
            <div>
              <dt className="eyebrow">Phone</dt>
              <dd className="mt-2 text-[16px]">
                <a
                  href={phoneTel}
                  className="text-paper transition-colors duration-200 hover:text-brand"
                >
                  {phoneText}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-2 text-[16px]">
                <a
                  href={contactMailto}
                  className="text-paper transition-colors duration-200 hover:text-brand"
                >
                  {contactEmail}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7">
          {submitted ? (
            <div className="border border-line bg-graphite p-10">
              <p className="eyebrow">Received</p>
              <h2 className="mt-4 font-serif text-[28px] leading-tight text-paper">
                Thank you. We have the brief.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-mute">
                The planning team will review your requirement and be in touch.
                If the matter is urgent, call {phoneText}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="block">
                  <span className="eyebrow">Name</span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className="eyebrow">Company</span>
                  <input
                    required
                    name="company"
                    autoComplete="organization"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className="eyebrow">Phone</span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className="eyebrow">Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="eyebrow">City / Location</span>
                  <input
                    required
                    name="city"
                    autoComplete="address-level2"
                    className={inputClass}
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="eyebrow">Advertising requirement</span>
                  <select
                    name="requirement"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    required
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" className="bg-ink text-paper">
                      Select a requirement
                    </option>
                    {requirements.map((req) => (
                      <option key={req} value={req} className="bg-ink text-paper">
                        {req}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <fieldset>
                <legend className="eyebrow">I’m interested in</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {interestOptions.map((item) => {
                    const checked = interests.includes(item);
                    return (
                      <label key={item}>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checked}
                          onChange={() => toggleInterest(item)}
                        />
                        <span
                          className={`inline-block cursor-pointer rounded-sm border px-3.5 py-2 text-[13px] transition-colors duration-200 ${
                            checked
                              ? 'border-brand bg-brand/10 text-paper'
                              : 'border-line text-mute hover:border-paper/30 hover:text-paper'
                          }`}
                        >
                          {item}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <label className="block">
                <span className="eyebrow">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClass} resize-y`}
                  placeholder="City, audience, goal, and anything we should know."
                />
              </label>

              <button
                type="submit"
                className="btn-arrow inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-5 py-2.5 text-[13px] font-medium tracking-wide text-paper transition-colors duration-200 hover:bg-brand-hover"
              >
                Request a Media Plan
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </form>
          )}
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
