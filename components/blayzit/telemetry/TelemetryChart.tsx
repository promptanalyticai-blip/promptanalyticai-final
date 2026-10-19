"use client";

import type { TelemetryPoint } from "./TelemetryEngine";

type Props = {
  label: string;
  field: "latency" | "load" | "risk";
  points: TelemetryPoint[];
  unit: string;
};

export default function TelemetryChart({ label, field, points, unit }: Props) {
  const maxValue =
    field === "latency" ? 200 :
    field === "load" ? 100 :
    100;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold text-slate-900">{label}</p>
        {points.length > 0 && (
          <p className="text-xs text-slate-500">
            Último: {points[points.length - 1][field]}{unit}
          </p>
        )}
      </div>

      <div className="h-20 flex items-end gap-[2px]">
        {points.map((p, i) => {
          const value = p[field];
          const height = Math.max(8, (value / maxValue) * 80); // px

          return (
            <div
              key={i}
              className="
                w-full 
                bg-sky-400/70 
                rounded-t 
                transition-all 
                duration-300
              "
              style={{ height }}
            />
          );
        })}
      </div>

      <p className="mt-2 text-[11px] text-slate-400">
        Actualizado cada 3 segundos · {points.length} muestras
      </p>
    </div>
  );
}
