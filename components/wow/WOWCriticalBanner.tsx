//app/dashboard/components/WOWCriticalBanner.tsx
"use client";

import { useWOWState } from "./WOWStateProvider";

export default function WOWCriticalBanner() {
  const state = useWOWState();

  if (!state.criticalMode) return null;

  return (
    <div className="p-4 bg-red-600 text-white rounded-lg shadow-lg border border-red-800">
      <h2 className="text-xl font-bold">⚠️ CRITICAL MODE ACTIVE</h2>
      <p className="mt-2 text-sm">
        The system has detected critical threats. Dashboard is now in emergency mode.
      </p>
    </div>
  );
}
