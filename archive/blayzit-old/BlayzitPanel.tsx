//app/blayzit/components/BlayzitPanel.tsx
"use client";

export default function BlayzitPanel({ level, blayzit, wow }: any) {
  if (!wow) return <div>Cargando BLAYZIT...</div>;

  if (!wow.permissions.canViewBlayzit) {
    return (
      <div className="p-6 rounded-xl bg-red-100 text-red-700">
        No tienes permiso para ver el panel administrativo.
      </div>
    );
  }

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
        {wow.ui.header} — BLAYZIT ({blayzit.mode.toUpperCase()})
      </h1>

      {/* FEATURES */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Características activadas</h2>

        <pre className="bg-white/20 p-4 rounded-lg text-sm">
          {JSON.stringify(blayzit.features, null, 2)}
        </pre>
      </div>

      {/* MODE DESCRIPTION */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Descripción del modo</h2>

        <div className="bg-white/20 p-4 rounded-lg text-sm">
          {blayzit.mode === "minimal" && (
            <p>Modo minimal: ideal para usuarios individuales.</p>
          )}

          {blayzit.mode === "expanded" && (
            <p>Modo expanded: ideal para profesionales.</p>
          )}

          {blayzit.mode === "enterprise" && (
            <p>Modo enterprise: panel corporativo completo.</p>
          )}
        </div>
      </div>
    </div>
  );
}
