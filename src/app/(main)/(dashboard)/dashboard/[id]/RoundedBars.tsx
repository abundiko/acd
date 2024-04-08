"use client";

import { useDashboardState } from "@/state/dashboardStore";
import RoundedCard from "@/components/ui/RoundedCard";
import { getSuitableTitleForScore } from "@/utils/functions/functions";

export type RoundedBarsProps = {
  compliance: number;
  employment: number;
  accessibility: number;
};

export default function RoundedBars() {
  const org = useDashboardState(s => s.org);

  return (
    <div className="flex  gap-3 sm:gap-4 md:gap-2 lg:gap-4">
      {tiles({
        compliance: org ? Number(org.compScore) : 0,
        employment: org ? Number(org.quota) : 0,
        accessibility: org ? Number(org.rating) : 0
      }).map(tile => <RoundedCard key={tile.title} {...tile} showBlueBar />)}
    </div>
  );
}

const tiles = ({ compliance, employment, accessibility }: RoundedBarsProps) => [
  {
    title: "TOTAL ACCESSIBILITY SCORE",
    value: accessibility,
    color: "#F2A735",
    label: getSuitableTitleForScore(accessibility, "accessibility")
  },
  {
    title: "5% EMPLOYMENT QUOTA",
    value: employment,
    color: "#27A468",
    label: getSuitableTitleForScore(employment, "compliance")
  },
  {
    title: "TOTAL COMPLIANCE SCORE",
    value: compliance,
    color: "#E53761",
    label: getSuitableTitleForScore(compliance, "accessibility")
  }
];
