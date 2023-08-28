"use client";

import React from "react";
import DateLabel from "./DateLabel";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import { WeatherData } from "@/types";

interface PropertiesProps {
  children: React.ReactNode;
}

interface DayCardComposition {
  Icon: typeof Icon;
  Label: typeof Label;
}

const Icon: React.FC<PropertiesProps> = ({ children }) => {
  return <div className="mt-2">{children}</div>;
};

const Label: React.FC<PropertiesProps> = ({ children }) => {
  return (
    <div className="flex justify-between items-center w-full mt-8">
      {children}
    </div>
  );
};

const DayCard: React.FC<PropertiesProps> & DayCardComposition = ({
  children,
}) => {
  return (
    <div className="flex flex-col items-center bg-primary py-4 px-5">
      {children}
    </div>
  );
};

DayCard.Icon = Icon;
DayCard.Label = Label;

export default DayCard;
