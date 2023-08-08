import { Quote } from "@/types";
import { Fetcher } from "swr";

const getAuthorQuotes: Fetcher<Quote, string> = (...args) =>
  fetch(...args).then((res) => res.json());

export default getAuthorQuotes;
