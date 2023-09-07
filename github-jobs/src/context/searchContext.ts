"use client";

import React, { createContext, Dispatch, SetStateAction } from "react";
import { QueryObserverResult } from "react-query";

import { JobResult } from "@/types/apiResponse";

const SearchContext = createContext<{
  location: string;
  fullTime: boolean;
  setFullTime: Dispatch<SetStateAction<boolean>>;
  setLocation: Dispatch<SetStateAction<string>>;
}>({
  location: "",
  fullTime: false,
  setFullTime: () => {},
  setLocation: () => {},
});

export default SearchContext;
