"use client";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
};

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900";

  const styles =
    variant === "primary"
      ? "px-4 py-2 bg-slate-900 text-white hover:bg-slate-700"
      : "px-3 py-2 border border-slate-200 text-slate-700 bg-white hover:bg-slate-50";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
