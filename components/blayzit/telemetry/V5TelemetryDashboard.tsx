"use client";

import TelemetryPanel from "./TelemetryPanel";

export default function V5TelemetryDashboard({ metrics }) {
  return (
    <div className="space-y-6">
      <TelemetryPanel metrics={metrics} />
    </div>
  );
}
