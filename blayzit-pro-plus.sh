#!/bin/bash

echo ""
echo "🚀 BLAYZIT V6/V7 — Auditoría PRO PLUS (solo lectura, cero riesgo)"
echo "================================================================="
echo ""

###############################################
# 1) RESUMEN DE IMPORTS ROTOS
###############################################

echo "🔍 Analizando imports rotos (sin modificar nada)..."

BROKEN_REPORT="broken-imports-report.txt"
RELATIVE_REPORT="relative-routes-report.txt"
UNUSED_REPORT="unused-files-report.txt"

echo "" > "$BROKEN_REPORT"
echo "" > "$RELATIVE_REPORT"
echo "" > "$UNUSED_REPORT"

echo "✔ Usando reportes existentes si ya fueron generados."
echo ""

###############################################
# 2) MAPA DE COMPONENTES BLAYZIT V6
###############################################

echo "🗺️ Mapeando estructura de componentes BLAYZIT V6..."

COMPONENTS_REPORT="components-structure-report.txt"
echo "" > "$COMPONENTS_REPORT"

echo "📁 Estructura real de components/blayzit/v6:" | tee -a "$COMPONENTS_REPORT"
find components/blayzit/v6 -maxdepth 3 -type f -name "*.tsx" | tee -a "$COMPONENTS_REPORT"

echo ""
echo "✔ Mapa de componentes generado en: $COMPONENTS_REPORT"
echo ""

###############################################
# 3) SUGERENCIAS DE RUTAS PARA IMPORTS ROTOS
###############################################

echo "🧠 Generando sugerencias de rutas para imports rotos (solo reporte)..."

SUGGESTIONS_REPORT="import-suggestions-report.txt"
echo "" > "$SUGGESTIONS_REPORT"

# Tomamos cada import roto del reporte existente
if [ -f "$BROKEN_REPORT" ]; then
  while read -r line; do
    FILE=$(echo "$line" | cut -d: -f1)
    IMPORT_PATH=$(echo "$line" | sed -E 's/.*from \"(.*)\".*/\1/')
    BASENAME=$(basename "$IMPORT_PATH")

    echo "❌ Import roto: $line" >> "$SUGGESTIONS_REPORT"

    # Buscar posibles coincidencias por nombre de archivo
    MATCHES=$(find components lib modules app -type f -name "${BASENAME}.tsx" -o -name "${BASENAME}.ts")

    if [ -n "$MATCHES" ]; then
      echo "   🔎 Posibles rutas reales para '${BASENAME}':" >> "$SUGGESTIONS_REPORT"
      echo "$MATCHES" | sed 's/^/   ➜ /' >> "$SUGGESTIONS_REPORT"
    else
      echo "   ⚠ No se encontraron coincidencias para '${BASENAME}'" >> "$SUGGESTIONS_REPORT"
    fi

    echo "" >> "$SUGGESTIONS_REPORT"
  done < "$BROKEN_REPORT"
else
  echo "⚠ No se encontró broken-imports-report.txt. Ejecuta primero blayzit-pro-clean.sh." | tee -a "$SUGGESTIONS_REPORT"
fi

echo "✔ Sugerencias de rutas generadas en: $SUGGESTIONS_REPORT"
echo ""

###############################################
# 4) ARCHIVOS NO USADOS (REVISIÓN MANUAL)
###############################################

echo "🟡 Revisando archivos no usados (solo reporte)..."

if [ -f "$UNUSED_REPORT" ]; then
  echo "📄 Archivos marcados como no usados en $UNUSED_REPORT:"
  cat "$UNUSED_REPORT"
else
  echo "⚠ No se encontró unused-files-report.txt. Ejecuta primero blayzit-pro-clean.sh."
fi

echo ""

###############################################
# 5) RESUMEN FINAL
###############################################

echo "✨ Auditoría PRO PLUS completada (solo lectura, cero cambios)."
echo "Reportes disponibles:"
echo "  - $BROKEN_REPORT        (imports rotos)"
echo "  - $RELATIVE_REPORT      (rutas relativas incorrectas)"
echo "  - $UNUSED_REPORT        (archivos no usados)"
echo "  - $COMPONENTS_REPORT    (mapa de components BLAYZIT V6)"
echo "  - $SUGGESTIONS_REPORT   (sugerencias de rutas para imports rotos)"
echo ""
echo "Ahora puedes corregir manualmente, con total control, usando estos reportes como guía."
echo ""
