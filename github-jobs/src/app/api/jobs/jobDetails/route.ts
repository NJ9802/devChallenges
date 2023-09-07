import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const jobId = request.nextUrl.searchParams.get("jobId");

  const res = await fetch(
    `https://serpapi.com/search.json?engine=google_jobs_listing&q=${jobId}&api_key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to get Job Details" },
      { status: res.status }
    );
  }

  const data = await res.json();

  return NextResponse.json(data);
}
