// lib/wow-context.ts
// Contexto base WOW: user, tenant y objeto wow listo para seguridad e inteligencia.

type RawUser = {
  id: string;
  email: string;
  role?: string;
  level?: string;
};

type RawTenant = {
  id: string;
  name: string;
  industry?: string;
  size?: "small" | "medium" | "large";
  maturity?: "low" | "medium" | "high";
};

export async function getWOWContext() {
  // En producción, aquí irían tus llamadas reales (Supabase, etc.)
  // Aquí dejamos un stub claro para que lo conectes a tu backend.

  const user: RawUser = {
    id: "user-1",
    email: "user@example.com",
    role: "owner",
    level: "enterprise",
  };

  const tenant: RawTenant = {
    id: "tenant-1",
    name: "Demo Tenant",
    industry: "technology",
    size: "medium",
    maturity: "high",
  };

  const tenantType = classifyTenantType(tenant);

  const wow = {
    role: user.role || "viewer",
    level: user.level || "individual",
    tenantId: tenant.id,
    tenantType,
  };

  return { wow, user, tenant };
}

function classifyTenantType(tenant: RawTenant): string {
  const industry = tenant.industry || "general";
  const size = tenant.size || "small";
  const maturity = tenant.maturity || "low";

  let type = "basic";

  if (industry === "finance") type = "finance";
  if (industry === "health") type = "health";
  if (industry === "retail") type = "retail";
  if (industry === "technology") type = "tech";

  if (size === "medium") type += "-mid";
  if (size === "large") type += "-enterprise";

  if (maturity === "high") type += "-advanced";

  return type;
}
