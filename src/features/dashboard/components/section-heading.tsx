import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  description?: string;
  href?: string;
  action?: string;
}

export function SectionHeading({
  title,
  description,
  href,
  action = "View all"
}: SectionHeadingProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-[15px] font-semibold tracking-[-0.015em] text-zinc-200">
          {title}
        </h2>
        {description && <p className="mt-1 text-xs text-zinc-600">{description}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="group flex items-center gap-1 text-[11px] font-medium text-zinc-600 transition-colors hover:text-zinc-300"
        >
          {action}
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
