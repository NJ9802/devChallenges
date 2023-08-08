"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4">
      <div
        className="
        w-fit
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
