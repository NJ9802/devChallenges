"use client";

import React from "react";

export const InputElement: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = ({ disabled, value, ...props }) => {
  return (
    <input
      value={value}
      readOnly={!!value}
      disabled={disabled}
      className="bg-transparent w-full focus:outline-none 
      placeholder:text-gray-3 placeholder:font-sans"
      {...props}
    />
  );
};
