import { NextResponse } from "next/server";
import { generateEmailSummary } from "@/lib/emailAgent";

export const revalidate = 0;

export async function GET() {
  try {
    const summary = await generateEmailSummary();
    return NextResponse.json(summary, {
      headers: {
        "Cache-Control": "no-store"
      }
    });
  } catch (error) {
    console.error("Failed to generate inbox summary", error);
    return NextResponse.json(
      {
        error: "Unable to generate inbox summary. Check server logs for details."
      },
      { status: 500 }
    );
  }
}
