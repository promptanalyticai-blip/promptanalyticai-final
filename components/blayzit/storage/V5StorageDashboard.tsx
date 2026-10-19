"use client";

import VersionsPanel from "./VersionsPanel";

export default function V5StorageDashboard({ versions }: { versions: any[] }) {
  return (
    <div className="space-y-8">
      <VersionsPanel versions={versions} />
    </div>
  );
}
