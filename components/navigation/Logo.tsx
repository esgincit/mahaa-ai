import Link from "next/link";
import * as React from "react";

import { company } from "@/data/company";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
        M
      </div>
      <div className="leading-tight">
        <p className="font-heading text-base font-semibold tracking-[0.24em] text-white">{company.name.toUpperCase()}</p>
        <p className="text-xs uppercase tracking-[0.24em] text-white/50">{company.tagline}</p>
      </div>
    </Link>
  );
}

export { Logo };
