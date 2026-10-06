// components/admin/admin-dashboard.tsx
import { getAdminMetrics } from "@/lib/admin-engine";

export async function AdminDashboard() {
  const metrics = await getAdminMetrics();

  return (
    <div className="space-y-4">
      <section className="rounded-lg border bg-card p-4">
        <h2 className="text-lg font-semibold">DNIP (Admin)</h2>
        <p>Load: {metrics.dnip.load}</p>
        <p>Latency: {metrics.dnip.latencyMs}</p>
        <p>Error rate: {metrics.dnip.errorRate}</p>
        <p>Jobs: {metrics.dnip.jobsInQueue}</p>
      </section>
    </div>
  );
}

export default AdminDashboard;
