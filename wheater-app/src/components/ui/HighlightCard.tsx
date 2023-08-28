"use client";

import React from "react";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h6>{children}</h6>;
};

const Info: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 className="text-6xl font-bold mt-3">{children}</h2>;
};

interface HighlightCardComposition {
  Title: typeof Title;
  Info: typeof Info;
}

interface HighlightCardProps {
  children: React.ReactNode;
}

const HighlightCard: React.FC<HighlightCardProps> &
  HighlightCardComposition = ({ children }) => {
  return (
    <div className="bg-primary pt-5 pb-8 px-12">
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
};

HighlightCard.Title = Title;
HighlightCard.Info = Info;

export default HighlightCard;
