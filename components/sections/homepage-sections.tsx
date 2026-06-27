"use client";

import * as React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight,
  Bot,
  Brain,
  Camera,
  Cloud,
  Cpu,
  Globe2,
  Microscope,
  Monitor,
  Radar,
  Sparkles,
  Sprout,
  Tractor,
  Zap,
} from "lucide-react";

import { Grid } from "@/components/layout/grid";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const partnerLogos = ["Agrisys", "Northstar", "HelioFarm", "AtlaGrid", "Mosaic Labs", "GreenOrbit"];

const roboticsFeatures = [
  {
    title: "Autonomous Rover",
    description: "Terrain-aware mobility and precision sensing for high-variance environments.",
    icon: Radar,
  },
  {
    title: "Smart Drone",
    description: "Adaptive aerial inspection with autonomous path planning and anomaly detection.",
    icon: Bot,
  },
  {
    title: "Precision Tractor",
    description: "Variable-rate action systems that optimize yield, input use, and field care.",
    icon: Tractor,
  },
];

const platformFeatures = [
  "Live operations dashboard",
  "Predictive maintenance models",
  "Multisite workflow orchestration",
  "Secure field-to-cloud telemetry",
];

const twinCards = [
  {
    title: "Field simulation",
    description: "Model soil, crop, and weather behavior in a living digital replica.",
  },
  {
    title: "Fleet planning",
    description: "Coordinate robots, sensors, and people in a unified operating environment.",
  },
  {
    title: "Scenario stress tests",
    description: "Evaluate outcomes before committing time, labor, and equipment to the field.",
  },
];

const timelineItems = [
  { year: "2019", title: "AI crop intelligence launch", body: "Founded the first hybrid sensing platform for autonomous farm coordination." },
  { year: "2021", title: "Drone autonomy expansion", body: "Scaled aerial operations with computer vision pipelines for rapid field assessment." },
  { year: "2024", title: "Global deployment rollout", body: "Extended robotics intelligence into every major food-producing region." },
];

const researchMetrics = [
  { label: "Research papers", value: 81, suffix: "+" },
  { label: "Field trials", value: 240, suffix: "+" },
  { label: "Active pilots", value: 37, suffix: "+" },
];

const technologies = [
  { name: "Computer Vision", description: "High-accuracy crop and field perception", icon: Camera },
  { name: "AI", description: "Decision engines for planning and forecasting", icon: Brain },
  { name: "Robotics", description: "Autonomous agents for field operations", icon: Bot },
  { name: "IoT", description: "Real-time device telemetry and orchestration", icon: Cpu },
  { name: "Cloud", description: "Secure edge-to-cloud compute stack", icon: Cloud },
  { name: "Edge AI", description: "Low-latency inference at the field edge", icon: Zap },
];

const impactStats = [
  { label: "Acres Managed", value: 2400000, suffix: "+", detail: "Field area monitored and optimized", icon: Sprout },
  { label: "Robots Deployed", value: 180, suffix: "+", detail: "Autonomous systems active in operations", icon: Bot },
  { label: "Research Projects", value: 64, suffix: "+", detail: "Active innovation programs and pilots", icon: Microscope },
  { label: "Countries", value: 27, suffix: "+", detail: "Global deployments and partners", icon: Globe2 },
];

const testimonials = [
  {
    quote: "MahaaAI gave our operations team a calm, intelligent control layer we can trust in high-pressure seasons.",
    author: "Mina Alvarez",
    role: "COO, Northstar Farms",
  },
  {
    quote: "We modernized our fleet planning in weeks, not quarters, and saw immediate gains in visibility and uptime.",
    author: "Darren Brooks",
    role: "VP of Technology, HelioFarm",
  },
  {
    quote: "Their digital twin workflow helped us simulate interventions before spending on costly field changes.",
    author: "Sara Chen",
    role: "Director of Innovation, Mosaic Labs",
  },
];

const newsItems = [
  {
    title: "MahaaAI opens a new autonomy lab",
    description: "A dedicated robotics research center now supports rapid simulation and field validation.",
    meta: "June 12, 2026",
  },
  {
    title: "New computer vision models improve field insight",
    description: "The latest detection stack delivers a sharper view of crop variability and system health.",
    meta: "May 29, 2026",
  },
  {
    title: "Global deployment partner program expands",
    description: "An expanded operator network now supports regional adoption at enterprise scale.",
    meta: "May 14, 2026",
  },
];

function TrustedBySection() {
  return (
    <Section className="border-t border-white/10 bg-[rgba(3,10,19,0.95)]">
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Trusted by"
          title="Adopted by teams building the next era of agriculture"
          description="From enterprise operators to modern field laboratories, MahaaAI is already shaping the way intelligent systems scale."
          align="center"
        />
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-6">
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: [0, -50] }}
            transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <motion.div
                key={`${logo}-${index}`}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="flex min-w-[180px] items-center justify-center rounded-full border border-white/10 bg-[rgba(255,255,255,0.06)] px-5 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/70"
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

