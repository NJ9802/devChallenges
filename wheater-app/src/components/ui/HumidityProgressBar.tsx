"use client";

import WeatherContext from "@/context/weatherContext";
import React, { useContext } from "react";

interface HumidityProgressBarProps {}

const HumidityProgressBar: React.FC<HumidityProgressBarProps> = ({}) => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <div className="mt-4 w-full">
      <div className="flex items-center justify-between text-xs font-bold w-full">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>

      <div className="w-full bg-foreground rounded-full h-2 mt-1">
        <div
          className="bg-accent h-2 rounded-full"
          style={{ width: `${weatherData?.main.humidity}%` }}
        ></div>
      </div>
      <div className="flex justify-end text-xs mt-1">%</div>
    </div>
  );
};

export default HumidityProgressBar;
