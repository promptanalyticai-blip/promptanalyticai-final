export const dynamic = "force-dynamic";

export default async function DNIPPage() {
  const base = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${base}/api/dnip/run`, {
    method: "POST",
  });

  const data = await res.json();

  return (
    <div>
      <h1>DNIP Panel</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
