import DashboardShell from "@/components/dashboard/DashboardShell";
import ExportUniversal from "@/components/dashboard/export/ExportUniversal";

export default function ExportPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Exportación Universal
        </h2>

        <ExportUniversal />
      </div>
    </DashboardShell>
  );
}
