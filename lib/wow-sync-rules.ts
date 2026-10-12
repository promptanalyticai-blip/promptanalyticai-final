// lib/wow-sync-rules.ts

export function getWOWSyncRules(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const rules = {
    syncSignals: false,
    syncDecisions: false,
    syncActions: false,
    syncUsers: false,
    syncRoles: false,
  };

  // OWNER → sincronización total
  if (role === "owner") {
    rules.syncSignals = true;
    rules.syncDecisions = true;
    rules.syncActions = true;
    rules.syncUsers = true;
    rules.syncRoles = true;
  }

  // ADMIN → sincronización operativa
  if (role === "admin") {
    rules.syncActions = true;
    rules.syncUsers = true;
  }

  // MANAGER → sincronización de gestión
  if (role === "manager") {
    rules.syncDecisions = true;
    rules.syncActions = true;
  }

  // ANALYST → sincronización técnica
  if (role === "analyst") {
    rules.syncSignals = true;
    rules.syncDecisions = true;
  }

  // ENTERPRISE → sincronización extendida
  if (level === "enterprise") {
    Object.keys(rules).forEach((key) => {
      rules[key] = true;
    });
  }

  return rules;
}
