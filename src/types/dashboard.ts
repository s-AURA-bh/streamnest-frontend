import type { LucideIcon } from "lucide-react";

export type MetricTone = "violet" | "blue" | "amber" | "rose";

export interface DashboardMetric {
  label: string;
  value: string;
  detail: string;
  progress?: number;
  trend?: string;
  icon: LucideIcon;
  tone: MetricTone;
  sparkline?: number[];
}

export interface FocusItem {
  id: string;
  title: string;
  context: string;
  time: string;
  completed: boolean;
}

export interface DiaryEntry {
  date: string;
  day: string;
  mood: string;
  moodLabel: string;
  title: string;
  excerpt: string;
  tags: string[];
}

export interface LearningItem {
  title: string;
  source: string;
  duration: string;
  progress: number;
  status: "In progress" | "Completed" | "Saved";
}

export interface Milestone {
  date: string;
  title: string;
  description: string;
  category: "Learning" | "Building" | "Career";
}
