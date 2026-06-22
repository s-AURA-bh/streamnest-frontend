"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionStyle
} from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  name: string;
  description: string[];
  status: string;
  href: string;
  icon: LucideIcon;
};

function externalHref(href: string) {
  if (/^(https?:|mailto:)/.test(href)) return href;
  return `https://${href}`;
}

export function ProductCard({
  name,
  description,
  status,
  href,
  icon: Icon
}: ProductCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 160, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 160, damping: 22 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  return (
    <motion.a
      href={externalHref(href)}
      target="_blank"
      rel="noreferrer"
      className="aura-product-card group relative min-h-[328px] overflow-hidden rounded-lg border border-white/[0.095] bg-white/[0.045] p-6 text-left shadow-[0_24px_90px_rgba(0,0,0,0.42)] outline-none backdrop-blur-2xl transition-colors duration-500 hover:border-white/18 hover:bg-white/[0.075] focus-visible:border-white/28 sm:p-7"
      style={
        {
          rotateX: shouldReduceMotion ? 0 : springRotateX,
          rotateY: shouldReduceMotion ? 0 : springRotateY,
          "--glow-x": `${glow.x}%`,
          "--glow-y": `${glow.y}%`
        } as MotionStyle
      }
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(event) => {
        if (shouldReduceMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - bounds.left) / bounds.width;
        const py = (event.clientY - bounds.top) / bounds.height;
        rotateY.set((px - 0.5) * 8);
        rotateX.set((0.5 - py) * 8);
        setGlow({ x: px * 100, y: py * 100 });
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
        setGlow({ x: 50, y: 50 });
      }}
    >
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_var(--glow-x)_var(--glow-y),rgba(184,158,255,0.22),transparent_38%)]" />
      </span>

      <span className="relative flex h-full flex-col">
        <span className="flex items-start justify-between gap-5">
          <span className="grid size-11 place-items-center rounded-lg border border-white/10 bg-black/30 text-white shadow-[0_0_40px_rgba(165,130,255,0.16)]">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/18 bg-emerald-300/[0.055] px-3 py-1 text-xs font-medium text-emerald-100">
            <span className="size-1.5 rounded-full bg-emerald-200 shadow-[0_0_16px_rgba(167,243,208,0.75)]" />
            {status}
          </span>
        </span>

        <span className="mt-10 block">
          <span className="block text-3xl font-semibold text-white sm:text-4xl">
            {name}
          </span>
          <span className="mt-5 block space-y-1 text-base leading-7 text-zinc-300">
            {description.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </span>
        </span>

        <span className="mt-auto flex items-center justify-between pt-12 text-sm text-zinc-400">
          <span>Open product</span>
          <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.045] text-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </span>
      </span>
    </motion.a>
  );
}

export function FutureProductCard({ index }: { index: number }) {
  return (
    <motion.div
      className={cn(
        "aura-future-card group relative grid min-h-[188px] place-items-center overflow-hidden rounded-lg border border-white/[0.085] bg-white/[0.035] p-6 text-center shadow-[0_18px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl",
        index % 2 === 0 ? "sm:translate-y-5" : "sm:-translate-y-2"
      )}
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{
        delay: index * 0.08,
        duration: 0.82,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -8 }}
    >
      <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(155,126,255,0.11))] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="relative inline-flex items-center justify-center rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-zinc-100 shadow-[0_0_40px_rgba(156,124,255,0.12)]">
        Coming Soon
      </span>
    </motion.div>
  );
}
