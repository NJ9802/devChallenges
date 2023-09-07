export interface JobDetails {
  search_metadata: SearchMetadata;
  search_parameters: SearchParameters;
  salaries: Salary[];
  apply_options: ApplyOption[];
  ratings: Rating[];
  similar_jobs: SimilarJob[];
}

interface SearchMetadata {
  id: string;
  status: string;
  json_endpoint: string;
  created_at: string;
  processed_at: string;
  google_jobs_listing_url: string;
  raw_html_file: string;
  prettify_html_file: string;
  total_time_taken: number;
}

interface SearchParameters {
  q: string;
  engine: string;
}

interface Salary {
  job_title: string;
  link: string;
  source: string;
  salary_from: number;
  salary_to: number;
  salary_currency: string;
  salary_periodicity: string;
  salary_period: string;
  thumbnail: string;
  based_on: string;
}

export interface ApplyOption {
  title: string;
  link: string;
}

interface Rating {
  link: string;
  source: string;
  rating: number;
  reviews: number;
}

interface SimilarJob {
  company_name: string;
  title: string;
  type: string;
  extensions: string[];
  date: string;
  platform: string;
  link: string;
  serpapi_link: string;
  logo?: string; // Some jobs do not have a logo
}
