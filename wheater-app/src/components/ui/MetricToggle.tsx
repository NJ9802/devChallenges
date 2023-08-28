"use client";

import WeatherContext from "@/context/weatherContext";
import { getNextDaysWeather, getWeather } from "@/lib";
import clsx from "clsx";
import React, { useContext } from "react";

const ToggleButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  active: boolean;
}> = ({ onClick, children, active }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center h-10 w-10 rounded-full font-black transition duration-500 ease-in-out",
        active ? "text-background bg-foreground" : "bg-gray"
      )}
    >
      {children}
    </button>
  );
};

interface MetricToggleProps {
  isMetric: boolean;
  setIsMetric: React.Dispatch<React.SetStateAction<boolean>>;
}

const MetricToggle: React.FC<MetricToggleProps> = ({
  isMetric,
  setIsMetric,
}) => {
  const { setWeatherData, setNextDaysWeatherData, locationRef } =
    useContext(WeatherContext);

  const handleToggle = async (value: boolean) => {
    setWeatherData(
      await getWeather(locationRef.current.lat, locationRef.current.lon, value)
    );

    setNextDaysWeatherData(
      await getNextDaysWeather(
        locationRef.current.lat,
        locationRef.current.lon,
        value
      )
    );
    setIsMetric(value);
  };

  return (
    <div className="hidden w-full lg:flex lg:justify-end gap-3 mt-10">
      <ToggleButton
        onClick={() => {
          handleToggle(true);
        }}
        active={isMetric}
      >
        ℃
      </ToggleButton>
      <ToggleButton onClick={() => handleToggle(false)} active={!isMetric}>
        ℉
      </ToggleButton>
    </div>
  );
};

export default MetricToggle;
