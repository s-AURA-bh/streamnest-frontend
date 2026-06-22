"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(14px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export function Reveal({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28, margin: "-72px" }}
      variants={revealVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({
  lines,
  className
}: {
  lines: string[];
  className?: string;
}) {
  return (
    <span className={cn("block overflow-hidden", className)}>
      {lines.map((line, index) => (
        <motion.span
          className="block"
          initial={{ y: "110%", opacity: 0, filter: "blur(18px)" }}
          whileInView={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: index * 0.12,
            duration: 1.05,
            ease: [0.22, 1, 0.36, 1]
          }}
          key={line}
        >
          {line}
        </motion.span>
      ))}
    </span>
  );
}
