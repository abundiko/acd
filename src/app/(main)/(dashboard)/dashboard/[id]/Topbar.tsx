"use client";

import "@radix-ui/themes/styles.css";

import { useNavState } from "@/state/navStore";
import { MenuLineHorizontal } from "react-huge-icons/solid";
import { useDashboardState } from "@/state/dashboardStore";
import VerifyAccessibility from "./VerifyAccessibility";
import Search from "./Search";

export default function Topbar() {
  const setOpen = useNavState(state => state.setOpen);
  const org = useDashboardState(s => s.org);

  return (
    <div className="flex items-center justify-between border-b bg-light min-h-12 gap-3">
      <div className="relative flex-shrink-0">
        <button
          type="button"
          onClick={e => {
            e.preventDefault();
            setOpen(true);
          }}
          className="p-3 text-xl lg:hidden"
        >
          <MenuLineHorizontal className="absolute top-1/2 left-2 -translate-y-1/2" />
        </button>
      </div>
      {org &&
      <>
      <div className="w-full flex-shrink md:w-3/12 border rounded-md py-2 text-sm lg:ml-2 block">
        <Search />
      </div>
      <div className="md:w-9/12 flex-shrink-0">
         <VerifyAccessibility />
      </div>
      </>}
    </div>
  );
}
