import * as React from "react";

import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: "1" | "2" | "3" | "4";
  gap?: "sm" | "md" | "lg";
}

function Grid({ className, cols = "2", gap = "md", children, ...props }: GridProps) {
  const colsClassName = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
  }[cols];

  const gapClassName = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  }[gap];

  return (
    <div className={cn("grid", colsClassName, gapClassName, className)} {...props}>
      {children}
    </div>
  );
}

export { Grid };
