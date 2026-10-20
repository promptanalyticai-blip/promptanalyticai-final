"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function AdipMetrics({
  automation,
  predictive,
  rules,
}: {
  automation: any;
  predictive: any;
  rules: any;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <SubTitle>Automations</SubTitle>
        <p className="text-sm text-slate-700">
          Total: <strong>{automation.totalRuns ?? 0}</strong>
        </p>
      </Card>

      <Card>
        <SubTitle>Rules</SubTitle>
        <p className="text-sm text-slate-700">
          Activas: <strong>{rules.activeRules?.length ?? 0}</strong>
        </p>
      </Card>

      <Card>
        <SubTitle>Predictive Score</SubTitle>
        <p className="text-sm text-slate-700">
          Score promedio:{" "}
          <strong>{predictive.averageScore?.toFixed?.(2) ?? "N/A"}</strong>
        </p>
      </Card>

      <Card>
        <SubTitle>Estado</SubTitle>
        <p className="text-sm text-slate-700">
          <strong>{automation.status ?? "unknown"}</strong>
        </p>
      </Card>
    </div>
  );
}
