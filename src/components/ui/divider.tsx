import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const dividerVariants = cva("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

export interface DividerProps
  extends React.HTMLAttributes<HTMLHRElement | HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  orientation?: "horizontal" | "vertical"
}

const Divider = React.forwardRef<HTMLHRElement | HTMLDivElement, DividerProps>(
  ({ className, orientation, ...props }, ref) => {
    if (orientation === "vertical") {
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          role="separator"
          aria-orientation="vertical"
          className={cn(dividerVariants({ orientation, className }))}
          {...props}
        />
      )
    }

    return (
      <hr
        ref={ref as React.Ref<HTMLHRElement>}
        className={cn(dividerVariants({ orientation, className }))}
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"

export { Divider, dividerVariants }
