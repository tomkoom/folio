import { NextResponse } from "next/server";
import { getMetadataSafe } from "@/lib/metascraper";
import type { MetadataApiError, MetadataApiResponse } from "@/types/metadata";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { success: false, error: "Missing url" } satisfies MetadataApiError,
      { status: 400 }
    );
  }

  try {
    new URL(url);
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid url" } satisfies MetadataApiError,
      { status: 400 }
    );
  }

  try {
    const data = await getMetadataSafe(url);
    return NextResponse.json(
      { success: true, data } satisfies MetadataApiResponse
    );
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch metadata",
        details: e instanceof Error ? e.message : "Unknown error",
      } satisfies MetadataApiError,
      { status: 500 }
    );
  }
}
