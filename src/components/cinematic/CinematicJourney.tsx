'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { TOTAL_JOURNEY_VH, TOTAL_JOURNEY_VH_MOBILE, phaseRange } from './data/phases.data';
import { adCampaigns, type AdCampaign } from './data/adCampaigns.data';
import {
  HIGHWAY_SURFACES,
  DRIVE_START_VH,
  DRIVE_END_VH,
  type HighwaySurface,
} from './data/surfaces.data';
import HeroScene from './scenes/HeroScene';
import BillboardRig from './scenes/BillboardRig';
import BillboardScreenContent from './scenes/BillboardScreenContent';
import ScreenVideo from './scenes/surfaces/ScreenVideo';
import ImmersionOverlay from './scenes/ImmersionOverlay';
import HighwayEnvironment from './scenes/HighwayEnvironment';
import RoadLanesLayer from './scenes/RoadLanesLayer';
import CarRig from './scenes/CarRig';
import PassingSurface from './scenes/PassingSurface';
import { useMotionStyle } from './useMotionStyle';

const DEPTH_SCALE: Record<HighwaySurface['depth'], number> = { near: 1.1, mid: 0.85, far: 0.6 };

function AdSlide({
  campaign,
  scrollYProgress,
  slotStart,
  slotEnd,
  fadeMargin,
}: {
  campaign: AdCampaign;
  scrollYProgress: MotionValue<number>;
  slotStart: number;
  slotEnd: number;
  fadeMargin: number;
}) {
  // Symmetric crossfade band shared with the neighboring slide: ad[i]'s
  // fade-out range [slotEnd - fadeMargin, slotEnd + fadeMargin] is IDENTICAL
  // to ad[i+1]'s fade-in range (since slotEnd_i === slotStart_i+1), so the
  // two opposite linear ramps sum to 1 throughout — never both fully opaque.
  const opacity = useTransform(
    scrollYProgress,
    [slotStart - fadeMargin, slotStart + fadeMargin, slotEnd - fadeMargin, slotEnd + fadeMargin],
    [0, 1, 1, 0]
  );
  return <BillboardScreenContent campaign={campaign} opacity={opacity} />;
}

function SurfaceLayer({
  surface,
  scrollYProgress,
  mobile,
}: {
  surface: HighwaySurface;
  scrollYProgress: MotionValue<number>;
  mobile: boolean;
}) {
  const driveSpan = DRIVE_END_VH - DRIVE_START_VH;
  const [driveStartFrac, driveEndFrac] = phaseRange('drive', mobile);
  const scaleToLocal = (vh: number) =>
    driveStartFrac + ((vh - DRIVE_START_VH) / driveSpan) * (driveEndFrac - driveStartFrac);

  const startFrac = scaleToLocal(surface.laneRangeVh[0]);
  const endFrac = scaleToLocal(surface.laneRangeVh[1]);
  const midFrac = (startFrac + endFrac) / 2;
  const buf = (driveEndFrac - driveStartFrac) * 0.09;
  const fade = buf * 0.4;
  const depthScale = DEPTH_SCALE[surface.depth];

  const x = useTransform(scrollYProgress, [startFrac - buf, endFrac + buf], ['95vw', '-95vw']);
  const opacity = useTransform(
    scrollYProgress,
    [startFrac - buf, startFrac - buf + fade, endFrac + buf - fade, endFrac + buf],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [startFrac - buf, midFrac, endFrac + buf],
    [depthScale * 0.85, depthScale * 1.15, depthScale * 0.85]
  );

  return <PassingSurface surface={surface} x={x} opacity={opacity} scale={scale} />;
}

function Curtain({ opacity }: { opacity: MotionValue<number> }) {
  const ref = useRef<HTMLDivElement>(null);
  useMotionStyle(ref, { opacity });
  return <div ref={ref} className="absolute inset-0 bg-[#050506] pointer-events-none z-40" />;
}

