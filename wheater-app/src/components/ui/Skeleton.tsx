import React from "react";

const Skeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center animate-pulse">
      <div
        role="status"
        className="flex flex-col items-center p-3 lg:py-10 lg:px-11 lg:min-w-[459px] h-screen bg-primary"
      >
        <div className="flex items-center justify-between w-full">
          <div className="h-10 bg-gray w-40"></div>
          <div className="h-10 w-10 bg-gray rounded-full"></div>
        </div>
        <div className="h-40 w-40 lg:h-[234px] lg:w-[234px] bg-gray rounded-xl mt-24 lg:mt-[109px]"></div>
        <div className="h-20 w-44 bg-gray rounded-xl mt-20"></div>
        <div className="h-10 w-32 bg-gray rounded-lg mt-10"></div>

        <div className="h-5 bg-gray rounded-full w-48 mt-14"></div>
        <div className="h-5 bg-gray rounded-full w-32 mt-8"></div>
      </div>

      <div className="flex flex-col items-center w-full lg:px-[154px] mt-36">
        <div className="w-full flex justify-center py-14 px-14">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-5 lg:gap-6">
            <div className="h-44 bg-gray w-32"></div>
            <div className="h-44 bg-gray w-32"></div>
            <div className="h-44 bg-gray w-32"></div>
            <div className="h-44 bg-gray w-32"></div>
            <div className="h-44 bg-gray w-32"></div>
          </div>
        </div>

        <div className="px-6 w-full lg:w-[750px] lg:flex-1">
          <h1 className="text-2xl font-bold ml-16">Today&apos;s Highlights</h1>

          <div className="grid mx-auto grid-cols-1 max-w-xl gap-8 mt-8 lg:grid-cols-2 lg:gap-12">
            <div className="h-44 bg-gray w-full"></div>
            <div className="h-44 bg-gray w-full"></div>
            <div className="h-44 bg-gray w-full"></div>
            <div className="h-44 bg-gray w-full"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Skeleton;
