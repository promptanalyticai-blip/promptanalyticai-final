// components/enterprise/enterprise-overview.tsx
type EnterpriseOverviewProps = {
  user: { id: string; name: string };
  companyRole: string;
  company: { id: string; name: string } | null;
  workspace: { id: string; name: string } | null;
  workspaceRole: string | null;
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
      <p>Usuario: {user.name}</p>
      <p>Rol en compañía: {companyRole}</p>
      {company && <p>Compañía: {company.name}</p>}
      {workspace && <p>Workspace: {workspace.name}</p>}
      {workspaceRole && <p>Rol en workspace: {workspaceRole}</p>}
    </div>
  );
}

export default EnterpriseOverview;
