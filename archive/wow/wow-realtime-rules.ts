// lib/wow-realtime-rules.ts

export function getWOWRealtimeRules(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const rules = {
    allowCritical: false,
    allowHigh: false,
    allowMedium: false,
    allowLow: false,
  };

  // OWNER → todas las señales
  if (role === "owner") {
    rules.allowCritical = true;
    rules.allowHigh = true;
    rules.allowMedium = true;
    rules.allowLow = true;
  }

  // ADMIN → operativas
  if (role === "admin") {
    rules.allowCritical = true;
    rules.allowHigh = true;
    rules.allowMedium = true;
  }

  // MANAGER → gestión
  if (role === "manager") {
    rules.allowHigh = true;
    rules.allowMedium = true;
  }

  // ANALYST → técnicas
  if (role === "analyst") {
    rules.allowCritical = true;
    rules.allowHigh = true;
  }

  // VIEWER → mínimas
  if (role === "viewer") {
    rules.allowLow = true;
  }

  // ENTERPRISE → todo habilitado
  if (level === "enterprise") {
    Object.keys(rules).forEach((key) => {
      rules[key] = true;
    });
  }

  return rules;
}
