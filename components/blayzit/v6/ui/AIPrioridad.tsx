"use client";

export default function AIPrioridad({ riesgos, senales, decisiones, predicciones }) {
  const prioridad = calcularPrioridad(riesgos, senales, decisiones, predicciones);

  return (
    <div className="mt-6 p-5 bg-rose-50 border border-rose-200 rounded-xl">
      <h3 className="text-lg font-semibold text-rose-700 mb-2">
        Prioridad del Día (IA)
      </h3>

      <p className="text-slate-800 text-sm leading-relaxed">
        {prioridad.descripcion}
      </p>

      <p className="text-rose-600 font-medium mt-2">
        {prioridad.alerta}
      </p>

      <p className="text-emerald-600 font-medium mt-2">
        {prioridad.recomendacion}
      </p>
    </div>
  );
}

/* MOTOR DE PRIORIDAD */
function calcularPrioridad(riesgos, senales, decisiones, predicciones) {
  const tendenciaRiesgos = tendencia(riesgos.map(r => r.nivel_num || 0));
  const tendenciaSenales = tendencia(senales.map(s => s.criticidad || 0));
  const tendenciaDecisiones = tendencia(decisiones.map(d => d.impacto || 0));
  const tendenciaIA = tendencia(predicciones.map(p => p.probabilidad || 0));

  // 1) Riesgos críticos → prioridad máxima
  const criticos = riesgos.filter(r => r.nivel === "critico").length;
  if (criticos > 0 && tendenciaRiesgos > 10) {
    return {
      descripcion: "Los riesgos críticos están aumentando y requieren atención inmediata.",
      alerta: `Alerta: tendencia de riesgos ${tendenciaRiesgos.toFixed(1)}% ↑`,
      recomendacion: "Recomendación: activar acciones preventivas y revisar módulos sensibles."
    };
  }

  // 2) Señales DNIP disparadas
  if (tendenciaSenales > 15) {
    return {
      descripcion: "Las señales DNIP están aumentando rápidamente.",
      alerta: `Alerta: señales DNIP ${tendenciaSenales.toFixed(1)}% ↑`,
      recomendacion: "Recomendación: activar pipeline inteligente para reducir señales."
    };
  }

  // 3) Decisiones rechazadas subiendo
  const rechazadas = decisiones.filter(d => d.estado === "rechazada").length;
  const aprobadas = decisiones.filter(d => d.estado === "aprobada").length;

  if (rechazadas > aprobadas && tendenciaDecisiones > 10) {
    return {
      descripcion: "Las decisiones rechazadas están aumentando y pueden afectar la estabilidad operativa.",
      alerta: `Alerta: decisiones rechazadas ${tendenciaDecisiones.toFixed(1)}% ↑`,
      recomendacion: "Recomendación: revisar criterios ADIP y ajustar parámetros."
    };
  }

  // 4) Predicciones IA anticipan evento
  if (tendenciaIA > 20) {
    return {
      descripcion: "La IA está anticipando un posible evento futuro.",
      alerta: `Alerta: predicciones IA ${tendenciaIA.toFixed(1)}% ↑`,
      recomendacion: "Recomendación: preparar acciones ADIP para responder a eventos anticipados."
    };
  }

  // 5) Todo estable
  return {
    descripcion: "El sistema se encuentra estable. No hay prioridades críticas hoy.",
    alerta: "Sin alertas.",
    recomendacion: "Mantener monitoreo normal."
  };
}

/* TENDENCIA */
function tendencia(data) {
  if (data.length < 2) return 0;
  const inicio = data[0];
  const fin = data[data.length - 1];
  return ((fin - inicio) / inicio) * 100;
}
