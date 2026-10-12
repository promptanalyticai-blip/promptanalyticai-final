//lib/wow-dialogs.ts
export function getWOWDialog(wow: any, action: string) {
  const tones = {
    executive: {
      icon: "⭐",
      title: "Confirmación Ejecutiva",
      confirmLabel: "Aprobar",
      cancelLabel: "Cancelar",
      style: "text-yellow-300 bg-yellow-900/20 border-yellow-300/30",
    },
    operational: {
      icon: "⚙️",
      title: "Acción Operativa",
      confirmLabel: "Proceder",
      cancelLabel: "Cancelar",
      style: "text-green-300 bg-green-900/20 border-green-300/30",
    },
    technical: {
      icon: "📊",
      title: "Validación Técnica",
      confirmLabel: "Confirmar",
      cancelLabel: "Cancelar",
      style: "text-indigo-300 bg-indigo-900/20 border-indigo-300/30",
    },
    light: {
      icon: "💡",
      title: "Confirmación",
      confirmLabel: "Aceptar",
      cancelLabel: "Cancelar",
      style: "text-blue-700 bg-blue-100 border-blue-300",
    },
  };

  const tone = tones[wow.tone];

  return {
    icon: tone.icon,
    title: tone.title,
    message: getDialogMessage(wow, action),
    confirmLabel: tone.confirmLabel,
    cancelLabel: tone.cancelLabel,
    style: tone.style,
  };
}

function getDialogMessage(wow: any, action: string) {
  const messages = {
    deleteUser: {
      executive: "¿Deseas eliminar este usuario? Esta acción impacta la estructura organizacional.",
      operational: "¿Eliminar usuario? Afectará permisos y flujos operativos.",
      technical: "¿Confirmar eliminación del usuario? Se perderán sus registros técnicos.",
      light: "¿Quieres eliminar este usuario?",
    },
    runDNIP: {
      executive: "¿Deseas procesar señales estratégicas?",
      operational: "¿Procesar señales operativas?",
      technical: "¿Ejecutar análisis técnico de señales?",
      light: "¿Procesar señales?",
    },
    runADIP: {
      executive: "¿Deseas ejecutar acciones corporativas?",
      operational: "¿Ejecutar acciones operativas?",
      technical: "¿Ejecutar acciones técnicas?",
      light: "¿Ejecutar acciones?",
    },
  };

  const tone = wow.tone;
  return messages[action]?.[tone] || "¿Confirmar acción?";
}
