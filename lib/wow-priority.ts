// lib/wow-priority.ts

export function getWOWPriority(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const priority = {
    dnip: 3,
    adip: 2,
    blayzit: 1,
    signals: 3,
    decisions: 3,
    actions: 2,
    users: 1,
    roles: 1,
  };

  // OWNER → máxima prioridad en todo
  if (role === "owner") {
    priority.dnip = 5;
    priority.adip = 4;
    priority.blayzit = 3;
    priority.signals = 5;
    priority.decisions = 5;
    priority.actions = 4;
  }

  // ADMIN → prioridad operativa
  if (role === "admin") {
    priority.adip = 5;
    priority.blayzit = 4;
    priority.dnip = 3;
    priority.actions = 5;
    priority.users = 4;
  }

  // MANAGER → prioridad de gestión
  if (role === "manager") {
    priority.dnip = 4;
    priority.adip = 4;
    priority.decisions = 4;
    priority.actions = 4;
  }

  // ANALYST → prioridad técnica
  if (role === "analyst") {
    priority.signals = 5;
    priority.decisions = 5;
    priority.dnip = 4;
  }

  // VIEWER → prioridad mínima
  if (role === "viewer") {
    priority.signals = 3;
    priority.dnip = 3;
  }

  // ENTERPRISE → todo más rápido
  if (level === "enterprise") {
    Object.keys(priority).forEach((key) => {
      priority[key] += 1;
    });
  }

  return priority;
}
