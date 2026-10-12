//app/blayzit/page.tsx
import BlayzitPanel from "./components/BlayzitPanel";

export default async function BlayzitPage() {
  const res = await fetch("/api/blayzit/run", { method: "POST" });
  const data = await res.json();

  return (
    <BlayzitPanel
      level={data.level}
      blayzit={data.blayzit}
    />
  );
}
