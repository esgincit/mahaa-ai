"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  Download,
  Gauge,
  Layers3,
  RadioTower,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import type { Product } from "@/data/products";
import { getRelatedProducts, products } from "@/data/products";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { MaxWidthContainer } from "@/components/layout/max-width-container";
import { Section } from "@/components/layout/section";
import { SectionTitle } from "@/components/ui/section-title";

const accentStyles = {
  green: {
    text: "text-emerald-300",
    border: "border-emerald-300/25",
    bg: "bg-emerald-400/10",
    glow: "shadow-[0_0_90px_rgba(34,197,94,0.22)]",
    gradient: "from-emerald-300/30 via-sky-300/12 to-white/5",
  },
  sky: {
    text: "text-sky-300",
    border: "border-sky-300/25",
    bg: "bg-sky-400/10",
    glow: "shadow-[0_0_90px_rgba(56,189,248,0.22)]",
    gradient: "from-sky-300/32 via-cyan-300/12 to-white/5",
  },
  amber: {
    text: "text-amber-300",
    border: "border-amber-300/25",
    bg: "bg-amber-400/10",
    glow: "shadow-[0_0_90px_rgba(251,191,36,0.2)]",
    gradient: "from-amber-300/28 via-emerald-300/12 to-white/5",
  },
  violet: {
    text: "text-violet-300",
    border: "border-violet-300/25",
    bg: "bg-violet-400/10",
    glow: "shadow-[0_0_90px_rgba(167,139,250,0.2)]",
    gradient: "from-violet-300/28 via-fuchsia-300/10 to-white/5",
  },
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-300/25",
    bg: "bg-cyan-400/10",
    glow: "shadow-[0_0_90px_rgba(34,211,238,0.2)]",
    gradient: "from-cyan-300/30 via-emerald-300/12 to-white/5",
  },
  lime: {
    text: "text-lime-300",
    border: "border-lime-300/25",
    bg: "bg-lime-400/10",
    glow: "shadow-[0_0_90px_rgba(163,230,53,0.2)]",
    gradient: "from-lime-300/28 via-sky-300/12 to-white/5",
  },
} satisfies Record<Product["accent"], Record<string, string>>;

const toneStyles = {
  green: "from-emerald-400/30 via-emerald-200/10 to-sky-400/10",
  sky: "from-sky-400/30 via-cyan-200/10 to-white/5",
  amber: "from-amber-400/28 via-yellow-200/10 to-emerald-400/10",
  violet: "from-violet-400/30 via-fuchsia-200/10 to-sky-400/10",
  cyan: "from-cyan-400/28 via-teal-200/10 to-emerald-400/10",
  slate: "from-slate-300/18 via-sky-300/10 to-emerald-400/10",
} satisfies Record<Product["gallery"][number]["tone"], string>;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function MotionBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProductRender({ product, compact = false }: { product: Product; compact?: boolean }) {
  const accent = accentStyles[product.accent];

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-lg border border-white/10 bg-white/6 backdrop-blur-xl",
        compact ? "aspect-[4/3]" : "min-h-[420px]",
        accent.glow,
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", accent.gradient)} />
      <div className="absolute inset-x-8 top-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute inset-x-10 bottom-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="absolute inset-0 flex items-center justify-center p-8">
        <motion.div
          className="relative w-full max-w-sm"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className="mx-auto flex aspect-[1.45] w-4/5 items-center justify-center rounded-lg border border-white/15 bg-[#071827]/85 shadow-2xl backdrop-blur">
            <div className="grid h-3/5 w-3/4 grid-cols-3 gap-3">
              <span className={cn("rounded-md border", accent.border, accent.bg)} />
              <span className="rounded-md border border-white/12 bg-white/8" />
              <span className={cn("rounded-md border", accent.border, accent.bg)} />
              <span className="col-span-3 rounded-md border border-white/12 bg-white/8" />
            </div>
          </div>
          <div className="mx-auto mt-5 grid w-full grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <span
                key={index}
                className={cn(
                  "h-9 rounded-full border border-white/15 bg-[#071827] shadow-lg",
                  index % 2 === 0 && accent.border,
                )}
              />
            ))}
          </div>
          <div className="absolute -top-10 left-1/2 h-16 w-2 -translate-x-1/2 rounded-full bg-white/20" />
          <div className={cn("absolute -top-14 left-1/2 size-7 -translate-x-1/2 rounded-full border", accent.border, accent.bg)} />
        </motion.div>
      </div>

      <div className="absolute left-5 top-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-white/55">
        <RadioTower className="size-4" />
        Live system
      </div>
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
        {product.metrics.map((metric) => (
          <div key={metric.label} className="rounded-md border border-white/10 bg-[#04111d]/60 px-3 py-2 backdrop-blur">
            <p className="text-sm font-semibold text-white">{metric.value}</p>
            <p className="mt-0.5 text-[0.68rem] uppercase tracking-[0.16em] text-white/45">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const accent = accentStyles[product.accent];

  return (
    <MotionBlock>
      <Link
        href={`/products/${product.slug}`}
        className="group block h-full rounded-lg border border-white/10 bg-white/6 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/9"
      >
        <ProductRender product={product} compact />
        <div className="mt-5">
          <Badge className={cn(accent.border, accent.bg, accent.text)}>{product.category}</Badge>
          <h3 className="mt-4 font-heading text-xl font-semibold text-white">{product.name}</h3>
          <p className="mt-3 min-h-18 text-sm leading-6 text-white/62">{product.shortDescription}</p>
          <div className={cn("mt-5 flex items-center gap-2 text-sm font-semibold", accent.text)}>
            Explore product
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </MotionBlock>
  );
}

export function ProductsHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-background pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(34,197,94,0.2),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.18),transparent_30%),linear-gradient(135deg,rgba(4,17,29,1),rgba(8,24,39,0.96))]" />
      <MaxWidthContainer className="relative py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <Badge>MahaaAI product system</Badge>
          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-[-0.02em] text-white sm:text-6xl">
            Robotics, intelligence, and control for autonomous agriculture.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            Explore a connected product suite for field scouting, aerial analytics, precision machinery,
            harvest automation, irrigation control, and AI command workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#product-grid" className={buttonVariants({ size: "lg" })}>
              View products
              <ArrowRight className="size-4" />
            </Link>
            <Link href="#comparison" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Compare systems
            </Link>
          </div>
        </motion.div>
      </MaxWidthContainer>
    </section>
  );
}

