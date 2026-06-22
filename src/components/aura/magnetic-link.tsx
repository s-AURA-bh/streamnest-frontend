"use client";

import {
  type HTMLMotionProps,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring
} from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type MagneticLinkProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  strength?: number;
};

export function MagneticLink({
  children,
  className,
  strength = 0.2,
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.45 });

  return (
    <motion.a
      ref={ref}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] px-6 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_24px_80px_rgba(127,96,255,0.18)] backdrop-blur-xl transition-colors duration-500 hover:border-white/18 hover:bg-white/[0.085]",
        className
      )}
      style={shouldReduceMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={(event) => {
        onMouseMove?.(event);
        if (shouldReduceMotion) return;
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return;
        x.set((event.clientX - bounds.left - bounds.width / 2) * strength);
        y.set((event.clientY - bounds.top - bounds.height / 2) * strength);
      }}
      onMouseLeave={(event) => {
        onMouseLeave?.(event);
        x.set(0);
        y.set(0);
      }}
      {...props}
    >
      <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(188,164,255,0.22),transparent_56%)]" />
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.a>
  );
}
