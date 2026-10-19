export async function docxProcessor(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/blayzit/analizar/docx", {
    method: "POST",
    body: formData,
  });

  return await res.json();
}
