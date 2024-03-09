"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "react-huge-icons/outline";

export default function Others() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="dashboard-card w-full flex flex-col gap-3">
      <div className="flex items-center justify-between">
        {isSearching
          ? <input
              type="text"
              className="border rounded-2xl px-4 py-1 text-xs"
              placeholder="Search..."
            />
          : <h1 className="opacity-80 text-xs">
              OTHER ORGANIZATIONS IN THIS CATEGORY
            </h1>}
        <button
          onClick={() => setIsSearching(!isSearching)}
          className="rounded-full inline-flex items-center justify-center size-7 hover:bg-light-gray"
        >
          <Search />
        </button>
      </div>
      <div className="flex flex-col border border-gray-400 rounded-md overflow-hidden divide-y divide-gray-400 bg-light-gray max-h-[500px] overflow-y-auto">
        {dummy.map(({ title, href }) => {
          return (
            <Link href={href} className="p-2 hover:bg-gray-200" key={title}>
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const dummy = [
  {
    title: "Organization of this and that",
    href: "/dashboard/organization-of-this"
  },
  {
    title: "Organization of us",
    href: "/dashboard/organization-of-this"
  },
  {
    title: "Organization of others",
    href: "/dashboard/organization-of-this"
  },
  {
    title: "Organization of peopls",
    href: "/dashboard/organization-of-this"
  }
];
