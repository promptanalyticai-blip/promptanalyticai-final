//core/tenant/config.ts
export const getTenantConfig = (tenantId: string) => {
  return {
    id: tenantId,
    name: "Workspace",
    limits: {
      maxSignals: 5000,
      maxActions: 2000,
      maxUsers: 50
    },
    modes: {
      stability: true,
      critical: true,
      recovery: true,
      threatDetection: true,
      autoHealing: true,
      predictive: false
    }
  };
};

export const updateTenantConfig = (tenantId: string, config: any) => {
  console.log("Tenant config updated:", tenantId, config);
};
