import { NextRequest, NextResponse } from "next/server";
import { facilities } from "@/lib/facilities";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");

  const filtered =
    category && category !== "all"
      ? facilities.filter((f) => f.category === category)
      : facilities;

  return NextResponse.json({ facilities: filtered });
}
