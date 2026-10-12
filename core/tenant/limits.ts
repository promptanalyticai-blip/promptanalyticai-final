//core/tenant/limits.ts
let tenantLimitsStore: Record<string, any> = {};

export const getTenantLimits = (tenantId: string) => {
  if (!tenantLimitsStore[tenantId]) {
    tenantLimitsStore[tenantId] = {
      maxSignals: 5000,
      maxActions: 2000,
      maxUsers: 50
    };
  }
  return tenantLimitsStore[tenantId];
};

export const updateTenantLimits = (tenantId: string, limits: any) => {
  tenantLimitsStore[tenantId] = limits;
};
