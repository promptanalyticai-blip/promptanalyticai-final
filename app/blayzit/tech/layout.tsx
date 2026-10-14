// app/blayzit/tech/layout.tsx
import type { ReactNode } from "react";
import CoreLayout from "@/app/core/layout";
import BlayzitShell from "@/components/blayzit/BlayzitShell";

export default function BlayzitTechLayout({ children }: { children: ReactNode }) {
  return (
    <CoreLayout>
      <BlayzitShell>
        {children}
      </BlayzitShell>
    </CoreLayout>
  );
}
