"use client";

import { useBlayzitConfig } from "./BlayzitConfigStore";

export default function ADIPConfigPanel() {
  const { config, updateConfig } = useBlayzitConfig();

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">Configuración ADIP</h2>

      <label className="text-sm text-slate-700">Nivel de automatización</label>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={config.adipAutoLevel}
        onChange={(e) =>
          updateConfig({ adipAutoLevel: Number(e.target.value) })
        }
        className="w-full"
      />

      <p className="text-sm text-slate-600">
        Nivel actual: {(config.adipAutoLevel * 100).toFixed(0)}%
      </p>
    </div>
  );
}
