"use client";

import NavButton from "./NavButton";
import {
  DashboardSquare02Icon,
  Blockchain06Icon,
} from "@hugeicons/core-free-icons";

const navs = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: DashboardSquare02Icon,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: Blockchain06Icon,
  },
];

const SidebarNav = () => {
  return (
    <nav className="w-full min-h-20 flex flex-col items-start">
      {navs.map((nav) => (
        <NavButton
          key={nav.title}
          href={nav.href}
          icon={nav.icon}
          title={nav.title}
        />
      ))}
    </nav>
  );
};

export default SidebarNav;
