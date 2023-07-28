"use client";

import clsx from "clsx";
import React from "react";
interface FooterProps {
  hidden: boolean;
}

const Footer: React.FC<FooterProps> = ({ hidden }) => {
  return (
    <footer
      className={clsx(
        "fixed bottom-0 bg-white w-full transition-all",
        hidden && "translate-y-full md:translate-y-0"
      )}
    >
      <div
        className="
        w-fit
        my-4
        mx-auto
        h-[17px]
        text-[#A9A9A9]
        text-[14px]
        "
      >
        <p>
          created by{" "}
          <a
            href="https://nelsonjavier.vercel.app"
            className="underline font-bold"
          >
            Nelson Javier Aldazabal
          </a>{" "}
          - devChallenges.io
        </p>
      </div>
    </footer>
  );
};

export default Footer;
