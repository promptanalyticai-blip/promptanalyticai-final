"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";
import Summarize from "@blayzit/v6/ai/summarize";

export default function AnalyzeSummary({ text }: { text: string }) {
  const summary = Summarize(text);

  return (
    <Card>
      <SubTitle>Resumen Ejecutivo</SubTitle>
      <pre className="text-xs">{JSON.stringify(summary, null, 2)}</pre>
    </Card>
  );
}
