"use client";

import Image from "next/image";

export default function BlayzitLogoClean() {
  return (
    <Image
      src="/blayzit/blayzit-logo.png"
      alt="Blayzit Logo"
      width={140}
      height={140}
      style={{ objectFit: "contain" }}
      priority
    />
  );
}
