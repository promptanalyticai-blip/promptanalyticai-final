// lib/wow-action-rules.ts
// Reglas de ejecución de acciones por rol + nivel.

export function getWOWActionRules(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const rules = {
    allowCritical: false,
    allowHigh: false,
    allowMedium: false,
    allowLow: false,
    autoExecute: false,
  };

  if (role === "owner") {
    rules.allowCritical = true;
    rules.allowHigh = true;
    rules.allowMedium = true;
    rules.allowLow = true;
    rules.autoExecute = true;
  }

  if (role === "admin") {
    rules.allowHigh = true;
    rules.allowMedium = true;
    rules.allowLow = true;
    rules.autoExecute = true;
  }

  if (role === "manager") {
    rules.allowMedium = true;
    rules.allowLow = true;
  }

  if (role === "analyst") {
    rules.allowHigh = true;
  }

  if (role === "viewer") {
    // mínimo
  }

  if (level === "enterprise") {
    rules.allowCritical = true;
    rules.allowHigh = true;
    rules.allowMedium = true;
    rules.autoExecute = true;
  }

  return rules;
}
