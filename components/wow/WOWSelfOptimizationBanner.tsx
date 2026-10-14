//app/dashboard/components/WOWSelfOptimizationBanner.tsx
"use client";

import { useWOWState } from "./WOWStateProvider";

export default function WOWSelfOptimizationBanner() {
  const state = useWOWState();

  if (!state.selfOptimizationMode) return null;

  return (
    <div className="p-4 bg-teal-600 text-white rounded-lg shadow-lg border border-teal-800">
      <h2 className="text-xl font-bold">⚙️ SELF-OPTIMIZATION MODE ACTIVE</h2>
      <p className="mt-2 text-sm">
        The system is adjusting its internal thresholds and evolving its behavior.
      </p>
    </div>
  );
}
