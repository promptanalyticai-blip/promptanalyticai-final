export function ruleEngine(content: string) {
  return content.includes("admin") ? "privilegio" : "normal";
}
