"use client";

import { IUser } from "@/lib/global";
import SidebarTitle from "./SidebarTitle";
import SidebarNav from "./SidebarNav";
import SidebarProfile from "./SidebarProfile";

const Sidebar = ({ open, user }: { open: boolean; user: IUser }) => {
  return (
    <>
      <div
        className={`transition-all md:block hidden duration-500 ${
          open ? "w-60" : "w-0 border-none"
        }`}
      />

      <div
        className={`h-full fixed bg-sidebar border-r border-sidebar-border overflow-hidden ${
          open ? "w-60" : "w-0 border-none"
        } transition-all duration-500`}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="space-y-4">
            <SidebarTitle />
            <SidebarNav />
          </div>
          <div>
            <SidebarProfile user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
