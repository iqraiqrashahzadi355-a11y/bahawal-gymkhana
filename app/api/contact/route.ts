import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // In a production app this would email the front desk or write to a
  // database. For this assignment we just log it server-side and
  // acknowledge receipt.
  console.log("New contact inquiry:", { name, email, message });

  return NextResponse.json({
    success: true,
    message: "Thank you — the front desk will get back to you shortly.",
  });
}
