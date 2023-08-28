"use client";

import React from "react";
import { format } from "date-fns";

interface DateLabelProps {
  daysAfter?: number;
  className?: string;
}

const DateLabel: React.FC<DateLabelProps> = ({ daysAfter = 0, className }) => {
  const date = new Date();
  
  if (daysAfter) {
    date.setDate(date.getDate() + daysAfter);
  }
  
  const formatedDate = format(date, "E, dd MMM");
  
  const label = !daysAfter
    ? `Today . ${formatedDate}`
    : daysAfter === 1
    ? "Tomorrow"
    : formatedDate;

  return <div className={className}>{label}</div>;
};

export default DateLabel;
