"use client";

import MenuContext from "@/context/menuContext";
import WeatherContext from "@/context/weatherContext";
import { setCurrentLocation } from "@/lib";
import React, { useContext } from "react";

interface PrincipalHeaderProps {}

const PrincipalHeader: React.FC<PrincipalHeaderProps> = ({}) => {
  const { setIsOpen } = useContext(MenuContext);
  const {
    setWeatherData,
    isMetric,
    setNextDaysWeatherData,
    locationRef,
  } = useContext(WeatherContext);
  return (
    <div className="flex items-center justify-between py-4 px-3 lg:py-10 lg:px-11">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] py-3 px-4 hover:bg-gray-2 transition"
      >
        Search for places
      </button>
      <button
        onClick={() => {
          setCurrentLocation({
            locationRef,
            setWeatherData,
            isMetric,
            setNextDaysWeatherData,
          });
        }}
        className="flex items-center bg-gray drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-full p-2 hover:bg-gray-2 transition"
      >
        <span className="material-symbols-outlined">my_location</span>
      </button>
    </div>
  );
};

export default PrincipalHeader;
