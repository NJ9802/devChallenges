"use client";

import Country from "@/types/country";
import Image from "next/image";
import React from "react";

interface QuestionContainerProps {
  quiz: Country;
  isFlag: boolean;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({
  isFlag,
  quiz,
}) => {
  return (
    <div>
      {isFlag ? (
        <div className="flex flex-col gap-7">
          <Image
            className="shadow-[0_4px_24px_0px_rgba(0,0,0,0.1)] max-h-[54px] max-w-[84px]"
            src={quiz.flags.svg}
            alt={quiz.flags.alt}
            width={84}
            height={54}
            priority
          />
          <h1 className="questionHeader">
            Which country does this flag belong to?
          </h1>
        </div>
      ) : (
        <h1 className="questionHeader">{`${quiz.capital[0]} is the capital of`}</h1>
      )}
    </div>
  );
};

export default QuestionContainer;
