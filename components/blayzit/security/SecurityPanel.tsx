"use client";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SubTitle from "@/components/ui/SubTitle";
import { ShieldCheck, AlertTriangle } from "lucide-react";
import { SecurityEngine } from "./SecurityEngine";

export default function SecurityPanel() {
  const engine = new SecurityEngine();
  const status = engine.getSecurityStatus();

  return (
    <Section title="Seguridad del Sistema">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <SubTitle>
            <ShieldCheck className="inline-block mr-2 text-green-600" />
            Estado General
          </SubTitle>
          <pre className="text-sm">{JSON.stringify(status.overview, null, 2)}</pre>
        </Card>

        <Card>
          <SubTitle>
            <AlertTriangle className="inline-block mr-2 text-yellow-600" />
            Riesgos Detectados
          </SubTitle>
          <pre className="text-sm">{JSON.stringify(status.risks, null, 2)}</pre>
        </Card>
      </div>
    </Section>
  );
}
