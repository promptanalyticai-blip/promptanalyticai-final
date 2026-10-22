"use client";

import "../../globals.css";
import "../../styles/blayzit-enterprise.css";

import SidebarV6 from "@/components/blayzit/v6/layout/SidebarV6";
import HeaderV6 from "@/components/blayzit/v6/layout/HeaderV6";
import FooterV6 from "@/components/blayzit/v6/layout/FooterV6";

export default function BlayzitV6Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-[#F7FAFC] flex">
      
      <SidebarV6 />

      <div className="flex-1 flex flex-col">
        <HeaderV6 />

        <main className="flex-1 px-6 py-10">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl shadow-sm bg-white/70 backdrop-blur-sm border border-slate-200/50 p-6">
              {children}
            </div>
          </div>
        </main>

        <FooterV6 />
      </div>

    </div>
  );
}
