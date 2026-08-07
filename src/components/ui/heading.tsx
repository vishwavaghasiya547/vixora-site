import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva("font-semibold text-foreground", {
  variants: {
    variant: {
      hero: "text-5xl tracking-tighter sm:text-6xl md:text-7xl lg:text-[72px] leading-[1.1]",
      h1: "text-4xl tracking-tight sm:text-5xl md:text-[56px] leading-[1.1]",
      h2: "text-3xl tracking-tight sm:text-4xl md:text-[40px] leading-[1.2]",
      h3: "text-2xl tracking-tight md:text-[32px] font-medium leading-[1.2]",
      h4: "text-xl tracking-tight md:text-[24px] font-medium leading-[1.3]",
      body: "text-base md:text-[18px] font-normal leading-[1.6]",
      caption: "text-xs md:text-[12px] font-medium tracking-[0.02em] leading-[1.4]",
    },
  },
  defaultVariants: {
    variant: "h2",
  },
})

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, as, ...props }, ref) => {
    // Automatically determine semantic tag if 'as' is not provided
    let Component: React.ElementType = as || "h2"
    
    if (!as) {
      if (variant === "hero" || variant === "h1") Component = "h1"
      else if (variant === "h3") Component = "h3"
      else if (variant === "h4") Component = "h4"
      else if (variant === "body" || variant === "caption") Component = "p"
    }

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
