"use client";

import React, { useState, useCallback } from "react";
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import useWindowWidth from "@/hooks/useWindowWidth";
import { isBefore } from "@/utils/functions/functions";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();
  const windowWidth = useWindowWidth();

  const dates = [
    "Mon Mar 18 2024 00:00:00 GMT+0100 (West Africa Standard Time)",
    "Tue Mar 19 2024 00:00:00 GMT+0100 (West Africa Standard Time)",
    "Wed Mar 20 2024 00:00:00 GMT+0100 (West Africa Standard Time)"
  ];

  const onChange = useCallback((value: any) => {
    router.push(`/#apply-for-evaluation?date=${value}`);
  }, []);

  return (
    <section className="flex flex-col items-start max-md:items-center p-4 md:p-8">
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
