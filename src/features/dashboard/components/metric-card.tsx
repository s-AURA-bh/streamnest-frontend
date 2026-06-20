"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { DashboardMetric, MetricTone } from "@/types/dashboard";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const toneStyles: Record<
  MetricTone,
  { icon: string; progress: string; line: string }
> = {
  violet: {
    icon: "bg-[#8178ff]/10 text-[#9c95ff] border-[#8178ff]/15",
    progress: "from-[#756cff] to-[#aaa4ff]",
    line: "#918aff"
  },
  blue: {
    icon: "bg-[#5b8cff]/10 text-[#79a1ff] border-[#5b8cff]/15",
    progress: "from-[#547fe8] to-[#87aaff]",
    line: "#6c96f5"
  },
  amber: {
    icon: "bg-[#d99b5b]/10 text-[#d9a56f] border-[#d99b5b]/15",
    progress: "from-[#b97743] to-[#d6a16e]",
    line: "#c78c57"
  },
  rose: {
    icon: "bg-[#d66f86]/10 text-[#e08da0] border-[#d66f86]/15",
    progress: "from-[#bc6278] to-[#df8da0]",
    line: "#d2758a"
  }
};

function Sparkline({ values, color }: { values: number[]; color: string }) {
  const points = values
    .map((value, index) => `${(index / (values.length - 1)) * 100},${100 - value}`)
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-9 w-20">
      <defs>
        <linearGradient id={`spark-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity=".22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,100 ${points} 100,100`}
        fill={`url(#spark-${color.replace("#", "")})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MetricCard({
  metric,
  index
}: {
  metric: DashboardMetric;
  index: number;
}) {
  const Icon = metric.icon;
  const tone = toneStyles[metric.tone];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
      whileHover={{ y: -3 }}
    >
      <Card className="group relative h-full overflow-hidden p-5 transition-colors duration-300 hover:border-white/[.11] hover:bg-[#131319]">
        <div className="flex items-start justify-between">
          <div
            className={cn(
              "grid h-9 w-9 place-items-center rounded-xl border",
              tone.icon
            )}
          >
            <Icon className="h-[17px] w-[17px]" strokeWidth={1.8} />
          </div>
          <ArrowUpRight className="h-3.5 w-3.5 text-zinc-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-500" />
        </div>
        <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-600">
          {metric.label}
        </p>
        <div className="mt-2 flex min-h-10 items-end justify-between gap-3">
          <p className="truncate text-xl font-medium tracking-[-0.035em] text-zinc-200">
            {metric.value}
          </p>
          {metric.sparkline && <Sparkline values={metric.sparkline} color={tone.line} />}
        </div>
        <div className="mt-4">
          {typeof metric.progress === "number" && (
            <Progress
              value={metric.progress}
              className="mb-3"
              indicatorClassName={cn("bg-gradient-to-r", tone.progress)}
            />
          )}
          <div className="flex items-center justify-between gap-2 text-[10px]">
            <span className="truncate text-zinc-600">{metric.detail}</span>
            <span className="shrink-0 text-zinc-500">{metric.trend}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
