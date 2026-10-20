"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function AdipPanel({
  automation,
  predictive,
  rules,
}: {
  automation: any;
  predictive: any;
  rules: any;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <SubTitle>Automation Engine</SubTitle>
        <pre className="text-xs">{JSON.stringify(automation, null, 2)}</pre>
      </Card>

      <Card>
        <SubTitle>Predictive Engine</SubTitle>
        <pre className="text-xs">{JSON.stringify(predictive, null, 2)}</pre>
      </Card>

      <Card>
        <SubTitle>Rule Engine</SubTitle>
        <pre className="text-xs">{JSON.stringify(rules, null, 2)}</pre>
      </Card>
    </div>
  );
}
