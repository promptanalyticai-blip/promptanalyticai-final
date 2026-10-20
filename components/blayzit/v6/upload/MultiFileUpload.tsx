"use client";

import { useState } from "react";
import Section from "@ui/Section";
import Button from "@ui/Button";

export default function MultiFileUpload() {
  const [files, setFiles] = useState<File[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <Section title="Multi File Upload">
      <input
        type="file"
        multiple
        onChange={handleUpload}
        className="border p-2 rounded"
      />

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, idx) => (
            <div key={idx} className="text-sm">
              {file.name}
            </div>
          ))}
        </div>
      )}

      <Button className="mt-4">Procesar archivos</Button>
    </Section>
  );
}
