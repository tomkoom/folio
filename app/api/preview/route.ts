import { NextResponse } from "next/server";
import { getOpenGraph } from "@/lib/getOpenGraph";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  try {
    const data = await getOpenGraph(url);
    
    // Fallback if no data found
    if (!data.title && !data.image) {
      return NextResponse.json({
        title: new URL(url).hostname,
        description: "Preview unavailable",
        url,
      });
    }
    
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json(
      { 
        error: "Failed to fetch OG data",
        details: e instanceof Error ? e.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
