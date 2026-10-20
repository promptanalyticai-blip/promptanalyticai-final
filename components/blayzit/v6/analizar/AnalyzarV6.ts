"use client";

import Section from "@ui/Section";
import Insights from "@blayzit/v6/ai/insights";
import Summarize from "@blayzit/v6/ai/summarize";
import ChartsPanel from "@blayzit/telemetry/TelemetryPanel";

export default function AnalyzarV6() {
  return (
    <div className="space-y-6">
      <Section title="Charts & Metrics">
        <ChartsPanel />
      </Section>

      <Section title="Insights Engine">
        <Insights />
      </Section>

      <Section title="Summaries">
        <Summarize />
      </Section>
    </div>
  );
}
