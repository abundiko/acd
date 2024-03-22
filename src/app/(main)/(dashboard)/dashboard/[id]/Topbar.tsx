"use client";

import "@radix-ui/themes/styles.css";

import { useNavState } from "@/state/navStore";
import { MenuLineHorizontal } from "react-huge-icons/solid";
import { useDashboardState } from "@/state/dashboardStore";
import { useRouter } from "next/navigation";
import VerifyAccessibility from "./VerifyAccessibility";

export default function Topbar() {
  const setOpen = useNavState(state => state.setOpen);
  const router = useRouter();
  const org = useDashboardState(s => s.org);

  return (
    <div className="flex items-center justify-between border-b bg-light min-h-12">
      <div className="relative w-2/12">
        <button
          type="button"
          onClick={e => {
            e.preventDefault();
            setOpen(true);
          }}
          className="p-2 text-xl lg:hidden"
        >
          <MenuLineHorizontal className="absolute top-1/2 left-2 -translate-y-1/2" />
        </button>
      </div>
      <div className="md:w-9/12">
        {org && <VerifyAccessibility />}
      </div>
    </div>
  );
}
