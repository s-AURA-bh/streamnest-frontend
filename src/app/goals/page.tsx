"use client";

import { Goal } from "lucide-react";
import { FeaturePage } from "@/features/shell/feature-page";

export default function GoalsPage() {
  return (
    <FeaturePage
      title="Turn direction into momentum."
      eyebrow="Goals"
      description="Shape meaningful outcomes, connect them to daily actions, and see whether your time is moving toward the life you actually want."
      icon={Goal}
      primaryAction="Create goal"
      highlights={[
        { label: "Active goals", value: "4", detail: "2 currently on track" },
        { label: "Milestones", value: "68%", detail: "Completed this quarter" },
        { label: "Focus alignment", value: "82%", detail: "Time spent with intention" }
      ]}
      futureNote="Goal planning can expand into adaptive milestones, weekly check-ins, and intelligent suggestions based on your actual pace."
    />
  );
}
