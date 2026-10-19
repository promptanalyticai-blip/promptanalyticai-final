"use client";

import { useRef } from "react";

export default function Uploader({ onUpload }: { onUpload: (file: File) => void }) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUpload(file);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900 mb-4">
        Subir archivo
      </h2>

      <button
        onClick={() => inputRef.current?.click()}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Seleccionar archivo
      </button>

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleSelect}
      />
    </div>
  );
}
