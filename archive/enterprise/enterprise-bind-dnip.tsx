// components/enterprise/enterprise-bind-dnip.tsx
type EnterpriseBindDnipProps = {
  workspaceId: string;
};

export function EnterpriseBindDnip({ workspaceId }: EnterpriseBindDnipProps) {
  return (
    <div className="rounded-lg border bg-card p-4 text-sm">
      Vincular DNIP al workspace: <span className="font-mono">{workspaceId}</span>
    </div>
  );
}

export default EnterpriseBindDnip;
