"use client";

import Papa from "papaparse";

export async function csvProcessor(file: File) {
  const text = await file.text();
  const parsed = Papa.parse(text, { header: true });

  return {
    name: file.name,
    type: file.type,
    size: file.size,
    content: parsed.data,
  };
}
