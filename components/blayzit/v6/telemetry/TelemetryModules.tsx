"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function TelemetryModules({ modules }: { modules: any[] }) {
  return (
    <Card>
      <SubTitle>Módulos Recientes</SubTitle>
      <ul className="space-y-2 text-xs text-slate-700">
        {modules.map((m, i) => (
          <li key={i} className="border rounded-md p-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">{m.name}</span>
              <span className="text-slate-500">{m.timestamp}</span>
            </div>
            <span className="text-slate-600">
              Duración: <strong>{m.durationMs} ms</strong>
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
