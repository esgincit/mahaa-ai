import type { Metadata } from "next";

import { SiteLayout } from "@/components/layout/site-layout";
import {
  ProductComparison,
  ProductCta,
  ProductGrid,
  ProductsHero,
} from "@/components/products/product-system";

export const metadata: Metadata = {
  title: "Products | MahaaAI",
  description:
    "Explore MahaaAI autonomous agriculture products, including robots, drones, tractors, irrigation systems, harvest automation, and the AI Command Platform.",
};

export default function ProductsPage() {
  return (
    <SiteLayout>
      <ProductsHero />
      <ProductGrid />
      <ProductComparison />
      <ProductCta />
    </SiteLayout>
  );
}
