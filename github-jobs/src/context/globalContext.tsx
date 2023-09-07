"use client";

import React, { createContext, useState } from "react";

export const GlobalContext = createContext<{
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
}>({ page: 0, setPage: () => {}, query: "", setQuery: () => {} });

const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ page, setPage, query, setQuery }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
