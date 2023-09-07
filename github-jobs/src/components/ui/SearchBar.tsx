"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";

import SearchContext from "@/context/searchContext";

import Icon from "./Icon";
import { GlobalContext } from "@/context/globalContext";

const Button: React.FC<{ children: React.ReactNode; disabled: boolean }> = ({
  disabled,
  children,
}) => {
  return (
    <button
      type="submit"
      className="text-white py-[14px] px-7 bg-accent rounded-[4px] transition disabled:bg-gray-1"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { setPage, setQuery } = useContext(GlobalContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setQuery(search);
    setPage(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <form
      className="relative w-full rounded-lg z-0 overflow-hidden font-roboto"
      onSubmit={handleSubmit}
    >
      <Image
        className="absolute w-full h-full -z-10 object-cover"
        alt="Office Buildings"
        src="/assets/backgroundImg.png"
        width={5000}
        height={5000}
      />
      <div className="px-[18px] py-[42px]">
        <div className="mx-auto  rounded-[4px] bg-white p-1 max-w-3xl">
          <div className="flex items-center justify-between lg:gap-10">
            <div className="flex items-center ml-3 max-w-[50%] lg:max-w-none lg:w-full">
              <Icon className="text-gray-3">work</Icon>
              <input
                className="ml-2 focus:outline-none placeholder:text-gray-3 text-ellipsis max-w-full lg:w-full"
                type="text"
                placeholder="Title, companies, expertise or benefits"
                onChange={(e) => handleChange(e)}
                value={search}
              />
            </div>
            <Button disabled={search.length === 0}>Search</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
