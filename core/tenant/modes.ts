//core/tenant/modes.ts
let tenantModesStore: Record<string, any> = {};

export const getTenantModes = (tenantId: string) => {
  if (!tenantModesStore[tenantId]) {
    tenantModesStore[tenantId] = {
      stability: true,
      critical: true,
      recovery: true,
      threatDetection: true,
      autoHealing: true,
      predictive: false
    };
  }
  return tenantModesStore[tenantId];
};

export const updateTenantMode = (tenantId: string, mode: string, value: boolean) => {
  if (!tenantModesStore[tenantId]) return;
  tenantModesStore[tenantId][mode] = value;
};
