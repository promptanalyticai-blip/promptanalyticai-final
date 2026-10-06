// components/enterprise/enterprise-create-company.tsx
import React from "react";

type EnterpriseCreateCompanyProps = {
  userId: string;
};

export function EnterpriseCreateCompany({ userId }: EnterpriseCreateCompanyProps) {
  return (
    <div className="rounded-lg border bg-card p-4 text-sm">
      Crear compañía para usuario: <span className="font-mono">{userId}</span>
    </div>
  );
}
