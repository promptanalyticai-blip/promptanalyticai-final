"use client";

export default function DiffPanel({ diff }: { diff: any }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Cambios entre versiones
      </h2>

      <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
        <li>
          Cambio de tamaño:{" "}
          <strong>{diff.sizeDiff} bytes</strong>
        </li>

        <li>
          Cambio de riesgo:{" "}
          <strong>{(diff.riskDiff * 100).toFixed(1)}%</strong>
        </li>

        <li>
          Cambio IA:{" "}
          <strong>{(diff.aiScoreDiff * 100).toFixed(1)}%</strong>
        </li>

        <li>
          Etiquetas nuevas:{" "}
          <strong>{diff.newTags.join(", ") || "ninguna"}</strong>
        </li>

        <li>
          Etiquetas eliminadas:{" "}
          <strong>{diff.removedTags.join(", ") || "ninguna"}</strong>
        </li>

        <li>
          Acciones añadidas:{" "}
          <strong>{diff.actionsAdded.length}</strong>
        </li>

        <li>
          Acciones eliminadas:{" "}
          <strong>{diff.actionsRemoved.length}</strong>
        </li>
      </ul>
    </div>
  );
}
