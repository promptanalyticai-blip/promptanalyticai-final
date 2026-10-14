//app/dashboard/components/TenantSelector.tsx
"use client";

import { useDashboardTenant } from "../state/context";

const TENANTS = ["tenant-A", "tenant-B", "tenant-C"];

export default function TenantSelector() {
  const { tenantId, setTenantId } = useDashboardTenant();

  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-900/70 px-3 py-2 border border-slate-700 shadow-sm">
      <span className="text-xs font-medium text-slate-300">Tenant activo</span>

      <select
        className="rounded-md bg-slate-950 px-2 py-1 text-xs text-slate-100 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500"
        value={tenantId}
        onChange={(e) => setTenantId(e.target.value)}
      >
        {TENANTS.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}
