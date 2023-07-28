"use client";

import React from "react";
import { InputElement } from "./InputElement";
import clsx from "clsx";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import MaterialIcon from "./MaterialIcon";
import HelperText from "./HelperText";
import TextArea from "./TextArea";

const inputVariants = cva(
  `flex items-center gap-x-4 px-3 text-gray-1 max-w-[200px] text-sm rounded-lg 
  border border-gray-3 transition hover:border-gray-1`,

  {
    variants: {
      inputSize: {
        md: "py-[18px]",
        sm: "py-[10px]",
      },
    },

    defaultVariants: {
      inputSize: "md",
    },
  }
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  focus?: boolean;
  hover?: boolean;
  fullWidth?: boolean;
  label?: string;
  helperText?: string;
  startIcon?: string;
  endIcon?: string;
  multiline?: boolean;
  row?: number;
}

const Input: React.FC<InputProps> = ({
  helperText,
  focus,
  hover,
  fullWidth,
  startIcon,
  endIcon,
  label,
  error,
  inputSize,
  disabled,
  className,
  multiline,
  row,
  placeholder,
  ...props
}) => {
  return (
    <div className="group">
      <label
        className={clsx(
          "text-xs transition",
          focus && "text-blue",
          error
            ? "text-red group-focus-within:text-red"
            : "group-focus-within:text-blue"
        )}
      >
        {label}
      </label>

      {multiline ? (
        <div>
          <TextArea row={row} placeholder={placeholder} />
        </div>
      ) : (
        <div
          className={twMerge(
            clsx(
              inputVariants({ inputSize, className }),
              focus && "border-blue focus-within:border-blue",
              error
                ? "border-red focus-within:border-red focus-within:hover:border-red"
                : "focus-within:border-blue focus-within:hover:border-blue",
              hover && "border-gray-1 focus-within:border-gray-1",
              fullWidth && "w-full",
              disabled && "border-[#E0E0E0] bg-[#F2F2F2] hover:border-[#E0E0E0]"
            )
          )}
        >
          {!!startIcon && <MaterialIcon icon={startIcon} />}

          <InputElement
            placeholder={placeholder}
            disabled={disabled}
            {...props}
          />

          {!!endIcon && <MaterialIcon icon={endIcon} />}
        </div>
      )}

      {!!helperText && <HelperText helperText={helperText} error={error} />}
    </div>
  );
};

export default Input;
