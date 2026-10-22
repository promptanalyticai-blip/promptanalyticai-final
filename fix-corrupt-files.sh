#!/bin/bash

# Eliminar archivos corruptos que rompen TypeScript
rm -f components/blayzit/intelligence/BlayzitIntelligenceBridge.ts
rm -f components/blayzit/v6/ai/IaMetrics.ts
rm -f components/blayzit/v6/analizar/AnalyzarV6.ts
rm -f components/blayzit/v6/audit/AuditMetrics.ts
rm -f components/blayzit/v6/security/SecurityMetrics.ts
rm -f components/blayzit/v6/security/ingestGuard.ts

echo "Archivos corruptos eliminados correctamente."

