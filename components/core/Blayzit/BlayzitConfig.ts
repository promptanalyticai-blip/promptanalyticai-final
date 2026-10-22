export const BlayzitConfig = {
  version: "V6",
  theme: "light",
  telemetry: true,
  security: {
    enabled: true,
    mode: "enterprise",
  },
  audit: {
    enabled: true,
    retentionDays: 30,
  },
  updatedAt: new Date().toISOString(),
};
