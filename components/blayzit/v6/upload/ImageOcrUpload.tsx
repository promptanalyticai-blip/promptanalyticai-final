"use client";

import { useState } from "react";
import Section from "@ui/Section";
import Button from "@ui/Button";

export default function ImageOcrUpload() {
  const [image, setImage] = useState<File | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Section title="Image OCR Upload">
      <input type="file" accept="image/*" onChange={handleUpload} />

      {image && (
        <div className="mt-4 text-sm">
          Imagen seleccionada: {image.name}
        </div>
      )}

      <Button className="mt-4">Extraer texto</Button>
    </Section>
  );
}
