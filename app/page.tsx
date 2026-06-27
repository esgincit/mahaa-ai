'use client';

import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import { SiteLayout } from "@/components/layout/site-layout";
import { Grid } from "@/components/layout/grid";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import {
  AboutMahaaSection,
  AiPlatformSection,
  DigitalTwinSection,
  FinalCtaSection,
  ImpactSection,
  LatestNewsSection,
  ResearchSection,
  RoboticsPlatformSection,
  TechnologySection,
  TestimonialsSection,
  TrustedBySection,
} from "@/components/sections/homepage-sections";
import { Scene } from "@/components/three/Scene";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";

const metrics = [
  { label: "Fields monitored", value: 16000, suffix: "+", duration: 2.2 },
  { label: "Autonomy uptime", value: 99.8, suffix: "%", duration: 2.4 },
  { label: "Insight cycles", value: 24, suffix: "/7", duration: 2.0 },
  { label: "Mission readiness", value: 100, suffix: "%", duration: 2.1 },
];

const stats = [
  { label: "Products", value: 42, suffix: "+", detail: "Field-ready systems", duration: 2.4 },
  { label: "Research", value: 18, suffix: "k", detail: "Annual experiments", duration: 2.2 },
  { label: "Countries", value: 27, suffix: "+", detail: "Global deployments", duration: 2.3 },
  { label: "Patents", value: 96, suffix: "+", detail: "Protected IP", duration: 2.5 },
];

const highlights = [
  {
    title: "Adaptive field robotics",
    description: "Deploy autonomous systems that respond to terrain, weather, and crop variability in real time.",
  },
  {
    title: "Decision intelligence",
    description: "Translate sensor data into prognostic insight that teams can act on immediately.",
  },
  {
    title: "Digital twin operations",
    description: "Model facilities, fleets, and fields in a living environment to accelerate strategy.",
  },
];

const particles = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  left: `${(index * 7) % 100}%`,
  top: `${(index * 13) % 100}%`,
  size: `${8 + (index % 4) * 3}px`,
  delay: `${index * 0.16}s`,
}));

export default function Home() {
  return (
    <SiteLayout>
      <section className="relative isolate min-h-[calc(100vh-4.5rem)] overflow-hidden bg-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.2),_transparent_32%),linear-gradient(120deg,_rgba(4,17,29,0.95),_rgba(8,24,39,0.96))]" />
          <motion.div
            className="absolute inset-[-20%] rounded-full bg-[radial-gradient(circle,_rgba(34,197,94,0.14),_transparent_55%)]"
            animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 opacity-70"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ backgroundImage: "linear-gradient(110deg, rgba(255,255,255,0.02) 0%, transparent 35%, rgba(34,197,94,0.08) 50%, transparent 70%, rgba(56,189,248,0.06) 100%)", backgroundSize: "200% 200%" }}
          />
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute rounded-full bg-white/60"
              style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
              animate={{ y: [0, -18, 0], opacity: [0.35, 0.85, 0.35] }}
              transition={{ duration: 5 + (particle.id % 5), repeat: Number.POSITIVE_INFINITY, delay: Number(particle.delay) }}
            />
          ))}
        </div>

        <MaxWidthContainer className="relative flex min-h-[calc(100vh-4.5rem)] items-center py-16 lg:py-24">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <Badge className="border-primary/30 bg-primary/10 text-primary">
                Autonomous intelligence for modern agriculture
              </Badge>
              <h1 className="mt-8 font-heading text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl">
                Autonomous Intelligence for Agriculture
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
                {company.tagline}
              </p>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                Orchestrate robotics, predictive insight, and resilient operations from a single intelligent platform built for modern farms.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Explore Platform
                  <ArrowRight className="size-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Demo
                </Button>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 backdrop-blur">
                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-1 text-sm text-white/60">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(10,23,38,0.82)] p-4 shadow-[0_0_120px_rgba(34,197,94,0.2)] backdrop-blur-2xl sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_42%)]" />
                <div className="relative rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-3 sm:p-6">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span className="font-medium uppercase tracking-[0.28em] text-primary">Autonomous robotics</span>
                    <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1">Interactive 3D</span>
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <Scene />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </MaxWidthContainer>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-sm text-white/60"
        >
          <span>Scroll</span>
          <ChevronDown className="mt-1 size-4" />
        </motion.div>
      </section>

      <Section className="border-t border-white/10 bg-[rgba(4,17,29,0.85)]">
        <MaxWidthContainer>
          <SectionTitle
            eyebrow="Design system foundation"
            title="A premium experience for enterprise agriculture"
            description="Every component is built to feel calm, intelligent, and unmistakably modern."
            align="center"
          />
          <Grid cols="3" className="mt-10">
            {highlights.map((item) => (
              <Card key={item.title} className="border-white/10 bg-white/5 backdrop-blur">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="px-0">
                    Learn more
                    <ArrowRight className="size-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 sm:p-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Navigation ready</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-white">Structured for growth and expansion</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {navigation.slice(0, 4).map((item) => (
                  <Badge key={item.href} variant="secondary" className="border-sky-400/20 bg-sky-400/10 text-sky-300">
                    {item.label}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </MaxWidthContainer>
      </Section>

      <TrustedBySection />
      <AboutMahaaSection />
      <RoboticsPlatformSection />
      <AiPlatformSection />
      <DigitalTwinSection />
      <ResearchSection />
      <TechnologySection />
      <ImpactSection />
      <TestimonialsSection />
      <LatestNewsSection />
      <FinalCtaSection />
    </SiteLayout>
  );
}
