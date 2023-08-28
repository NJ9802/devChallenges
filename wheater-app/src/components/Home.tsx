"use client";

import React, { useEffect } from "react";
import PrincipalView from "./PrincipalView";
import NextFiveDays from "./NextFiveDays";
import TodayHighlights from "./TodayHighlights";
import Footer from "./Footer";
import CelsiusToggle from "./ui/MetricToggle";
import useWeather from "@/hooks/useWeather";
import WeatherContext from "@/context/weatherContext";
import Skeleton from "./ui/Skeleton";

const Home = () => {
  const {
    isMetric,
    setIsMetric,
    weatherData,
    nextDaysWeatherData,
    setWeatherData,
    setNextDaysWeatherData,
    isLoading,
    locationRef,
  } = useWeather();

  if (isLoading) return <Skeleton />;

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        nextDaysWeatherData,
        setWeatherData,
        setNextDaysWeatherData,
        isMetric,
        locationRef,
      }}
    >
      <main className="flex flex-col lg:flex-row">
        <PrincipalView />

        <div className="flex flex-col items-center w-full lg:px-[154px]">
          <CelsiusToggle isMetric={isMetric} setIsMetric={setIsMetric} />
          <NextFiveDays />

          <TodayHighlights />
          <Footer />
        </div>
      </main>
    </WeatherContext.Provider>
  );
};

export default Home;
