import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { phoneText, phoneTel, contactEmail, contactMailto, navLinks, servicesLinks } from '@/data/siteNavigation';

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-graphite">
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-line bg-paper p-1">
                <Image
                  src="/assets/images/app_logo.svg"
                  alt="Mr. Ads logo"
                  width={24}
                  height={20}
                  className="h-auto w-full"
                />
              </span>
              <span className="font-serif text-[20px] text-paper">Mr. Ads</span>
            </Link>

            <p className="mt-4 text-[13px] tracking-[0.16em] text-mute uppercase">
              Your Hyperlocal Partner
            </p>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-mute">
              Mr. Ads helps brands reach people where they live, work, travel, shop, exercise and spend time — through screens, streets, print and digital.
            </p>

            <Link
              href="/contact"
              className="btn-arrow mt-7 inline-flex items-center gap-2 text-[13px] text-paper transition-colors duration-200 hover:text-brand"
            >
              Get a Media Plan
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
            {/* Navigate */}
            <div>
              <p className="eyebrow">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      href={item.to}
                      className="text-[14px] text-mute transition-colors duration-200 hover:text-paper"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="eyebrow">Services</p>
              <ul className="mt-4 space-y-2.5">
                {servicesLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.to}
                      className="text-[14px] text-mute transition-colors duration-200 hover:text-paper"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <p className="eyebrow">Contact</p>
              <ul className="mt-4 space-y-2.5 text-[14px] text-mute">
                <li>
                  <a
                    href={phoneTel}
                    className="transition-colors duration-200 hover:text-paper"
                  >
                    {phoneText}
                  </a>
                </li>
                <li>
                  <a
                    href={contactMailto}
                    className="transition-colors duration-200 hover:text-paper"
                  >
                    {contactEmail}
                  </a>
                </li>
                <li className="pt-2">
                  <Link
                    href="/advertising-on-the-move"
                    className="transition-colors duration-200 hover:text-paper"
                  >
                    On the Move
                  </Link>
                </li>
                <li>
                  <Link
                    href="/digital"
                    className="transition-colors duration-200 hover:text-paper"
                  >
                    Digital Solutions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-[12px] leading-relaxed text-mute-2 md:flex-row md:items-start md:justify-between">
          <p>© {new Date().getFullYear()} Mr. Ads. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            Reach figures denote network opportunity to reach, not guaranteed impressions.
          </p>
        </div>
      </div>
    </footer>
  );
}
