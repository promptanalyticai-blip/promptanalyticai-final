"use client";

import { useState } from "react";
import AnalyzarV6 from "@/components/blayzit/analizar/AnalyzarV6";
import { validateIngest } from "@/components/blayzit/v6/security/ingestGuard";
import { logIngest } from "@/components/blayzit/v6/audit/ingestAudit";

export default function MultiFileUpload({ onResult }: { onResult: (data: any[]) => void }) {
  const [loading, setLoading] = useState(false);

  async function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setLoading(true);

    const results: any[] = [];

    try {
      for (const file of Array.from(files)) {
        const text = await file.text();

        // Seguridad en ingestión
        validateIngest(file, text, { kind: "file", filename: file.name });

        // Auditoría avanzada
        logIngest({
          type: "file",
          source: "upload",
          filename: file.name,
          sizeBytes: file.size,
        });

        // Procesamiento V6
        const processed = {
          file,
          content: text,
          tags: ["upload", "file"],
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
        onChange={handleFiles}
        className="border p-2 rounded-md w-full text-sm bg-white"
      />

      {loading && (
        <p className="text-sm text-slate-600">
          Procesando archivos con IA, DNIP, ADIP, Seguridad y Telemetría…
        </p>
      )}
    </div>
  );
}
