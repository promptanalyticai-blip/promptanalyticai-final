"use client";

import PerformancePanel from "./PerformancePanel";

export default function V5PerformanceDashboard({ perf }: { perf: any }) {
  return (
    <div className="space-y-8">
      <PerformancePanel perf={perf} />
    </div>
  );
}
