export async function csvProcessor(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/blayzit/analizar/csv", {
    method: "POST",
    body: formData,
  });

  return await res.json();
}
