"use client";

import React from "react";
import NavLink from "./ui/NavLink";

const Sidebar = () => {
  return (
    <div
      className="
      px-12
      py-[38px]
      bg-[#FAFBFD]
      w-[228.5px]
      h-full
      flex-shrink-0      
      "
    >
      <h2
        className="
        text-[#090F31]
        text-[13px]
        font-poppins
        font-semibold
        h-5
        "
      >
        <span className="text-[#F7542E]">Dev</span>challenges.io
      </h2>

      <nav
        className="
        flex
        flex-col
        space-y-[28px]
        mt-[122px]
        "
      >
        <NavLink text="Color" />
        <NavLink text="Typography" />
        <NavLink text="Spaces" />
        <NavLink text="Buttons" />
        <NavLink text="Inputs" active />
        <NavLink text="Grid" />
      </nav>
    </div>
  );
};

export default Sidebar;
