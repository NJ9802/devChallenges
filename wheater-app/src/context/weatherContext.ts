import { NextDaysWeatherData, WeatherData } from "@/types";
import React, { createContext } from "react";

const WeatherContext = createContext<{
  weatherData: WeatherData | null;
  nextDaysWeatherData: NextDaysWeatherData | null;
  setNextDaysWeatherData: React.Dispatch<
    React.SetStateAction<NextDaysWeatherData | null>
  >;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
  isMetric: boolean;
  locationRef: { current: { lat: number; lon: number } };
}>({
  weatherData: null,
  nextDaysWeatherData: null,
  setWeatherData: () => {},
  setNextDaysWeatherData: () => {},
  isMetric: true,
  locationRef: { current: { lat: 0, lon: 0 } },
});

export default WeatherContext;
