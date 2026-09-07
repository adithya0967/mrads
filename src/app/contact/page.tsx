'use client';

import React, { FormEvent, useState } from 'react';
import PageShell from '@/components/PageShell';
import ContactSection from '@/components/landing/ContactSection';

export default function ContactPage() {
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formReq, setFormReq] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [formErr, setFormErr] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [refId, setRefId] = useState('MR-0000');
  const [mailtoUrl, setMailtoUrl] = useState('mailto:knowus@mr-ads.in');

  const toggleInterest = (val: string) => {
    setSelectedInterests((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]
    );
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormErr(null);

    const name = formName.trim();
    const phone = formPhone.trim();
    const email = formEmail.trim();
    const city = formCity.trim();
    const req = formReq;

    let msg = '';
    if (!name) msg = 'Please enter your name.';
    else if (!phone || phone.replace(/\D/g, '').length < 10)
      msg = 'Please enter a valid phone number (10+ digits).';
    else if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      msg = 'Please enter a valid email address.';
    else if (!city) msg = 'Please enter your city / location.';
    else if (!req) msg = 'Please select your advertising requirement.';
    else if (selectedInterests.length === 0)
      msg = 'Please tap at least one interest (e.g., Media Plans).';

    if (msg) {
      setFormErr(msg);
      const errEl = document.getElementById('leadForm');
      if (errEl) errEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const generatedRef = 'MR-' + Math.floor(1000 + Math.random() * 9000);
    setRefId(generatedRef);

    const brief =
      'Name: ' +
      name +
      '%0D%0ACompany: ' +
      (formCompany.trim() || '—') +
      '%0D%0APhone: ' +
      phone +
      '%0D%0AEmail: ' +
      email +
      '%0D%0ACity: ' +
      city +
      '%0D%0ARequirement: ' +
      req +
      '%0D%0AInterests: ' +
      selectedInterests.join(', ') +
      '%0D%0AMessage: ' +
      (formMsg.trim() || '—') +
      '%0D%0ARef: ' +
      generatedRef;

    const mailLink =
      'mailto:knowus@mr-ads.in?subject=' +
      encodeURIComponent('Media Plan Request ' + generatedRef + ' — ' + name) +
      '&body=' +
      brief;

    setMailtoUrl(mailLink);
    setFormSuccess(true);
  };

  return (
    <PageShell>
      <ContactSection
        formName={formName}
        setFormName={setFormName}
        formCompany={formCompany}
        setFormCompany={setFormCompany}
        formPhone={formPhone}
        setFormPhone={setFormPhone}
        formEmail={formEmail}
        setFormEmail={setFormEmail}
        formCity={formCity}
        setFormCity={setFormCity}
        formReq={formReq}
        setFormReq={setFormReq}
        formMsg={formMsg}
        setFormMsg={setFormMsg}
        selectedInterests={selectedInterests}
        toggleInterest={toggleInterest}
        formErr={formErr}
        formSuccess={formSuccess}
        refId={refId}
        mailtoUrl={mailtoUrl}
        onSubmit={handleFormSubmit}
      />
    </PageShell>
  );
}
