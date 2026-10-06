// components/dnip/dnip-dashboard.tsx
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

import { DnipHistoryItem, DnipMetrics } from "@/lib/dnip-engine";

export default function DnipDashboard() {
  const metrics: DnipMetrics = {
    requestsPerMin: 120,
    workspacesActive: 4,
  };

  const history: DnipHistoryItem[] = [
    { id: "1", timestamp: "2024-01-01", status: "ok" },
  ];

  return (
    <Tabs>
      <TabsList>
        <TabsTrigger className="px-4 py-2">Metrics</TabsTrigger>
        <TabsTrigger className="px-4 py-2">History</TabsTrigger>
      </TabsList>

      <TabsContent>
        <div className="p-4">
          <p>Requests/min: {metrics.requestsPerMin}</p>
          <p>Workspaces active: {metrics.workspacesActive}</p>
        </div>
      </TabsContent>

      <TabsContent>
        <div className="p-4">
          {history.map((h) => (
            <div key={h.id}>
              {h.timestamp} — {h.status}
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
