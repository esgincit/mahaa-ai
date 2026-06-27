"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  description: string;
  highlights: Array<{ label: string; href: string; blurb: string }>;
};

const navItems: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    description: "Mission-ready platforms for automation and operations.",
    highlights: [
      { label: "Robotics OS", href: "/products/robotics-os", blurb: "Control fleets with adaptive orchestration." },
      { label: "AI Workbench", href: "/products/ai-workbench", blurb: "Accelerate decisions with living models." },
    ],
  },
  {
    label: "Research",
    href: "/research",
    description: "Research systems engineered for rigorous insight.",
    highlights: [
      { label: "Knowledge Graph", href: "/research/graph", blurb: "Connect experiments, evidence, and outcomes." },
      { label: "Simulation Lab", href: "/research/simulation", blurb: "Test behavior across real-world conditions." },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
    description: "A stack designed for speed, safety, and scale.",
    highlights: [
      { label: "Digital Twin", href: "/technology/digital-twin", blurb: "Visualize and operate in a living environment." },
      { label: "Edge Intelligence", href: "/technology/edge", blurb: "Deploy insights where decisions happen." },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    description: "Tailored outcomes for complex organizations.",
    highlights: [
      { label: "Operational AI", href: "/solutions/ai", blurb: "Turn workflows into intelligent systems." },
      { label: "Infrastructure Modernization", href: "/solutions/infrastructure", blurb: "Unify data, control, and trust." },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Vertical expertise across advanced sectors.",
    highlights: [
      { label: "Manufacturing", href: "/industries/manufacturing", blurb: "Precision automation at every layer." },
      { label: "Energy", href: "/industries/energy", blurb: "Situational intelligence for mission-critical environments." },
    ],
  },
  {
    label: "About",
    href: "/about",
    description: "A team building the future of applied intelligence.",
    highlights: [
      { label: "Our Story", href: "/about/story", blurb: "Learn how MahaaAI was built." },
      { label: "Leadership", href: "/about/leadership", blurb: "Meet the teams shaping the platform." },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Perspectives on robotics, research, and AI design.",
    highlights: [
      { label: "Insights", href: "/blog/insights", blurb: "Read the latest field notes." },
      { label: "Case Studies", href: "/blog/case-studies", blurb: "Explore how our systems perform in production." },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    description: "Join a team building trusted AI systems.",
    highlights: [
      { label: "Open Roles", href: "/careers/open-roles", blurb: "Find the right fit for your craft." },
      { label: "Culture", href: "/careers/culture", blurb: "What it means to build with MahaaAI." },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Start a conversation with our team.",
    highlights: [
      { label: "Book a Demo", href: "/contact/demo", blurb: "See the platform in action." },
      { label: "Support", href: "/contact/support", blurb: "Reach our specialists for rollout needs." },
    ],
  },
];

function MegaNavigation() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isActiveRoute = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(4,17,29,0.72)] backdrop-blur-2xl"
      >
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="font-heading text-lg font-semibold tracking-[0.2em] text-white sm:text-xl">
            MAHAAAI
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const active = isActiveRoute(item.href);

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    type="button"
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                      active
                        ? "bg-primary/12 text-primary"
                        : "text-white/70 hover:bg-white/8 hover:text-white"
                    )}
                    onClick={() => setActiveMenu((current) => (current === item.label ? null : item.label))}
                    aria-expanded={activeMenu === item.label}
                  >
                    {item.label}
                  </button>

                  <AnimatePresence>
                    {activeMenu === item.label ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 top-full mt-3 w-[min(82vw,720px)] rounded-[28px] border border-white/10 bg-[rgba(8,22,36,0.95)] p-6 shadow-[0_25px_120px_rgba(4,17,29,0.45)] backdrop-blur-2xl"
                      >
                        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
                          <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                              {item.label}
                            </p>
                            <h3 className="mt-3 font-heading text-2xl font-semibold text-white">
                              {item.description}
                            </h3>
                            <Link
                              href={item.href}
                              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
                              onClick={() => setActiveMenu(null)}
                            >
                              Explore {item.label}
                              <ArrowRight className="size-4" />
                            </Link>
                          </div>

                          <div className="grid gap-3">
                            {item.highlights.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-[18px] border border-white/10 bg-background/70 p-4 transition hover:border-primary/35 hover:bg-primary/10"
                                onClick={() => setActiveMenu(null)}
                              >
                                <div className="flex items-center justify-between gap-3">
                                  <span className="text-sm font-semibold text-white">{link.label}</span>
                                  <ArrowRight className="size-4 text-primary" />
                                </div>
                                <p className="mt-2 text-sm leading-6 text-white/60">{link.blurb}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Book Demo
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:bg-white/12 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-[rgba(4,17,29,0.78)] backdrop-blur-md lg:hidden"
              onClick={() => setMobileOpen(false)}
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
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {navItems.map((item) => {
                  const active = isActiveRoute(item.href);
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
                      onClick={() => setMobileOpen(false)}
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
    </>
  );
}

export { MegaNavigation };
