// modules/adip/core/roles.ts
const ROLES: Record<string, string[]> = {
  owner: ["manage_all", "manage_users", "view_reports"],
  admin: ["manage_users", "view_reports"],
  user: ["view_own"],
};

export function getPermissionsForRole(role: string): string[] {
  return ROLES[role] ?? [];
}

export function hasPermission(role: string, permission: string): boolean {
  return (ROLES[role] ?? []).includes(permission);
}
