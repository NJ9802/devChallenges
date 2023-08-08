import React from "react";
import Skeleton from "./Skeleton";

interface QuoteContainerProps {
  isValidating: boolean;
  quoteText: string;
}

const QuoteContainer: React.FC<QuoteContainerProps> = ({
  isValidating,
  quoteText,
}) => {
  return (
    <div className="pl-8 md:pl-24 border-l-8 border-l-accent max-w-xs md:max-w-3xl">
      {isValidating ? (
        <Skeleton large />
      ) : (
        <p className="text-xl font-bold md:text-[36px] leading-[120%] md:font-medium">
          {quoteText}
        </p>
      )}
    </div>
  );
};

export default QuoteContainer;
