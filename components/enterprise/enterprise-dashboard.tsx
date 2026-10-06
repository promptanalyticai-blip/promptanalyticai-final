// components/enterprise/enterprise-dashboard.tsx
import EnterpriseSection from "./enterprise-section";
import EnterpriseOverview from "./enterprise-overview";
import EnterpriseCreateCompany from "./enterprise-create-company";
import EnterpriseCreateWorkspace from "./enterprise-create-workspace";
import EnterpriseBindDnip from "./enterprise-bind-dnip";

export function EnterpriseDashboard() {
  return (
    <div className="space-y-4">
      <EnterpriseSection title="Overview">
        <EnterpriseOverview
          user={{ id: "1", name: "User" }}
          companyRole="admin"
          company={{ id: "1", name: "Company" }}
          workspace={{ id: "1", name: "Workspace" }}
          workspaceRole="owner"
        />
      </EnterpriseSection>

      <EnterpriseSection title="Acciones">
        <EnterpriseCreateCompany userId="1" />
        <EnterpriseCreateWorkspace companyId="1" />
        <EnterpriseBindDnip workspaceId="1" />
      </EnterpriseSection>
    </div>
  );
}

export default EnterpriseDashboard;
