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

  const fullName = String(body.fullName ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const membershipType = String(body.membershipType ?? "").trim();

  if (!fullName || !phone || !email) {
    return NextResponse.json(
      { success: false, error: "Full name, phone, and email are required." },
      { status: 400 }
    );
  }

  console.log("New membership inquiry:", {
    fullName,
    phone,
    email,
    membershipType,
    message: body.message ?? "",
  });

  return NextResponse.json({
    success: true,
    message:
      "Your membership inquiry has been received. The board typically responds within 30–45 business days.",
  });
}
