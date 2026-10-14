"use client";

import StatWidget from "@/components/blayzit/StatWidget";

export default function WOWEnginePage() {
  return (
    <div className="space-y-10 p-6">
      <h1 className="text-2xl font-bold">WOW Engine — Technical View</h1>

      <StatWidget label="Estado del Motor" value="Estable" trend="+5%" />
    </div>
  );
}
