import React from 'react';
import type { SurfaceType } from '../../data/surfaces.data';
import type { AdCampaign } from '../../data/adCampaigns.data';
import PlaceholderMedia from '../PlaceholderMedia';

function ScreenLabel({ campaign }: { campaign?: AdCampaign }) {
  if (!campaign) return null;
  return (
    <div className="absolute inset-0 flex flex-col justify-end p-[6%]">
      <span
        className="text-[8px] font-bold uppercase tracking-widest"
        style={{ color: campaign.palette.accent }}
      >
        {campaign.category}
      </span>
      <span className="text-white font-extrabold text-[clamp(9px,1.4vw,15px)] leading-tight">
        {campaign.headline}
      </span>
    </div>
  );
}

export default function SurfaceArt({
  type,
  campaign,
}: {
  type: SurfaceType;
  campaign?: AdCampaign;
}) {
  const base = campaign?.palette.base ?? '#111318';

  switch (type) {
    case 'roadside-billboard':
    case 'static-billboard':
      return (
        <div className="flex flex-col items-center">
          <div className="relative w-[26vw] max-w-[300px] aspect-[16/9] rounded-sm border-4 border-[#1c1e24] bg-[#050506] overflow-hidden shadow-2xl">
            <div className="absolute inset-0" style={{ backgroundColor: base }}>
              <PlaceholderMedia label={campaign?.imageSlot ?? 'Billboard ad'} tone="warm" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <ScreenLabel campaign={campaign} />
          </div>
          <div className="w-[3%] min-w-[6px] h-[10vh] bg-gradient-to-b from-[#2a2d35] to-[#101114]" />
        </div>
      );

    case 'building-screen':
      return (
        <div className="relative w-[14vw] max-w-[160px] aspect-[3/5] rounded-sm border-2 border-[#1c1e24] bg-[#050506] overflow-hidden shadow-2xl">
          <div className="absolute inset-0" style={{ backgroundColor: base }}>
            <PlaceholderMedia label={campaign?.imageSlot ?? 'Building screen'} tone="cool" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <ScreenLabel campaign={campaign} />
        </div>
      );

    case 'building-facade':
      return (
        <div className="relative w-[30vw] max-w-[360px] aspect-[4/5] rounded-sm bg-[#101114] overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute inset-0" style={{ backgroundColor: base, opacity: 0.9 }}>
            <PlaceholderMedia label={campaign?.imageSlot ?? 'Building facade'} tone="cool" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
          <ScreenLabel campaign={campaign} />
        </div>
      );

    case 'bus-shelter':
      return (
        <div className="relative w-[20vw] max-w-[220px]">
          <div className="absolute -top-3 left-0 right-0 h-2 bg-[#1c1e24] rounded-t-sm" />
          <div className="relative aspect-[16/9] border-2 border-[#1c1e24] bg-[#050506] overflow-hidden shadow-2xl">
            <div className="absolute inset-0" style={{ backgroundColor: base }}>
              <PlaceholderMedia label={campaign?.imageSlot ?? 'Bus shelter ad'} tone="warm" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <ScreenLabel campaign={campaign} />
          </div>
          <div className="flex justify-between px-2">
            <div className="w-1 h-8 bg-[#1c1e24]" />
            <div className="w-1 h-8 bg-[#1c1e24]" />
          </div>
        </div>
      );

    case 'branded-vehicle':
      return (
        <div className="relative w-[18vw] max-w-[200px] aspect-[16/9] rounded-md bg-[#111318] overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute inset-0" style={{ backgroundColor: base }}>
            <PlaceholderMedia label={campaign?.imageSlot ?? 'Branded vehicle'} tone="neutral" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <ScreenLabel campaign={campaign} />
        </div>
      );

    default:
      return null;
  }
}
