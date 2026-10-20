"use client";

import { useState } from "react";
import Section from "@ui/Section";
import Button from "@ui/Button";

export default function LogUpload() {
  const [logFile, setLogFile] = useState<File | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setLogFile(e.target.files[0]);
    }
  };

  return (
    <Section title="Log Upload">
      <input type="file" accept=".log" onChange={handleUpload} />

      {logFile && (
        <div className="mt-4 text-sm">
          Archivo seleccionado: {logFile.name}
        </div>
      )}

      <Button className="mt-4">Analizar logs</Button>
    </Section>
  );
}
