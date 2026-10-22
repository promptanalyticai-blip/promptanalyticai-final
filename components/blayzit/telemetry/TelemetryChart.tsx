"use client";

import { Line } from "react-chartjs-2";
import Card from "@/components/ui/Card";
import SubTitle from "@/components/ui/SubTitle";

export default function TelemetryChart() {
  const data = {
    labels: ["1m", "5m", "10m", "30m", "1h"],
    datasets: [
      {
        label: "Latencia (ms)",
        data: Array.from({ length: 5 }, () => Math.random() * 200),
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79,70,229,0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <Card>
      <SubTitle>Latencia en Tiempo Real</SubTitle>
      <Line data={data} />
    </Card>
  );
}
