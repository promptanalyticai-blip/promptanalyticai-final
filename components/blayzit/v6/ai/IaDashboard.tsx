"use client";

import Section from "@ui/Section";
import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

import classifyV6 from "@blayzit/v6/ai/classify";
import embeddingsV6 from "@blayzit/v6/ai/embeddings";
import summarizeV6 from "@blayzit/v6/ai/summarize";
import insightsV6 from "@blayzit/v6/ai/insights";
import IaMetrics from "./IaMetrics";
import IaPanel from "./IaPanel";

export default function IaDashboard() {
  const sample = "Texto de ejemplo para IA V6";

  return (
    <div className="space-y-10 fade-in">
      <Section title="IA V6 · ULTRA PRIME">
        <IaMetrics text={sample} />
        <IaPanel text={sample} />
      </Section>
    </div>
  );
}
