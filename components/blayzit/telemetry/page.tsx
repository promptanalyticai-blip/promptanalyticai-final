"use client";
import { useTelemetryStream } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";

export default function TelemetriaPage() {
  const points = useTelemetryStream();

  return (
    <section className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-900">
        Telemetría en tiempo real
      </h1>

      <p className="text-sm text-slate-700">
        Gráficos en tiempo real de latencia, carga del sistema y nivel de riesgo
        estimado por BLAYZIT.
      </p>

      <div className="grid grid-cols-3 gap-4">
        <TelemetryChart
          label="Latencia (ms)"
          field="latency"
          points={points}
          unit="ms"
        />
        <TelemetryChart
          label="Carga del sistema (%)"
          field="load"
          points={points}
          unit="%"
        />
        <TelemetryChart
          label="Nivel de riesgo (%)"
          field="risk"
          points={points}
          unit="%"
        />
      </div>
    </section>
  );
}
