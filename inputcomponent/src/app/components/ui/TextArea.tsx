"use client";

import React from "react";

interface TextAreaProps {
  row?: number;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder, row, ...props }) => {
  return (
    <textarea
      className="border border-gray-3 hover:border-gray-1 focus:border-blue focus:outline-none
      rounded-lg px-3 py-[18px] resize-none"
      rows={row}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
