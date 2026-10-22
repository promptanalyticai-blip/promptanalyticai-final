"use client";

import Section from "@ui/Section";
import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";
import TelemetryPanel from "@blayzit/telemetry/TelemetryPanel";

export default function V5TelemetryDashboard() {
  return (
    <Section title="Telemetry Dashboard V5 (Legacy)">
      <Card>
        <SubTitle>Panel de Telemetría</SubTitle>
        <TelemetryPanel />
      </Card>

      <Card>
        <SubTitle>Notas</SubTitle>
        <p className="text-sm text-gray-600">
          Este dashboard es parte del sistema heredado V5, integrado
          completamente en la arquitectura WOW V6 sin romper nada.
        </p>
      </Card>
    </Section>
  );
}
