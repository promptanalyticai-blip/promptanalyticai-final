"use client";

import { readDocx } from "docx-parser";

export async function docxProcessor(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const text = await readDocx(arrayBuffer);

  return {
    name: file.name,
    type: file.type,
    size: file.size,
    content: text,
  };
}
