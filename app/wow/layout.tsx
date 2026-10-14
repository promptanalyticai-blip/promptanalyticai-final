// app/wow/layout.tsx
import CoreLayout from "@/app/core/layout";

export default function WowLayout({ children }: { children: React.ReactNode }) {
  return (
    <CoreLayout>
      {children}
    </CoreLayout>
  );
}
