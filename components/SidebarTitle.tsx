import React from "react";

const SidebarTitle = () => {
  return (
    <div className="w-full py-5 flex items-center gap-2 px-8 border-b-2 border-sidebar-boder">
      <div className="aspect-square h-8 rounded-full bg-white/50"></div>
      <p className="font-semibold text-xl">VantaLearn</p>
    </div>
  );
};

export default SidebarTitle;
