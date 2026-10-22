"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BreadcrumbWOW({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
      <Link href="/" className="hover:underline text-gray-700 font-medium">
        Inicio
      </Link>

      <ChevronRight className="w-4 h-4 text-gray-400" />

      <span className="font-semibold text-gray-900">{title}</span>
    </div>
  );
}
