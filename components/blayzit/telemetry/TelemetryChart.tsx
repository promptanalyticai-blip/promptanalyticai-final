"use client";

export default function TelemetryChart({ metrics }) {
  // Fallback seguro
  if (!Array.isArray(metrics) || metrics.length === 0) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
        <p className="text-sm text-slate-600">
          No hay métricas registradas todavía. Ejecuta un análisis para generar telemetría.
        </p>

        {/* Skeleton estilo Stripe */}
        <div className="mt-4 space-y-3">
          <div className="h-2 bg-slate-200 rounded animate-pulse"></div>
          <div className="h-2 bg-slate-200 rounded animate-pulse w-2/3"></div>
          <div className="h-2 bg-slate-200 rounded animate-pulse w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {metrics.map((metric, index) => {
        const { label, points, field, unit } = metric;

        const safePoints = Array.isArray(points) ? points : [];
        const lastValue = safePoints.length > 0 ? safePoints[safePoints.length - 1][field] : 0;

        return (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-slate-900">{label}</p>

              {safePoints.length > 0 ? (
                <p className="text-xs text-slate-500">
                  Último: {lastValue}
                  {unit}
                </p>
              ) : (
                <p className="text-xs text-slate-400">Sin datos</p>
              )}
            </div>

            {/* Barra de progreso */}
            <div className="h-2 bg-slate-200 rounded overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded transition-all duration-300"
                style={{
                  width: `${Math.min(lastValue * 2, 100)}%`,
                }}
              ></div>
            </div>

            {/* Mini gráfico de puntos */}
            <div className="mt-4 flex gap-1">
              {safePoints.length > 0 ? (
                safePoints.map((p, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-blue-500 opacity-70"
                    style={{
                      transform: `translateY(${Math.max(0, 20 - p[field])}px)`,
                    }}
                  ></div>
                ))
              ) : (
                <div className="text-xs text-slate-400">Sin puntos</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
