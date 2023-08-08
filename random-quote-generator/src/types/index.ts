export interface Quote {
  statusCode: number;
  message: string;
  pagination: {
    currentPage: number;
    nextPage: number | null;
    totalPages: number;
  };
  totalQuotes: number;
  data: Array<{
    _id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
    __v: number;
  }>;
}
