//app/dashboard/components/WOWLoader.tsx
"use client";

import { getWOWLoadingStyle } from "@/lib/wow-loading-rules";

export default function WOWLoader({ wow }: any) {
  const style = getWOWLoadingStyle(wow);

  const sizeMap = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-14 w-14",
    xl: "h-20 w-20",
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div
        className={`animate-spin rounded-full border-4 border-${style.color}-400 border-t-transparent ${sizeMap[style.size]}`}
      ></div>

      <p className="mt-4 text-lg text-gray-600">{style.message}</p>
    </div>
  );
}
