"use client";

import React, { useContext } from "react";
import clsx from "clsx";
import WeatherContext from "@/context/weatherContext";

interface TemperatureProps {
  large?: boolean;
  gray?: boolean;
  value: number;
}

const Temperature: React.FC<TemperatureProps> = ({ large, gray, value }) => {
  const { isMetric } = useContext(WeatherContext);

  const data = Math.round(value || 0);
  const unit = isMetric ? "℃" : "℉"

  return (
    <h1 className={clsx(large && "text-[144px]", gray && "text-grayText")}>
      {data}
      <span className={clsx(large && "text-5xl text-grayText")}>{unit}</span>
    </h1>
  );
};

export default Temperature;
