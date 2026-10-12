import DNIPPanel from "./components/DNIPPanel";

export default async function DNIPPage() {
  const res = await fetch("/api/dnip/run", { method: "POST" });
  const data = await res.json();

  return (
    <DNIPPanel
      level={data.level}
      dnip={data.dnip}
      adip={data.adip}
    />
  );
}
