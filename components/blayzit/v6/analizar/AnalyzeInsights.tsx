"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";
import Insights from "@blayzit/v6/ai/insights";

export default function AnalyzeInsights({ text }: { text: string }) {
  const insights = Insights(text);

  return (
    <Card>
      <SubTitle>Insights del Sistema</SubTitle>
      <pre className="text-xs">{JSON.stringify(insights, null, 2)}</pre>
    </Card>
  );
}
