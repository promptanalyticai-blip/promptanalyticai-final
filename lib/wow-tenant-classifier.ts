// lib/wow-tenant-classifier.ts

export function classifyWOWTenant(tenant: any) {
  const industry = tenant?.industry || "general";
  const size = tenant?.size || "small";
  const maturity = tenant?.maturity || "low";

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
