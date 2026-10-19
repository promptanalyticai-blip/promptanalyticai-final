export default function BlayzitLogo() {
  return (
    <div
      className="
        flex items-center
        px-3 py-2
        bg-white
        rounded-xl
        border border-slate-200
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
        hover:shadow-[0_6px_26px_rgba(0,0,0,0.10)]
        transition-all duration-300
        hover:-translate-y-[2px]
        relative
        overflow-hidden
      "
    >
      {/* Glow semántico */}
      <div
        className="
          absolute inset-0 
          pointer-events-none 
          rounded-xl 
          ring-1 ring-blue-200/40
        "
      />

      {/* Logo más grande */}
      <img
        src="/blayzit/blayzit-logo.png"
        alt="BLAYZIT Logo"
        className="h-auto w-auto max-h-12"
      />
    </div>
  );
}
