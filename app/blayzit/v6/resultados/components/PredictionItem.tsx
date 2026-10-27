"use client";

export default function PredictionItem({ tipo, probabilidad, criticidad, origen, descripcion }) {
  return (
    <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col gap-2">
      
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-800">{tipo}</p>
        <span className="text-sm font-medium text-purple-600">{probabilidad}%</span>
      </div>

      <p className="text-xs text-slate-500">{descripcion}</p>

      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-slate-600">
          Criticidad: <span className="font-medium text-rose-600">{criticidad}</span>
        </span>

        <span className="text-xs text-slate-600">
          Origen: <span className="font-medium text-indigo-600">{origen}</span>
        </span>
      </div>
    </div>
  );
}
