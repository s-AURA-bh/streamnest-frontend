"use client";

import { CircleDollarSign } from "lucide-react";
import { FeaturePage } from "@/features/shell/feature-page";

export default function ExpensesPage() {
  return (
    <FeaturePage
      title="See money without the anxiety."
      eyebrow="Expenses"
      description="A clear, grounded view of where your money goes, what it supports, and how your choices are changing over time."
      icon={CircleDollarSign}
      primaryAction="Add expense"
      highlights={[
        { label: "This month", value: "₹28,450", detail: "57% of monthly budget" },
        { label: "Saved", value: "₹12,800", detail: "12% ahead of plan" },
        { label: "Top category", value: "Learning", detail: "₹7,240 invested" }
      ]}
      futureNote="Expense analytics can grow into calm forecasts, pattern detection, and value-based spending insights without turning life into a spreadsheet."
    />
  );
}
