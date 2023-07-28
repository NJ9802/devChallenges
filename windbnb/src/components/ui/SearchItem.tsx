import React from "react";
import clsx from "clsx";

interface SearchItemProps {
  children: React.ReactNode;
  textGray?: boolean;
}

const SearchItem: React.FC<SearchItemProps> = ({ children, textGray }) => {
  return (
    <div className={clsx("px-4 py-[19px]", textGray && "text-lightGray")}>
      {children}
    </div>
  );
};

export default SearchItem;
