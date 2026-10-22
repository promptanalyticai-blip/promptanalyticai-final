"use client";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SubTitle from "@/components/ui/SubTitle";
import { FileSearch, ShieldAlert } from "lucide-react";
import { AuditEngine } from "./AuditEngine";

export default function AuditPanel() {
  const engine = new AuditEngine();
  const audit = engine.getAuditSummary();

  return (
    <Section title="Auditoría del Sistema">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <SubTitle>
            <FileSearch className="inline-block mr-2 text-blue-600" />
            Resumen
          </SubTitle>
          <pre className="text-sm">{JSON.stringify(audit.summary, null, 2)}</pre>
        </Card>

        <Card>
          <SubTitle>
            <ShieldAlert className="inline-block mr-2 text-red-600" />
            Alertas
          </SubTitle>
          <pre className="text-sm">{JSON.stringify(audit.alerts, null, 2)}</pre>
        </Card>
      </div>
    </Section>
  );
}
