"use client";

import React, { useContext } from "react";
import HighlightCard from "./ui/HighlightCard";
import WindDirection from "./ui/WindDirection";
import HumidityProgressBar from "./ui/HumidityProgressBar";
import WeatherContext from "@/context/weatherContext";

const Unit: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-4xl font-normal">{children}</span>;
};

interface TodayHighlightsProps {}

const TodayHighlights: React.FC<TodayHighlightsProps> = ({}) => {
  const { weatherData, isMetric } = useContext(WeatherContext);
  const windSpeed = Math.round(weatherData?.wind?.speed || 0);
  const windSpeedUnit = isMetric ? "m/s" : "mph";
  return (
    <section className="px-6 lg:flex-1">
      <h1 className="text-2xl font-bold">Today&apos;s Highlights</h1>

      <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 lg:gap-12">
        <HighlightCard>
          <HighlightCard.Title>Wind status</HighlightCard.Title>
          <HighlightCard.Info>
            {windSpeed}
            <Unit>{windSpeedUnit}</Unit>
          </HighlightCard.Info>

          <WindDirection />
        </HighlightCard>

        <HighlightCard>
          <HighlightCard.Title>Humidity</HighlightCard.Title>
          <HighlightCard.Info>
            {weatherData?.main.humidity}
            <Unit>%</Unit>
          </HighlightCard.Info>

          <HumidityProgressBar />
        </HighlightCard>

        <HighlightCard>
          <HighlightCard.Title>Visibility</HighlightCard.Title>
          <HighlightCard.Info>
            {weatherData?.visibility} <Unit>m</Unit>
          </HighlightCard.Info>
        </HighlightCard>

        <HighlightCard>
          <HighlightCard.Title>Air Pressure</HighlightCard.Title>
          <HighlightCard.Info>
            {weatherData?.main.pressure} <Unit>hPa</Unit>
          </HighlightCard.Info>
        </HighlightCard>
      </div>
    </section>
  );
};

export default TodayHighlights;
