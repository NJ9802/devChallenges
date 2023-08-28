"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import PrincipalHeader from "./ui/PrincipalHeader";
import WeatherIcon from "./ui/WeatherIcon";
import Temperature from "./ui/Temperature";
import DateLabel from "./ui/DateLabel";
import Menu from "./ui/Menu";
import MenuContext from "@/context/menuContext";
import WeatherContext from "@/context/weatherContext";

const CurrentLocation = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className="flex items-center gap-1 text-lightGray">
      <span className="material-symbols-outlined">location_on</span>
      <span>{weatherData?.name}</span>
    </div>
  );
};

const PrincipalView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { weatherData } = useContext(WeatherContext);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      <section className="relative lg:min-w-[459px] h-screen bg-primary overflow-hidden z-0">
        <Image
          className="absolute -left-32 top-16 lg:top-28 opacity-10 min-w-[160%] -z-10"
          src="/assets/Cloud-background.png"
          alt="cloudy background"
          width={1000}
          height={1000}
        />

        <PrincipalHeader />
        <div className="centeredContainer mt-20 lg:mt-[109px]">
          <WeatherIcon iconId={weatherData?.weather[0].icon!} />
        </div>

        <div className="centeredContainer mt-10">
          <Temperature value={weatherData?.main.temp!} large />
        </div>

        <div className="centeredContainer mt-6">
          <h1 className="text-4xl text-grayText">
            {weatherData?.weather[0].main}
          </h1>
        </div>

        <div className="centeredContainer mt-12">
          <DateLabel className="text-lightGray" />
        </div>

        <div className="centeredContainer mt-8">
          <CurrentLocation />
        </div>

        <Menu />
      </section>
    </MenuContext.Provider>
  );
};

export default PrincipalView;
