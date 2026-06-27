"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  items: Array<{ label: string; href: string; description?: string }>;
  isOpen: boolean;
  onClose: () => void;
  activeHref: string;
};

function MobileMenu({ items, isOpen, onClose, activeHref }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[rgba(4,17,29,0.78)] backdrop-blur-md lg:hidden"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-[51] flex w-full max-w-sm flex-col border-l border-white/10 bg-[rgba(7,20,34,0.98)] p-6 shadow-[0_0_80px_rgba(4,17,29,0.35)] lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading text-lg font-semibold tracking-[0.2em] text-white">MAHAAAI</span>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:bg-white/12"
                onClick={onClose}
                aria-label="Close navigation menu"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {items.map((item) => {
                const active = activeHref === item.href || activeHref.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-[20px] border px-4 py-3",
                      active
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-white/10 bg-white/5 text-white/80"
                    )}
                    onClick={onClose}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.label}</span>
                      <ArrowRight className="size-4" />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/60">Bring clarity to growth, operations, and innovation.</p>
              <Button className="mt-4 w-full" size="sm">
                Book Demo
              </Button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export { MobileMenu };