function AboutMahaaSection() {
  return (
    <Section className="bg-[rgba(6,18,31,0.96)]">
      <MaxWidthContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <Badge className="border-primary/25 bg-primary/10 text-primary">Our vision</Badge>
            <h2 className="mt-6 font-heading text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Create resilient, autonomous operations that help every field deliver more with less friction.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              MahaaAI unifies robotics, analytics, and digital twins into an operating architecture that scales from a single farm to a global network.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="gap-2">
                Learn Our Approach
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Platform
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_45%)] p-6 shadow-[0_0_90px_rgba(34,197,94,0.12)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                <div className="h-56 rounded-[1.2rem] border border-dashed border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                  <div className="flex h-full items-end justify-between gap-4">
                    <div className="flex-1 rounded-[1rem] border border-primary/20 bg-primary/10 p-4">
                      <div className="h-12 w-3/4 rounded-full bg-primary/25" />
                      <div className="mt-4 h-20 rounded-[0.75rem] bg-white/8" />
                    </div>
                    <div className="flex-1 rounded-[1rem] border border-sky-400/20 bg-sky-400/10 p-4">
                      <div className="h-10 w-1/2 rounded-full bg-sky-400/25" />
                      <div className="mt-4 h-24 rounded-[0.75rem] bg-white/8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

function RoboticsPlatformSection() {
  return (
    <Section className="bg-[rgba(3,10,19,0.95)]">
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Product ecosystem"
          title="Autonomous machines that adapt on the move"
          description="Deploy the right robotics intelligence for your field, fleet, or facility with a single orchestrated layer."
          align="center"
        />
        <Grid cols="3" className="mt-10">
          {roboticsFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }}>
                <Card className="h-full border-white/10 bg-white/5 backdrop-blur-xl">
                  <CardHeader>
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="mt-4">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="px-0">
                      Learn More
                      <ArrowRight className="size-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </Grid>
      </MaxWidthContainer>
    </Section>
  );
}

