import DashboardShell from "@/components/tech/DashboardShell";

export default function StreamsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Streams
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Flujo de señales en tiempo real. Aquí se monitorean streams activos,
            eventos continuos y señales procesadas por el motor DNIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
