"use client";

import { Brain } from "lucide-react";
import { FeaturePage } from "@/features/shell/feature-page";

export default function LearningPage() {
  return (
    <FeaturePage
      title="Make what you learn compound."
      eyebrow="Learning"
      description="Keep courses, books, notes, and deliberate practice in one connected system built around understanding—not content consumption."
      icon={Brain}
      primaryAction="Add learning"
      highlights={[
        { label: "Learning time", value: "42h", detail: "6.5 hours this week" },
        { label: "Active paths", value: "3", detail: "Python leads at 74%" },
        { label: "Ideas captured", value: "126", detail: "18 connected this month" }
      ]}
      futureNote="Learning recommendations can later connect your goals, curiosity, and knowledge gaps into a personal curriculum."
    />
  );
}
