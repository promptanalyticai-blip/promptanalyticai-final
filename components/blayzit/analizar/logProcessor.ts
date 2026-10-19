export async function logProcessor(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/blayzit/analizar/logs", {
    method: "POST",
    body: formData,
  });

  return await res.json();
}
