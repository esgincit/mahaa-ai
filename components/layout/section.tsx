import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>;
  padding?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

function Section({
  as,
  className,
  padding = "lg",
  children,
  ...props
}: SectionProps) {
  const paddingClassName = {
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20 lg:py-24",
    lg: "py-20 sm:py-24 lg:py-32",
  }[padding];

  const Component = (as ?? "section") as keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>;

  return React.createElement(
    Component,
    {
      className: cn("relative", paddingClassName, className),
      ...props,
    },
    children,
  );
}

export { Section };
