import Link from "next/link";
import { ArrowUpRight, Feather } from "lucide-react";
import { recentDiaryEntry as entry } from "@/features/dashboard/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function DiaryPreview() {
  return (
    <Card className="group relative h-full overflow-hidden p-5 transition-colors hover:border-white/[.1] sm:p-6">
      <div className="absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(circle_at_top_right,rgba(135,124,255,.09),transparent_65%)]" />
      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/[.07] bg-white/[.035]">
            <Feather className="h-[18px] w-[18px] text-[#918aff]" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.13em] text-zinc-600">
              Recent diary entry
            </p>
            <p className="mt-1 text-xs text-zinc-500">{entry.day}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-medium tracking-[-0.04em] text-zinc-300">
            {entry.date}
          </p>
          <p className="mt-0.5 text-[9px] uppercase tracking-widest text-zinc-700">
            June
          </p>
        </div>
      </div>

      <div className="relative mt-7 border-l border-[#8178ff]/30 pl-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-lg text-zinc-400">{entry.mood}</span>
          <span className="text-[10px] text-zinc-600">{entry.moodLabel}</span>
        </div>
        <h3 className="max-w-xl text-lg font-medium leading-snug tracking-[-0.025em] text-zinc-200">
          {entry.title}
        </h3>
        <p className="mt-3 max-w-2xl text-[13px] leading-6 text-zinc-500">
          {entry.excerpt}
        </p>
      </div>

      <div className="relative mt-6 flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <Badge key={tag}>#{tag}</Badge>
          ))}
        </div>
        <Link
          href="/diary"
          className="group/link flex shrink-0 items-center gap-1 text-[11px] font-medium text-zinc-600 transition-colors hover:text-zinc-300"
        >
          Read entry
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </Card>
  );
}
