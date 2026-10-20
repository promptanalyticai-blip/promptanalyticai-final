"use client";

import { useState } from "react";
import Section from "@ui/Section";
import Button from "@ui/Button";

export default function PdfUpload() {
  const [pdf, setPdf] = useState<File | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setPdf(e.target.files[0]);
    }
  };

  return (
    <Section title="PDF Upload">
      <input type="file" accept="application/pdf" onChange={handleUpload} />

      {pdf && (
        <div className="mt-4 text-sm">
          PDF seleccionado: {pdf.name}
        </div>
      )}

      <Button className="mt-4">Procesar PDF</Button>
    </Section>
  );
}
