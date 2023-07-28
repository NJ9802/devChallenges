"use client";

import clsx from "clsx";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "outline" | "text";
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "danger";
  focus?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  size = "md",
  color = "default",
  focus = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        `
        flex
        items-center
        gap-2
        w-fit
        rounded-md
        text-sm
        font-notoSansJP
        font-medium
        flex-shrink-0
        transition
        `,
        variant === "outline"
          ? `${
              focus ? "bg-[#2962FF1A]/10" : "bg-transparent"
            } border text-[#3D5AFE] border-[#3D5AFE] hover:bg-[#2962FF1A]/10 focus:bg-[#2962FF1A]/10 focus:outline-none`
          : variant === "text"
          ? disabled
            ? "bg-transparent text-[#9E9E9E]"
            : `${
                focus ? "bg-[#2962FF1A]/10" : "bg-transparent"
              } text-[#3D5AFE] hover:bg-[#2962FF1A]/10 focus:bg-[#2962FF1A]/10 focus:outline-none`
          : `
          ${
            disabled
              ? "bg-[#E0E0E0] text-[#9E9E9E]"
              : `
            ${
              color === "default" &&
              `${focus ? "bg-[#AEAEAE]" : "bg-[#E0E0E0]"} text-[#3F3F3F] ${
                !disableShadow && "shadow-[0_2px_3px_0_rgb(51,51,51,0.2)]"
              } hover:bg-[#AEAEAE] focus:bg-[#AEAEAE] focus:outline-none`
            }
          ${
            color === "primary" &&
            `${focus ? "bg-[#0039CB]" : "bg-[#2962FF]"} text-[#fff] ${
              !disableShadow && "shadow-[0_2px_3px_0_rgb(41,98,255,0.2)]"
            } hover:bg-[#0039CB] focus:bg-[#0039CB] focus:outline-none`
          }
          ${
            color === "secondary" &&
            `${focus ? "bg-[#1C313A]" : "bg-[#455A64]"} text-[#fff] ${
              !disableShadow && "shadow-[0_2px_3px_0_rgb(69,90,100,0.2)]"
            } hover:bg-[#1C313A] focus:bg-[#1C313A] focus:outline-none`
          }
          ${
            color === "danger" &&
            `${focus ? "bg-[#9A0007]" : "bg-[#D32F2F]"} text-[#fff] ${
              !disableShadow && "shadow-[0_2px_3px_0_rgb(211,47,47,0.2)]"
            } hover:bg-[#9A0007] focus:bg-[#9A0007] focus:outline-none`
          }
          `
          }
          `,
        size === "sm" && "h-8 py-[6px] px-3",
        size === "md" && "h-9 py-2 px-4",
        size === "lg" && "h-[42px] py-[11px] px-[22px]"
      )}
    >
      {startIcon && (
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "16px" }}
        >
          {startIcon}
        </span>
      )}

      {children}

      {endIcon && (
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "16px" }}
        >
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
