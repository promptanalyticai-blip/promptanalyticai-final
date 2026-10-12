//app/dashboard/components/skeletons/TableSkeleton.tsx
"use client";

import WOWSkeleton from "../WOWSkeleton";
import { useWOWState } from "../../state/WOWStateProvider";

export default function TableSkeleton() {
  const { wow } = useWOWState();
  return (
    <div className="border rounded-lg bg-white shadow-sm p-4">
      <WOWSkeleton wow={wow} lines={10} />
    </div>
  );
}
