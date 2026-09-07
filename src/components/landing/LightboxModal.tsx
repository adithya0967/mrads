'use client';

import React, { useEffect } from 'react';

interface LightboxProps {
  isOpen: boolean;
  data: {
    title: string;
    img: string;
    desc: string;
  } | null;
  onClose: () => void;
  onEnquire: (title: string) => void;
}

export default function LightboxModal({ isOpen, data, onClose, onEnquire }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div
      id="lightbox"
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 gallery-modal"
      style={{ background: 'rgba(7,18,36,.82)' }}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#121B2D] border border-slate-800 rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl">
        <div className="relative h-64 sm:h-80">
          <img id="lbImg" src={data.img} alt={data.title} className="w-full h-full object-cover" />
          <button
            id="lbClose"
            onClick={onClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-slate-700 text-white font-bold flex items-center justify-center transition"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="p-6">
          <h3 id="lbTitle" className="font-extrabold text-xl text-white">
            {data.title}
          </h3>
          <p id="lbDesc" className="text-slate-400 text-[14px] mt-2 leading-relaxed">
            {data.desc}
          </p>
          <div className="mt-5 flex gap-2">
            <button
              id="lbEnquire"
              onClick={() => onEnquire(data.title)}
              className="btn-primary flex-1 text-center font-bold text-sm px-5 py-3 rounded-full"
            >
              Enquire about this format
            </button>
            <button
              id="lbBack"
              onClick={onClose}
              className="btn-ghost font-bold text-sm px-5 py-3 rounded-full text-slate-300 hover:text-white"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
