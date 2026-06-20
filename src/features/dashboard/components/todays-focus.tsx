"use client";

import { useState } from "react";
import { Check, Clock3, Plus } from "lucide-react";
import { focusItems as initialFocusItems } from "@/features/dashboard/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/features/dashboard/components/section-heading";
import { cn } from "@/lib/utils";

export function TodaysFocus() {
  const [items, setItems] = useState(initialFocusItems);
  const completed = items.filter((item) => item.completed).length;

  function toggleItem(id: string) {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <Card className="h-full p-5 sm:p-6">
      <SectionHeading
        title="Today’s focus"
        description={`${completed} of ${items.length} intentions completed`}
      />
      <Progress value={(completed / items.length) * 100} className="mt-5" />

      <div className="mt-4 space-y-1">
        {items.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className="group flex w-full items-center gap-3 rounded-xl px-2 py-3 text-left transition-colors hover:bg-white/[.025]"
          >
            <span
              className={cn(
                "grid h-5 w-5 shrink-0 place-items-center rounded-[7px] border transition-all",
                item.completed
                  ? "border-[#827aff]/30 bg-[#827aff]/20 text-[#aaa4ff]"
                  : "border-white/[.11] bg-white/[.02] text-transparent group-hover:border-white/[.2]"
              )}
            >
              <Check className="h-3 w-3" strokeWidth={2.3} />
            </span>
            <span className="min-w-0 flex-1">
              <span
                className={cn(
                  "block truncate text-[13px] font-medium transition-colors",
                  item.completed ? "text-zinc-600 line-through" : "text-zinc-300"
                )}
              >
                {item.title}
              </span>
              <span className="mt-1 flex items-center gap-2 text-[10px] text-zinc-700">
                <span>{item.context}</span>
                <span className="h-0.5 w-0.5 rounded-full bg-zinc-700" />
                <Clock3 className="h-2.5 w-2.5" />
                {item.time}
              </span>
            </span>
          </button>
        ))}
      </div>

      <Button variant="ghost" size="sm" className="mt-2 text-zinc-600 hover:text-zinc-300">
        <Plus className="h-3.5 w-3.5" />
        Add an intention
      </Button>
    </Card>
  );
}
