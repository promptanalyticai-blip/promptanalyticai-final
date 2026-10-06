// components/connection/connection-dashboard.tsx
import { useState, useEffect } from "react";

type ConnectionData = {
  workspace: string;
  dnip: {
    status: string;
    requests: number;
  };
};

export default function ConnectionDashboard() {
  const [data, setData] = useState<ConnectionData | null>(null);

  useEffect(() => {
    setData({
      workspace: "default",
      dnip: {
        status: "ok",
        requests: 120,
      },
    });
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Workspace: {data.workspace}</h2>
      <p>DNIP Status: {data.dnip.status}</p>
      <p>Requests: {data.dnip.requests}</p>
    </div>
  );
}
