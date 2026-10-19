export function hybridDNIP({ content }) {
  const risk = content.includes("error") ? 0.7 : 0.2;
  return risk;
}
