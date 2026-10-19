"use client";

export default function MetricsGrid() {
  const cards = [
    { label: "Riesgo", value: "Bajo", detail: "3 eventos críticos activos", tone: "amber" },
    { label: "Latencia", value: "84ms", detail: "-8% vs ciclo anterior", tone: "blue" },
    { label: "Carga", value: "62%", detail: "Capacidad en rango óptimo", tone: "green" },
    { label: "Telemetría", value: "128 señales", detail: "Monitoreo continuo habilitado", tone: "slate" },
    { label: "IA Activa", value: "ON", detail: "Motor de análisis en tiempo real", tone: "purple" },
  ];

  const toneMap: Record<string, string> = {
    amber: "ring-amber-200/40",
    blue: "ring-blue-200/40",
    green: "ring-green-200/40",
    slate: "ring-slate-200/40",
    purple: "ring-purple-200/40",
  };

  return (
    <section className="w-full bg-transparent space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
          Módulos operativos
        </h2>
        <p className="text-slate-600 text-sm">
          Riesgo, latencia, carga, telemetría e IA en una vista unificada.
        </p>
      </div>

      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-3 
          xl:grid-cols-5 
          gap-6
        "
      >
        {cards.map((card) => (
          <div
            key={card.label}
            className="
              bg-white 
              rounded-2xl 
              shadow-[0_4px_20px_rgba(0,0,0,0.05)]
              border border-slate-200 
              p-5 
              relative
              overflow-hidden
              transition-all 
              duration-300 
              hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]
              hover:-translate-y-[3px]
            "
          >
            <div
              className={`
                absolute inset-0 
                pointer-events-none 
                rounded-2xl 
                ring-1 ${toneMap[card.tone]}
              `}
            />
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              {card.label}
            </p>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              {card.value}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              {card.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
