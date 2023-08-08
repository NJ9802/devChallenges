"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useSWRConfig } from "swr";

const Header = () => {
  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const handleClick = async () => {
    setIsLoading(true);
    await mutate("https://quote-garden.onrender.com/api/v3/quotes/random");
    setIsLoading(false);
  };

  return (
    <div className="flex justify-end px-6 md:px-24 py-8">
      {pathname === "/" ? (
        <button onClick={handleClick} className="button">
          random{" "}
          <span
            className={clsx(
              "material-symbols-outlined",
              isLoading && "animate-spin"
            )}
          >
            autorenew
          </span>
        </button>
      ) : (
        <Link className="button" href="/">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          back
        </Link>
      )}
    </div>
  );
};

export default Header;
