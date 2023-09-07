"use client";

import React from "react";
import clsx from "clsx";

interface IconProps extends HTMLSpanElement {}

const Icon: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={clsx("material-symbols-outlined", className && className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Icon;
