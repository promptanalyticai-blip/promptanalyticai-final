// components/enterprise/enterprise-create-workspace.tsx
import React from "react";

type EnterpriseCreateWorkspaceProps = {
  companyId: string;
};

export function EnterpriseCreateWorkspace({ companyId }: EnterpriseCreateWorkspaceProps) {
  return (
    <div className="rounded-lg border bg-card p-4 text-sm">
      Crear workspace para compañía: <span className="font-mono">{companyId}</span>
    </div>
  );
}
