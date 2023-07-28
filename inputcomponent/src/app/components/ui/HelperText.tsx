import clsx from "clsx";
import React from "react";

interface HelperTextProps {
  helperText: string;
  error?: boolean;
}

const HelperText: React.FC<HelperTextProps> = ({ helperText, error }) => {
  return (
    <span
      className={clsx(
        "text-[10px] font-sans",
        error ? "text-red" : "text-gray-3"
      )}
    >
      {helperText}
    </span>
  );
};

export default HelperText;
