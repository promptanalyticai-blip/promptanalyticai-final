// app/dnip/layout.tsx
import CoreLayout from "@/app/core/layout";

export default function DnipLayout({ children }: { children: React.ReactNode }) {
  return (
    <CoreLayout>
      {children}
    </CoreLayout>
  );
}
