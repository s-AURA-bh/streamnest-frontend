import { BookOpen, Check, Clock3, MoreHorizontal, Play } from "lucide-react";
import { learningActivity } from "@/features/dashboard/data";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/features/dashboard/components/section-heading";
import { cn } from "@/lib/utils";

export function LearningActivity() {
  return (
    <Card className="h-full p-5 sm:p-6">
      <SectionHeading
        title="Learning activity"
        description="Your active ideas and deliberate practice"
        href="/learning"
      />
      <div className="mt-5 divide-y divide-white/[.05]">
        {learningActivity.map((item, index) => (
          <div
            key={item.title}
            className="group flex items-center gap-4 py-4 first:pt-1 last:pb-0"
          >
            <div
              className={cn(
                "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[.065] bg-white/[.025]",
                index === 0 && "border-[#738dff]/15 bg-[#738dff]/[.07]"
              )}
            >
              {item.status === "Completed" ? (
                <Check className="h-4 w-4 text-emerald-400/70" />
              ) : index === 0 ? (
                <Play className="h-4 w-4 fill-[#8299ff]/20 text-[#8299ff]" />
              ) : (
                <BookOpen className="h-4 w-4 text-zinc-600" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-[13px] font-medium text-zinc-300">
                  {item.title}
                </p>
                <span
                  className={cn(
                    "shrink-0 text-[9px]",
                    item.status === "Completed"
                      ? "text-emerald-500/70"
                      : "text-zinc-600"
                  )}
                >
                  {item.status}
                </span>
              </div>
              <div className="mt-1.5 flex items-center gap-2 text-[10px] text-zinc-700">
                <span className="truncate">{item.source}</span>
                <span className="h-0.5 w-0.5 rounded-full bg-zinc-700" />
                <Clock3 className="h-2.5 w-2.5" />
                {item.duration}
              </div>
              <Progress
                value={item.progress}
                className="mt-3 h-1"
                indicatorClassName={cn(
                  item.status === "Completed" &&
                    "from-emerald-700/70 to-emerald-500/70",
                  item.status === "Saved" && "from-zinc-700 to-zinc-600"
                )}
              />
            </div>
            <button
              type="button"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-zinc-700 opacity-0 transition-all hover:bg-white/[.04] hover:text-zinc-400 group-hover:opacity-100"
              aria-label={`More options for ${item.title}`}
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}
