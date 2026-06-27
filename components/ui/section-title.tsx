import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-white/65">{description}</p>
      ) : null}
    </div>
  );
}

export { SectionTitle };
