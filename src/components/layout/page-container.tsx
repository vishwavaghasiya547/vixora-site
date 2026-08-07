import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * PageContainer provides vertical breathing room between the Navbar/Footer 
 * and the main page content, utilizing the atomic Container for horizontal constraints.
 */
export function PageContainer({ children, className, ...props }: PageContainerProps) {
  return (
    <div className={cn("flex-1 py-12 md:py-24", className)} {...props}>
      <Container>{children}</Container>
    </div>
  );
}
