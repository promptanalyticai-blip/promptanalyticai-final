//app/dashboard/components/WOWThreatPanel.tsx
"use client";

import { useWOWState } from "./WOWStateProvider";

export default function WOWThreatPanel() {
  const state = useWOWState();
  const threats = state.threats || [];

  if (!threats.length) {
    return (
      <div className="p-4 border rounded-lg bg-white shadow-sm">
        <h3 className="text-lg font-bold text-gray-800">Threat Monitor</h3>
        <p className="text-gray-600 mt-2">No threats detected.</p>
      </div>
    );
  }

  const levelColor = {
    none: "bg-gray-200 text-gray-800",
    low: "bg-blue-200 text-blue-800",
    medium: "bg-yellow-200 text-yellow-800",
    high: "bg-orange-300 text-orange-900",
    critical: "bg-red-500 text-white",
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-bold text-gray-800">Threat Monitor</h3>

      <div className="mt-4 space-y-4">
        {threats
          .slice()
          .reverse()
          .map((t, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-gray-50 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColor[t.level]}`}
                >
                  {t.level.toUpperCase()}
                </span>

                <span className="text-sm text-gray-500">
                  {new Date(t.timestamp).toLocaleString()}
                </span>
              </div>

              <p className="mt-2 text-gray-800 font-semibold">
                Category: {t.category}
              </p>

              <p className="text-gray-700 mt-1">
                Score: <span className="font-bold">{t.score}</span>
              </p>

              <ul className="mt-3 list-disc list-inside text-gray-600 text-sm">
                {t.reasons.map((r: string, i: number) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
