import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  blur?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
}

const blurMap = {
  sm: "blur-sm",
  md: "blur-md",
  lg: "blur-lg",
  xl: "blur-xl",
  "2xl": "blur-2xl",
  "3xl": "blur-3xl",
}

const Glow = React.forwardRef<HTMLDivElement, GlowProps>(
  ({ className, color = "bg-primary/20", blur = "3xl", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute pointer-events-none rounded-full",
          color,
          blurMap[blur],
          className
        )}
        aria-hidden="true"
        {...props}
      />
    )
  }
)
Glow.displayName = "Glow"

export { Glow }