function AiPlatformSection() {
  return (
    <Section className="bg-[rgba(6,18,31,0.96)]">
      <MaxWidthContainer>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <Badge className="border-sky-400/25 bg-sky-400/10 text-sky-300">AI platform</Badge>
            <h2 className="mt-5 font-heading text-3xl font-semibold text-white sm:text-4xl">See operations in real time and respond before conditions change.</h2>
            <p className="mt-5 text-lg leading-8 text-white/65">A unified command layer turns field, fleet, and facility data into clear intelligence for teams on the move.</p>
            <ul className="mt-8 space-y-3">
              {platformFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                  <Sparkles className="size-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button size="lg" className="mt-8 gap-2">
              Explore AI Workflows
              <ArrowRight className="size-4" />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(10,23,38,0.85)] p-4 shadow-[0_0_100px_rgba(56,189,248,0.12)] backdrop-blur-xl sm:p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 sm:p-6">
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span className="font-medium uppercase tracking-[0.28em] text-primary">Operations dashboard</span>
                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1">Live</span>
                </div>
                <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white/70">Fleet output</p>
                      <div className="rounded-full bg-primary/15 px-3 py-1 text-sm text-primary">+12.4%</div>
                    </div>
                    <div className="mt-4 h-28 rounded-[1rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.2),_transparent_60%)]" />
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Autonomy uptime", value: "99.8%" },
                      { label: "Risk alerts", value: "3 active" },
                      { label: "Actionable insights", value: "18" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-[1rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-sm text-white/60">{item.label}</p>
                        <p className="mt-1 text-2xl font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

function DigitalTwinSection() {
  return (
    <Section className="bg-[rgba(3,10,19,0.95)]">
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Digital twin"
          title="Model the future before you move a single machine"
          description="Connect your physical systems to a living digital environment and test every decision with confidence."
          align="center"
        />
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 px-6 py-4">
            <motion.div animate={{ x: [0, 80, 0], y: [0, -12, 0] }} transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} className="absolute left-8 top-1/2 h-3 w-3 rounded-full bg-primary" />
            <motion.div animate={{ x: [0, -70, 0], y: [0, 12, 0] }} transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} className="absolute right-8 top-1/2 h-3 w-3 rounded-full bg-sky-400" />
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
        <Grid cols="3" className="mt-10">
          {twinCards.map((card, index) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.06 }}>
              <Card className="group h-full border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] backdrop-blur-xl">
                <CardHeader>
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                    <Monitor className="size-5" />
                  </div>
                  <CardTitle className="mt-4">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/8" />
                  <div className="mt-3 flex gap-2">
                    <div className="h-2 flex-1 rounded-full bg-primary/70" />
                    <div className="h-2 flex-1 rounded-full bg-sky-400/70" />
                    <div className="h-2 w-10 rounded-full bg-white/10" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </MaxWidthContainer>
    </Section>
  );
}

function ResearchSection() {
  return (
    <Section className="bg-[rgba(6,18,31,0.96)]">
      <MaxWidthContainer>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <SectionTitle
              eyebrow="Research & Innovation"
              title="Innovation grounded in field evidence"
              description="Every release is guided by real-world evaluation, bench validation, and autonomous learning loops."
            />
            <div className="mt-8 space-y-5">
              {timelineItems.map((item) => (
                <div key={item.year} className="flex gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">{item.year}</div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/60">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 shadow-[0_0_90px_rgba(34,197,94,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                <Microscope className="size-4" />
                Innovation metrics
              </div>
              <Grid cols="1" className="mt-6">
                {researchMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-semibold text-white">
                      <CountUp end={metric.value} duration={2.2} suffix={metric.suffix} />
                    </p>
                    <p className="mt-2 text-sm text-white/60">{metric.label}</p>
                  </div>
                ))}
              </Grid>
              <div className="mt-6 rounded-[1rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Publications</p>
                <div className="mt-4 space-y-3">
                  {[
                    "Field robotics and autonomy review",
                    "Adaptive sensing for resilient operations",
                  ].map((item) => (
                    <div key={item} className="rounded-[0.9rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

function TechnologySection() {
  return (
    <Section className="bg-[rgba(3,10,19,0.95)]">
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Technology Stack"
          title="The foundation beneath every autonomous workflow"
          description="AI, computer vision, robotics, IoT, cloud, and edge intelligence work together as a single operating stack."
          align="center"
        />
        <Grid cols="5" className="mt-10">
          {technologies.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                <Card className="h-full border-white/10 bg-white/5 p-2 backdrop-blur-xl">
                  <CardHeader>
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="mt-4">{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </Grid>
      </MaxWidthContainer>
    </Section>
  );
}

function ImpactSection() {
  return (
    <Section className="bg-[rgba(6,18,31,0.96)]">
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Impact Metrics"
          title="Measured outcomes, proven at enterprise scale"
          description="Every deployment is paired with insights that improve uptime, visibility, and decision quality."
          align="center"
        />
        <Grid cols="4" className="mt-10">
          {impactStats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.06 }} whileHover={{ y: -6, scale: 1.01 }}>
                <div className="group rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <Sparkles className="size-4 text-primary/80 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <p className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
                    <CountUp end={item.value} duration={2.2} suffix={item.suffix} />
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/55">{item.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </Grid>
      </MaxWidthContainer>
    </Section>
  );
}

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <Section className="bg-[rgba(3,10,19,0.95)]">
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by leaders building intelligent operations"
          description="Teams choose MahaaAI for calm orchestration, measurable impact, and elegant deployments."
          align="center"
        />
        <div className="mt-10 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 shadow-[0_0_80px_rgba(56,189,248,0.09)] backdrop-blur-xl sm:p-8">
          <motion.div key={testimonials[activeIndex].author} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 sm:p-8">
            <p className="text-lg leading-8 text-white/80">“{testimonials[activeIndex].quote}”</p>
            <div className="mt-6">
              <p className="font-semibold text-white">{testimonials[activeIndex].author}</p>
              <p className="mt-1 text-sm text-white/60">{testimonials[activeIndex].role}</p>
            </div>
          </motion.div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button key={item.author} type="button" aria-label={`Show testimonial ${index + 1}`} onClick={() => setActiveIndex(index)} className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-white/20"}`} />
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

function LatestNewsSection() {
  return (
    <Section className="bg-[rgba(6,18,31,0.96)]">
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Latest news"
          title="Fresh updates from the frontier of applied intelligence"
          description="See what our teams are releasing, validating, and expanding next."
          align="center"
        />
        <Grid cols="3" className="mt-10">
          {newsItems.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06 }}>
              <Card className="h-full border-white/10 bg-white/5 backdrop-blur-xl">
                <CardHeader>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{item.meta}</p>
                  <CardTitle className="mt-3">{item.title}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="px-0">
                    Read article
                    <ArrowRight className="size-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </MaxWidthContainer>
    </Section>
  );
}

function FinalCtaSection() {
  return (
    <Section className="bg-[rgba(3,10,19,0.95)]">
      <MaxWidthContainer>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(120deg,rgba(34,197,94,0.24),rgba(56,189,248,0.16),rgba(15,23,42,0.98))] p-8 shadow-[0_0_100px_rgba(34,197,94,0.12)] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <Badge className="border-white/20 bg-white/10 text-white">Ready to deploy</Badge>
            <h2 className="mt-6 font-heading text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
              Ready to Transform Agriculture?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              Discover how MahaaAI can help your team unify robotics, analytics, and digital twins into one premium operating platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Book a Demo
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </MaxWidthContainer>
    </Section>
  );
}

export {
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
};
