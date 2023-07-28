"use client";

import clsx from "clsx";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import Separator from "./Separator";
import stays from "@/data/stays";
import SearchButton from "./buttons/SearchButton";
import SearchParams from "./SearchParams";
import { DrawerContext } from "@/context/context";
import Guests from "./Guests";

interface SearchDrawerProps {
  setCity: Dispatch<SetStateAction<string>>;
  setGuests: Dispatch<SetStateAction<number>>;
}

const SearchDrawer: React.FC<SearchDrawerProps> = ({ setCity, setGuests }) => {
  const [citySelected, setCitySelected] = useState("");
  const [option, setOption] = useState<"location" | "guests">("location");
  const [adults, setAdults] = useState<number>(0);
  const [childrens, setChildrens] = useState<number>(0);

  const { isOpen, setIsOpen } = useContext(DrawerContext);

  const locations = Array.from(new Set(stays.map((stay) => stay.city)));

  const handleClick = () => {
    console.log("here");
    setCity(citySelected);
    setGuests(adults || childrens ? adults + childrens : 0);
    setIsOpen(false);
  };

  return (
    <div
      className={clsx(
        `fixed
        -top-[85%] 
         flex 
         flex-col 
         w-full 
         h-[85%] 
         p-[13px] 
         bg-white 
         z-50 
         transition
         ease-in-out 
         duration-300 
         font-mulish
         md:h-[65%]
         md:-top-[65%]
         md:p-24 
        `,
        isOpen && "translate-y-full"
      )}
    >
      <div className="md:hidden flex items-center justify-between">
        <span className="text-xs font-bold">Edit your search</span>

        <button className="h-6 w-6" onClick={() => setIsOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_1_376)">
              <path
                d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.10997 5.7C6.71997 5.31 6.08997 5.31 5.69997 5.7C5.30997 6.09 5.30997 6.72 5.69997 7.11L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z"
                fill="#333333"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_376">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <div
        className="
        flex 
        flex-col 
        mt-3
        rounded-2xl
        shadow-[0_1px_6px_0_rgba(0,0,0,0.1)]
        md:flex-row
        "
      >
        <SearchParams
          onClick={() => setOption("location")}
          title="location"
          active={option === "location"}
        >
          <span className="text-sm">{`${
            !!citySelected ? `${citySelected}, Finland` : "Select location"
          }`}</span>
        </SearchParams>

        <Separator className="md:hidden" horizontal />
        <Separator className="hidden md:inline-block" />

        <SearchParams
          onClick={() => setOption("guests")}
          title="guests"
          active={option === "guests"}
        >
          <span
            className={clsx(
              "text-sm",
              !(childrens || adults) && "text-lightGray"
            )}
          >
            {childrens || adults
              ? `${adults + childrens} guests`
              : "Add guests"}
          </span>
        </SearchParams>

        <Separator className="hidden md:inline-block" />

        <div className="hidden md:flex md:items-center px-[26px] md:flex-1">
          <div className="w-fit mx-auto">
            <SearchButton onClick={handleClick} />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 my-[35px] px-12 md:grid grid-cols-3">
        <div
          className={clsx(option === "location" ? "hidden" : "hidden md:block")}
        />
        <div className={clsx(option !== "location" && "hidden")}>
          <div className="flex flex-col gap-8">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => setCitySelected(location)}
                className="flex items-center space-x-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                >
                  <path
                    d="M7 0C3.13 0 0 3.13 0 7C0 11.17 4.42 16.92 6.24 19.11C6.64 19.59 7.37 19.59 7.77 19.11C9.58 16.92 14 11.17 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
                    fill="#4F4F4F"
                  />
                </svg>

                <span className="text-sm text-gray">{`${location}, Finland`}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={clsx(option !== "guests" && "hidden")}>
          <Guests
            adults={adults}
            setAdults={setAdults}
            childrens={childrens}
            setChildrens={setChildrens}
          />
        </div>
      </div>
      <div className="md:hidden w-fit mx-auto py-6">
        <SearchButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default SearchDrawer;
