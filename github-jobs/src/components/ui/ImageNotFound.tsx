"use client";

import clsx from "clsx";

const ImageNotFound: React.FC<{ inDetails?: boolean }> = ({ inDetails }) => {
  return (
    <div
      className={clsx(
        "flex items-center bg-white95 text-center justify-center rounded-4 g-white95 text-xs text-gray-1 font-medium font-roboto",
        inDetails ? "h-[42px] w-[42px]" : "h-[90px] w-[90px]"
      )}
    >
      not found
    </div>
  );
};

export default ImageNotFound;
