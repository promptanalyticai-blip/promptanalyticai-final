"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

import summarizeV6 from "@blayzit/v6/ai/summarize";
import insightsV6 from "@blayzit/v6/ai/insights";

export default function IaPanel({ text }: { text: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <SubTitle>Resumen</SubTitle>
        <pre className="text-xs">
          {JSON.stringify(summarizeV6(text), null, 2)}
        </pre>
      </Card>

      <Card>
        <SubTitle>Insights</SubTitle>
        <pre className="text-xs">
          {JSON.stringify(insightsV6(text), null, 2)}
        </pre>
      </Card>
    </div>
  );
}
