import DashboardShell from "@/components/tech/DashboardShell";
import RevenueChart from "@/components/tech/charts/RevenueChart";

export default function RevenuePage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Revenue & Tendencias
        </h2>

        <section className="grid grid-cols-1 gap-6">
          <RevenueChart />
        </section>
      </div>
    </DashboardShell>
  );
}
