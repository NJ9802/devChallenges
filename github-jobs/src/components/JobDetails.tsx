"use client";

import React, { useContext } from "react";
import { useQuery, useQueryClient } from "react-query";
import Link from "next/link";

import { GlobalContext } from "@/context/globalContext";
import { JobDetails } from "@/types/jobDetails";
import { JobResult } from "@/types/apiResponse";
import { getJobDetails } from "@/lib";

import ImageNotFound from "./ui/ImageNotFound";
import Spinner from "./ui/Spinner";
import Icon from "./ui/Icon";
import {
  FullTimeTag,
  Location,
  Logo,
  Name,
  Role,
  TimeSincePublication,
} from "./ui/Job";

const Apply: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  href,
}) => {
  return (
    <a
      className="text-white text-xs lg:text-sm text-center bg-accent/80 rounded-[4px] transition
      py-2 lg:py-[14px] hover:bg-accent/95"
      href={href}
    >
      {children}
    </a>
  );
};

const BackLink: React.FC = () => {
  return (
    <Link
      className="flex gap-3 text-accent text-sm hover:text-accent/70 transition"
      href="/"
    >
      <Icon className="rotate-180">trending_flat</Icon> Back to search
    </Link>
  );
};

const HowToApply: React.FC<{ jobId: string }> = ({ jobId }) => {
  const { isLoading, error, data } = useQuery<JobDetails, Error>(
    ["jobDetails", jobId],
    () => getJobDetails({ jobId })
  );

  return (
    <div className="text-sm">
      <span className="uppercase text-gray-3">How to apply</span>
      {isLoading ? (
        <div className="flex h-full mt-4 lg:mt-12 items-center justify-center">
          <Spinner />
        </div>
      ) : error ? (
        <div className="mt-4 lg:mt-12">Could not get apply options</div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-1 mt-3 lg:mt-6">
          {data?.apply_options.map((option) => (
            <Apply key={option.link} href={option.link}>
              {option.title}
            </Apply>
          ))}
        </div>
      )}
    </div>
  );
};

function JobDetails({ jobId }: { jobId: string }) {
  const { page, query } = useContext(GlobalContext);
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<JobResult[]>(["jobs", page, query]);

  if (!data) return <div>Failed to get job details</div>;

  const job = data.filter((item) => item.job_id.slice(0, 100) === jobId)[0];

  return (
    <div className="flex flex-col lg:flex-row lg:gap-[77px]">
      <div className="lg:min-w-[231px]">
        <BackLink />

        <div className="mt-9">
          <HowToApply jobId={job.job_id} />
        </div>
      </div>

      <div className="mt-9 lg:mt-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
          <Role inDetails>{job.title}</Role>
          {job.detected_extensions.schedule_type === "Full-time" && (
            <FullTimeTag inDetails />
          )}
        </div>

        <div className="mt-2">
          {job.detected_extensions.posted_at && (
            <TimeSincePublication>
              {job.detected_extensions.posted_at}
            </TimeSincePublication>
          )}
        </div>

        <div className="flex gap-3 mt-9">
          <div className="py-1">
            {job.thumbnail ? (
              <Logo inDetails src={job.thumbnail} />
            ) : (
              <ImageNotFound inDetails />
            )}
          </div>
          <div className="flex flex-col justify-between">
            <Name inDetails>{job.company_name}</Name>
            <Location>{job.location}</Location>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-base/6 whitespace-pre-wrap">{job.description}</p>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
