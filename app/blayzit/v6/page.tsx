// app/blayzit/v6/page.tsx
"use client";

import { useEffect, useState } from "react";
import V6MasterDashboard from "../../../components/blayzit/master/V6MasterDashboard";
import V6EnterpriseDashboard from "../../../components/blayzit/master/V6EnterpriseDashboard";
import V6AdvancedCharts from "../../../components/blayzit/master/V6AdvancedCharts";

export default function BlayzitV6Page() {
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnalysis() {
      try {
        const res = await fetch("/api/blayzit/v6/analysis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ingest: true }),
        });

        const data = await res.json();
        setAnalysis(data.analysis);
      } catch (error) {
        console.error("Error cargando análisis V6:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalysis();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-slate-600">
        Cargando análisis BLAYZIT V6…
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="p-6 text-center text-red-600">
        Error: No se pudo cargar el análisis V6.
      </div>
    );
  }

  return (
    <div className="space-y-10 p-4">
      {/* Dashboard individual V6 */}
      <V6MasterDashboard analysis={analysis} />

      {/* Dashboard Maestro Enterprise */}
      <V6EnterpriseDashboard
        dnip={analysis.dnip}
        adip={analysis.adip}
        ia={analysis.ia}
        security={analysis.security}
        metrics={analysis.metrics}
        audit={analysis.audit}
      />

      {/* Gráficos avanzados V6 */}
      <V6AdvancedCharts
        dnip={analysis.dnip}
        ia={analysis.ia}
        metrics={analysis.metrics}
        audit={analysis.audit}
      />
    </div>
  );
}
