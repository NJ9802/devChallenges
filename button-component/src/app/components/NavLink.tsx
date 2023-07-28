"use client"

import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  active?: boolean;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ active, text }) => {
  return (
    <Link
      className={clsx(
        `
        text-[14px]
        h-5
        font-notoSansJP
        `,
        active ? "text-[#090F31] font-bold" : "text-[#9E9E9E] font-medium"
      )}
      href="#"
    >
      {text}
    </Link>
  );
};

export default NavLink;
