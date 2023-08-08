"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import QuoteContainer from "./ui/QuoteContainer";
import getAuthorQuotes from "@/lib/getAuthorQuotes";
import createQueryString from "@/lib/createQueryString";

function AuthorQuotes() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");

  const { data, isLoading, error } = useSWR(
    `https://quote-garden.onrender.com/api/v3/quotes?${createQueryString(
      "author",
      name!
    )}`,
    getAuthorQuotes
  );

  if (error) return <div>Failed to Load</div>;

  return (
    <section className="flex flex-col mt-3 mb-36 md:gap-y-36 pl-8 gap-24 lg:pl-[309px]">
      <h2 className="text-2xl md:text-4xl px-7 font-bold">{name}</h2>

      {isLoading ? (
        <>
          <QuoteContainer isValidating={true} quoteText="An Greate Quote" />
          <QuoteContainer isValidating={true} quoteText="An Greate Quote" />
          <QuoteContainer isValidating={true} quoteText="An Greate Quote" />
        </>
      ) : (
        data?.data.map((quote) => (
          <QuoteContainer
            key={quote._id}
            isValidating={isLoading}
            quoteText={quote.quoteText}
          />
        ))
      )}
    </section>
  );
}

export default AuthorQuotes;
