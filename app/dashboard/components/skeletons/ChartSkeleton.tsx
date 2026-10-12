//app/dashboard/components/skeletons/ChartSkeleton.tsx
"use client";

import WOWSkeleton from "../WOWSkeleton";
import { useWOWState } from "../../state/WOWStateProvider";

export default function ChartSkeleton() {
  const { wow } = useWOWState();
  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <WOWSkeleton wow={wow} lines={6} />
    </div>
  );
}
