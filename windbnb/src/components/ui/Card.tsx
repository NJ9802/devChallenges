"use client";

import Image from "next/image";
import React from "react";
import { IStay } from "@/data/stay";

interface CardProps {
  stay: IStay;
}

const Card: React.FC<CardProps> = ({ stay }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-3xl w-fit">
        <Image
          className="object-cover aspect-[13/9] rounded-3xl transition hover:scale-105"
          alt={stay.title}
          src={stay.photo}
          width={800}
          height={800}
        />
      </div>

      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center py-[13px] gap-[9.75px]">
          {stay.superHost && (
            <div className="rounded-full text-[10px] md:text-xs text-gray font-bold uppercase py-[6px] px-2 border border-gray shrink-0">
              Super host
            </div>
          )}

          <div className="text-xs md:text-sm text-gray-3">
            {stay.type}
            {stay.beds && <span>{` . ${stay.beds} beds`}</span>}
          </div>
        </div>

        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
          >
            <g clipPath="url(#clip0_1_293)">
              <path
                d="M13.6215 7.27834L12.319 2.98973C12.062 2.14796 10.8747 2.14796 10.6266 2.98973L9.31521 7.27834H5.37217C4.51268 7.27834 4.15825 8.38593 4.85825 8.88213L8.08356 11.1859L6.81647 15.2707C6.55951 16.0948 7.51647 16.7593 8.19875 16.2366L11.4684 13.7556L14.738 16.2454C15.4203 16.7682 16.3772 16.1037 16.1203 15.2796L14.8532 11.1948L18.0785 8.89099C18.7785 8.38593 18.4241 7.2872 17.5646 7.2872H13.6215V7.27834Z"
                fill="#EB5757"
                fillOpacity="0.72"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_293">
                <rect
                  width="21.2658"
                  height="21.2658"
                  fill="white"
                  transform="translate(0.835449 0.189697)"
                />
              </clipPath>
            </defs>
          </svg>

          <span className="text-xs md:text-sm text-gray font-medium">
            {stay.rating}
          </span>
        </div>
      </div>
      <h4 className="text-sm md:text-base font-semibold">{stay.title} </h4>
    </div>
  );
};

export default Card;
