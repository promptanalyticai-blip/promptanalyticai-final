//app/dashboard/components/WOWRecoveryBanner.tsx
"use client";

import { useWOWState } from "./WOWStateProvider";

export default function WOWRecoveryBanner() {
  const state = useWOWState();

  if (!state.recoveryMode) return null;

  return (
    <div className="p-4 bg-green-600 text-white rounded-lg shadow-lg border border-green-800">
      <h2 className="text-xl font-bold">🟢 RECOVERY MODE ACTIVE</h2>
      <p className="mt-2 text-sm">
        The system has exited critical mode and is now stabilizing operations.
      </p>
    </div>
  );
}
