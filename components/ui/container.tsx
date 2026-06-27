import * as React from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("container-shell", className)} {...props}>
      {children}
    </div>
  );
}

export { Container };
