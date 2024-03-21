"use client";

import { useDashboardState } from "@/state/dashboardStore";
import Link from "next/link";
import { useState } from "react";
import { Search } from "react-huge-icons/outline";
import { Remove } from "react-huge-icons/solid";

export default function Others() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const orgs = useDashboardState(s => s.organizations);
  const org = useDashboardState(s => s.org);

  const filteredList = orgs
    .filter(({ category, _id }) => {
      return category == org.category && _id != org._id;
    })
    .filter(({ name }) => {
      return name.toLowerCase().includes(searchValue.toLowerCase());
    });

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
        {filteredList.length == 0
          ? <p className="p-2 rounded">No Results Found</p>
          : filteredList.map(({ name, _id }) => {
              return (
                <Link
                  href={`/dashboard/${_id}`}
                  className="p-2 hover:bg-gray-200"
                  key={_id}
                >
                  {name}
                </Link>
              );
            })}
      </div>
    </div>
  );
}
