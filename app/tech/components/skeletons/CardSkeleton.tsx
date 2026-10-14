//app/dashboard/components/skeletons/CardSkeleton.tsx
"use client";

import WOWSkeleton from "../WOWSkeleton";
import { useWOWState } from ".././WOWStateProvider";

export default function CardSkeleton() {
  const { wow } = useWOWState();
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <WOWSkeleton wow={wow} lines={4} />
    </div>
  );
}
