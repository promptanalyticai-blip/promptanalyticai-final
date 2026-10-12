// lib/wow-performance.ts
// Carga principal de DNIP / ADIP / BLAYZIT + aplicación de WOW Security.

import { secureDNIP, secureADIP, secureBLAYZIT } from "./wow-security";

export async function loadWOWData(wow: any) {
  // En producción, aquí irían tus llamadas reales:
  // const dnipRes = await fetch("/api/dnip");
  // const adipRes = await fetch("/api/adip");
  // const blayzitRes = await fetch("/api/blayzit");
  //
  // const dnipRaw = await dnipRes.json();
  // const adipRaw = await adipRes.json();
  // const blayzitRaw = await blayzitRes.json();

  // Stub de datos para mantener el archivo completo y funcional:
  const dnipRaw = {
    signals: [
      { id: "s1", priority: "critical", sensitive: true, context: "performance" },
      { id: "s2", priority: "high", sensitive: false, context: "errors" },
    ],
    decisions: [
      { id: "d1", priority: "high", sensitive: true, context: "performance", message: "Escalar recursos" },
    ],
  };

  const adipRaw = {
    actions: [
      { priority: "high", sensitive: true, context: "performance", timestamp: Date.now() },
    ],
  };

  const blayzitRaw = {
    users: [
      { id: "u1", email: "owner@example.com", phone: "123456789", idNumber: "ABC123" },
    ],
    roles: [
      { id: "r1", name: "owner" },
    ],
  };

  const dnip = secureDNIP(wow, dnipRaw);
  const adip = secureADIP(wow, adipRaw);
  const blayzit = secureBLAYZIT(wow, blayzitRaw);

  return { dnip, adip, blayzit };
}
