#!/bin/bash

echo "🔥 PURGA TOTAL BLAYZIT V6 WOW ULTRA PRIME — ELIMINANDO ARQUITECTURA VIEJA..."

# COMPONENTS — eliminar todo lo viejo
rm -rf components/adip
rm -rf components/dnip
rm -rf components/blayzit/intelligence
rm -rf components/blayzit/audit
rm -rf components/blayzit/security
rm -rf components/blayzit/storage
rm -rf components/blayzit/telemetry
rm -rf components/blayzit/notifications
rm -rf components/blayzit/analizar
rm -rf components/blayzit/adip
rm -rf components/blayzit/dnip
rm -rf components/blayzit/master
rm -rf components/blayzit/v5
rm -rf components/blayzit/v6/ai
rm -rf components/blayzit/v6/adip
rm -rf components/blayzit/v6/audit
rm -rf components/blayzit/v6/security
rm -rf components/blayzit/v6/telemetry
rm -rf components/blayzit/v6/upload
rm -rf components/blayzit/v6/analizar
rm -rf components/core
rm -rf components/tech
rm -rf components/wow

# APP — eliminar todo lo viejo
rm -rf app/blayzit/analizar
rm -rf app/blayzit/audit
rm -rf app/blayzit/security
rm -rf app/blayzit/storage
rm -rf app/blayzit/telemetry
rm -rf app/blayzit/notifications
rm -rf app/blayzit/adip
rm -rf app/blayzit/dnip
rm -rf app/blayzit/master
rm -rf app/blayzit/v5
rm -rf app/blayzit/enterprise
rm -rf app/blayzit/tech
rm -rf app/dnip
rm -rf app/adip
rm -rf app/telemetry
rm -rf app/security
rm -rf app/audit

# LIB — eliminar engines viejos
rm -rf lib/adip-engine
rm -rf lib/blayzit
rm -rf lib/wow-action-flow.ts
rm -rf lib/wow-audit.ts
rm -rf lib/wow-decision-flow.ts
rm -rf lib/wow-notifications.ts
rm -rf lib/wow-stream.ts
rm -rf lib/wow-threat-flow.ts
rm -rf lib/connection-engine.ts

# SUPABASE — eliminar funciones viejas
rm -rf supabase/functions/adip-agent
rm -rf supabase/functions/adip-analytics
rm -rf supabase/functions/adip-backup
rm -rf supabase/functions/adip-security
rm -rf supabase/functions/export-cron

echo "✨ PURGA COMPLETA — SOLO QUEDA BLAYZIT V6 WOW ULTRA PRIME"
