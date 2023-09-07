"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import Icon from "./Icon";

interface Props {
  children: React.ReactNode;
}

interface JobComposition {
  Logo: typeof Logo;
  JobDescriptionWrapper: typeof JobDescriptionWrapper;
  Name: typeof Name;
  Role: typeof Role;
  ResponsiveWrapper: typeof ResponsiveWrapper;
  FullTimeTag: typeof FullTimeTag;
  DateLocationWrapper: typeof DateLocationWrapper;
  Location: typeof Location;
  TimeSincePublication: typeof TimeSincePublication;
}

interface JobComponentProps extends Props {
  inDetails?: boolean;
}

const Job: React.FC<{ children: React.ReactNode; href: string }> &
  JobComposition = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="bg-white p-3 rounded-4 cursor-pointer transition hover:bg-gray-1/10"
    >
      <div className="flex gap-4 font-roboto">{children}</div>
    </Link>
  );
};

export const Logo: React.FC<{ src: string; inDetails?: boolean }> = ({
  src,
  inDetails,
}) => {
  return (
    <div
      className={clsx(
        "rounded-4 overflow-hidden",
        inDetails ? "h-[42px] w-[42px]" : "h-[90px] w-[90px]"
      )}
    >
      <Image
        className="object-cover"
        src={src}
        alt="Company Logo"
        width={3000}
        height={3000}
      />
    </div>
  );
};

const JobDescriptionWrapper: React.FC<Props> = ({ children }) => {
  return <div className="flex-1">{children}</div>;
};

export const Name: React.FC<JobComponentProps> = ({ children, inDetails }) => {
  return (
    <span className={clsx("font-bold", inDetails ? "text-lg" : "text-xs")}>
      {children}
    </span>
  );
};

export const Role: React.FC<JobComponentProps> = ({ children, inDetails }) => {
  return (
    <p className={clsx(inDetails ? "text-2xl font-bold" : "mt-2 md:text-lg")}>
      {children}
    </p>
  );
};

export const FullTimeTag: React.FC<{ inDetails?: boolean }> = ({
  inDetails,
}) => {
  return (
    <div
      className={clsx(
        "py-[6px] px-2 w-fit shrink-0 text-xs font-bold rounded-4 border border-foreground",
        !inDetails && "mt-[14px]"
      )}
    >
      Full time
    </div>
  );
};

const DateLocationWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center md:justify-end gap-7 mt-6 w-full">
      {children}
    </div>
  );
};

export const Location: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center gap-[6px] text-xs text-gray-3">
      <Icon style={{ fontSize: "18px" }}>public</Icon>
      {children}
    </div>
  );
};

export const TimeSincePublication: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center gap-[6px] text-xs text-gray-3">
      <Icon style={{ fontSize: "18px" }}>access_time</Icon>
      {children}
    </div>
  );
};

const ResponsiveWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end">{children}</div>
  );
};

Job.Logo = Logo;
Job.JobDescriptionWrapper = JobDescriptionWrapper;
Job.Name = Name;
Job.Role = Role;
Job.ResponsiveWrapper = ResponsiveWrapper;
Job.FullTimeTag = FullTimeTag;
Job.DateLocationWrapper = DateLocationWrapper;
Job.Location = Location;
Job.TimeSincePublication = TimeSincePublication;

export default Job;
