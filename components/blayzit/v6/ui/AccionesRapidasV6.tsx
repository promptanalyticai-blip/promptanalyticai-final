"use client";

import { useState, useEffect } from "react";
import { PlusCircle, Activity } from "lucide-react";
import CreateEventDrawer from "./drawers/CreateEventDrawer";
import RegisterActivityDrawer from "./drawers/RegisterActivityDrawer";
import IASuggestedActionDrawer from "./drawers/IASuggestedActionDrawer";

export default function AccionesRapidasV6({ microIA }: { microIA: string }) {
  const [openCreateEvent, setOpenCreateEvent] = useState(false);
  const [openRegisterActivity, setOpenRegisterActivity] = useState(false);
  const [openIASuggestedAction, setOpenIASuggestedAction] = useState(false);

  // listeners globales para eventos del buscador
  useEffect(() => {
    const toggleActividad = () => setOpenRegisterActivity(true);
    const toggleEvento = () => setOpenCreateEvent(true);
    const toggleIA = () => setOpenIASuggestedAction(true);

    window.addEventListener("toggleDrawerActividad", toggleActividad);
    window.addEventListener("toggleDrawerEvento", toggleEvento);
    window.addEventListener("toggleDrawerIA", toggleIA);

    return () => {
      window.removeEventListener("toggleDrawerActividad", toggleActividad);
      window.removeEventListener("toggleDrawerEvento", toggleEvento);
      window.removeEventListener("toggleDrawerIA", toggleIA);
    };
  }, []);

  return (
    <div className="flex items-center gap-4">

      <button
        onClick={() => setOpenCreateEvent(true)}
        className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition"
      >
        <PlusCircle className="h-4 w-4 text-slate-600" />
        registrar evento operativo
      </button>

      <button
        onClick={() => setOpenRegisterActivity(true)}
        className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition"
      >
        <Activity className="h-4 w-4 text-slate-600" />
        registrar actividad
      </button>

      <button
        onClick={() => setOpenIASuggestedAction(true)}
        className="flex items-center gap-2 px-3 py-2 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-700 hover:bg-indigo-100 transition"
      >
        <Activity className="h-4 w-4 text-indigo-600" />
        acción sugerida por ia
      </button>

      <CreateEventDrawer open={openCreateEvent} onClose={() => setOpenCreateEvent(false)} />
      <RegisterActivityDrawer open={openRegisterActivity} onClose={() => setOpenRegisterActivity(false)} />
      <IASuggestedActionDrawer open={openIASuggestedAction} onClose={() => setOpenIASuggestedAction(false)} suggestion={microIA} />
    </div>
  );
}
