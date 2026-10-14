//app/dashboard/components/WOWStabilityBanner.tsx
"use client";

import { useWOWState } from "./WOWStateProvider";

export default function WOWStabilityBanner() {
  const state = useWOWState();

  if (!state.stableMode) return null;

  return (
    <div className="p-4 bg-blue-600 text-white rounded-lg shadow-lg border border-blue-800">
      <h2 className="text-xl font-bold">🟦 STABLE MODE ACTIVE</h2>
      <p className="mt-2 text-sm">
        The system is stable. Dashboard optimized for clarity and efficiency.
      </p>
    </div>
  );
}
