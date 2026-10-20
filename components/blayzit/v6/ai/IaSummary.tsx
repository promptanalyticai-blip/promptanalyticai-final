"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";
import insightsV6 from "@blayzit/v6/ai/insights";

export default function IaSummary({ text }: { text: string }) {
  const insights = insightsV6(text);

  return (
    <Card>
      <SubTitle>Resumen Ejecutivo IA</SubTitle>
      <pre className="text-xs">{JSON.stringify(insights, null, 2)}</pre>
    </Card>
  );
}
