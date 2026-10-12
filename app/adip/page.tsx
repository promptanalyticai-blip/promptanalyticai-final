import ADIPPanel from "./components/ADIPPanel";

export default async function ADIPPage() {
  const res = await fetch("/api/dnip/run", { method: "POST" });
  const data = await res.json();

  return (
    <ADIPPanel
      level={data.level}
      adip={data.adip}
    />
  );
}