export default function CinematicJourney({ mobile = false }: { mobile?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalVh = mobile ? TOTAL_JOURNEY_VH_MOBILE : TOTAL_JOURNEY_VH;
  const [heroStart, heroEnd] = phaseRange('hero', mobile);
  const [approachStart, approachEnd] = phaseRange('approach', mobile);
  const [immersionStart, immersionEnd] = phaseRange('immersion', mobile);
  const [revealStart, revealEnd] = phaseRange('reveal', mobile);
  const [driveStart, driveEnd] = phaseRange('drive', mobile);
  const [transitionStart, transitionEnd] = phaseRange('transition', mobile);

  // Headline
  const heroOpacity = useTransform(
    scrollYProgress,
    [heroStart, heroEnd, approachStart + (approachEnd - approachStart) * 0.5],
    [1, 1, 0]
  );
  const heroX = useTransform(scrollYProgress, [approachStart, approachEnd], [0, -80]);

  // Billboard rig
  const billboardScale = useTransform(
    scrollYProgress,
    [heroStart, approachStart, approachEnd, immersionEnd, revealEnd],
    [0.34, 0.34, 2.35, 2.35, 0.55]
  );
  const billboardRotateY = useTransform(scrollYProgress, [heroStart, approachEnd], [-20, 0]);
  const billboardX = useTransform(
    scrollYProgress,
    [heroStart, approachEnd, revealEnd, driveStart + (driveEnd - driveStart) * 0.15],
    ['27vw', '0vw', '0vw', '22vw']
  );
  const billboardOpacity = useTransform(
    scrollYProgress,
    [heroStart, revealEnd, driveStart + (driveEnd - driveStart) * 0.18],
    [1, 1, 0]
  );
  const billboardStructureOpacity = useTransform(
    scrollYProgress,
    [heroStart, approachStart, approachEnd, revealStart, revealEnd],
    [1, 1, 0, 0, 1]
  );

  // Ad cycle (immersion)
  const N = adCampaigns.length;
  const slotWidth = (immersionEnd - immersionStart) / N;
  // Kept narrow: this is the HALF-width of the crossfade band shared between
  // adjacent slides (see AdSlide/Dot), so 2x this fraction of each slot's
  // scroll distance is transition-affected. At 0.28 that was 56% of every
  // slot — most of each ad's screen time was spent mid-blend with its
  // neighbor. 0.10 keeps transitions brief and each ad readable at rest.
  const fadeMargin = slotWidth * 0.1;
  const immersionSpan = immersionEnd - immersionStart;

  // Screen video layers: the zoom/reveal reel plays while the billboard is
  // scaling up empty during approach, crossfading into the ad-cycle reel
  // right as the first campaign caption starts (immersionStart) — replacing
  // what used to be a blank screen and per-campaign graphic placeholders.
  const zoomVideoOpacity = useTransform(
    scrollYProgress,
    [
      approachStart,
      approachStart + (approachEnd - approachStart) * 0.15,
      immersionStart - immersionSpan * 0.03,
      immersionStart,
    ],
    [0, 1, 1, 0]
  );
  const adVideoOpacity = useTransform(
    scrollYProgress,
    [
      immersionStart,
      immersionStart + immersionSpan * 0.03,
      immersionEnd - immersionSpan * 0.03,
      immersionEnd,
    ],
    [0, 1, 1, 0]
  );

  const overlayOpacity = useTransform(
    scrollYProgress,
    [
      immersionStart,
      immersionStart + slotWidth * 0.3,
      immersionEnd - slotWidth * 0.3,
      immersionEnd,
    ],
    [0, 1, 1, 0]
  );

  // Highway / road / car
  const highwayOpacity = useTransform(
    scrollYProgress,
    [revealStart, revealEnd, transitionEnd],
    [0, 1, 1]
  );
  const skylineX = useTransform(scrollYProgress, [revealEnd, transitionEnd], ['0vw', '-28vw']);
  const roadOpacity = useTransform(scrollYProgress, [revealStart, revealEnd], [0, 1]);
  const dashX = useTransform(scrollYProgress, [driveStart, driveEnd], ['0vw', '-360vw']);
  const carOpacity = useTransform(
    scrollYProgress,
    [revealEnd - (revealEnd - revealStart) * 0.3, driveStart, driveEnd, transitionEnd],
    [0, 1, 1, 0]
  );

  // Curtain closing the journey into normal document flow
  const curtainOpacity = useTransform(scrollYProgress, [transitionStart, transitionEnd], [0, 1]);

  return (
    <section ref={containerRef} style={{ height: `${totalVh}vh` }} className="relative">
      <div className="sticky top-0 h-screen w-screen overflow-hidden bg-[#050506]">
        <HighwayEnvironment opacity={highwayOpacity} skylineX={skylineX} />
        <RoadLanesLayer opacity={roadOpacity} dashX={dashX} />

        <HeroScene opacity={heroOpacity} x={heroX} />

        <BillboardRig
          scale={billboardScale}
          rotateY={billboardRotateY}
          x={billboardX}
          opacity={billboardOpacity}
          structureOpacity={billboardStructureOpacity}
        >
          <ScreenVideo
            src="/assets/videos/billboard-zoom-reveal.mp4"
            progress={zoomVideoOpacity}
            applyOpacity
          />
          <ScreenVideo
            src="/assets/videos/billboard-ad-cycle.mp4"
            progress={adVideoOpacity}
            applyOpacity
          />
          {adCampaigns.map((campaign, i) => {
            const slotStart = immersionStart + i * slotWidth;
            const slotEnd = slotStart + slotWidth;
            return (
              <AdSlide
                key={campaign.id}
                campaign={campaign}
                scrollYProgress={scrollYProgress}
                slotStart={slotStart}
                slotEnd={slotEnd}
                fadeMargin={fadeMargin}
              />
            );
          })}
        </BillboardRig>

        <ImmersionOverlay
          overlayOpacity={overlayOpacity}
          scrollYProgress={scrollYProgress}
          slotCount={N}
          immersionStart={immersionStart}
          slotWidth={slotWidth}
          fadeMargin={fadeMargin}
        />

        <CarRig x={0} opacity={carOpacity} />

        {(mobile ? HIGHWAY_SURFACES.slice(0, 4) : HIGHWAY_SURFACES).map((surface) => (
          <SurfaceLayer
            key={surface.id}
            surface={surface}
            scrollYProgress={scrollYProgress}
            mobile={mobile}
          />
        ))}

        <Curtain opacity={curtainOpacity} />
      </div>
    </section>
  );
}
