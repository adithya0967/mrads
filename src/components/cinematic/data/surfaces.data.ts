// World-placement list for the highway-drive phase: each entry is one
// advertising surface the camera passes. laneRangeVh is a LOCAL sub-range
// inside the "drive" phase (see phases.data.ts), expressed in vh units on
// the same TOTAL_JOURNEY_VH scale so it can be combined with phaseRange('drive').

export type SurfaceType =
  | 'roadside-billboard'
  | 'building-screen'
  | 'static-billboard'
  | 'bus-shelter'
  | 'building-facade'
  | 'branded-vehicle';

export interface HighwaySurface {
  id: string;
  type: SurfaceType;
  laneRangeVh: [number, number];
  depth: 'near' | 'mid' | 'far';
  adCampaignId?: string;
  side: 'left' | 'right';
}

// Drive phase spans 420–640vh desktop / 270–390vh mobile. Ranges below are
// desktop values; the mobile engine compresses them proportionally at render time.
export const HIGHWAY_SURFACES: HighwaySurface[] = [
  {
    id: 'surface-1',
    type: 'roadside-billboard',
    laneRangeVh: [420, 465],
    depth: 'near',
    adCampaignId: 'pulse-audio',
    side: 'right',
  },
  {
    id: 'surface-2',
    type: 'building-screen',
    laneRangeVh: [460, 505],
    depth: 'mid',
    adCampaignId: 'maison-eight',
    side: 'left',
  },
  {
    id: 'surface-3',
    type: 'static-billboard',
    laneRangeVh: [500, 545],
    depth: 'far',
    adCampaignId: 'skyline-residences',
    side: 'right',
  },
  {
    id: 'surface-4',
    type: 'bus-shelter',
    laneRangeVh: [540, 575],
    depth: 'near',
    adCampaignId: 'artisan-table',
    side: 'left',
  },
  {
    id: 'surface-5',
    type: 'building-facade',
    laneRangeVh: [575, 615],
    depth: 'mid',
    adCampaignId: 'nightframe',
    side: 'right',
  },
  {
    id: 'surface-6',
    type: 'branded-vehicle',
    laneRangeVh: [610, 640],
    depth: 'near',
    adCampaignId: 'mrads-house',
    side: 'left',
  },
];

export const DRIVE_START_VH = 420;
export const DRIVE_END_VH = 640;
