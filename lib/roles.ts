//lib/roles.ts
"use client";

//
// Librería de Roles Enterprise
//

export function userHasRole(session: any, role: string) {
  if (!session || !session.roles) return false;
  return session.roles.some((r: any) => r.role === role);
}

export function getUserRoles(session: any) {
  return session?.roles || [];
}
