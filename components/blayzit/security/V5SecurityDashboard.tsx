"use client";

import SecurityPanel from "./SecurityPanel";

export default function V5SecurityDashboard({ signals }) {
  return (
    <div className="space-y-6">
      <SecurityPanel signals={signals} />
    </div>
  );
}
