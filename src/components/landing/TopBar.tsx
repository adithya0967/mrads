import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-navy-950 text-white/85 text-[12.5px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-9">
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block"></span>
          <span className="font-semibold tracking-wide">Your Hyperlocal Advertising Partner</span>
          <span className="hidden md:inline text-white/50">
            &nbsp;·&nbsp; Displays · Moving Media · Offline · Creative · Digital & AI
          </span>
        </p>
        <div className="flex items-center gap-4">
          <a href="tel:+919686544644" className="hover:text-white flex items-center gap-1.5">
            <i className="fa-solid fa-phone text-[11px] text-white/60"></i> +91 96865 44644
          </a>
          <a href="mailto:knowus@mr-ads.in" className="hidden sm:flex hover:text-white items-center gap-1.5">
            <i className="fa-regular fa-envelope text-[12px] text-white/60"></i> knowus@mr-ads.in
          </a>
        </div>
      </div>
    </div>
  );
}
