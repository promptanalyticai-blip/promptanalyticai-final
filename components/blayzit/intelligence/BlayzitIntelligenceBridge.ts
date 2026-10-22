"use client";

import Section from "@ui/Section";
import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";
import runBlayzitIntelligence from "./runBlayzitIntelligence";

export default function BlayzitIntelligence() {
  const sample = "Texto de ejemplo para inteligencia BLAYZIT V6.";

  const result = runBlayzitIntelligence(sample);

  return (
    <Section title="BLAYZIT Intelligence Engine">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <SubTitle>Clasificación</SubTitle>
          <pre>{JSON.stringify(result.classify, null, 2)}</pre>
        </Card>

        <Card>
          <SubTitle>Embeddings</SubTitle>
          <pre>{JSON.stringify(result.embeddings, null, 2)}</pre>
        </Card>

        <Card>
          <SubTitle>Resumen</SubTitle>
          <pre>{JSON.stringify(result.summarize, null, 2)}</pre>
        </Card>

        <Card>
          <SubTitle>Insights</SubTitle>
          <pre>{JSON.stringify(result.insights, null, 2)}</pre>
        </Card>
      </div>
    </Section>
  );
}
