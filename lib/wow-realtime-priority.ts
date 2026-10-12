// lib/wow-realtime-priority.ts

export function sortWOWSignals(signals: any[]) {
  const priorityMap: any = {
    critical: 5,
    high: 4,
    medium: 3,
    low: 2,
    info: 1,
  };

  return signals.sort((a, b) => {
    const pa = priorityMap[a.priority] || 1;
    const pb = priorityMap[b.priority] || 1;
    return pb - pa;
  });
}
