import { milestones } from "@/features/dashboard/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/features/dashboard/components/section-heading";

const categoryTone = {
  Learning: "border-[#728cff]/10 bg-[#728cff]/[.06] text-[#7f98ee]",
  Building: "border-[#927eff]/10 bg-[#927eff]/[.06] text-[#9b8bea]",
  Career: "border-[#b78266]/10 bg-[#b78266]/[.06] text-[#bd8d73]"
};

export function TimelineSnapshot() {
  return (
    <Card className="h-full p-5 sm:p-6">
      <SectionHeading
        title="Timeline snapshot"
        description="A few turns that changed the direction"
        href="/timeline"
        action="Explore journey"
      />
      <div className="relative mt-7 grid gap-6 md:grid-cols-3">
        <div className="absolute left-3 right-3 top-[5px] hidden h-px bg-gradient-to-r from-transparent via-white/[.09] to-transparent md:block" />
        {milestones.map((milestone, index) => (
          <div key={milestone.title} className="relative pl-7 md:pl-0">
            <div className="absolute left-0 top-0 h-full w-px bg-white/[.065] md:hidden" />
            <div className="absolute left-[-3px] top-1 h-[7px] w-[7px] rounded-full border-2 border-[#111116] bg-[#8178ff] shadow-[0_0_10px_rgba(129,120,255,.55)] md:left-1/2 md:-translate-x-1/2" />
            <div className="md:pt-8">
              <div className="flex items-center gap-2 md:justify-center">
                <span className="text-[10px] font-medium text-zinc-600">
                  {milestone.date}
                </span>
                <Badge className={categoryTone[milestone.category]}>
                  {milestone.category}
                </Badge>
              </div>
              <div className="mt-3 rounded-xl border border-white/[.055] bg-white/[.02] p-4 transition-colors hover:border-white/[.09] hover:bg-white/[.035] md:text-center">
                <h3 className="text-[13px] font-medium text-zinc-300">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-[10px] leading-5 text-zinc-600">
                  {milestone.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
