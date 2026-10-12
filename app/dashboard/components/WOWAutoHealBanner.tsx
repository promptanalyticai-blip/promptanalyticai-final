//app/dashboard/components/WOWAutoHealBanner.tsx
"use client";

import { useWOWState } from "../state/WOWStateProvider";

export default function WOWAutoHealBanner() {
  const state = useWOWState();

  if (!state.autoHealMode) return null;

  return (
    <div className="p-4 bg-purple-600 text-white rounded-lg shadow-lg border border-purple-800">
      <h2 className="text-xl font-bold">🛠️ AUTO-HEALING MODE ACTIVE</h2>
      <p className="mt-2 text-sm">
        The system is automatically correcting issues, cleaning stale data, and stabilizing operations.
      </p>
    </div>
  );
}
