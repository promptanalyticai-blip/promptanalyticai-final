//app/dashboard/components/WOWPredictiveBanner.tsx
"use client";

import { useWOWState } from "../state/WOWStateProvider";

export default function WOWPredictiveBanner() {
  const state = useWOWState();

  if (!state.predictiveMode || state.predictiveMode === "none") return null;

  const colorMap: any = {
    critical: "bg-red-600 border-red-800",
    high: "bg-orange-600 border-orange-800",
    medium: "bg-yellow-500 border-yellow-700",
    low: "bg-blue-500 border-blue-700",
  };

  return (
    <div className={`p-4 text-white rounded-lg shadow-lg ${colorMap[state.predictiveMode]}`}>
      <h2 className="text-xl font-bold">🔮 PREDICTIVE MODE: {state.predictiveMode.toUpperCase()}</h2>
      <p className="mt-2 text-sm">
        The system is forecasting future conditions based on recent signals, threats and decisions.
      </p>
    </div>
  );
}
