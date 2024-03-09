"use client";

import AppLogo from "@/components/logo";
import {
  GridFourTwo,
  Home,
  Calendar,
  CalendarDot,
  ChartLine,
  Chat,
  DocumentText
} from "react-huge-icons/outline";

import { Remove } from "react-huge-icons/solid";
import SidebarButton from "./SidebarButton";
import Link from "next/link";
import { useNavState } from "@/state/navStore";

export default function Sidebar() {
  const { isOpen, setOpen } = useNavState();

  return (
    <aside
      className={`w-full lg:w-64 flex flex-col gap-4 p-6 border-r h-screen transition-all duration-300 fixed top-0 left-[-105%] lg:left-0 bg-light z-30 ${isOpen
        ? "max-lg:[left:0_!important]"
        : ""}`}
    >
      <div className="flex justify-between items-center">
        <AppLogo />
        <button className="p-2 lg:hidden" onClick={() => setOpen(false)}>
          <Remove />
        </button>
      </div>
      {actions("1").map(({ title, actions }) => {
        return (
          <div
            key={title}
            className="border-b flex flex-col text-dark-text py-2"
          >
            <h3 className="pb-3 pl-2 text-sm">
              {title}
            </h3>
            {actions.map(({ name, icon, href }) => {
              return name === "DISABILITY_ACT"
                ? <Link
                    href={href}
                    key={name}
                    className="text-xs w-fit bg-primary rounded-3xl py-2 px-4 text-light border-primary hover:text-dark-text hover:bg-blue-100"
                  >
                    Disability Act, 2018
                  </Link>
                : <SidebarButton
                    key={name}
                    icon={icon}
                    label={name}
                    href={href}
                  />;
            })}
          </div>
        );
      })}
    </aside>
  );
}

const actions = (id: string) => [
  {
    title: "",
    actions: [
      { name: "Back To Home", icon: <Home />, href: "/" },
      { name: "Dashboard", icon: <GridFourTwo />, href: "/dashboard/" + id }
    ]
  },
  {
    title: "ANALYTICS",
    actions: [
      // {
      //   name: "Compliance Rating",
      //   icon: <ChartLine />,
      //   href: `/dashboard/${id}/compliance-rating`
      // },
      {
        name: "Evaluation Schedule",
        icon: <Calendar />,
        href: `/dashboard/${id}/evaluation-schedule`
      }
    ]
  },
  {
    title: "SCHEDULE",
    actions: [
      {
        name: "Chat With an Expert",
        icon: <Chat />,
        href: `/dashboard/${id}/chat`
      },
      {
        name: "Apply for Evaluation",
        icon: <CalendarDot />,
        href: `/#apply-for-evaluation`
      }
    ]
  },
  {
    title: "RESOURCES",
    actions: [
      {
        name: "DISABILITY_ACT",
        icon: <DocumentText />,
        href: `/dashboard/${id}/about`
      },
      {
        name: "About The Dashboard",
        icon: <DocumentText />,
        href: `/dashboard/${id}/about`
      }
    ]
  }
];
