// app/adip/layout.tsx
import CoreLayout from "@/app/core/layout";

export default function AdipLayout({ children }: { children: React.ReactNode }) {
  return (
    <CoreLayout>
      {children}
    </CoreLayout>
  );
}
