"use client";

import Section from "@ui/Section";
import Card from "@ui/Card";
import TelemetryPanel from "@blayzit/telemetry/TelemetryPanel";

export default function TelemetryPage() {
  return (
    <Section title="Telemetry Overview">
      <Card>
        <TelemetryPanel />
      </Card>
    </Section>
  );
}
