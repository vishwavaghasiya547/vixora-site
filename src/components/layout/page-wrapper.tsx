import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

/**
 * PageWrapper acts as the top-level main tag for all pages.
 * It establishes the base z-index context, ensures min-height, and
 * prepares the relative positioning for global background glows.
 */
export function PageWrapper({ children, className, ...props }: PageWrapperProps) {
  return (
    <main
      className={cn("relative flex min-h-screen flex-col", className)}
      {...props}
    >
      {children}
    </main>
  );
}