export function ProductGrid({ items = products }: { items?: Product[] }) {
  return (
    <Section id="product-grid" className="bg-[#061523]">
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Product suite"
          title="A complete operating layer from field to command center"
          description="Each system can deploy independently or work together through the MahaaAI Command Platform."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

export function ProductComparison({ items = products }: { items?: Product[] }) {
  return (
    <Section id="comparison" className="border-y border-white/10 bg-background" padding="md">
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Compare"
          title="Choose the right system for the mission"
          description="A quick operational view across category, core role, autonomy layer, and flagship performance metric."
        />
        <MotionBlock className="mt-10 overflow-hidden rounded-lg border border-white/10 bg-white/6 backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[880px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-[0.2em] text-white/45">
                  <th className="px-5 py-4 font-semibold">Product</th>
                  <th className="px-5 py-4 font-semibold">Category</th>
                  <th className="px-5 py-4 font-semibold">Primary role</th>
                  <th className="px-5 py-4 font-semibold">Autonomy layer</th>
                  <th className="px-5 py-4 font-semibold">Hero metric</th>
                </tr>
              </thead>
              <tbody>
                {items.map((product) => (
                  <tr key={product.slug} className="border-b border-white/8 last:border-0">
                    <td className="px-5 py-5">
                      <Link href={`/products/${product.slug}`} className="font-heading text-base font-semibold text-white hover:text-primary">
                        {product.name}
                      </Link>
                    </td>
                    <td className="px-5 py-5 text-sm text-white/68">{product.category}</td>
                    <td className="max-w-sm px-5 py-5 text-sm leading-6 text-white/62">{product.shortDescription}</td>
                    <td className="px-5 py-5 text-sm text-white/68">{product.aiCapabilities[0]}</td>
                    <td className="px-5 py-5 text-sm font-semibold text-white">{product.metrics[0].value} {product.metrics[0].label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MotionBlock>
      </MaxWidthContainer>
    </Section>
  );
}

export function ProductCta() {
  return (
    <Section className="bg-[#061523]" padding="md">
      <MaxWidthContainer>
        <MotionBlock className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,197,94,0.14),rgba(56,189,248,0.1),rgba(255,255,255,0.04))] p-8 backdrop-blur-xl sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Badge>Book demo</Badge>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
                Build a product stack around your fields, fleet, and operating model.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
                MahaaAI specialists can map the right hardware, AI capabilities, integrations, and rollout plan for your organization.
              </p>
            </div>
            <Link href="/contact/demo" className={buttonVariants({ size: "lg" })}>
              Book demo
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </MotionBlock>
      </MaxWidthContainer>
    </Section>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  const accent = accentStyles[product.accent];
  const related = getRelatedProducts(product);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-background pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(34,197,94,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.16),transparent_30%),linear-gradient(135deg,#04111d,#081827)]" />
        <MaxWidthContainer className="relative py-14 sm:py-18 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Badge className={cn(accent.border, accent.bg, accent.text)}>{product.eyebrow}</Badge>
              <h1 className="mt-6 font-heading text-4xl font-semibold tracking-[-0.02em] text-white sm:text-6xl">
                {product.name}
              </h1>
              <p className={cn("mt-5 text-lg font-medium", accent.text)}>{product.heroStatement}</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                {product.shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact/demo" className={buttonVariants({ size: "lg" })}>
                  Book demo
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href={`/brochures/${product.slug}.txt`}
                  download
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Download brochure
                  <Download className="size-4" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            >
              <ProductRender product={product} />
            </motion.div>
          </div>
        </MaxWidthContainer>
      </section>

      <Section className="border-y border-white/10 bg-[#061523]" padding="md">
        <MaxWidthContainer>
          <div className="grid gap-5 sm:grid-cols-3">
            {product.metrics.map((metric) => (
              <MotionBlock key={metric.label} className="rounded-lg border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
                <p className={cn("font-heading text-3xl font-semibold", accent.text)}>{metric.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/45">{metric.label}</p>
              </MotionBlock>
            ))}
          </div>
        </MaxWidthContainer>
      </Section>

      <Section className="bg-background" padding="md">
        <MaxWidthContainer>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionTitle
              eyebrow="Overview"
              title="Built for production-grade agricultural operations"
              description={product.overview}
            />
            <MotionBlock className="grid gap-4 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="rounded-lg border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
                  <CheckCircle2 className={cn("size-5", accent.text)} />
                  <p className="mt-4 text-sm leading-6 text-white/72">{feature}</p>
                </div>
              ))}
            </MotionBlock>
          </div>
        </MaxWidthContainer>
      </Section>

      <ProductSpecs product={product} />
      <ProductAiCapabilities product={product} />
      <ProductGallery product={product} />
      <RelatedProducts products={related} />
      <ProductCta />
    </>
  );
}

function ProductSpecs({ product }: { product: Product }) {
  return (
    <Section className="border-y border-white/10 bg-[#061523]" padding="md">
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Technical specifications"
          title="Field-ready hardware and platform details"
          description="Specification tables keep procurement, engineering, and operations teams aligned before deployment."
        />
        <MotionBlock className="mt-10 overflow-hidden rounded-lg border border-white/10 bg-white/6 backdrop-blur-xl">
          <table className="w-full border-collapse text-left">
            <tbody>
              {product.specifications.map((spec) => (
                <tr key={spec.label} className="border-b border-white/8 last:border-0">
                  <th className="w-1/3 px-5 py-4 text-sm font-semibold text-white">{spec.label}</th>
                  <td className="px-5 py-4 text-sm leading-6 text-white/65">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </MotionBlock>
      </MaxWidthContainer>
    </Section>
  );
}

function ProductAiCapabilities({ product }: { product: Product }) {
  const accent = accentStyles[product.accent];
  const icons = [Cpu, ScanLine, Gauge, ShieldCheck];

  return (
    <Section className="bg-background" padding="md">
      <MaxWidthContainer>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionTitle
            eyebrow="AI capabilities"
            title="The intelligence layer behind every mission"
            description="MahaaAI models combine edge perception, fleet telemetry, agronomy context, and enterprise data to help teams act faster."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {product.aiCapabilities.map((capability, index) => {
              const Icon = icons[index % icons.length];
              return (
                <MotionBlock key={capability} className="rounded-lg border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
                  <Icon className={cn("size-5", accent.text)} />
                  <p className="mt-4 text-sm leading-6 text-white/72">{capability}</p>
                </MotionBlock>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.22fr_0.78fr] lg:items-start">
          <MotionBlock className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Bot className={cn("size-6", accent.text)} />
              <h3 className="font-heading text-xl font-semibold text-white">Use cases</h3>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.useCases.map((useCase) => (
                <div key={useCase} className="rounded-md border border-white/10 bg-background/45 px-4 py-3 text-sm text-white/70">
                  {useCase}
                </div>
              ))}
            </div>
          </MotionBlock>
          <MotionBlock className="rounded-lg border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
            <Sparkles className={cn("size-6", accent.text)} />
            <h3 className="mt-4 font-heading text-xl font-semibold text-white">Deployment model</h3>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Start with a single mission workflow, connect field data into AI Command, then scale into multi-product autonomy as confidence and coverage grow.
            </p>
          </MotionBlock>
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

function ProductGallery({ product }: { product: Product }) {
  return (
    <Section className="border-y border-white/10 bg-[#061523]" padding="md">
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Gallery"
          title="Product views for field, fleet, and command workflows"
          description="Visual modules show the hardware surface, operational context, and command layer for each product."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {product.gallery.map((item) => (
            <MotionBlock key={item.title} className="overflow-hidden rounded-lg border border-white/10 bg-white/6 backdrop-blur-xl">
              <div className={cn("relative aspect-[4/3] bg-gradient-to-br", toneStyles[item.tone])}>
                <div className="absolute inset-6 rounded-lg border border-white/12 bg-[#04111d]/35" />
                <div className="absolute left-8 right-8 top-1/2 h-px bg-white/25" />
                <div className="absolute bottom-8 left-8 flex items-center gap-2">
                  <Layers3 className="size-5 text-white/72" />
                  <span className="text-xs uppercase tracking-[0.2em] text-white/55">Module</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">{item.description}</p>
              </div>
            </MotionBlock>
          ))}
        </div>
      </MaxWidthContainer>
    </Section>
  );
}

function RelatedProducts({ products: relatedProducts }: { products: Product[] }) {
  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <Section className="bg-background" padding="md">
      <MaxWidthContainer>
        <SectionTitle
          eyebrow="Related products"
          title="Extend this product into a connected autonomy stack"
          description="MahaaAI systems are designed to share telemetry, missions, and decision intelligence."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {relatedProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </MaxWidthContainer>
    </Section>
  );
}
