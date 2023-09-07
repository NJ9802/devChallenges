import { Location, Position } from "@/types";
import { JobResult } from "@/types/apiResponse";

export const getlocationName = async (position: Position) => {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=a2fc807affee08686e5d7d6d27d5de90`
  );

  const data: Location[] = await response.json();
  const locationName = data[0].name;

  return locationName;
};

export const fetchJobs = async ({
  query,
  location,
  page,
}: {
  query: string;
  location: string;
  page: number;
}) => {
  let params = new URLSearchParams();

  if (location) {
    params.append("location", location);
  }

  if (query) {
    params.append("q", query);
  }

  params.append("page", page.toString());

  const response = await fetch(`/api/jobs?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const getJobDetails = async ({ jobId }: { jobId: string }) => {
  const params = new URLSearchParams();

  params.append("jobId", jobId);

  const response = await fetch(`/api/jobs/jobDetails?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const filterJobs = ({
  fullTime,
  jobs,
}: {
  fullTime: boolean;
  jobs: JobResult[];
}) => {
  if (fullTime) {
    return jobs.filter(
      (job) => job.detected_extensions.schedule_type === "Full-time"
    );
  } else {
    return jobs;
  }
};
