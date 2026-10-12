//app/dashboard/components/WOWSkeleton.tsx
"use client";

import { getWOWSkeletonStyle } from "@/lib/wow-skeleton-rules";

export default function WOWSkeleton({ wow, lines = 3 }) {
  const style = getWOWSkeletonStyle(wow);

  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`${style.bg} ${style.radius} ${style.pulse} ${style.height} w-full`}
        ></div>
      ))}
    </div>
  );
}
