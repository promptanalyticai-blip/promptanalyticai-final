"use client";

import { useState } from "react";

interface CollapsedSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CollapsedSection({ title, children }: CollapsedSectionProps) {
  const [open, setOpen] = useState(true);

  return (
    <section className="rounded-xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-4 py-3 flex items-center justify-between text-sm text-slate-700"
      >
        <span>{title}</span>
        <span className="text-xs text-slate-400">{open ? "ocultar" : "mostrar"}</span>
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </section>
  );
}
