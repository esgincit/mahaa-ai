import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full border border-transparent text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_12px_40px_rgba(34,197,94,0.2)] hover:bg-primary/90",
        outline:
          "border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white",
        secondary:
          "bg-secondary/10 text-secondary hover:bg-secondary/20",
        ghost: "bg-transparent text-white/80 hover:bg-white/8 hover:text-white",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "rounded-none border-none bg-transparent p-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 gap-2 px-5",
        sm: "h-10 gap-2 px-4 text-sm",
        lg: "h-12 gap-2 px-6 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
