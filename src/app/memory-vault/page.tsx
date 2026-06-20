"use client";

import { Sparkles } from "lucide-react";
import { FeaturePage } from "@/features/shell/feature-page";

export default function MemoryVaultPage() {
  return (
    <FeaturePage
      title="Keep the moments that made you."
      eyebrow="Memory vault"
      description="Save meaningful photos, notes, places, people, and fragments of life in a private archive that becomes richer with time."
      icon={Sparkles}
      primaryAction="Save memory"
      highlights={[
        { label: "Memories", value: "248", detail: "Across 6 life chapters" },
        { label: "People", value: "31", detail: "Connected to your story" },
        { label: "This month", value: "18", detail: "New moments preserved" }
      ]}
      futureNote="Smart memory search can eventually retrieve moments by feeling, person, place, or meaning—even when you cannot remember the exact words."
    />
  );
}
