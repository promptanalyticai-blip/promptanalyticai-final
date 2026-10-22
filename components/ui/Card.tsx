export function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white 
        border border-slate-200 
        rounded-xl 
        shadow-sm 
        hover:shadow-md 
        transition-shadow 
        p-4
        ${className}
      `}
    >
      {children}
    </div>
  );
}
