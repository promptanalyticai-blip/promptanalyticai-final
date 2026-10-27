import { cn } from "@/lib/utils";

interface PremiumIconProps {
  icon: React.ElementType;
  color?: string;
  size?: number;
}

export default function PremiumIcon({ icon: Icon, color = "indigo", size = 20 }: PremiumIconProps) {
  return (
    <div
      className={cn(
        "rounded-full p-2 shadow-sm flex items-center justify-center",
        `bg-${color}-50 text-${color}-600`
      )}
    >
      <Icon size={size} />
    </div>
  );
}
