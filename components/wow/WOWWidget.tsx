//app/dashboard/components/WOWWidget.tsx
"use client";

import { adaptWOWWidget } from "@/lib/wow-widget-engine";
import { useWOWState } from "../state/WOWStateProvider";

export default function WOWWidget({ widget }: any) {
  const state = useWOWState();
  const adapted = adaptWOWWidget(state.wow, widget, state);

  if (adapted.hidden) {
    return null;
  }

  const highlightMap: any = {
    critical: "border-red-500 bg-red-50",
    high: "border-yellow-500 bg-yellow-50",
    medium: "border-blue-500 bg-blue-50",
  };

  return (
    <div
      className={`p-4 border rounded-lg shadow-sm ${
        adapted.highlight ? highlightMap[adapted.highlight] : "bg-white"
      }`}
    >
      <h3 className="text-lg font-bold">{adapted.title}</h3>

      <div className="mt-2">
        {adapted.density === "compact" && (
          <p className="text-sm text-gray-600">{adapted.value}</p>
        )}

        {adapted.density === "normal" && (
          <p className="text-base text-gray-700">{adapted.value}</p>
        )}

        {adapted.density === "spacious" && (
          <p className="text-xl text-gray-800">{adapted.value}</p>
        )}
      </div>

      {adapted.decisions?.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700">Decisiones</h4>
          <ul className="text-sm text-gray-600">
            {adapted.decisions.map((d: any) => (
              <li key={d.id}>{d.message}</li>
            ))}
          </ul>
        </div>
      )}

      {adapted.actions?.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700">Acciones</h4>
          <ul className="text-sm text-gray-600">
            {adapted.actions.map((a: any) => (
              <li key={a.timestamp}>{a.priority} ejecutada</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
