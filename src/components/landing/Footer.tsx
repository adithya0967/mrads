import React from 'react';
import Link from 'next/link';
import AppLogoMark from '@/components/ui/AppLogoMark';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-white shadow-card">
                <AppLogoMark size={22} className="text-white" />
              </div>
              <div>
                <p className="font-extrabold text-lg">Mr. Ads</p>
                <p
                  className="text-[11px] font-bold tracking-[.16em] uppercase"
                  style={{ color: '#FF8A8E' }}
                >
                  Your Hyperlocal Partner
                </p>
              </div>
            </div>
            <p className="text-white/60 text-[14px] mt-4 leading-relaxed">
              Mr. Ads connects brands with the right local audience through display advertising,
              moving media, offline distribution, creative services and digital solutions — planned
              end-to-end.
            </p>
            <div className="mt-5 grid gap-2 text-[14px] font-semibold">
              <a
                href="tel:+919686544644"
                className="flex items-center gap-2.5 hover:text-white text-white/80"
              >
                <i className="fa-solid fa-phone text-xs text-white/40"></i> +91 96865 44644
              </a>
              <a
                href="mailto:knowus@mr-ads.in"
                className="flex items-center gap-2.5 hover:text-white text-white/80"
              >
                <i className="fa-regular fa-envelope text-sm text-white/40"></i> knowus@mr-ads.in
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] font-bold tracking-[.16em] uppercase text-white/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px] font-semibold text-white/75">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-bold tracking-[.16em] uppercase text-white/40">
              Services
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px] font-semibold text-white/75">
              <li>
                <Link href="/locations" className="hover:text-white">
                  Display Advertising
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white">
                  Advertising on the Move
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white">
                  Offline & Print Distribution
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Print & Creative Design
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Website, Development & AI
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-bold tracking-[.16em] uppercase text-white/40">
              Get a media plan
            </p>
            <p className="text-white/60 text-[13.5px] mt-4">
              Share your city & goal — receive environments, locations & pricing.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 bg-brand hover:bg-white hover:text-navy transition text-white font-bold text-sm px-6 py-3.5 rounded-full"
            >
              Get a Media Plan <i className="fa-solid fa-arrow-right text-xs"></i>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-white/45 font-medium">
          <p>© 2026 Mr. Ads (MR) · Hyperlocal Advertising Solutions. All rights reserved.</p>
          <p>Reach figures denote network opportunity to reach, not guaranteed impressions.</p>
        </div>
      </div>
    </footer>
  );
}
