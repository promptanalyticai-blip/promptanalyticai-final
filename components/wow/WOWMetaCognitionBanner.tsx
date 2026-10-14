//app/dashboard/components/WOWMetaCognitionBanner.tsx
"use client";

import { useWOWState } from "./WOWStateProvider";

export default function WOWMetaCognitionBanner() {
  const state = useWOWState();

  if (!state.metaCognitionMode) return null;

  return (
    <div className="p-4 bg-indigo-600 text-white rounded-lg shadow-lg border border-indigo-800">
      <h2 className="text-xl font-bold">🧠 META-COGNITION MODE ACTIVE</h2>
      <p className="mt-2 text-sm">
        The system is analyzing its own behavior and optimizing internal thresholds.
      </p>
    </div>
  );
}
