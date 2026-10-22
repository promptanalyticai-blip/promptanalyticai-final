"use client";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SubTitle from "@/components/ui/SubTitle";
import { Layers } from "lucide-react";

export default function VersionsPanel() {
  const versions = [
    { version: "1.0.0", date: "2024-01-10" },
    { version: "1.1.0", date: "2024-03-22" },
    { version: "2.0.0", date: "2025-07-15" },
    { version: "2.1.0", date: "2026-02-01" },
  ];

  return (
    <Section title="Versiones del Sistema">
      <Card>
        <SubTitle>
          <Layers className="inline-block mr-2 text-indigo-600" />
          Historial de Versiones
        </SubTitle>

        <ul className="text-sm space-y-2">
          {versions.map((v, i) => (
            <li key={i} className="flex justify-between">
              <span>{v.version}</span>
              <span className="text-gray-500">{v.date}</span>
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}
