"use client";

import React from "react";

interface JobsListProps {
  children: React.ReactNode;
}

const JobsList: React.FC<JobsListProps> = ({ children }) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};

export default JobsList;
