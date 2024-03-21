"use client";
import { useAdminState } from "@/state/adminStore";
import { useNavState } from "@/state/navStore";
import { MenuLineHorizontal } from "react-huge-icons/solid";

export default function Topbar() {
  const user = useAdminState((s) => s.user);

  const { setOpen } = useNavState();
  const toggleMenu = setOpen.bind(null, true);
  return (
    <header className="flex gap-4 items-center p-3 border-b bg-light">
      <button className="p-2 lg:hidden text-lg" onClick={toggleMenu}>
        <MenuLineHorizontal />
      </button>
      <div className="flex flex-col">
        <h1 className="text-xx">Admin</h1>
        <p className="font-bold text-lg">{user?.email}</p>
      </div>
    </header>
  );
}
