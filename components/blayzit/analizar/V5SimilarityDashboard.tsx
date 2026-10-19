"use client";

import SimilarityPanel from "./SimilarityPanel";
import ClusterPanel from "./ClusterPanel";

export default function V5SimilarityDashboard({
  current,
  previous,
  clusters,
}: {
  current: any;
  previous: any;
  clusters: any[];
}) {
  return (
    <div className="space-y-8">
      <SimilarityPanel current={current} previous={previous} />
      <ClusterPanel clusters={clusters} />
    </div>
  );
}
