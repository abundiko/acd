"use client";

import Link from "next/link";

import {
  DocumentText,
  Briefcase,
  Grid,
  People,
  Mail,
  CalendarDot,
  ImageFavourite,
} from "react-huge-icons/outline";
import { ArrowRight } from "react-huge-icons/solid";
import { ApiCountData } from "@/utils/types/companyTypes";
import { useState } from "react";

export default function Dashboard({ data }: { data: ApiCountData[] }) {
  const [currentDate, setCurrentDate] = useState(
    data.length > 0 ? data[0].date : null
  );

  return (
    <section className="flex flex-col gap-3 sm:gap-4 md:gap-2 lg:gap-4 bg-light-gray p-4 w-full">
      {currentDate && (
        <div className="flex justify-between gap-4 w-full bg-light rounded-md border p-4 items-center">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-2xl">
              {data.filter((_) => _.date === currentDate)[0].count}
            </h1>
            <p className="text-xs">Visitors</p>
          </div>
          <select
            className="text-xs w-fit rounded-lg border border-primary bg-blue-100 p-2"
            onChange={(e) => setCurrentDate(e.target.value)}
          >
            {Array.from(new Set(data)).map((_, i) => (
              <option key={i} value={_.date}>
                {_.date}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-3">
        {actions.map(({ name, icon, href }) => (
          <div
            key={href}
            className="p-4 bg-light rounded shadow-lg flex flex-col gap-2"
          >
            <h1 className="font-semibold text-xs">{name}</h1>
            <div className="text-4xl">{icon}</div>
            <Link
              href={href}
              className="btn-primary w-fit px-3 py-[5px_!important] rounded-[30px_!important]"
            >
              View <ArrowRight />{" "}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

const actions = [
  {
    name: "Organizations",
    icon: <Briefcase />,
    href: `/admin/organizations`,
  },
  {
    name: "Evaluation Schedule",
    icon: <CalendarDot />,
    href: `/admin/evaluation-schedule`,
  },
  {
    name: "Categories",
    icon: <Grid />,
    href: `/admin/categories`,
  },
  {
    name: "The Team",
    icon: <People />,
    href: `/admin/team`,
  },
  {
    name: "Stories",
    icon: <DocumentText />,
    href: `/admin/blog`,
  },
  {
    name: "Newsletter",
    icon: <Mail />,
    href: `/admin/newsletter`,
  },
  {
    name: "Featured Logos",
    icon: <ImageFavourite />,
    href: `/admin/featured-logos`,
  },
];
