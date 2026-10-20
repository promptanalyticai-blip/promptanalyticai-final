"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

import classifyV6 from "@blayzit/v6/ai/classify";
import embeddingsV6 from "@blayzit/v6/ai/embeddings";

export default function IaMetrics({ text }: { text: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <SubTitle>Clasificación</SubTitle>
        <pre className="text-xs">
          {JSON.stringify(classifyV6(text), null, 2)}
        </pre>
      </Card>

      <Card>
        <SubTitle>Embeddings</SubTitle>
        <pre className="text-xs">
          {JSON.stringify(embeddingsV6(text), null, 2)}
        </pre>
      </Card>
    </div>
  );
}
