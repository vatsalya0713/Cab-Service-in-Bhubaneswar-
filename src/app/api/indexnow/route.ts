import { NextResponse } from "next/server";
import { submitToIndexNow, getAllSiteUrls } from "@/lib/indexnow";

export async function GET() {
  const urls = getAllSiteUrls();
  const result = await submitToIndexNow(urls);
  return NextResponse.json({ ...result, urlCount: urls.length, urls });
}
