"use client";

import React, { useState, useCallback } from "react";
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import useWindowWidth from "@/hooks/useWindowWidth";
import { isBefore } from "@/utils/functions/functions";
import { useRouter } from "next/navigation";
import { setCookie } from "@/utils/functions/cookies";
import CheckVisits from "@/components/CheckVisits";

export default function Main({ dates }: { dates: string[] }) {
  const router = useRouter();
  const windowWidth = useWindowWidth();

  const onChange = useCallback((value: any) => {
    setCookie("evaluation-date", value.toString(), 1);
    router.push(`/#apply-for-evaluation`);
  }, []);

  return (
    <section className="flex flex-col items-start max-md:items-center p-4 md:p-8">
      <CheckVisits />
      <h1 className="font-semibold text-lg md:text-xl">Evaluation Schedule</h1>
      <p className="opacity-70 pt-2 pb-4">
        Select a date to apply for evaluation
      </p>
      <Calendar
        onChange={onChange}
        size={windowWidth < 900 ? windowWidth - 60 : 500}
        isDisabled={date => {
          return (
            dates.includes(date.toString()) ||
            isBefore(date, new Date()) ||
            date.toString().includes("Sun") ||
            date.toString().includes("Sat")
          );
        }}
        startOfWeek={0}
        hideAdjacentDates
      />
    </section>
  );
}
