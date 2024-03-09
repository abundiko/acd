"use client";

import Others from "./Others";
import RoundedBars from "./RoundedBars";
import SecurityRating from "./SecurityRating";
import StructuralComplianceMetrics from "./StructuralComplianceMetrics";

export default function Dashboard() {
  return (
    <section className="flex max-md:flex-wrap gap-3 sm:gap-4 md:gap-2 lg:gap-4 bg-light-gray p-4">
      <div className="flex flex-col gap-4 lg:w-[55%] w-full">
        <RoundedBars />
        <StructuralComplianceMetrics />
      </div>
      <div className="flex flex-col gap-4 lg:w-[45%] w-full">
        <SecurityRating />
        <Others />
      </div>
    </section>
  );
}
