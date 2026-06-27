"use client";

import Link from "next/link";
import * as React from "react";

import { MegaMenu } from "@/components/navigation/MegaMenu";
import { cn } from "@/lib/utils";

type NavMenuItem = {
  label: string;
  href: string;
  description: string;
  items: Array<{ label: string; href: string; blurb: string }>;
};

type NavMenuProps = {
  items: NavMenuItem[];
  activeHref: string;
  openMenu: string | null;
  setOpenMenu: (value: string | null) => void;
};

function NavMenu({ items, activeHref, openMenu, setOpenMenu }: NavMenuProps) {
  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {items.map((item) => {
        const active = activeHref === item.href || activeHref.startsWith(`${item.href}/`);
        const isOpen = openMenu === item.label;

        return (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                active ? "bg-primary/12 text-primary" : "text-white/70 hover:bg-white/8 hover:text-white"
              )}
              onClick={() => setOpenMenu(isOpen ? null : item.label)}
              aria-expanded={isOpen}
            >
              {item.label}
            </button>

            <MegaMenu
              label={item.label}
              description={item.description}
              href={item.href}
              items={item.items}
              isOpen={isOpen}
              onClose={() => setOpenMenu(null)}
            />
          </div>
        );
      })}
    </nav>
  );
}

export { NavMenu };
