import DashboardShell from "@/components/dashboard/DashboardShell";
import WOWCritical from "@/components/dashboard/wow/WOWCritical";
import WOWRecovery from "@/components/dashboard/wow/WOWRecovery";
import WOWThreat from "@/components/dashboard/wow/WOWThreat";

export default function WOWPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          WOW Engine — Estados del Sistema
        </h2>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <WOWCritical />
          <WOWRecovery />
          <WOWThreat />
        </section>
      </div>
    </DashboardShell>
  );
}
