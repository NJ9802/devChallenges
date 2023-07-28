"use client";

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        className="
        flex
        items-center
        px-[91.5px]
        font-ubuntuMono
        font-normal
        text-[12px]
        text-gray-3
        h-3
        "
      >
        <p>
          Icons:{" "}
          <a href="https://material.io/resources/icons/?style=round">
            https://material.io/resources/icons/?style=round
          </a>
        </p>
      </div>

      <div
        className="
        mt-[34px]
        mb-6
        px-[93.5px]
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
