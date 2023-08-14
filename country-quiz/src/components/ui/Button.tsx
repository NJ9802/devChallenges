"use client";

import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "rounded-xl transition w-full md:w-fit outline-darkBlue",
  {
    variants: {
      buttonType: {
        primary:
          "bg-yellow text-yellow-foreground py-4 px-9 hover:bg-darkYellow",
        outline:
          "border-2 border-darkBlue text-darkBlue py-[18px] px-14 hover:bg-light",
      },
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({ children, onClick, buttonType }) => {
  return (
    <button className={buttonVariants({ buttonType })} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
