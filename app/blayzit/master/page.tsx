"use client";

import { useEffect, useState } from "react";
import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";
import { analyzeInParallel } from "@/components/blayzit/performance/ParallelEngine";
import { computeCorrelationMatrix } from "@/components/blayzit/relations/CorrelationEngine";
import V5MasterDashboard from "@/components/blayzit/master/V5MasterDashboard";

export default function BlayzitMasterPage() {
  const [analysis, setAnalysis] = useState<any | null>(null);
  const [perf, setPerf] = useState<any | null>(null);
  const [pairs, setPairs] = useState<any[] | null>(null);

  useEffect(() => {
    async function load() {
      // Análisis principal (archivo simulado)
      const mainAnalysis = await runBlayzitIntelligence();
      setAnalysis(mainAnalysis);

      // Simulación de análisis paralelo con un solo archivo
      const filesArray = [
        {
          file: mainAnalysis.file,
          content: mainAnalysis.content,
        },
      ];

      const perfResult = await analyzeInParallel(filesArray);
      setPerf(perfResult);

      // Correlaciones (con el mismo análisis, solo para mostrar estructura)
      const correlationPairs = computeCorrelationMatrix(
        [mainAnalysis]
      );
      setPairs(correlationPairs);
    }

    load();
  }, []);

  if (!analysis) {
    return (
      <section className="space-y-6">
        <h1 className="text-xl font-semibold text-slate-900">
          BLAYZIT V5 · Panel Maestro
        </h1>
        <p className="text-sm text-slate-600">
          Cargando análisis del sistema BLAYZIT…
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <V5MasterDashboard
        analysis={analysis}
        perf={perf || undefined}
        pairs={pairs || undefined}
      />
    </section>
  );
}
