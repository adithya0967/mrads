import React from 'react';

export default function SolutionsPreviewSection() {
  return (
    <section id="solutions" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
      <div className="max-w-3xl reveal in">
        <p className="crumb text-slate-400 text-sm">
          <a href="#home" className="hover:text-slate-200">
            Home
          </a>
          {' / Advertising Solutions'}
        </p>
        <h2 className="serif text-3xl sm:text-[42px] tracking-tight mt-2 text-white">
          Solutions preview
        </h2>
        <p className="text-slate-400 mt-3">
          Seven solution families. Pick one channel or combine them into a single hyperlocal plan.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10" id="solutionGrid">
        <a
          href="#display"
          className="group bg-[#121B2D] border border-slate-800 rounded-3xl overflow-hidden shadow-card card-hover reveal in block"
        >
          <div className="h-44 overflow-hidden img-zoom relative">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop"
              alt="Digital display advertising screens"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 bg-[#162238] border border-slate-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
              A · Display
            </span>
          </div>
          <div className="p-6">
            <h3 className="font-extrabold text-[17px] text-white group-hover:text-brand transition">
              Display Advertising
            </h3>
            <p className="text-slate-400 text-[13.5px] mt-2">
              Restaurant · Apartment · Corporate · Mall · Fitness · Play Zone · PG & Hostel screens.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-brand">
              View environments{' '}
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition"></i>
            </span>
          </div>
        </a>

        <a
          href="#moving"
          className="group bg-[#121B2D] border border-slate-800 rounded-3xl overflow-hidden shadow-card card-hover reveal in reveal-d1 block"
        >
          <div className="h-44 overflow-hidden img-zoom relative">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop"
              alt="Bus branding moving through city"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 bg-[#162238] border border-slate-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
              B · On the Move
            </span>
          </div>
          <div className="p-6">
            <h3 className="font-extrabold text-[17px] text-white group-hover:text-brand transition">
              Advertising on the Move
            </h3>
            <p className="text-slate-400 text-[13.5px] mt-2">
              Auto · Cab · Bus · Mobile Van · Bus Shelter · Road Shows & promo vehicles.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-brand">
              View gallery{' '}
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition"></i>
            </span>
          </div>
        </a>

        <a
          href="#offline"
          className="group bg-[#121B2D] border border-slate-800 rounded-3xl overflow-hidden shadow-card card-hover reveal in reveal-d2 block"
        >
          <div className="h-44 overflow-hidden img-zoom relative">
            <img
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=900&auto=format&fit=crop"
              alt="Offline flyer distribution and print media"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 bg-[#162238] border border-slate-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
              C · Offline
            </span>
          </div>
          <div className="p-6">
            <h3 className="font-extrabold text-[17px] text-white group-hover:text-brand transition">
              Offline Distribution
            </h3>
            <p className="text-slate-400 text-[13.5px] mt-2">
              Hand-to-hand, door-to-door, apartment & event promotions at high-footfall zones.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-brand">
              View coverage{' '}
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition"></i>
            </span>
          </div>
        </a>

        <a
          href="#creative"
          className="group bg-[#121B2D] border border-slate-800 rounded-3xl overflow-hidden shadow-card card-hover reveal in block"
        >
          <div className="h-44 overflow-hidden img-zoom relative">
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=900&auto=format&fit=crop"
              alt="Print and creative design studio work"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 bg-[#162238] border border-slate-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
              D · Creative
            </span>
          </div>
          <div className="p-6">
            <h3 className="font-extrabold text-[17px] text-white group-hover:text-brand transition">
              Print & Creative Design
            </h3>
            <p className="text-slate-400 text-[13.5px] mt-2">
              Brochures, flyers, standees, pole boards, magazine ads & social creatives.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-brand">
              View portfolio{' '}
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition"></i>
            </span>
          </div>
        </a>

        <a
          href="#offline"
          className="group bg-[#121B2D] border border-slate-800 rounded-3xl overflow-hidden shadow-card card-hover reveal in reveal-d1 block"
        >
          <div className="h-44 overflow-hidden img-zoom relative">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=900&auto=format&fit=crop"
              alt="Newspaper inserts reaching homes"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 bg-[#162238] border border-slate-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
              E · Inserts
            </span>
          </div>
          <div className="p-6">
            <h3 className="font-extrabold text-[17px] text-white group-hover:text-brand transition">
              Newspaper & Quick Commerce Inserts
            </h3>
            <p className="text-slate-400 text-[13.5px] mt-2">
              Hyperlocal residential reach through official partners & dark-store routing.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-brand">
              How it works{' '}
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition"></i>
            </span>
          </div>
        </a>

        <a
          href="#offline"
          className="group bg-[#121B2D] border border-slate-800 rounded-3xl overflow-hidden shadow-card card-hover reveal in reveal-d2 block"
        >
          <div className="h-44 overflow-hidden img-zoom relative">
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=900&auto=format&fit=crop"
              alt="Pharmacy cover advertising"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 bg-[#162238] border border-slate-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
              F · Pharmacy
            </span>
          </div>
          <div className="p-6">
            <h3 className="font-extrabold text-[17px] text-white group-hover:text-brand transition">
              Pharmacy Cover Advertising
            </h3>
            <p className="text-slate-400 text-[13.5px] mt-2">
              Take-home branding via partner pharmacies. Ideal for healthcare, education & retail.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-brand">
              View details{' '}
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition"></i>
            </span>
          </div>
        </a>

        <a
          href="#digital"
          className="group lg:col-span-3 bg-[#162238] border border-slate-700 text-white rounded-3xl overflow-hidden shadow-lift card-hover reveal in block"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-7 sm:p-10">
              <span className="bg-brand text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                G · Website, Development & AI
              </span>
              <h3 className="serif text-2xl sm:text-3xl mt-4 text-white">
                Your offline buzz, backed by a premium online home.
              </h3>
              <p className="text-slate-300 mt-3 text-[14.5px]">
                Business websites · E-commerce · AI chatbots · Hosting & maintenance · Redesigns.
                Professional, mobile-friendly, SEO-ready, scalable & secure.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 bg-brand text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-brand-dark transition">
                Explore digital & AI <i className="fa-solid fa-arrow-right text-xs"></i>
              </span>
            </div>
            <div className="h-56 md:h-auto overflow-hidden img-zoom">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                alt="Website analytics and digital solutions dashboard"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </a>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-brand rounded-[28px] p-8 sm:p-12 text-white relative overflow-hidden shadow-lift reveal in">
        <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-white/10"></div>
        <div className="absolute right-24 -top-16 w-40 h-40 rounded-full bg-white/10"></div>
        <div className="relative grid lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <h3 className="serif text-3xl sm:text-[38px] leading-tight text-white">
              Make Your Brand Visible Where Your Audience Is.
            </h3>
            <p className="text-white/90 mt-3 max-w-xl">
              Tell us your city, audience and goal — we’ll build a hyperlocal media plan across the
              right screens, streets and homes.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              data-cta="CTA Banner"
              className="bg-white text-brand font-extrabold text-center px-7 py-4 rounded-full hover:bg-slate-100 transition"
            >
              Get a Media Plan
            </a>
            <a
              href="tel:+919686544644"
              className="border border-white/40 text-white font-bold text-center px-7 py-4 rounded-full hover:bg-white/10 transition"
            >
              <i className="fa-solid fa-phone mr-2 text-sm"></i> +91 96865 44644
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
