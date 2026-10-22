"use client";

import Section from "@ui/Section";
import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";
import { BlayzitCoreEngine } from "./BlayzitCoreEngine";

export default function BlayzitStatus() {
  const engine = new BlayzitCoreEngine({ system: "core-check" });
  const result = engine.run();

  return (
    <Section title="BLAYZIT Core Status">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <SubTitle>System Status</SubTitle>
          <pre>{JSON.stringify(result.status, null, 2)}</pre>
        </Card>

        <Card>
          <SubTitle>Score</SubTitle>
          <pre>{JSON.stringify(result.score, null, 2)}</pre>
        </Card>

        <Card className="md:col-span-2">
          <SubTitle>Summary</SubTitle>
          <p className="text-sm text-gray-700">{result.summary}</p>
        </Card>
      </div>
    </Section>
  );
}
