#!/bin/bash

echo "🔥 PURGA FINAL — ELIMINANDO ARCHIVOS RESTANTES..."

# BLAYZIT VIEJO
rm -f components/blayzit/AuditLogPanel.tsx
rm -f components/blayzit/BlayzitIntelligencePanel.tsx
rm -f components/blayzit/BlayzitShell.tsx
rm -f components/blayzit/SecurityRiskPanel.tsx
rm -f components/blayzit/TelemetryDashboard.tsx

rm -rf components/blayzit/auditoria
rm -rf components/blayzit/config
rm -rf components/blayzit/performance

# DNIP VIEJO
rm -f components/blayzit/v6/dnip/DnipMetrics.tsx
rm -f components/blayzit/v6/dnip/DnipPanel.tsx
rm -f components/blayzit/v6/dnip/DnipSummary.tsx

# UI VIEJO
rm -f components/ui/theme-provider-wrapper.tsx
rm -f components/ui/topbar.tsx

# CORE VIEJO
rm -rf core/audit

# WOW VIEJO
rm -f lib/wow-error-handler.ts
rm -f lib/wow-sync.ts
rm -f lib/wow-audit.ts
rm -f lib/wow-notifications.ts
rm -f lib/wow-decision-flow.ts
rm -f lib/wow-stream.ts
rm -f lib/wow-threat-flow.ts

# SUPABASE VIEJO
rm -rf supabase/functions/adip-agent
rm -rf supabase/functions/adip-analytics
rm -rf supabase/functions/adip-backup
rm -rf supabase/functions/adip-security
rm -rf supabase/functions/export-cron

echo "✨ PURGA FINAL COMPLETA — SOLO QUEDA BLAYZIT V6 WOW ULTRA PRIME"

