"use client";

import MenuContext from "@/context/menuContext";
import WeatherContext from "@/context/weatherContext";
import { getLocations, getNextDaysWeather, getWeather } from "@/lib";
import { Location } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import React, { useContext, useState } from "react";

const Spinner: React.FC = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-6 h-6 text-gray-2 animate-spin fill-accent"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const SearchBar: React.FC<{
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
}> = ({ setLocations }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setNotFound(false);

    const locations = await getLocations(searchQuery);

    if (locations.length === 0) {
      setNotFound(true);
      setLocations([]);
    } else {
      setLocations(await getLocations(searchQuery));
      setSearchQuery("");
    }
    setIsLoading(false);
  };

  return (
    <>
      <form
        className="flex items-center gap-3 w-full mt-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-1 items-center gap-3 border border-grayText p-3">
          <span className="material-symbols-outlined text-gray-2">search</span>
          <input
            value={searchQuery}
            onChange={(e) => handleChange(e)}
            className="bg-transparent focus:outline-none placeholder:text-gray-2"
            type="text"
            placeholder="search location"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || searchQuery.length === 0}
          className="flex justify-center items-center bg-button py-3 px-5  h-12 w-[86px] disabled:bg-gray"
        >
          {isLoading ? <Spinner /> : "Search"}
        </button>
      </form>

      {notFound && (
        <div className="flex flex-col items-center mt-10">
          <h6 className="text-lg">City name not found</h6>
          <figure>
            <Image
              className="h-72 w-96"
              alt="Not Found"
              src="/assets/2762862.png"
              width={3000}
              height={2000}
            />
            <figcaption className="text-xs text-center">
              <a
                className="text-grayText underline hover:text-accent transition-color duration-500"
                href="https://www.freepik.com/free-vector/error-404-concept-landing-page_5358339.htm#page=2&query=not%20found%20location&position=33&from_view=search&track=ais"
              >
                Image by pikisuperstar
              </a>{" "}
              on Freepik
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
};

const Location: React.FC<{ data: Location }> = ({ data }) => {
  const { setIsOpen } = useContext(MenuContext);
  const { setWeatherData, isMetric, setNextDaysWeatherData, locationRef } =
    useContext(WeatherContext);

  const handleClick = async () => {
    locationRef.current = { lat: data.lat, lon: data.lon };

    setWeatherData(await getWeather(data.lat, data.lon, isMetric));
    setNextDaysWeatherData(
      await getNextDaysWeather(data.lat, data.lon, isMetric)
    );
    setIsOpen(false);
  };

  const label = `${data.name}${data.state ? `, ${data.state}` : ""}, ${
    data.country
  }`;

  return (
    <button
      onClick={handleClick}
      className="flex items-start justify-between py-6 px-3 group 
        border border-transparent hover:border-gray-2 transition"
    >
      {label}
      <span className="hidden group-hover:flex">
        <span className="material-symbols-outlined text-gray-2">
          chevron_right
        </span>
      </span>
    </button>
  );
};

const LocationList: React.FC<{ locations: Location[] }> = ({ locations }) => {
  return (
    <div className="flex flex-col gap-6 mt-9">
      {locations.map((data) => (
        <Location key={data.name + data.lat + data.lon} data={data} />
      ))}
    </div>
  );
};

const Menu: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const [locations, setLocations] = useState<Location[]>([]);

  return (
    <div
      className={clsx(
        "absolute h-full w-full -left-full top-0 bg-primary transition ease-in-out",
        isOpen && "translate-x-full"
      )}
    >
      <div className="p-3">
        <div className="flex justify-end items-center">
          <button onClick={() => setIsOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <SearchBar setLocations={setLocations} />
        <LocationList locations={locations} />
      </div>
    </div>
  );
};

export default Menu;
