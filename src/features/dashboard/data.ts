import {
  BookOpenCheck,
  Flame,
  Goal,
  WalletCards
} from "lucide-react";
import type {
  DashboardMetric,
  DiaryEntry,
  FocusItem,
  LearningItem,
  Milestone
} from "@/types/dashboard";

export const dashboardMetrics: DashboardMetric[] = [
  {
    label: "Current goal",
    value: "Ship Pulse v1",
    detail: "12 of 18 milestones",
    progress: 68,
    trend: "On track",
    icon: Goal,
    tone: "violet"
  },
  {
    label: "Learning progress",
    value: "42 hours",
    detail: "Python & system design",
    progress: 74,
    trend: "+6.5h this week",
    icon: BookOpenCheck,
    tone: "blue"
  },
  {
    label: "Monthly expenses",
    value: "₹28,450",
    detail: "of ₹50,000 budget",
    progress: 57,
    trend: "12% below plan",
    icon: WalletCards,
    tone: "amber",
    sparkline: [32, 47, 39, 56, 52, 68, 61, 75, 64, 71]
  },
  {
    label: "Current streak",
    value: "18 days",
    detail: "Best streak: 31 days",
    trend: "Personal rhythm",
    icon: Flame,
    tone: "rose",
    sparkline: [45, 54, 50, 66, 62, 76, 72, 83, 78, 92]
  }
];

export const focusItems: FocusItem[] = [
  {
    id: "focus-1",
    title: "Complete Pulse dashboard foundation",
    context: "Deep work",
    time: "90 min",
    completed: false
  },
  {
    id: "focus-2",
    title: "Review Python async patterns",
    context: "Learning",
    time: "45 min",
    completed: true
  },
  {
    id: "focus-3",
    title: "Evening walk without the phone",
    context: "Wellbeing",
    time: "30 min",
    completed: false
  }
];

export const recentDiaryEntry: DiaryEntry = {
  date: "20",
  day: "June 2026 · Saturday",
  mood: "◡",
  moodLabel: "Calm & focused",
  title: "The quiet momentum is becoming visible.",
  excerpt:
    "Today felt less like chasing progress and more like inhabiting it. The work is still demanding, but I can finally see the shape of what I’m building—and the person I’m becoming while building it.",
  tags: ["growth", "building", "clarity"]
};

export const learningActivity: LearningItem[] = [
  {
    title: "Designing Data-Intensive Applications",
    source: "Chapter 5 · Replication",
    duration: "38 min",
    progress: 64,
    status: "In progress"
  },
  {
    title: "Advanced Python: Async IO",
    source: "Practical module",
    duration: "52 min",
    progress: 100,
    status: "Completed"
  },
  {
    title: "Taste as a Product Advantage",
    source: "Saved essay",
    duration: "12 min",
    progress: 18,
    status: "Saved"
  }
];

export const milestones: Milestone[] = [
  {
    date: "Feb 12",
    title: "Started Python",
    description: "Committed to learning the language deeply.",
    category: "Learning"
  },
  {
    date: "Mar 28",
    title: "Built first project",
    description: "Shipped a small automation tool end to end.",
    category: "Building"
  },
  {
    date: "May 06",
    title: "Started internship journey",
    description: "Stepped into a new season of practical growth.",
    category: "Career"
  }
];
