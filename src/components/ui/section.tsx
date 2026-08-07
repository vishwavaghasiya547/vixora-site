import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Container } from "./container"

const sectionVariants = cva("w-full relative", {
  variants: {
    spacing: {
      default: "py-24 md:py-32",
      sm: "py-12 md:py-16",
      lg: "py-32 md:py-48",
      none: "py-0",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
})

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  title?: string
  subtitle?: string
  badge?: React.ReactNode
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, title, subtitle, badge, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ spacing }), className)}
        {...props}
      >
        <Container>
          {(title || subtitle || badge) && (
            <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
              {badge && <div className="mb-4">{badge}</div>}
              {title && (
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-4 text-lg text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </Container>
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section, sectionVariants }
