import { NextRequest, NextResponse } from "next/server";
import { galleryItems } from "@/lib/gallery";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");

  const filtered =
    category && category !== "all"
      ? galleryItems.filter((g) => g.category === category)
      : galleryItems;

  return NextResponse.json({ items: filtered });
}
