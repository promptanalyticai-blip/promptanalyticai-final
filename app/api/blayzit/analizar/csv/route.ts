import { NextResponse } from "next/server";
import Papa from "papaparse";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const text = await file.text();
  const parsed = Papa.parse(text, { header: true });

  return NextResponse.json({
    type: "csv",
    data: parsed.data,
  });
}
