"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "react-huge-icons/outline";
import { Remove } from "react-huge-icons/solid";

export default function Others() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="dashboard-card w-full flex flex-col gap-3">
      <div className="flex items-center justify-between">
        {isSearching
          ? <input
              type="text"
              className="border border-gray-400 w-8/12 max-w-[280px] rounded-2xl px-4 py-2 text-xs outline-primary"
              placeholder="Search..."
              onChange={e => setSearchValue(e.target.value)}
            />
          : <h1 className="opacity-80 text-xs">
              OTHER ORGANIZATIONS IN THIS CATEGORY
            </h1>}
        <button
          onClick={() => {
            setIsSearching(!isSearching);
            setSearchValue("");
          }}
          className="rounded-full inline-flex items-center justify-center size-7 hover:bg-light-gray"
        >
          {isSearching ? <Remove /> : <Search />}
        </button>
      </div>
      <div className="flex flex-col border border-gray-400 rounded-md overflow-hidden divide-y divide-gray-400 bg-light-gray max-h-[500px] overflow-y-auto">
        {dummy
          .filter(({ title }) => {
            return title.toLowerCase().includes(searchValue.toLowerCase());
          })
          .map(({ title, href }) => {
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
