// lib/wow-decision-rules.ts

export function getWOWDecisionRules(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const rules = {
    autoCritical: false,
    autoHigh: false,
    autoMedium: false,
    autoLow: false,
    requireApproval: true,
  };

  // OWNER → decisiones automáticas en todo
  if (role === "owner") {
    rules.autoCritical = true;
    rules.autoHigh = true;
    rules.autoMedium = true;
    rules.autoLow = true;
    rules.requireApproval = false;
  }

  // ADMIN → decisiones operativas
  if (role === "admin") {
    rules.autoHigh = true;
    rules.autoMedium = true;
    rules.requireApproval = false;
  }

  // MANAGER → decisiones de gestión
  if (role === "manager") {
    rules.autoMedium = true;
  }

  // ANALYST → decisiones técnicas
  if (role === "analyst") {
    rules.autoCritical = true;
  }

  // ENTERPRISE → decisiones extendidas
  if (level === "enterprise") {
    rules.autoCritical = true;
    rules.autoHigh = true;
    rules.autoMedium = true;
  }

  return rules;
}
