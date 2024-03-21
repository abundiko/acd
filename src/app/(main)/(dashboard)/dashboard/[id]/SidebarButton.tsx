"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type SidebarButtonProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export default function SidebarButton({
  icon,
  label,
  href
}: SidebarButtonProps) {
  const isActive = usePathname() === href;
  const isActiveClass = isActive ? "bg-primary text-light" : "";

  return (
    <Link
      href={href}
      className={`flex gap-2 p-2 rounded-md items-center justify-start hover:bg-light-gray hover:text-dark-text text-sm ${isActiveClass}`}
    >
      {icon}
      <span>
        {label}
      </span>
    </Link>
  );
}
