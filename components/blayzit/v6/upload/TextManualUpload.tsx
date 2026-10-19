"use client";

import { useState } from "react";
import AnalyzarV6 from "@/components/blayzit/analizar/AnalyzarV6";
import { validateIngest } from "@/components/blayzit/v6/security/ingestGuard";
import { logIngest } from "@/components/blayzit/v6/audit/ingestAudit";

export default function TextManualUpload({ onResult }: { onResult: (data: any) => void }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const textarea = form.elements.namedItem("content") as HTMLTextAreaElement;
    const content = textarea.value.trim();

    if (!content) return;

    try {
      setLoading(true);

      // Seguridad en ingestión
      validateIngest(null, content, { kind: "text" });

      // Auditoría avanzada
      logIngest({
        type: "text",
        source: "manual",
        sizeBytes: content.length,
      });

      // Procesamiento V6
      const processed = {
        file: { name: "texto_manual.txt" },
        content,
        tags: ["manual", "textarea"],
      };

      const result = await AnalyzarV6(processed);
      onResult(result);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        name="content"
        className="w-full h-40 border rounded-md p-3 text-sm bg-white"
        placeholder="Escribe o pega aquí el contenido a analizar..."
      />

      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-slate-900 text-white text-sm"
        disabled={loading}
      >
        {loading ? "Analizando..." : "Analizar texto"}
      </button>
    </form>
  );
}
