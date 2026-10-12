// lib/wow-stream-rules.ts

export function getWOWStreamRules(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const rules = {
    streamSignals: false,
    streamDecisions: false,
    streamActions: false,
    streamUsers: false,
    streamRoles: false,
  };

  // OWNER → streaming total
  if (role === "owner") {
    rules.streamSignals = true;
    rules.streamDecisions = true;
    rules.streamActions = true;
    rules.streamUsers = true;
    rules.streamRoles = true;
  }

  // ADMIN → streaming operativo
  if (role === "admin") {
    rules.streamActions = true;
    rules.streamUsers = true;
  }

  // MANAGER → streaming de gestión
  if (role === "manager") {
    rules.streamDecisions = true;
    rules.streamActions = true;
  }

  // ANALYST → streaming técnico
  if (role === "analyst") {
    rules.streamSignals = true;
    rules.streamDecisions = true;
  }

  // ENTERPRISE → streaming extendido
  if (level === "enterprise") {
    Object.keys(rules).forEach((key) => {
      rules[key] = true;
    });
  }

  return rules;
}
