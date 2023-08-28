"use client";

import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface WeatherIconProps {
  iconId: string;
  small?: boolean;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconId, small }) => {
  const weatherConditions: { [key: string]: string[] } = {
    "01d": ["/assets/Clear.png", "Clear sky"],
    "02d": ["/assets/LightCloud.png", "Few clouds"],
    "03d": ["/assets/HeavyCloud.png", "Scattered clouds"],
    "04d": ["/assets/HeavyCloud.png", "Broken clouds"],
    "09d": ["/assets/Shower.png", "Shower rain"],
    "10d": ["/assets/HeavyRain.png", "Rain"],
    "11d": ["/assets/Thunderstorm.png", "Thunderstorm"],
    "13d": ["/assets/Snow.png", "Snow"],
    "01n": ["/assets/Clear.png", "Clear sky"],
    "02n": ["/assets/LightCloud.png", "Few clouds"],
    "03n": ["/assets/HeavyCloud.png", "Scattered clouds"],
    "04n": ["/assets/HeavyCloud.png", "Broken clouds"],
    "09n": ["/assets/Shower.png", "Shower rain"],
    "10n": ["/assets/HeavyRain.png", "Rain"],
    "11n": ["/assets/Thunderstorm.png", "Thunderstorm"],
    "13n": ["/assets/Snow.png", "Snow"],
  };

  return (
    <Image
      className={clsx(
        small
          ? "h-[62px] w-[62px]"
          : "h-[174px] w-[174px] lg:h-[234px] lg:w-[234px]"
      )}
      src={weatherConditions[iconId][0]}
      alt={weatherConditions[iconId][1]}
      width={500}
      height={500}
    />
  );
};

export default WeatherIcon;
