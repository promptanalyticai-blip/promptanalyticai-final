// lib/wow-cache-rules.ts

export function getWOWCacheRules(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const base = {
    dnip: 30000,     // 30s
    adip: 30000,
    blayzit: 30000,
    signals: 20000,
    decisions: 20000,
    actions: 15000,
    users: 60000,
    roles: 60000,
  };

  // OWNER → cache más largo
  if (role === "owner") {
    base.dnip = 60000;
    base.adip = 60000;
    base.blayzit = 60000;
  }

  // ADMIN → cache operativo
  if (role === "admin") {
    base.adip = 45000;
    base.users = 45000;
  }

  // ANALYST → cache corto (datos cambian mucho)
  if (role === "analyst") {
    base.signals = 10000;
    base.decisions = 15000;
  }

  // ENTERPRISE → cache más largo
  if (level === "enterprise") {
    Object.keys(base).forEach((key) => {
      base[key] += 20000;
    });
  }

  return base;
}
