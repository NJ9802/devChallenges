import { ApiResponse } from "@/types/apiResponse";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  const location = searchParams.get("location");
  const page = searchParams.get("page");

  const params = new URLSearchParams();

  if (query) {
    params.append("q", query);
  } else {
    params.append("q", "Software Engineer");
  }

  if (location) {
    params.append("location", location);
  }

  if (page) {
    params.append("start", page);
  }

  const res = await fetch(
    `https://serpapi.com/search.json?engine=google_jobs&hl=en&api_key=${
      process.env.API_KEY
    }&${params.toString()}`
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: res.status }
    );
  }

  const data: ApiResponse = await res.json();

  return NextResponse.json(data.jobs_results.slice(0, 5));
}
