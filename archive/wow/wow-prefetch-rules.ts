// lib/wow-prefetch-rules.ts

export function getWOWPrefetchRules(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const rules = {
    prefetchSignals: false,
    prefetchDecisions: false,
    prefetchActions: false,
    prefetchUsers: false,
    prefetchRoles: false,
  };

  // OWNER → prefetch total
  if (role === "owner") {
    rules.prefetchSignals = true;
    rules.prefetchDecisions = true;
    rules.prefetchActions = true;
    rules.prefetchUsers = true;
    rules.prefetchRoles = true;
  }

  // ADMIN → prefetch operativo
  if (role === "admin") {
    rules.prefetchActions = true;
    rules.prefetchUsers = true;
  }

  // MANAGER → prefetch de gestión
  if (role === "manager") {
    rules.prefetchDecisions = true;
    rules.prefetchActions = true;
  }

  // ANALYST → prefetch técnico
  if (role === "analyst") {
    rules.prefetchSignals = true;
    rules.prefetchDecisions = true;
  }

  // ENTERPRISE → prefetch extendido
  if (level === "enterprise") {
    Object.keys(rules).forEach((key) => {
      rules[key] = true;
    });
  }

  return rules;
}
