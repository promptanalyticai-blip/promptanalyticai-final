// components/connection/connection-dashboard.tsx
"use client";

import { useEffect, useState } from "react";
import { getDnipMetrics } from "@/lib/dnip-engine";

export default function ConnectionDashboard() {
  const [metrics, setMetrics] = useState<{
    requestsPerMin: number;
    workspacesActive: number;
  } | null>(null);

  useEffect(() => {
    const data = getDnipMetrics();
    setMetrics(data);
  }, []);

  if (!metrics) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">DNIP Connection Overview</h2>

      <p>Requests per minute: {metrics.requestsPerMin}</p>
      <p>Active workspaces: {metrics.workspacesActive}</p>
    </div>
  );
}
