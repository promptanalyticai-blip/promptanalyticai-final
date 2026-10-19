"use client";

import { pdfProcessor } from "./pdfProcessor";
import { csvProcessor } from "./csvProcessor";
import { docxProcessor } from "./docxProcessor";

export default async function FileProcessor(file: File) {
  // PDF
  if (file.type.includes("pdf")) {
    return await pdfProcessor(file);
  }

  // CSV
  if (file.type.includes("csv")) {
    return await csvProcessor(file);
  }

  // DOCX
  if (file.name.endsWith(".docx")) {
    return await docxProcessor(file);
  }

  // TXT / JSON / otros
  const text = await file.text();

  return {
    name: file.name,
    size: file.size,
    type: file.type,
    content: text,
  };
}
