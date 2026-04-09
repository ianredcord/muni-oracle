"use client";

import { useRouter } from "next/navigation";
import { FlowPositionDiagram } from "@/components/flow-system";

export default function FlowDiagramWrapper() {
  const router = useRouter();

  return (
    <FlowPositionDiagram
      onPointClick={(slug) => router.push(`/internal/flow-system/acupoints/${slug}`)}
      className="py-4"
    />
  );
}
