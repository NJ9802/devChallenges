import clsx from "clsx";
import React from "react";

interface SearchParamsProps {
  children: React.ReactNode;
  title: string;
  active: boolean;
  onClick?: () => void;
}

const SearchParams: React.FC<SearchParamsProps> = ({
  title,
  children,
  active,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        `
        flex
        flex-col
        py-3
        px-[26px]
        rounded-2xl
        cursor-pointer
        md:flex-1
        md:px-8
        `,
        active && "md:border md:border-[#333]"
      )}
    >
      <span className="uppercase text-[9px] font-extrabold">{title}</span>
      {children}
    </div>
  );
};

export default SearchParams;
