"use client";

import React, { useContext } from "react";
import DayCard from "./ui/DayCard";
import WeatherContext from "@/context/weatherContext";
import DateLabel from "./ui/DateLabel";
import WeatherIcon from "./ui/WeatherIcon";
import Temperature from "./ui/Temperature";
import { getOrganizedNextDaysWeatherData } from "@/lib";

interface NextFiveDaysProps {}

const NextFiveDays: React.FC<NextFiveDaysProps> = ({}) => {
  const { nextDaysWeatherData } = useContext(WeatherContext);

  const dayMeasurements = getOrganizedNextDaysWeatherData(nextDaysWeatherData!);

  return (
    <section className="w-full py-14 px-14">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-5 lg:gap-6">
        {Object.entries(dayMeasurements).map(([date, info], i) => (
          <DayCard key={date}>
            <DateLabel daysAfter={i + 1} />

            <DayCard.Icon>
              <WeatherIcon iconId={info.icon} small />
            </DayCard.Icon>

            <DayCard.Label>
              <Temperature value={Math.max(...info.temps)} />
              <Temperature value={Math.min(...info.temps)} gray />
            </DayCard.Label>
          </DayCard>
        ))}
      </div>
    </section>
  );
};

export default NextFiveDays;
