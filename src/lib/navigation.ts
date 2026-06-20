import {
  BookOpenText,
  Brain,
  CircleDollarSign,
  Goal,
  LayoutDashboard,
  Settings,
  Sparkles,
  Waypoints
} from "lucide-react";

export const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Diary", href: "/diary", icon: BookOpenText },
  { name: "Goals", href: "/goals", icon: Goal },
  { name: "Learning", href: "/learning", icon: Brain },
  { name: "Expenses", href: "/expenses", icon: CircleDollarSign },
  { name: "Memory Vault", href: "/memory-vault", icon: Sparkles },
  { name: "Timeline", href: "/timeline", icon: Waypoints },
  { name: "Settings", href: "/settings", icon: Settings }
] as const;
