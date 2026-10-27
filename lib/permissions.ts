export function canUsePremium(plan: string) {
  return plan === "premium" || plan === "enterprise";
}

export function canUseEnterprise(plan: string) {
  return plan === "enterprise";
}
