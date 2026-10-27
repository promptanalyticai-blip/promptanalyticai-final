"use client";

import { useState } from "react";
import { ChevronDown, Settings, X } from "lucide-react";
import Image from "next/image";

export default function UsuarioV6() {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openConfigPanel, setOpenConfigPanel] = useState(false);

  const userState = "online";
  const userStateLabel = { online: "Disponible", ocupado: "Ocupado", ausente: "Ausente" };
  const userStateColor = { online: "bg-emerald-500", ocupado: "bg-amber-500", ausente: "bg-slate-400" };

  const userActivityPrediction = "Actividad estable durante el día.";

  return (
    <div className="relative">

      {/* BOTÓN USUARIO */}
      <div
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => {
          setOpenUserMenu(!openUserMenu);
          setOpenConfigPanel(false);
        }}
      >
        <Image
          src="/blayzit-logo.png"
          alt="User"
          width={40}
          height={40}
          className="rounded-full border border-slate-200 shadow-sm"
        />

        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-slate-800">Mindy</span>
          <span className="text-xs text-slate-500">Operaciones</span>
        </div>

        <ChevronDown className="h-4 w-4 text-slate-500 group-hover:text-indigo-600 transition" />
      </div>

      {/* MENÚ DEL USUARIO */}
      {openUserMenu && (
        <div className="absolute right-0 top-14 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-[60] space-y-4">

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
            <a href="/blayzit/v6/perfil" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg">
              Mi Perfil
            </a>

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

            <a href="/blayzit/v6/security" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg">
              Seguridad
            </a>

            <button className="block w-full text-left px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-lg">
              Cerrar sesión
            </button>
          </div>
        </div>
      )}

      {/* PANEL DE CONFIGURACIÓN */}
      {openConfigPanel && (
        <div className="absolute right-0 top-14 w-[420px] bg-white border border-slate-200 rounded-xl shadow-xl p-6 z-[70] space-y-8">

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
    </div>
  );
}
