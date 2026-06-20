import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function WeeklyReflection() {
  return (
    <Card className="relative h-full overflow-hidden border-[#8178ff]/[.12] bg-[#111117] p-5 sm:p-6">
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#766cff]/[.09] blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-[#8178ff]/15 bg-[#8178ff]/10">
            <Sparkles className="h-4 w-4 text-[#9b94ff]" />
          </div>
          <Badge className="border-[#8178ff]/10 bg-[#8178ff]/[.07] text-[#918aff]">
            AI reflection
          </Badge>
        </div>

        <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.13em] text-zinc-600">
          Your week, reflected
        </p>
        <h3 className="mt-2 text-lg font-medium tracking-[-0.025em] text-zinc-200">
          Consistency found a quieter form.
        </h3>

        <div className="mt-5 rounded-2xl border border-white/[.055] bg-black/[.12] p-4">
          <Quote className="h-4 w-4 text-[#8178ff]/60" />
          <p className="mt-3 text-[13px] leading-6 text-zinc-500">
            You made your strongest progress on days when you protected the first
            90 minutes. Your diary also shows less self-pressure and more trust in
            the process.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            ["14.2h", "Deep work"],
            ["82%", "Focus score"],
            ["4", "Reflections"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl bg-white/[.025] p-3">
              <p className="text-sm font-medium text-zinc-300">{value}</p>
              <p className="mt-1 text-[9px] text-zinc-700">{label}</p>
            </div>
          ))}
        </div>

        <Button variant="ghost" size="sm" className="mt-4 -ml-3 text-zinc-500">
          Open full reflection
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </Card>
  );
}
