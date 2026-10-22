type SecurityInput = {
  decisions: any[];
  automation: any;
  patterns: any;
  tags: any;
};

export function runSecurityEngine(payload: SecurityInput) {
  const riskScore =
    (payload.decisions?.reduce(
      (acc: number, d: any) => acc + (Number(d.level) || 0),
      0
    ) || 0) / Math.max(payload.decisions?.length || 1, 1);

  return {
    version: "V6",
    evaluatedAt: new Date().toISOString(),
    riskScore,
    hasAutomation: !!payload.automation,
    patternsCount: Array.isArray(payload.patterns)
      ? payload.patterns.length
      : 0,
    tagsCount: Array.isArray(payload.tags) ? payload.tags.length : 0,
    status: riskScore > 0.7 ? "high-risk" : riskScore > 0.3 ? "medium" : "low",
  };
}
