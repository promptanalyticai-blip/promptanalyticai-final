"use client";

export default function FooterV6() {
  return (
    <footer
      className="
        w-full bg-white/60 backdrop-blur-md 
        border-t border-slate-200/50 shadow-sm 
        px-6 py-4 flex items-center justify-between
      "
    >
      {/* IZQUIERDA: Marca */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-slate-700 tracking-tight">
          BLAYZIT V6
        </span>
        <span className="text-xs text-slate-500">
          · Inteligencia Operativa
        </span>
      </div>

      {/* DERECHA: Info */}
      <div className="flex items-center gap-4 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} BLAYZIT</span>
        <span className="hidden md:inline">·</span>
        <span className="hidden md:inline">Todos los derechos reservados</span>
      </div>
    </footer>
  );
}
