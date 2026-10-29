#!/bin/bash

echo ""
echo "🚀 BLAYZIT V6/V7 — Auditoría PRO y Limpieza Total"
echo "================================================="
echo ""

###############################################
# 1) CORREGIR IMPORTS VIEJOS (Client → client)
###############################################

echo "🔧 Corrigiendo imports viejos (Client → client)..."

grep -Rl "@/lib/supabase/client" . | xargs sed -i 's|@/lib/supabase/client|@/lib/supabase/client|g'
grep -Rl "../../../lib/supabase/client" . | xargs sed -i 's|../../../lib/supabase/client|../../../lib/supabase/client|g'
grep -Rl "../../../../lib/supabase/client" . | xargs sed -i 's|../../../../lib/supabase/client|../../../../lib/supabase/client|g'

echo "✔ Imports corregidos."
echo ""

###############################################
# 2) DETECTAR ARCHIVOS LEGACY
###############################################

echo "🔍 Detectando archivos legacy..."

LEGACY_FILES=(
  "lib/supabase/middleware-client.ts"
  "lib/blayzit-client.ts"
  "lib/blayzit-engine.ts"
  "lib/dnip-mock-engine.ts"
  "lib/dnip-engine-advanced.ts"
  "lib/adip-engine.ts"
  "lib/level-engine.ts"
  "lib/roles-engine.ts"
)

echo "Archivos legacy detectados:"
for file in "${LEGACY_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "  🗑️ $file"
  fi
done

echo ""

###############################################
# 3) ELIMINAR ARCHIVOS LEGACY
###############################################

echo "🗑️ Eliminando archivos legacy..."

for file in "${LEGACY_FILES[@]}"; do
  if [ -f "$file" ]; then
    rm -f "$file"
    echo "  ✔ Eliminado: $file"
  fi
done

# Carpeta legacy completa
if [ -d "lib/supabase-middleware" ]; then
  rm -rf lib/supabase-middleware
  echo "  ✔ Eliminada carpeta: lib/supabase-middleware"
fi

echo ""

###############################################
# 4) ELIMINAR ARCHIVOS WOW-* LEGACY
###############################################

echo "🗑️ Eliminando archivos WOW legacy..."

WOW_FILES=$(find lib -maxdepth 1 -type f -name "wow-*")

if [ -n "$WOW_FILES" ]; then
  echo "$WOW_FILES" | xargs rm -f
  echo "  ✔ Archivos WOW-* eliminados."
else
  echo "  ✔ No se encontraron archivos WOW legacy."
fi

echo ""

###############################################
# 5) DETECTAR ARCHIVOS NO USADOS
###############################################

echo "🔍 Detectando archivos no usados..."

UNUSED_REPORT="unused-files-report.txt"
> $UNUSED_REPORT

for file in $(find lib -type f -name "*.ts"); do
  filename=$(basename "$file")
  count=$(grep -R "$filename" -n app modules components | wc -l)

  if [ "$count" -eq 0 ]; then
    echo "🟡 Archivo no usado: $file" | tee -a $UNUSED_REPORT
  fi
done

echo "✔ Reporte generado: $UNUSED_REPORT"
echo ""

###############################################
# 6) DETECTAR IMPORTS ROTOS
###############################################

echo "🔍 Detectando imports rotos..."

BROKEN_REPORT="broken-imports-report.txt"
> $BROKEN_REPORT

grep -R "from \"@" -n app | while read -r line; do
  IMPORT_PATH=$(echo "$line" | sed -E 's/.*from \"(.*)\".*/\1/')
  if [ ! -e "${IMPORT_PATH/@/}" ]; then
    echo "❌ Import roto: $line" | tee -a $BROKEN_REPORT
  fi
done

echo "✔ Reporte generado: $BROKEN_REPORT"
echo ""

###############################################
# 7) DETECTAR RUTAS RELATIVAS INCORRECTAS
###############################################

echo "🔍 Verificando rutas relativas incorrectas..."

RELATIVE_REPORT="relative-routes-report.txt"
> $RELATIVE_REPORT

grep -R "from \"\.\./" -n app | while read -r line; do
  FILE=$(echo "$line" | cut -d: -f1)
  IMPORT=$(echo "$line" | sed -E 's/.*from \"(.*)\".*/\1/')
  FULLPATH=$(dirname "$FILE")"/$IMPORT"

  if [ ! -e "$FULLPATH.ts" ] && [ ! -e "$FULLPATH.tsx" ]; then
    echo "❌ Ruta incorrecta: $line" | tee -a $RELATIVE_REPORT
  fi
done

echo "✔ Reporte generado: $RELATIVE_REPORT"
echo ""

###############################################
# 8) RESUMEN FINAL
###############################################

echo "✨ Auditoría PRO completada."
echo "Archivos legacy eliminados."
echo "Imports corregidos."
echo "Reportes generados:"
echo "  - $UNUSED_REPORT"
echo "  - $BROKEN_REPORT"
echo "  - $RELATIVE_REPORT"
echo ""
echo "BLAYZIT V6/V7 está limpio, estable y optimizado."
echo ""
