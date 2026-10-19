export async function dnipClient(text: string) {
  const res = await fetch("/api/blayzit/v6/dnip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  return await res.json();
}
