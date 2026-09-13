import React from 'react';

interface MovingMediaProps {
  onOpenLightbox: (title: string, img: string, desc: string) => void;
  onPrefill: (env: string | null, interest?: string | null) => void;
}

export default function MovingMediaSection({ onOpenLightbox, onPrefill }: MovingMediaProps) {
  const cards = [
    {
      title: 'Auto Branding',
      img: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=1200&auto=format&fit=crop',
      thumb:
        'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=800&auto=format&fit=crop',
      alt: 'Branded auto rickshaw on Indian city street',
      desc: "High-density neighbourhood movement. Autos weave through residential lanes, markets and last-mile routes where larger formats can't go.",
      summary: 'Neighbourhood & last-mile visibility across residential and market routes.',
      delayClass: '',
    },
    {
      title: 'Cab Branding',
      img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop',
      thumb:
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop',
      alt: 'Branded cab driving on urban road',
      desc: 'City-wide circulation with premium commuter adjacency. Cabs carry your brand across business districts, airports and lifestyle corridors.',
      summary: 'City-wide movement across work, travel and lifestyle corridors.',
      delayClass: 'reveal-d1',
    },
    {
      title: 'Bus Branding',
      img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
      thumb:
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
      alt: 'City bus with large brand wrap',
      desc: 'Large-format, unmissable presence on arterial city routes. Buses deliver sustained visibility along daily commuter journeys.',
      summary: 'Large-format presence on high-traffic arterial commuter routes.',
      delayClass: 'reveal-d2',
    },
    {
      title: 'Mobile Van Branding',
      img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop',
      thumb:
        'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop',
      alt: 'Mobile promotional van on road',
      desc: 'A moving billboard you can route, park and activate. Mobile vans combine display scale with the flexibility to target specific zones and timings.',
      summary: 'Routable large-format visibility with zone & timing flexibility.',
      delayClass: '',
    },
    {
      title: 'Bus Shelter Branding',
      img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop',
      thumb:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop',
      alt: 'Bus shelter at city street in evening',
      desc: 'Dwell-time visibility at commuter waiting points. Shelters place your brand at eye level, exactly where daily audiences pause.',
      summary: 'Eye-level dwell-time presence at daily commuter waiting points.',
      delayClass: 'reveal-d1',
    },
    {
      title: 'Road Shows & Promotional Vehicle Campaigns',
      img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop',
      thumb:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
      alt: 'Roadshow promotional event with crowd',
      desc: 'High-energy, on-ground promotion with branded vehicles, sound and crew. Built to gather crowds, distribute material and create local buzz.',
      summary: 'On-ground campaigns that gather crowds and create local buzz.',
      delayClass: 'reveal-d2',
    },
  ];

  return (
    <section id="moving" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 text-white">
      <div className="reveal in">
        <p className="crumb">
          <a href="#home">Home</a>
          {' / '}
          <a href="#solutions">Solutions</a>
          {' / Advertising on the Move'}
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-2">
          <div>
            <h2 className="serif text-3xl sm:text-[42px] tracking-tight text-white">
              Advertising on the Move
            </h2>
            <p className="text-slate-400 mt-3 max-w-2xl">
              Brand visibility across high-traffic urban locations — your message travels with the
              city. Tap any visual to view.
            </p>
          </div>
          <a
            href="#contact"
            onClick={() => onPrefill('Auto / Cab / Bus Branding')}
            data-env="Moving Media Campaign"
            className="btn-primary shrink-0 inline-flex items-center gap-2 font-bold text-sm px-6 py-3.5 rounded-full text-white"
          >
            Plan a moving-media route <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {cards.map((card, i) => (
          <button
            key={i}
            onClick={() => onOpenLightbox(card.title, card.img, card.desc)}
            className={`gal group text-left bg-[#121B2D] border border-slate-800 rounded-3xl overflow-hidden shadow-card card-hover reveal in ${card.delayClass}`}
            data-title={card.title}
            data-img={card.img}
            data-desc={card.desc}
          >
            <div className="h-56 overflow-hidden img-zoom relative">
              <img
                src={card.thumb}
                alt={card.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-3 left-3 bg-[#121B2D]/90 backdrop-blur border border-slate-700 text-white text-[12px] font-bold px-3 py-1.5 rounded-full">
                <i className="fa-solid fa-expand mr-1 text-[11px]"></i> View
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-extrabold text-white group-hover:text-brand transition">
                {card.title}
              </h3>
              <p className="text-slate-400 text-[13.5px] mt-1.5">{card.summary}</p>
              <p className="text-brand text-[13px] font-bold mt-3">
                Enquire <i className="fa-solid fa-arrow-right text-[11px]"></i>
              </p>
            </div>
          </button>
        ))}
      </div>
      <p className="text-center text-[12.5px] text-slate-500 mt-6 font-medium">
        Imagery is illustrative of formats. No performance statistics are claimed for moving media.
      </p>
    </section>
  );
}
