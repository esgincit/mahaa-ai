import * as React from "react";

import { cn } from "@/lib/utils";

interface MaxWidthContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children?: React.ReactNode;
}

function MaxWidthContainer({
  as,
  className,
  children,
  ...props
}: MaxWidthContainerProps) {
  const Component = (as ?? "div") as React.ElementType;

  return React.createElement(
    Component,
    {
      className: cn("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10", className),
      ...props,
    },
    children,
  );
}

export { MaxWidthContainer };
