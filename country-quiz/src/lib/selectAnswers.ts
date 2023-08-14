"use client";

import Country from "@/types/country";

const selectAnswers = (options: Country[], correctAnswer: string) => {
  const randomAnswers: string[] = [];

  while (randomAnswers.length < 3) {
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomAnswer = options[randomIndex].name.common;

    if (
      !randomAnswers.includes(randomAnswer) &&
      randomAnswer !== correctAnswer
    ) {
      randomAnswers.push(randomAnswer);
    }
  }

  const answers = [...randomAnswers, correctAnswer];

  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }

  return answers;
};

export default selectAnswers;
