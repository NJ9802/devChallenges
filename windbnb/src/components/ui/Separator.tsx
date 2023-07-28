import clsx from "clsx";
import React from "react";

interface SeparatorProps {
  horizontal?: boolean;
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className, horizontal }) => {
  return (
    <div
      className={clsx(
        `border-[#F2F2F2] ${className}`,
        horizontal ? "border-b min-w-full" : "border-r min-h-full"
      )}
    />
  );
};

export default Separator;
