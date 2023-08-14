"use client";

import Country from "@/types/country";

export const getNextImageUrl = (countries: Country[], quizIndex: number) =>
  quizIndex < countries.length - 1 ? countries[quizIndex + 1].flags.svg : "";
