"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

type MegaMenuProps = {
  label: string;
  description: string;
  href: string;
  items: Array<{ label: string; href: string; blurb: string }>;
  isOpen: boolean;
  onClose: () => void;
};

function MegaMenu({ label, description, href, items, isOpen, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-0 top-full mt-3 w-[min(82vw,720px)] rounded-[28px] border border-white/10 bg-[rgba(8,22,36,0.96)] p-6 shadow-[0_25px_120px_rgba(4,17,29,0.45)] backdrop-blur-2xl"
        >
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{label}</p>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-white">{description}</h3>
              <Link
                href={href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
                onClick={onClose}
              >
                Explore {label}
                <span className="text-primary">→</span>
              </Link>
            </div>

            <div className="grid gap-3">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-[18px] border border-white/10 bg-background/70 p-4 transition hover:border-primary/35 hover:bg-primary/10"
                  )}
                  onClick={onClose}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-white">{item.label}</span>
                    <span className="text-primary">→</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/60">{item.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export { MegaMenu };
