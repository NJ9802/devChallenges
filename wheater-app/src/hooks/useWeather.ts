import { getWeather, setCurrentLocation } from "@/lib";
import { NextDaysWeatherData, WeatherData } from "@/types";
import React, { useEffect, useRef, useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [nextDaysWeatherData, setNextDaysWeatherData] =
    useState<NextDaysWeatherData | null>(null);
  const [isMetric, setIsMetric] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const locationRef = useRef({ lat: 0, lon: 0 });

  useEffect(() => {
    setCurrentLocation({
      locationRef,
      isMetric: true,
      setWeatherData,
      setNextDaysWeatherData,
    });
  }, []);

  useEffect(() => {
    if (weatherData && nextDaysWeatherData) {
      setIsLoading(false);
    }
  }, [weatherData, nextDaysWeatherData]);

  return {
    locationRef,
    isMetric,
    setIsMetric,
    weatherData,
    setWeatherData,
    nextDaysWeatherData,
    setNextDaysWeatherData,
    isLoading,
  };
};

export default useWeather;
