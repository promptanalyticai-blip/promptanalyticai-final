"use client";

export default function V5IADashboard({ ai }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">IA · Resumen</h2>

      <p className="text-sm text-slate-700">
        {ai?.summary || "Sin resumen disponible."}
      </p>

      <p className="text-xs text-slate-600">
        Score IA:{" "}
        <span className="font-semibold">
          {ai?.score?.toFixed ? ai.score.toFixed(2) : ai?.score ?? "N/A"}
        </span>
      </p>
    </div>
  );
}
