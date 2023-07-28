"use client";

import React from "react";

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <label
      className="
        block
        text-xs/3
      text-gray-1
        font-ubuntuMono
        font-normal
      "
    >{`<${text} />`}</label>
  );
};

export default Label;
