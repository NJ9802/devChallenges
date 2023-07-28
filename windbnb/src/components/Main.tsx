"use client";

import React, { useEffect, useState } from "react";
import stays from "@/data/stays";
import Card from "./ui/Card";

interface MainProps {
  city: string;
}

const Main: React.FC<MainProps> = ({ city }) => {
  const [filteredStays, setFilteredStays] = useState(stays);
  const [staysNumber, setStaysNumber] = useState(filteredStays.length);

  useEffect(() => {
    if (!!city) {
      const newFilteredStays = stays.filter((stay) => stay.city === city);
      setFilteredStays(newFilteredStays);
      setStaysNumber(newFilteredStays.length);
    }
  }, [city]);

  return (
    <div className="relative mb-14 px-[13px] md:px-24">
      <div className="flex pb-6 items-center justify-between">
        <h1 className="text-lg font-bold md:text-2xl">Stays in Finland</h1>
        <span className="text-gray-3 text-sm font-medium">{`${
          staysNumber > 12 ? "12+" : staysNumber
        } stays`}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-[49px]">
        {filteredStays.map((stay) => (
          <Card key={stay.title} stay={stay} />
        ))}
      </div>
    </div>
  );
};

export default Main;
