"use client";

import { useState } from "react";
import AnalyzarV6 from "@/components/blayzit/analizar/AnalyzarV6";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import V6MasterDashboard from "@/components/blayzit/master/V6MasterDashboard";
import V6IADashboard from "@/components/blayzit/master/V6IADashboard";
import V6DNIPDashboard from "@/components/blayzit/master/V6DNIPDashboard";
import V6ADIPDashboard from "@/components/blayzit/master/V6ADIPDashboard";
import V6SecurityDashboard from "@/components/blayzit/master/V6SecurityDashboard";
import V6TelemetryDashboard from "@/components/blayzit/master/V6TelemetryDashboard";

export default function BlayzitUploadPage() {
  const [analysis, setAnalysis] = useState<any>(null);

  async function handleFile(e: any) {
    const file = e.target.files[0];
    if (!file) return;

    const text = await file.text();

    const processed = {
      file,
      content: text,
      tags: ["upload"],
    };

    const result = await AnalyzarV6(processed);
    setAnalysis(result);
  }

  return (
    <Section>
      <Title>BLAYZIT V6 · Subir Información</Title>

      <input
        type="file"
        onChange={handleFile}
        className="border p-3 rounded-md mb-6"
      />

      {!analysis && (
        <p className="text-sm text-slate-600">
          Sube un archivo para analizarlo con IA, DNIP, ADIP, Seguridad y Telemetría.
        </p>
      )}

      {analysis && (
        <>
          <V6MasterDashboard analysis={analysis} />
          <V6IADashboard analysis={analysis} />
          <V6DNIPDashboard analysis={analysis} />
          <V6ADIPDashboard analysis={analysis} />
          <V6SecurityDashboard analysis={analysis} />
          <V6TelemetryDashboard metrics={analysis.metrics} />
        </>
      )}
    </Section>
  );
}
