"use client";

import { Settings } from "lucide-react";
import { FeaturePage } from "@/features/shell/feature-page";

export default function SettingsPage() {
  return (
    <FeaturePage
      title="Make Pulse feel like yours."
      eyebrow="Settings"
      description="Shape your workspace, privacy, rhythms, reminders, and the way Pulse reflects your life back to you."
      icon={Settings}
      primaryAction="Edit profile"
      highlights={[
        { label: "Workspace", value: "Personal", detail: "Private by default" },
        { label: "Theme", value: "Midnight", detail: "Dark mode active" },
        { label: "Week starts", value: "Monday", detail: "Asia / Kolkata" }
      ]}
      futureNote="This foundation leaves room for granular privacy, data export, AI preferences, notification rhythms, and personal appearance controls."
    />
  );
}
