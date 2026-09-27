import { NextResponse } from "next/server";
import { membershipTiers } from "@/lib/membership-tiers";

export async function GET() {
  return NextResponse.json({ tiers: membershipTiers });
}
