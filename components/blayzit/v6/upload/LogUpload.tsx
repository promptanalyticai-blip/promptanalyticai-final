"use client";

import { useState } from "react";
import AnalyzarV6 from "@/components/blayzit/analizar/AnalyzarV6";
import { validateIngest } from "@/components/blayzit/v6/security/ingestGuard";
import { logIngest } from "@/components/blayzit/v6/audit/ingestAudit";

export default function LogUpload({ onResult }: { onResult: (data: any[]) => void }) {
  const [loading, setLoading] = useState(false);

  async function handleLogs(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setLoading(true);
    const results: any[] = [];

    try {
      for (const file of Array.from(files)) {
        const raw = await file.text();

        // Seguridad en ingestión
        validateIngest(file, raw, { kind: "log", filename: file.name });

        // Auditoría avanzada
        logIngest({
          type: "log",
          source: "upload",
          filename: file.name,
          sizeBytes: file.size,
        });

        // Parser inteligente
        const parsed = parseLogContent(file.name, raw);

        const processed = {
          file,
          content: parsed,
          tags: ["log", "upload"],
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
        accept=".txt,.log,.json,.csv"
        onChange={handleLogs}
        className="border p-2 rounded-md w-full text-sm bg-white"
      />

      {loading && (
        <p className="text-sm text-slate-600">
          Procesando logs con IA, DNIP, ADIP, Seguridad y Telemetría…
        </p>
      )}
    </div>
  );
}

// -----------------------------
// PARSER INTELIGENTE DE LOGS
// -----------------------------
function parseLogContent(filename: string, raw: string) {
  const lower = filename.toLowerCase();

  if (lower.endsWith(".json")) {
    try {
      return JSON.parse(raw);
    } catch {
      return { error: "JSON inválido", raw };
    }
  }

  if (lower.endsWith(".csv")) {
    const lines = raw.split("\n").map((l) => l.trim());
    const headers = lines[0].split(",");

    const rows = lines.slice(1).map((line) => {
      const values = line.split(",");
      const obj: any = {};
      headers.forEach((h, i) => (obj[h] = values[i] || ""));
      return obj;
    });

    return { headers, rows };
  }

  // TXT o LOG plano
  return raw.split("\n").map((line) => line.trim());
}
