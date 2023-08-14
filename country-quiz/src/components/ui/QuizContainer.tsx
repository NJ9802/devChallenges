"use client";

import clsx from "clsx";
import Image from "next/image";
import React from "react";

type QuizContainerProps = {
  children: React.ReactNode;
  isOver: boolean;
  selectedAnswer: string | null;
};

const QuizContainer: React.FC<QuizContainerProps> = ({
  children,
  isOver,
  selectedAnswer,
}) => {
  return (
    <section className="flex flex-col w-full md:w-[464px] gap-y-2">
      <h1 className="text-light text-2xl md:text-4xl font-bold uppercase">
        Country Quiz
      </h1>
      <div
        className={clsx(
          `relative flex flex-col gap-y-4 md:gap-y-8 bg-white rounded-3xl px-8`,
          !!selectedAnswer ? "pb-8 pt-16" : "py-16"
        )}
      >
        {children}
        {!isOver && (
          <Image
            className="absolute -top-[72px] right-1"
            alt="image"
            src="/assets/undraw_adventure_4hum 1.svg"
            height={116}
            width={162}
          />
        )}
      </div>
    </section>
  );
};

export default QuizContainer;
