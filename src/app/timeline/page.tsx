"use client";

import { Waypoints } from "lucide-react";
import { FeaturePage } from "@/features/shell/feature-page";

export default function TimelinePage() {
  return (
    <FeaturePage
      title="Your life has a shape."
      eyebrow="Timeline"
      description="See seasons, turning points, projects, and quiet breakthroughs in context. Progress becomes easier to trust when you can see where it began."
      icon={Waypoints}
      primaryAction="Add milestone"
      highlights={[
        { label: "Milestones", value: "36", detail: "Across your current chapter" },
        { label: "Growth season", value: "127 days", detail: "Started February 12" },
        { label: "Last milestone", value: "Jun 14", detail: "Pulse architecture shaped" }
      ]}
      futureNote="The timeline can later connect diary entries, goals, learning, expenses, and memories into an intelligent narrative of your growth."
    />
  );
}
