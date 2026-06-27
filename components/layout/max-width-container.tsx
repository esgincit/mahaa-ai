import * as React from "react";

import { cn } from "@/lib/utils";

interface MaxWidthContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

function MaxWidthContainer({
  as: Component = "div",
  className,
  children,
  ...props
}: MaxWidthContainerProps) {
  return (
    <Component className={cn("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10", className)} {...props}>
      {children}
    </Component>
  );
}

export { MaxWidthContainer };
