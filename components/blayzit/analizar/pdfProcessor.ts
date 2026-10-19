export async function pdfProcessor(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/blayzit/analizar/pdf", {
    method: "POST",
    body: formData,
  });

  return await res.json();
}
