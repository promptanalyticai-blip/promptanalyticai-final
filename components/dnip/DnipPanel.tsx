//components/dnip/DnipPanel.tsx
"use client";

import { useState } from "react";

type DnipDecision = {
  status: "ok" | "warning" | "critical";
  priority: number;
  actions: string[];
  notes?: string;
  trends?: string;
  anomalies?: string[];
  costEstimate?: number;
};

export default function DnipPanel() {
  const [loading, setLoading] = useState(false);
  const [decision, setDecision] = useState<DnipDecision | null>(null);
  const [error, setError] = useState("");

  async function runDnip() {
    setLoading(true);
    setError("");
    setDecision(null);

    try {
      const res = await fetch("/api/dnip/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workspaceId: "ws_001",
          companyId: "comp_001",
          userId: "user_001",
          roles: ["owner"],
          metrics: {
            revenueGrowth: -3,
            churnRate: 20,
            activeUsers: 150,
            errorRate: 6,
            ticketBacklog: 130,
          },
          flags: {
            isNewWorkspace: false,
            isCriticalClient: true,
            hasRecentIncidents: true,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error ejecutando DNIP Engine");
        setLoading(false);
        return;
      }

      setDecision(data);
    } catch (err) {
      setError("Error interno ejecutando DNIP Engine");
    }

    setLoading(false);
  }

  const statusColor =
    decision?.status === "critical"
      ? "text-red-400"
      : decision?.status === "warning"
      ? "text-yellow-400"
      : "text-emerald-400";

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-xl p-8 text-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">DNIP Engine — Panel Inteligente</h1>
          <p className="text-sm text-slate-400">
            Motor de análisis de métricas, anomalías, tendencias y costo/impacto.
          </p>
        </div>
        <button
          onClick={runDnip}
          disabled={loading}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-sm font-medium"
        >
          {loading ? "Ejecutando..." : "Ejecutar DNIP"}
        </button>
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      {!decision && !error && (
        <p className="text-slate-400 text-sm">
          Ejecuta DNIP para analizar el estado del workspace actual.
        </p>
      )}

      {decision && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-slate-800 rounded-lg p-4">
            <h2 className="text-sm font-semibold text-slate-300 mb-2">
              Estado
            </h2>
            <p className={`text-xl font-bold ${statusColor}`}>
              {decision.status.toUpperCase()}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Prioridad: {decision.priority}/100
            </p>
            {decision.costEstimate !== undefined && (
              <p className="text-xs text-slate-400 mt-1">
                Impacto estimado: {decision.costEstimate}/100
              </p>
            )}
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <h2 className="text-sm font-semibold text-slate-300 mb-2">
              Acciones sugeridas
            </h2>
            <ul className="text-xs text-slate-300 space-y-1">
              {decision.actions.map((a, idx) => (
                <li key={idx}>• {a}</li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <h2 className="text-sm font-semibold text-slate-300 mb-2">
              Tendencias y anomalías
            </h2>
            <p className="text-xs text-slate-300 mb-2">
              {decision.trends || "Sin tendencias destacables."}
            </p>
            {decision.anomalies && decision.anomalies.length > 0 && (
              <ul className="text-xs text-red-300 space-y-1">
                {decision.anomalies.map((a, idx) => (
                  <li key={idx}>• {a}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {decision?.notes && (
        <div className="mt-6 bg-slate-800 rounded-lg p-4">
          <h2 className="text-sm font-semibold text-slate-300 mb-2">
            Nota del motor
          </h2>
          <p className="text-xs text-slate-300">{decision.notes}</p>
        </div>
      )}
    </div>
  );
}
