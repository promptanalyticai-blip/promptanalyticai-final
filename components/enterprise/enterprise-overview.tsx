// components/enterprise/enterprise-overview.tsx
import React from "react";

type EnterpriseOverviewProps = {
  user: { id: string; name: string };
  companyRole: string;
  company: { id: string; name: string } | null;
  workspace: { id: string; name: string } | null;
  workspaceRole: string | null;
  dnip?: unknown;
};

export function EnterpriseOverview({
  user,
  companyRole,
  company,
  workspace,
  workspaceRole,
}: EnterpriseOverviewProps) {
  return (
    <div className="space-y-3 text-sm">
      <p>
        Usuario: <span className="font-mono">{user.name}</span>
      </p>
      <p>Rol en compañía: {companyRole}</p>
      {company && <p>Compañía: {company.name}</p>}
      {workspace && <p>Workspace: {workspace.name}</p>}
      {workspaceRole && <p>Rol en workspace: {workspaceRole}</p>}
    </div>
  );
}
