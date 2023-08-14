"use client";

import React, { useState } from "react";
import useCountryQuiz from "@/hooks/useCountryQuiz";
import Image from "next/image";

import QuizContainer from "./ui/QuizContainer";
import Skeleton from "./ui/Skeleton";
import QuestionContainer from "./ui/QuestionContainer";
import AnswersList from "./ui/AnswersList";
import Answer from "./ui/Answer";
import Button from "./ui/Button";
import GameOver from "./ui/GameOver";

import { getNextImageUrl } from "@/lib/utils";

import "material-symbols/outlined.css";

let quizIndex = 0;
let score = 0;
const labels = ["A", "B", "C", "D"];

const Home = () => {
  const { quiz, isFlag, setQuiz, answers, isLoading, countries } =
    useCountryQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isOver, setIsOver] = useState(false);

  const nextImageUrl = countries ? getNextImageUrl(countries, quizIndex) : "";

  const handleResetGame = () => {
    quizIndex = 0;
    score = 0;
    setIsOver(false);
    setQuiz(countries[quizIndex]);
  };

  const handleNextMove = () => {
    quizIndex++;
    if (
      selectedAnswer !== quiz!.name.common ||
      quizIndex === countries.length
    ) {
      setIsOver(true);
    } else {
      while (!countries[quizIndex].capital[0] && quizIndex < countries.length) {
        quizIndex++;
      }
      setQuiz(countries[quizIndex]);
    }

    setSelectedAnswer(null);
  };

  return (
    <main className="flex justify-center items-center h-full p-4">
      <QuizContainer isOver={isOver} selectedAnswer={selectedAnswer}>
        {isOver ? (
          <GameOver score={score} onResetGame={handleResetGame} />
        ) : isLoading ? (
          <Skeleton />
        ) : !!quiz ? (
          <>
            <QuestionContainer isFlag={isFlag} quiz={quiz} />

            {/* Component for preload next flag url */}
            <Image src={nextImageUrl} width={0} height={0} alt="preload" />

            <AnswersList>
              {!!answers ? (
                answers.map((answer, i) => (
                  <Answer
                    label={labels[i]}
                    key={answer}
                    answer={answer}
                    selectedAnswer={selectedAnswer}
                    correctAnswer={quiz.name.common}
                    onClick={() => {
                      if (answer === quiz.name.common) {
                        score = score + 1;
                      }
                      setSelectedAnswer(answer);
                    }}
                  />
                ))
              ) : (
                <div>Failed loading Answers</div>
              )}
            </AnswersList>

            {!!selectedAnswer && (
              <div className="flex justify-end">
                <Button buttonType="primary" onClick={handleNextMove}>
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <div>Failed loading Quiz</div>
        )}
      </QuizContainer>
    </main>
  );
};

export default Home;
