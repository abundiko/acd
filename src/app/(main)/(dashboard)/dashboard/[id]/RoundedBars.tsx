"use client";

import { useDashboardState } from "@/state/dashboardStore";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
      }).map(tile => <RoundedCard key={tile.title} {...tile} />)}
    </div>
  );
}

const tiles = ({ compliance, employment, accessibility }: RoundedBarsProps) => [
  {
    title: "COMPLIANCE SCORE",
    value: compliance,
    color: "#E53761"
  },
  {
    title: "5% EMPLOYMENT QUOTA",
    value: employment,
    color: "#27A468"
  },
  {
    title: "ACCESSIBILITY",
    value: accessibility,
    color: "#F2A735"
  }
];

function RoundedCard({
  title,
  value,
  color
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div className="p-3 bg-light flex flex-col  gap-3 items-center justify-center rounded-lg text-center border">
      <h1 className="text-[.6rem] opacity-80">
        {title}
      </h1>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          rotation: 0,
          textSize: "16px",
          pathTransitionDuration: 0.5,
          pathColor: color,
          textColor: "#121212",
          trailColor: "fefefe",
          backgroundColor: "#00000000"
        })}
      />
    </div>
  );
}
