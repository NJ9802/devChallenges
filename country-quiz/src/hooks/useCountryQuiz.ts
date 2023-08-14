"use client";

import getCountries from "@/lib/getCountries";
import selectAnswers from "@/lib/selectAnswers";
import Country from "@/types/country";
import React, { useEffect, useState } from "react";

let countries: Country[];

const useCountryQuiz = () => {
  const [quiz, setQuiz] = useState<Country | null>(null);
  const [answers, setAnswers] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFlag, setIsFlag] = useState(!!Math.round(Math.random()));

  useEffect(() => {
    const initializeQuiz = async () => {
      try {
        countries = await getCountries();

        setQuiz(countries[0]);
      } catch (error) {
        throw new Error("Looks like something don't goes well");
      }
    };

    initializeQuiz();
  }, []);

  useEffect(() => {
    if (!!quiz) {
      setIsFlag(!!Math.round(Math.random()));
      setAnswers(selectAnswers(countries, quiz.name.common));

      setIsLoading(false);
    }
  }, [quiz]);

  return { quiz, isFlag, answers, isLoading, setQuiz, countries };
};

export default useCountryQuiz;
