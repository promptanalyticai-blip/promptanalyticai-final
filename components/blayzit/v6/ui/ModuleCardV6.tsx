import PremiumIcon from "./PremiumIcon";

interface ModuleCardV6Props {
  icon: React.ElementType;
  color?: string;
  title: string;
  description: string;
}

export default function ModuleCardV6({
  icon: Icon,
  color = "indigo",
  title,
  description,
}: ModuleCardV6Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex gap-3">
      <PremiumIcon icon={Icon} color={color} size={20} />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-800">{title}</span>
        <span className="text-xs text-slate-500">{description}</span>
      </div>
    </div>
  );
}
