"use client";

import getRandomQuote from "@/lib/getRandomQuote";
import React from "react";
import useSWR from "swr";
import Skeleton from "./ui/Skeleton";
import Spinner from "./ui/Spinner";
import QuoteContainer from "./ui/QuoteContainer";
import Link from "next/link";
import createQueryString from "@/lib/createQueryString";

const Home = () => {
  const { data, error, isLoading, isValidating } = useSWR(
    "https://quote-garden.onrender.com/api/v3/quotes/random",
    getRandomQuote,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) return <div>failed to load</div>;

  if (isLoading)
    return (
      <div className="flex flex-col justify-center h-full w-full">
        <div className="mx-auto">
          <Spinner />
        </div>
      </div>
    );

  const { quoteText, quoteAuthor, quoteGenre } = data!.data[0];

  return (
    <div className="flex flex-col justify-center h-full w-full">
      <section className="flex flex-col pl-8 gap-8 lg:pl-[309px] lg:gap-y-24">
        <QuoteContainer isValidating={isValidating} quoteText={quoteText} />

        <Link
          href={`/author?${createQueryString("name", quoteAuthor)}`}
          className="flex justify-between items-center ml-6 max-w-xs lg:ml-20 md:max-w-2xl
          rounded-md py-12 px-7 group transition-colors
          cursor-pointer hover:bg-gray-2"
        >
          <div>
            {isValidating ? (
              <Skeleton size="md" />
            ) : (
              <p
                className="text-xl md:text-2xl text-gray-2 font-bold
            transition-colors group-hover:text-light"
              >
                {quoteAuthor}
              </p>
            )}
            {isValidating ? (
              <Skeleton size="sm" />
            ) : (
              <span className="text-sm text-gray-1">{quoteGenre}</span>
            )}
          </div>
          <span className="material-symbols-outlined text-white transition-colors group-hover:text-light">
            arrow_right_alt
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Home;
