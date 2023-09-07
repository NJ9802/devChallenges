import React from "react";

import JobDetails from "@/components/JobDetails";

function page({ params }: { params: { jobId: string } }) {
  return <JobDetails jobId={params.jobId} />;
}

export default page;
