export async function imageProcessor(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/blayzit/analizar/image", {
    method: "POST",
    body: formData,
  });

  return await res.json();
}
