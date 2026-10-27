"use client";

import { useState, useEffect } from "react";
import { Bell, ChevronDown, X, Settings, PlusCircle, Activity } from "lucide-react";
import Image from "next/image";
import IntelligenceSearch from "./IntelligenceSearch";
import CreateEventDrawer from "./drawers/CreateEventDrawer";
import RegisterActivityDrawer from "./drawers/RegisterActivityDrawer";
import IASuggestedActionDrawer from "./drawers/IASuggestedActionDrawer";

export default function HeaderV6() {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openFullPanel, setOpenFullPanel] = useState(false);
  const [openConfigPanel, setOpenConfigPanel] = useState(false);
  const [filter, setFilter] = useState("todos");

  // Estado del usuario
  const userState = "online";
  const userStateLabel = { online: "Disponible", ocupado: "Ocupado", ausente: "Ausente" };
  const userStateColor = { online: "bg-emerald-500", ocupado: "bg-amber-500", ausente: "bg-slate-400" };

  // Drawers
  const [openCreateEvent, setOpenCreateEvent] = useState(false);
  const [openRegisterActivity, setOpenRegisterActivity] = useState(false);
  const [openIASuggestedAction, setOpenIASuggestedAction] = useState(false);

  // IA actividad del usuario
  const userActivityPrediction = "Actividad estable durante el día.";

  // Notificaciones crudas
  const rawNotifications = [
    "Actividad inusual detectada en el sistema",
    "Nueva decisión sugerida por IA",
    "Pico de actividad detectado en telemetría",
    "Nuevo evento registrado en auditoría",
    "Señales elevadas detectadas en módulo X",
  ];

  // IA clasificación
  const classifyNotification = (text) => {
    const t = text.toLowerCase();
    if (t.includes("inusual") || t.includes("riesgo")) return "riesgos";
    if (t.includes("decisión") || t.includes("sugerida")) return "decisiones";
    if (t.includes("telemetría") || t.includes("actividad")) return "telemetria";
    if (t.includes("evento") || t.includes("auditoría")) return "auditoria";
    return "otros";
  };

  // IA agrupación
  const groupNotifications = (list) => {
    const groups = {};
    list.forEach((text) => {
      const type = classifyNotification(text);
      if (!groups[type]) groups[type] = { type, items: [] };
      groups[type].items.push(text);
    });
    return Object.values(groups);
  };

  const grouped = groupNotifications(rawNotifications);

  // IA prioridad
  const priorityOrder = ["riesgos", "decisiones", "telemetria", "auditoria", "otros"];
  const sortedGroups = grouped.sort((a, b) => priorityOrder.indexOf(a.type) - priorityOrder.indexOf(b.type));

  // IA micro-inteligencia (C: cualquier señal relevante)
  const microIA = (() => {
    const signals = rawNotifications.filter((n) =>
      n.toLowerCase().includes("inusual") ||
      n.toLowerCase().includes("pico") ||
      n.toLowerCase().includes("elevadas") ||
      n.toLowerCase().includes("telemetría") ||
      n.toLowerCase().includes("señales")
    );

    if (signals.length === 0) return null;

    if (signals.length >= 3) return "IA: Se detecta actividad elevada en múltiples módulos.";
    if (signals.length === 2) return "IA: Se detectan señales relevantes en el sistema.";
    return "IA: Se detecta un evento relevante.";
  })();

  // Filtros
  const filteredGroups = filter === "todos" ? sortedGroups : sortedGroups.filter((g) => g.type === filter);

  // Colores suaves
  const typeStyles = {
    riesgos: "bg-rose-50 border-rose-200",
    decisiones: "bg-amber-50 border-amber-200",
    telemetria: "bg-cyan-50 border-cyan-200",
    auditoria: "bg-slate-50 border-slate-200",
    otros: "bg-slate-50 border-slate-200",
  };

  return (
    <>
      {/* TOPBAR — LÍNEA 1 (Contexto + Micro IA) */}
      <div className="w-full bg-white border-b border-slate-200 px-8 py-3 flex flex-col shadow-sm">

        <div className="flex items-center justify-between">
          {/* CONTEXTO */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-800">
              Operaciones / Telemetría
            </span>
            <span className="text-xs text-slate-500">
              Actualizado hace 8s — Sistema estable
            </span>
          </div>

          {/* MICRO IA (solo cuando es relevante) */}
          {microIA && (
            <div className="text-xs text-indigo-600 font-medium bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-200 shadow-sm">
              {microIA}
            </div>
          )}
        </div>
      </div>

      {/* TOPBAR — LÍNEA 2 (Buscador + Acciones + Notificaciones + Usuario) */}
      <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm relative">

        {/* BUSCADOR */}
        <div className="flex items-center w-1/2">
          <IntelligenceSearch />
        </div>

        {/* ACCIONES RÁPIDAS */}
        <div className="flex items-center gap-4">

         {/* Registrar evento operativo */}
          <button
            onClick={() => setOpenCreateEvent(true)}
            className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition"
          >
            <PlusCircle className="h-4 w-4 text-slate-600" />
            Registrar evento operativo
          </button>

          {/* Registrar actividad */}
          <button
            onClick={() => setOpenRegisterActivity(true)}
            className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition"
          >
            <Activity className="h-4 w-4 text-slate-600" />
            Registrar actividad
          </button>

          {/* Acción sugerida por IA */}
          <button
            onClick={() => setOpenIASuggestedAction(true)}
            className="flex items-center gap-2 px-3 py-2 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-700 hover:bg-indigo-100 transition"
          >
            <Activity className="h-4 w-4 text-indigo-600" />
            Acción sugerida por IA
          </button>

          {/* NOTIFICACIONES */}
          <button
            className="relative"
            onClick={() => {
              setOpenNotifications(!openNotifications);
              setOpenUserMenu(false);
              setOpenFullPanel(false);
              setOpenConfigPanel(false);
            }}
          >
            <Bell className="h-6 w-6 text-slate-600 hover:text-indigo-600 transition" />
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full px-1">
              {rawNotifications.length}
            </span>
          </button>

          {/* PANEL PEQUEÑO DE NOTIFICACIONES */}
          {openNotifications && (
            <div className="absolute right-24 top-20 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-50 space-y-3">

              <div className="text-sm font-semibold text-slate-700">Notificaciones</div>

              <div className="space-y-2">
                {sortedGroups.slice(0, 3).map((g, i) => (
                  <div key={i} className={`p-3 rounded-lg border ${typeStyles[g.type]}`}>
                    <p className="text-sm text-slate-700 capitalize">{g.type}: {g.items[0]}</p>
                    <p className="text-xs text-slate-500">Hace unos minutos</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setOpenFullPanel(true);
                  setOpenNotifications(false);
                }}
                className="w-full text-center text-indigo-600 text-sm font-medium hover:text-indigo-800 transition"
              >
                Ver más →
              </button>
            </div>
          )}

          {/* USUARIO */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => {
              setOpenUserMenu(!openUserMenu);
              setOpenNotifications(false);
              setOpenFullPanel(false);
              setOpenConfigPanel(false);
            }}
          >
            <Image src="/blayzit-logo.png" alt="User" width={40} height={40} className="rounded-full border border-slate-200 shadow-sm" />

            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-slate-800">Mindy</span>
              <span className="text-xs text-slate-500">Operaciones</span>
            </div>

            <ChevronDown className="h-4 w-4 text-slate-500 group-hover:text-indigo-600 transition" />
          </div>

          {/* MENÚ DEL USUARIO */}
          {openUserMenu && (
            <div className="absolute right-8 top-20 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-50 space-y-4">

              {/* PERFIL */}
              <div className="flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${userStateColor[userState]}`}></div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Mindy</p>
                  <p className="text-xs text-slate-500">{userStateLabel[userState]}</p>
                </div>
              </div>

              {/* IA ACTIVIDAD */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs text-slate-500">Actividad del usuario</p>
                <p className="text-sm text-slate-700">{userActivityPrediction}</p>
              </div>

              {/* ACCIONES */}
              <div className="space-y-1">
                <a href="/blayzit/v6/perfil" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg">Mi Perfil</a>

                <button
                  onClick={() => {
                    setOpenConfigPanel(true);
                    setOpenUserMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2"
                >
                  <Settings className="h-4 w-4 text-slate-500" />
                  Configuración
                </button>

                <a href="/blayzit/v6/security" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg">Seguridad</a>

                <button className="block w-full text-left px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-lg">Cerrar sesión</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* PANEL DE CONFIGURACIÓN INTELIGENTE — MINIMAL */}
      {openConfigPanel && (
        <div className="w-full bg-white border-b border-slate-200 shadow-md p-8 space-y-8">

          {/* HEADER */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-800">Configuración</h2>
            <button onClick={() => setOpenConfigPanel(false)} className="text-slate-500 hover:text-rose-600 transition">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* CUENTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-700">Cuenta</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm font-medium text-slate-700">Cambiar contraseña</p>
                <p className="text-xs text-slate-500 mb-2">Actualizar tu contraseña actual</p>
                <button className="px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm">Cambiar</button>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm font-medium text-slate-700">Olvidé mi contraseña</p>
                <p className="text-xs text-slate-500 mb-2">Enviar enlace de recuperación</p>
                <button className="px-3 py-2 bg-slate-700 text-white rounded-lg text-sm">Enviar enlace</button>
              </div>

            </div>
          </div>

          {/* SEGURIDAD */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-700">Seguridad</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm font-medium text-slate-700">Autenticación en dos pasos</p>
                <p className="text-xs text-slate-500 mb-2">Protección adicional</p>
                <input type="checkbox" className="h-4 w-4" defaultChecked />
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm font-medium text-slate-700">Cerrar sesiones activas</p>
                <p className="text-xs text-slate-500 mb-2">Cerrar sesiones en otros dispositivos</p>
                <button className="px-3 py-2 bg-rose-600 text-white rounded-lg text-sm">Cerrar sesiones</button>
              </div>

            </div>
          </div>

          {/* NOTIFICACIONES */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-700">Notificaciones</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm font-medium text-slate-700">Alertas críticas</p>
                <p className="text-xs text-slate-500 mb-2">Riesgos y actividad inusual</p>
                <input type="checkbox" className="h-4 w-4" defaultChecked />
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm font-medium text-slate-700">Decisiones sugeridas</p>
                <p className="text-xs text-slate-500 mb-2">Recomendaciones de IA</p>
                <input type="checkbox" className="h-4 w-4" defaultChecked />
              </div>

            </div>
          </div>

          {/* IA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-700">Inteligencia</h3>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-sm font-medium text-slate-700">Predicción del sistema</p>
              <p className="text-xs text-slate-500 mb-2">Análisis automático</p>
              <input type="checkbox" className="h-4 w-4" defaultChecked />
            </div>
          </div>

        </div>
      )}

      {/* PANEL COMPLETO DE NOTIFICACIONES */}
      {openFullPanel && (
        <div className="w-full bg-white border-b border-slate-200 shadow-md p-8 space-y-6">

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-800">Centro de Notificaciones</h2>
            <button onClick={() => setOpenFullPanel(false)} className="text-slate-500 hover:text-rose-600 transition">
              <X className="h-6 w-6" />
            </button>
          </div>

           {/* FILTROS */}
          <div className="flex gap-3">
            {["todos", "riesgos", "decisiones", "telemetria", "auditoria"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg border text-sm transition ${
                  filter === f
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
                }`}
              >
                {f === "todos" && "Todos"}
                {f === "riesgos" && "Riesgos"}
                {f === "decisiones" && "Decisiones"}
                {f === "telemetria" && "Telemetría"}
                {f === "auditoria" && "Auditoría"}
              </button>
            ))}
          </div>

          {/* CONTENIDO DEL PANEL DE NOTIFICACIONES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {filteredGroups.map((g, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border shadow-sm ${typeStyles[g.type]}`}
              >
                <h3 className="text-sm font-semibold text-slate-700 mb-2 capitalize">
                  {g.type} ({g.items.length} eventos)
                </h3>

                {g.items.map((item, idx) => (
                  <p key={idx} className="text-sm text-slate-600">
                    • {item}
                  </p>
                ))}

                <p className="text-xs text-slate-500 mt-2">Hace unos minutos</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DRAWERS INTEGRADOS */}
      <CreateEventDrawer
        open={openCreateEvent}
        onClose={() => setOpenCreateEvent(false)}
      />

      <RegisterActivityDrawer
        open={openRegisterActivity}
        onClose={() => setOpenRegisterActivity(false)}
      />

      <IASuggestedActionDrawer
        open={openIASuggestedAction}
        onClose={() => setOpenIASuggestedAction(false)}
        suggestion={microIA}
      />
    </>
  );
}
