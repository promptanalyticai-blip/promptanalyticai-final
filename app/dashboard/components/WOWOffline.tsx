//app/dashboard/components/WOWOffline.tsx
"use client";

import { getWOWOfflineMessage } from "@/lib/wow-offline-rules";

export default function WOWOffline({ wow }: any) {
  const msg = getWOWOfflineMessage(wow);

  return (
    <div className="p-6 bg-orange-50 border border-orange-300 rounded-lg">
      <h2 className="text-xl font-bold text-orange-700">{msg.title}</h2>
      <p className="text-orange-600 mt-2">{msg.message}</p>
    </div>
  );
}
