import React from "react";

const Skeleton = () => {
  return (
    <div role="status" className="flex flex-col gap-6 animate-pulse">
      <div className="h-7 bg-foreground rounded-full  w-56 "></div>
      <div className="h-12 bg-yellow rounded-xl "></div>
      <div className="h-12 bg-yellow rounded-xl "></div>
      <div className="h-12 bg-yellow rounded-xl "></div>
      <div className="h-12 bg-yellow rounded-xl "></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
