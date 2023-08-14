"use client";

import React from "react";
import useStatus from "@/hooks/useStatus";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface AnswerProps {
  onClick: () => void;
  answer: string;
  correctAnswer: string;
  selectedAnswer: string | null;
  label: string;
}

const Answer: React.FC<AnswerProps> = ({
  onClick,
  answer,
  correctAnswer,
  selectedAnswer,
  label,
}) => {
  const status = useStatus(answer, correctAnswer, selectedAnswer);

  return (
    <button
      className={twMerge(
        clsx(
          `flex justify-between items-center md:text-lg text-lightBlue w-full py-3 px-5 border border-lightBlue rounded-xl
           transition outline-darkBlue`,

          !selectedAnswer
            ? "hover:bg-yellow hover:text-yellow-foreground hover:border-yellow"
            : "cursor-default",
          status === "success" &&
            "bg-success border-success text-success-foreground",
          status === "error" && "bg-error border-error text-error-foreground"
        )
      )}
      onClick={onClick}
      disabled={!!selectedAnswer}
    >
      <div className="flex items-center gap-x-4 md:gap-x-12">
        <span className="text-lg md:text-2xl">{label}</span>
        <p className="text-start">{answer}</p>
      </div>

      {!!selectedAnswer &&
        (status === "success" ? (
          <span className="material-symbols-outlined">check_circle</span>
        ) : status === "error" ? (
          <span className="material-symbols-outlined">cancel</span>
        ) : null)}
    </button>
  );
};

export default Answer;
