"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/navigation/Logo";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { NavMenu } from "@/components/navigation/NavMenu";
import { cn } from "@/lib/utils";

const desktopMenuItems = [
  {
    label: "Products",
    href: "/products",
    description: "Mission-ready systems for robotics and operations.",
    items: [
      { label: "Robotics OS", href: "/products/robotics-os", blurb: "Coordinate fleets with adaptive orchestration." },
      { label: "AI Workbench", href: "/products/ai-workbench", blurb: "Turn field data into rapid decisions." },
    ],
  },
  {
    label: "Research",
    href: "/research",
    description: "Applied intelligence and simulation built for rigorous teams.",
    items: [
      { label: "Knowledge Graph", href: "/research/knowledge-graph", blurb: "Connect experiments, evidence, and outcomes." },
      { label: "Simulation Lab", href: "/research/simulation-lab", blurb: "Model complex environments before deployment." },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
    description: "The platform architecture behind the MahaaAI experience.",
    items: [
      { label: "Digital Twin", href: "/technology/digital-twin", blurb: "Visualize field and facility operations in real time." },
      { label: "Edge Intelligence", href: "/technology/edge", blurb: "Deploy decisioning where actions happen." },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    description: "Tailored outcomes for growth, operations, and innovation.",
    items: [
      { label: "Operational AI", href: "/solutions/operational-ai", blurb: "Make complex workflows measurable and adaptive." },
      { label: "Infrastructure Modernization", href: "/solutions/infrastructure", blurb: "Unify control, data, and trust." },
    ],
  },
];

const standardItems = [
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 80], [0.7, 0.95]);
  const backgroundColor = useTransform(backgroundOpacity, (value) => `rgba(4, 17, 29, ${value})`);

  return (
    <motion.header
      style={{ backgroundColor }}
      className="sticky top-0 z-40 border-b border-white/10 backdrop-blur-2xl"
    >
      <Container className="flex items-center justify-between py-4">
        <Logo />

        <div className="hidden items-center gap-2 lg:flex">
          <NavMenu items={desktopMenuItems} activeHref={pathname} openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div className="ml-2 flex items-center gap-2">
            {standardItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link key={item.href} href={item.href} className={cn("rounded-full px-4 py-2 text-sm font-medium transition", active ? "bg-primary/12 text-primary" : "text-white/70 hover:bg-white/8 hover:text-white")}> 
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Book Demo
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:bg-white/12 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </Container>

      <MobileMenu items={[...desktopMenuItems.map((item) => ({ label: item.label, href: item.href })), ...standardItems]} isOpen={mobileOpen} onClose={() => setMobileOpen(false)} activeHref={pathname} />
    </motion.header>
  );
}

export { Header };
