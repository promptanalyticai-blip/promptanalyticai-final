//app/dnip/components/DNIPPanel.tsx
"use client";

export default function DNIPPanel({ level, dnip, adip, wow }: any) {
  if (!wow) return <div>Cargando DNIP...</div>;

  return (
    <div
      className={`p-6 rounded-xl transition-all duration-500 
        ${wow.theme === "gradient-blue-soft" ? "bg-gradient-to-br from-blue-100 to-blue-200" : ""}
        ${wow.theme === "gradient-blue-gray" ? "bg-gradient-to-br from-gray-100 to-blue-200" : ""}
        ${wow.theme === "gradient-dark-blue" ? "bg-gradient-to-br from-blue-900 to-blue-700" : ""}
      `}
    >
      {/* HEADER */}
      <h1
        className={`text-3xl font-bold mb-4 
          ${wow.tone === "executive" ? "text-yellow-400" : ""}
          ${wow.tone === "operational" ? "text-green-600" : ""}
          ${wow.tone === "technical" ? "text-indigo-700" : ""}
          ${wow.tone === "light" ? "text-blue-700" : ""}
        `}
      >
        {wow.ui.header} — DNIP
      </h1>

      {/* DASHBOARD DEPTH */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Dashboard ({wow.ui.dashboardDepth})
        </h2>

        <pre className="bg-white/20 p-4 rounded-lg text-sm">
          {JSON.stringify(dnip.signals, null, 2)}
        </pre>
      </div>

      {/* INSIGHTS DEPTH */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Insights ({wow.ui.insightsDepth})
        </h2>

        <pre className="bg-white/20 p-4 rounded-lg text-sm">
          {JSON.stringify(dnip.decisions, null, 2)}
        </pre>
      </div>

      {/* ACTIONS DEPTH */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Acciones ({wow.ui.actionsDepth})
        </h2>

        <pre className="bg-white/20 p-4 rounded-lg text-sm">
          {JSON.stringify(adip.actions, null, 2)}
        </pre>
      </div>
    </div>
  );
}
