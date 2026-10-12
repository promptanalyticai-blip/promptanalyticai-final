import DashboardShell from "@/components/dashboard/DashboardShell";
import CriticalCard from "@/components/dashboard/cards/CriticalCard";
import WarningCard from "@/components/dashboard/cards/WarningCard";
import StableCard from "@/components/dashboard/cards/StableCard";
import WOWCritical from "@/components/dashboard/wow/WOWCritical";
import WOWThreat from "@/components/dashboard/wow/WOWThreat";

export default function AlertsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Alertas DNIP
        </h2>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CriticalCard count={3} label="Active Incidents" />
          <WarningCard count={2} label="Moderate Issues" />
          <StableCard count={5} label="Optimal Zones" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WOWCritical />
          <WOWThreat />
        </section>
      </div>
    </DashboardShell>
  );
}
