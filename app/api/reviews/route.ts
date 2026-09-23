import { NextRequest, NextResponse } from "next/server";
import {
  reviews,
  sortReviews,
  overallRating,
  totalReviews,
  ratingBreakdown,
} from "@/lib/reviews";

export async function GET(request: NextRequest) {
  const sortParam = request.nextUrl.searchParams.get("sort");
  const sort =
    sortParam === "highest" || sortParam === "lowest" ? sortParam : "recent";

  const sorted = sortReviews(reviews, sort);

  return NextResponse.json({
    overallRating,
    totalReviews,
    ratingBreakdown,
    sort,
    reviews: sorted,
  });
}
