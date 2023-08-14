"use client";

import React from "react";

interface AnswersListProps {
  children: React.ReactNode;
}

const AnswersList: React.FC<AnswersListProps> = ({ children }) => {
  return <div className="flex flex-col gap-y-6">{children}</div>;
};

export default AnswersList;
