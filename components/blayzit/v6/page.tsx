"use client";

import { useEffect, useState } from "react";

// Motores
import AnalyzarV6 from "@/components/blayzit/analizar/AnalyzarV6";

// Dashboards V6
import V6MasterDashboard from "@/components/blayzit/master/V6MasterDashboard";
import V6IADashboard from "@/components/blayzit/master/V6IADashboard";
import V6DNIPDashboard from "@/components/blayzit/master/V6DNIPDashboard";
import V6ADIPDashboard from "@/components/blayzit/master/V6ADIPDashboard";
import V6SecurityDashboard from "@/components/blayzit/master/V6SecurityDashboard";
import V6TelemetryDashboard from "@/components/blayzit/master/V6TelemetryDashboard";

// UI ULTRA PRIME
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";

export default function BlayzitV6Page() {
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    async function run() {
      // Simulación de archivo procesado (puedes reemplazarlo con ingest real)
      const processed = {
        file: { name: "archivo-demo.txt" },
        content:
          "Este es un contenido de prueba para BLAYZIT V6. alert TODO fix hack breach",
        tags: ["demo"],
      };

      const result = await AnalyzarV6(processed);
      setAnalysis(result);
    }

    run();
  }, []);

  if (!analysis) {
    return (
      <Section>
        <Title>BLAYZIT V6 · Cargando análisis…</Title>
        <p className="text-sm text-slate-600">
          Procesando contenido con IA, DNIP, ADIP, Seguridad y Telemetría…
        </p>
      </Section>
    );
  }

  return (
    <Section>
      {/* Panel Maestro */}
      <V6MasterDashboard analysis={analysis} />

      {/* Panel IA */}
      <V6IADashboard analysis={analysis} />

      {/* Panel DNIP */}
      <V6DNIPDashboard analysis={analysis} />

      {/* Panel ADIP */}
      <V6ADIPDashboard analysis={analysis} />

      {/* Panel Seguridad */}
      <V6SecurityDashboard analysis={analysis} />

      {/* Panel Telemetría */}
      <V6TelemetryDashboard metrics={analysis.metrics} />
    </Section>
  );
}
