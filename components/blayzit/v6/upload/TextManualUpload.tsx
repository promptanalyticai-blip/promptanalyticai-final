"use client";

import { useState } from "react";
import Section from "@ui/Section";
import Button from "@ui/Button";

export default function TextManualUpload() {
  const [text, setText] = useState("");

  return (
    <Section title="Manual Text Upload">
      <textarea
        className="w-full border p-3 rounded"
        rows={6}
        placeholder="Escribe o pega texto aquí..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button className="mt-4">Procesar texto</Button>
    </Section>
  );
}
