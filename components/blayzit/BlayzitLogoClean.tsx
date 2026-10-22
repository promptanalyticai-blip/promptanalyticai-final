"use client";

import Image from "next/image";

export default function BlayzitLogoClean() {
  return (
    <Image
      src="/blayzit-logo.png"   // ⭐ usamos exactamente el archivo que quieres
      alt="Blayzit Logo"
      width={140}
      height={140}
      style={{ objectFit: "contain" }}
      priority
    />
  );
}
