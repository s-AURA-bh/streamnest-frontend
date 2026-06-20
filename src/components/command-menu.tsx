"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { navigation } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

interface CommandMenuProps {
  open: boolean;
  onClose: () => void;
}

export function CommandMenu({ open, onClose }: CommandMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 grid items-start justify-items-center bg-black/65 px-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/[.09] bg-[#121218] shadow-[0_32px_100px_rgba(0,0,0,.65)]"
          >
            <div className="flex items-center gap-3 border-b border-white/[.065] px-4">
              <Search className="h-4 w-4 text-zinc-500" />
              <input
                autoFocus
                className="h-14 flex-1 bg-transparent text-sm text-zinc-200 outline-none placeholder:text-zinc-600"
                placeholder="Search your life..."
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                aria-label="Close search"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-2">
              <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                Jump to
              </p>
              {navigation.slice(0, 7).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-400 transition-colors hover:bg-white/[.05] hover:text-zinc-100"
                  >
                    <Icon className="h-4 w-4 text-zinc-600" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="border-t border-white/[.055] px-4 py-3 text-[10px] text-zinc-600">
              Smart memory search is ready for your future AI layer.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
