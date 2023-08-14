"use client";

import Country from "@/types/country";

const getCountries = async (): Promise<Country[]> => {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags"
  );

  const allCountries = await response.json();
  const startIndex = Math.round(Math.random() * 240);
  return allCountries.slice(startIndex, startIndex + 10);
};

export default getCountries;
