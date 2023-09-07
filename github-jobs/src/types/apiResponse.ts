interface SearchMetadata {
  id: string;
  status: string;
  json_endpoint: string;
  created_at: string;
  processed_at: string;
  google_jobs_url: string;
  raw_html_file: string;
  total_time_taken: number;
}

interface SearchParameters {
  q: string;
  engine: string;
  google_domain: string;
}

interface JobHighlight {
  title: string;
  items: string[];
}

interface RelatedLink {
  link: string;
  text: string;
}

interface DetectedExtensions {
  posted_at: string;
  schedule_type: string;
  salary?: string;
}

export interface JobResult {
  title: string;
  company_name: string;
  location: string;
  via: string;
  description: string;
  job_highlights: JobHighlight[];
  related_links: RelatedLink[];
  extensions: string[];
  thumbnail?: string;
  detected_extensions: DetectedExtensions;
  job_id: string;
}

interface ChipOption {
  text: string;
  value?: string;
}

interface Chip {
  type: string;
  param: string;
  options: ChipOption[];
}

export interface ApiResponse {
  search_metadata: SearchMetadata;
  search_parameters: SearchParameters;
  jobs_results: JobResult[];
  chips: Chip[];
}
