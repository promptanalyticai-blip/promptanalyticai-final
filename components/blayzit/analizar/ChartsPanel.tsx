"use client";

import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function ChartsPanel({ analysis }: { analysis: any }) {
  const risk = analysis.signals.dnip.riskLevel;
  const latency = analysis.signals.dnip.latency;
  const load = analysis.signals.dnip.systemLoad;

  const barData = {
    labels: ["Riesgo", "Latencia", "Carga"],
    datasets: [
      {
        label: "Indicadores DNIP",
        data: [risk * 100, latency, load],
        backgroundColor: ["#2563eb", "#f97316", "#22c55e"],
      },
    ],
  };

  const lineData = {
    labels: ["Riesgo", "Latencia", "Carga"],
    datasets: [
      {
        label: "Tendencia",
        data: [risk * 100, latency, load],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
      },
    ],
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      <h2 className="text-lg font-semibold text-slate-900">
        Gráficos del análisis
      </h2>

      <div className="h-48">
        <Bar data={barData} />
      </div>

      <div className="h-48">
        <Line data={lineData} />
      </div>
    </div>
  );
}
