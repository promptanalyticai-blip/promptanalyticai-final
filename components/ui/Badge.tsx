export function Badge({ children, className = "" }) {
  return (
    <span
      className={`
        inline-flex items-center 
        px-2 py-1 
        rounded-md 
        text-xs font-medium 
        bg-slate-100 
        text-slate-700
        border border-slate-200
        ${className}
      `}
    >
      {children}
    </span>
  );
}
