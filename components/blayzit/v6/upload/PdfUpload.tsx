// components/blayzit/v6/upload/PdfUpload.tsx
"use client";

import { useState } from "react";
import AnalyzarV6 from "@/components/blayzit/analizar/AnalyzarV6";
import { validateIngest } from "@/components/blayzit/v6/security/ingestGuard";
import { logIngest } from "@/components/blayzit/v6/audit/ingestAudit";

export default function PdfUpload({ onResult }: { onResult: (data: any[]) => void }) {
  const [loading, setLoading] = useState(false);

  async function handlePdf(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setLoading(true);
    const results: any[] = [];

    try {
      for (const file of Array.from(files)) {
        if (!file.name.toLowerCase().endsWith(".pdf")) continue;

        const arrayBuffer = await file.arrayBuffer();
        const text = await extractPdfText(arrayBuffer);

        // Seguridad en ingestión
        validateIngest(file, text, { kind: "pdf", filename: file.name });

        // Auditoría avanzada
        logIngest({
          type: "pdf",
          source: "upload",
          filename: file.name,
          sizeBytes: file.size,
        });

        const processed = {
          file,
          content: text,
          tags: ["pdf", "upload"],
        };

        const result = await AnalyzarV6(processed);
        results.push(result);
      }

      onResult(results);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <input
        type="file"
        multiple
        accept=".pdf"
        onChange={handlePdf}
        className="border p-2 rounded-md w-full text-sm bg-white"
      />

      {loading && (
        <p className="text-sm text-slate-600">
          Extrayendo texto de PDFs y analizando con IA, DNIP, ADIP, Seguridad y Telemetría…
        </p>
      )}
    </div>
  );
}

// -----------------------------
// EXTRACCIÓN DE TEXTO DE PDF
// -----------------------------
// Aquí puedes conectar tu librería de servidor (pdf-parse, pdfjs, etc.)
// Por ahora dejamos un placeholder para que lo conectes en tu backend.
async function extractPdfText(_buffer: ArrayBuffer): Promise<string> {
  // TODO: conectar con endpoint /api/pdf/extract o librería server-side
  return "Contenido extraído del PDF (placeholder). Conectar con extractor real en backend.";
}
