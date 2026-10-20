"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function DnipPanel({
  pattern,
  hybrid,
  risk,
  signal,
}: {
  pattern: any;
  hybrid: any;
  risk: any;
  signal: any;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <SubTitle>Pattern Engine</SubTitle>
        <pre className="text-xs">{JSON.stringify(pattern, null, 2)}</pre>
      </Card>

      <Card>
        <SubTitle>Hybrid Engine</SubTitle>
        <pre className="text-xs">{JSON.stringify(hybrid, null, 2)}</pre>
      </Card>

      <Card>
        <SubTitle>Risk Engine</SubTitle>
        <pre className="text-xs">{JSON.stringify(risk, null, 2)}</pre>
      </Card>

      <Card>
        <SubTitle>Signal Engine</SubTitle>
        <pre className="text-xs">{JSON.stringify(signal, null, 2)}</pre>
      </Card>
    </div>
  );
}
