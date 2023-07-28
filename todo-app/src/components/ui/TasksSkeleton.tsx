"use client";
import React from "react";
import { Skeleton } from "./skeleton";

const TasksSkeleton = () => {
  return (
    <div>
      <div className="flex items center gap-6">
        <Skeleton className="h-14 w-full rounded-xl" />
        <Skeleton className="h-14 w-28 rounded-xl" />
      </div>

      <div className="flex flex-col gap-7 mt-8">
        <Skeleton className="h-7 w-48 rounded-xl" />
        <Skeleton className="h-7 w-48 rounded-xl" />
        <Skeleton className="h-7 w-48 rounded-xl" />
      </div>
    </div>
  );
};

export default TasksSkeleton;
