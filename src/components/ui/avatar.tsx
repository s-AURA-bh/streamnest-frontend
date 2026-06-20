import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  className?: string;
}

export function Avatar({ initials, className }: AvatarProps) {
  return (
    <div
      className={cn(
        "grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-[#756cff] to-[#3b376f] text-xs font-semibold text-white shadow-[0_8px_24px_rgba(117,108,255,.2)]",
        className
      )}
      aria-label="Saurabh Yadav"
    >
      {initials}
    </div>
  );
}
