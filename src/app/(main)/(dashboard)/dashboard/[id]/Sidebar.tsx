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
import SidebarButton from "./SidebarButton";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 flex flex-col gap-4 p-6 border-r h-screen fixed top-0 left-0">
      <AppLogo />
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
      {
        name: "Compliance Rating",
        icon: <ChartLine />,
        href: `/dashboard/${id}/compliance-rating`
      },
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
        href: `/dashboard/${id}/apply`
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
