"use client";

import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import clsx from "clsx";

import { GlobalContext } from "@/context/globalContext";
import SearchContext from "@/context/searchContext";
import { JobResult } from "@/types/apiResponse";
import { fetchJobs, filterJobs } from "@/lib";
import uselocation from "@/hooks/useLocation";

import ImageNotFound from "./ui/ImageNotFound";
import SearchParams from "./ui/SearchParams";
import SearchBar from "./ui/SearchBar";
import JobsList from "./ui/JobsList";
import Spinner from "./ui/Spinner";
import Icon from "./ui/Icon";
import Job from "./ui/Job";

const Home = () => {
  const [location, setLocation] = uselocation();
  const [fullTime, setFullTime] = useState<boolean>(false);
  const { page, setPage, query } = useContext(GlobalContext);

  const { data, error, isFetching } = useQuery<JobResult[], Error>({
    queryKey: ["jobs", page, query],
    queryFn: async () => await fetchJobs({ query, location, page }),
    enabled: location.length !== 0,
  });

  let jobsList: JobResult[] = [];
  if (data) {
    jobsList = filterJobs({ fullTime, jobs: data });
  }

  return (
    <SearchContext.Provider
      value={{
        location,
        setLocation,
        fullTime,
        setFullTime,
      }}
    >
      <SearchBar />

      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="mt-7 lg:min-w-[379px]">
          <SearchParams />
        </div>

        <div className="mt-6 flex-1">
          {isFetching ? (
            <div className="flex  h-full items-center justify-center">
              <Spinner />
            </div>
          ) : error ? (
            <div>{"An error has occurred: " + error.message}</div>
          ) : (
            <>
              <JobsList>
                {jobsList?.map((job) => (
                  <Job
                    href={`/job-detail/${job.job_id.slice(0, 100)}`}
                    key={job.job_id}
                  >
                    {job.thumbnail ? (
                      <Job.Logo src={job.thumbnail} />
                    ) : (
                      <ImageNotFound />
                    )}
                    <Job.JobDescriptionWrapper>
                      <Job.Name>{job.company_name}</Job.Name>

                      <Job.Role>{job.title}</Job.Role>

                      <Job.ResponsiveWrapper>
                        {job.detected_extensions.schedule_type ===
                          "Full-time" && <Job.FullTimeTag />}

                        <Job.DateLocationWrapper>
                          <Job.Location>{job.location}</Job.Location>

                          {!!job.detected_extensions.posted_at && (
                            <Job.TimeSincePublication>
                              {job.detected_extensions.posted_at}
                            </Job.TimeSincePublication>
                          )}
                        </Job.DateLocationWrapper>
                      </Job.ResponsiveWrapper>
                    </Job.JobDescriptionWrapper>
                  </Job>
                ))}
              </JobsList>

              {jobsList.length !== 0 && !isFetching ? (
                <div className="mt-8 hidden lg:flex lg:justify-end">
                  <Pagination page={page} setPage={setPage} />
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </SearchContext.Provider>
  );
};

const PageButton: React.FC<{
  children: React.ReactNode;
  active?: boolean;
  onPageChange: () => void;
}> = ({ onPageChange, children, active }) => {
  return (
    <button
      onClick={onPageChange}
      className={clsx(
        "pageButton",
        active
          ? "text-white bg-accent border-accent hover:text-white"
          : "text-gray-2"
      )}
    >
      {children}
    </button>
  );
};

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  return (
    <nav aria-label="Page navigation">
      <ul
        className={clsx(
          "flex items-center gap-3 h-10 text-base",
          page === 20 && "mr-12"
        )}
      >
        {!(page === 0) && (
          <PageButton onPageChange={() => setPage((prev) => prev - 5)}>
            <span className="sr-only">Previous</span>
            <Icon>keyboard_arrow_left</Icon>
          </PageButton>
        )}

        {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => (
          <li key={number}>
            <PageButton
              active={page / 5 + 1 === number}
              onPageChange={() => setPage((number - 1) * 5)}
            >
              {number}
            </PageButton>
          </li>
        ))}

        {!(page === 20) && (
          <PageButton onPageChange={() => setPage((prev) => prev + 5)}>
            <span className="sr-only">Next</span>
            <Icon>keyboard_arrow_right</Icon>
          </PageButton>
        )}
      </ul>
    </nav>
  );
};

export default Home;
