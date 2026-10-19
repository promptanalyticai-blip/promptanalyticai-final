// components/blayzit/v6/upload/ImageOcrUpload.tsx
"use client";

import { useState } from "react";
import AnalyzarV6 from "@/components/blayzit/analizar/AnalyzarV6";
import { validateIngest } from "@/components/blayzit/v6/security/ingestGuard";
import { logIngest } from "@/components/blayzit/v6/audit/ingestAudit";

export default function ImageOcrUpload({ onResult }: { onResult: (data: any[]) => void }) {
  const [loading, setLoading] = useState(false);

  async function handleImages(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setLoading(true);
    const results: any[] = [];

    try {
      for (const file of Array.from(files)) {
        const buffer = await file.arrayBuffer();

        // OCR (placeholder)
        const text = await extractImageText(buffer);

        // Seguridad en ingestión
        validateIngest(file, text, { kind: "image", filename: file.name });

        // Auditoría avanzada
        logIngest({
          type: "image",
          source: "upload",
          filename: file.name,
          sizeBytes: file.size,
        });

        const processed = {
          file,
          content: text,
          tags: ["image", "ocr", "upload"],
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
        accept=".png,.jpg,.jpeg,.webp"
        onChange={handleImages}
        className="border p-2 rounded-md w-full text-sm bg-white"
      />

      {loading && (
        <p className="text-sm text-slate-600">
          Extrayendo texto con OCR y analizando con IA, DNIP, ADIP, Seguridad y Telemetría…
        </p>
      )}
    </div>
  );
}

// -----------------------------
// OCR PLACEHOLDER
// -----------------------------
async function extractImageText(_buffer: ArrayBuffer): Promise<string> {
  // Aquí conectas tu OCR real (Tesseract, Vision API, tu backend, etc.)
  return "Texto extraído de la imagen (placeholder). Conectar OCR real en backend.";
}
