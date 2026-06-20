import { cn } from "@/lib/utils";

export function PulseLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-[#16151d] shadow-[0_8px_30px_rgba(88,75,210,.18)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(167,157,255,.45),transparent_45%)]" />
        <svg
          viewBox="0 0 24 24"
          className="relative h-[19px] w-[19px] text-white"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3.25 12h3.1l1.8-5.25 3.3 10.5 2.15-7 1.25 3.25h5.9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span
        className={cn(
          "text-[17px] font-semibold tracking-[-0.025em] text-zinc-100",
          compact && "sr-only"
        )}
      >
        Pulse
      </span>
    </div>
  );
}
