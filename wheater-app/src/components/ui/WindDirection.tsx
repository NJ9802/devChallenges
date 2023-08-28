"use client";

import WeatherContext from "@/context/weatherContext";
import React, { useContext } from "react";
import wt from "@tsmx/weather-tools";

const WindDirection: React.FC = () => {
  const { weatherData } = useContext(WeatherContext);

  const modifiedDegrees = weatherData?.wind?.deg! - 45 - 180;

  const direction = wt.degreesToDirection(weatherData?.wind?.deg);

  return (
    <div className="flex items-center gap-2 mt-6">
      <div
        className="flex items-center bg-lightGray p-1 rounded-full"
        style={{ transform: `rotate(${modifiedDegrees}deg)` }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 12 }}>
          near_me
        </span>
      </div>

      <span className="text-sm">{direction}</span>
    </div>
  );
};

export default WindDirection;
