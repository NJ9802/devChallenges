"use client";

import Image from "next/image";
import React, { useContext } from "react";
import Separator from "./ui/Separator";
import SearchItem from "./ui/SearchItem";
import { DrawerContext } from "@/context/context";

interface HeaderProps {
  city: string;
  guests: number;
}

const Header: React.FC<HeaderProps> = ({ city, guests }) => {
  const { setIsOpen } = useContext(DrawerContext);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <header
      className="
      flex
      flex-col
      md:flex-row
      px-[13px]
      py-[19px]
      gap-[39px]
      md:gap-0
      md:px-24
      md:py-8
      justify-between
      "
    >
      <Image src="/assets/logo.svg" alt="logo" height={14} width={70} />

      <div className="mx-auto md:mx-0">
        <div
          onClick={handleClick}
          className="
            flex
            items-center
            h-[55px]
            rounded-2xl
            text-sm
            font-mulish
            cursor-pointer
            shadow-[0_1px_6px_0_rgba(0,0,0,0.1)]
            "
        >
          <SearchItem>{!!city ? `${city}, Finland` : "Find city"}</SearchItem>

          <Separator />

          <SearchItem textGray={!guests}>
            {guests ? `${guests} guests` : "Add guests"}
          </SearchItem>

          <Separator />

          <SearchItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z"
                fill="#EB5757"
              />
            </svg>
          </SearchItem>
        </div>
      </div>
    </header>
  );
};

export default Header;
