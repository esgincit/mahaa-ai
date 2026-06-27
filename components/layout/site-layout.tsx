import * as React from "react";

import { MegaNavigation } from "@/components/navigation/mega-navigation";
import { Container } from "@/components/ui/container";

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <MegaNavigation />

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-background/60">
        <Container className="flex flex-col gap-2 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MahaaAI. Intelligence that cultivates the future.</p>
          <p className="text-white/45">Built for enterprise robotics and AI platforms.</p>
        </Container>
      </footer>
    </div>
  );
}

export { SiteLayout };
