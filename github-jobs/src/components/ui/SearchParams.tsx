"use client";

import React, { useContext } from "react";

import SearchContext from "@/context/searchContext";

import Icon from "./Icon";

interface CheckboxProps {
  id: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, value, setValue }) => {
  return (
    <div className="flex items-center gap-3 ml-[14px]">
      <input
        onChange={() => setValue((prev) => !prev)}
        className="h-[18px] w-[18px] accent-accent cursor-pointer"
        type="checkbox"
        id={id}
        checked={value}
      />
      <label className="text-sm cursor-pointer" htmlFor={id}>
        {id}
      </label>
    </div>
  );
};

const LocationSearch: React.FC = () => {
  const { location, setLocation } = useContext(SearchContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <label className="text-sm text-gray-3 font-bold" htmlFor="locationSearch">
        LOCATION
      </label>

      <div className="mt-[14px]">
        <div className="flex items-center text-xs font-roboto gap-4 bg-white rounded-4 py-4 px-3">
          <Icon
            style={{ fontSize: "18px" }}
            className="text-gray-3 cursor-default"
          >
            public
          </Icon>
          <input
            onChange={handleChange}
            value={location}
            id="locationSearch"
            className="w-full focus:outline-none placeholder:text-gray-3"
            type="text"
            placeholder="City, state, zip code or country"
          />
        </div>
      </div>
    </>
  );
};

const LocationOption: React.FC<{ locationName: string }> = ({ locationName }) => {
  const { location, setLocation } = useContext(SearchContext);
  return (
    <div className="flex items-center gap-3">
      <input
        onChange={(e) => setLocation(e.target.value)}
        className="h-[18px] w-[18px] accent-accent cursor-pointer"
        id={locationName}
        value={locationName}
        type="radio"
        checked={locationName === location}
      />
      <label className="text-sm cursor-pointer" htmlFor={locationName}>
        {locationName}
      </label>
    </div>
  );
};

const Cities: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 ml-[14px]">
      <LocationOption locationName="London" />
      <LocationOption locationName="Amsterdam" />
      <LocationOption locationName="New York" />
      <LocationOption locationName="Berlin" />
    </div>
  );
};

const SearchParams = () => {
  const { fullTime, setFullTime } = useContext(SearchContext);
  return (
    <div>
      <div className="flex items-center gap-9">
        <Checkbox id="Full time" value={fullTime} setValue={setFullTime} />
      </div>
      <div className="mt-8">
        <LocationSearch />
      </div>

      <div className="mt-7">
        <Cities />
      </div>
    </div>
  );
};

export default SearchParams;
