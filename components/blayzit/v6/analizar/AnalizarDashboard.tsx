"use client";

import Section from "@ui/Section";
import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

import AnalyzeCharts from "./AnalyzeCharts";
import AnalyzeInsights from "./AnalyzeInsights";
import AnalyzeSummary from "./AnalyzeSummary";
import AnalyzeMetrics from "./AnalyzeMetrics";

export default function AnalizarDashboard() {
  const sample = {
    text: "Texto de ejemplo para análisis V6",
    events: 240,
    signalDeviation: 0.52,
    patterns: ["loop", "burst"],
  };

  return (
    <div className="space-y-10 fade-in">
      <Section title="Analizar V6 · ULTRA PRIME">
        <AnalyzeMetrics data={sample} />
        <AnalyzeCharts data={sample} />
        <AnalyzeInsights text={sample.text} />
        <AnalyzeSummary text={sample.text} />
      </Section>
    </div>
  );
}
