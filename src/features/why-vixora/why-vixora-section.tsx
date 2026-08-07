import * as React from "react";
import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { whyVixoraData } from "@/data/why-vixora";
import { Container } from "@/components/ui/container";

export function WhyVixoraSection() {
  const { header, differentiators } = whyVixoraData;

  return (
    <section className="relative w-full py-24 md:py-32 bg-background">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Sticky Header Context */}
          <div className="flex flex-col items-start lg:col-span-4 lg:sticky lg:top-32 lg:h-fit">
            <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
              <ShieldCheck className="mr-2 h-3.5 w-3.5" />
              {header.badge}
            </Badge>
            
            <Heading variant="h2" className="mb-6 tracking-tight text-balance">
              {header.title}
            </Heading>
            
            <p className="text-lg leading-relaxed text-muted-foreground text-balance">
              {header.description}
            </p>
          </div>

          {/* Right Column: Grid of Differentiators */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:col-span-8">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={item.title} 
                  variant="interactive" 
                  className="group relative flex flex-col p-6 overflow-hidden bg-surface"
                >
                  {/* Subtle Interactive Ambient Glow */}
                  <div 
                    className="absolute inset-0 -z-10 bg-primary/0 opacity-0 blur-2xl transition-all duration-700 group-hover:bg-primary/5 group-hover:opacity-100" 
                    aria-hidden="true" 
                  />

                  <div className="mb-6 flex items-center justify-between">
                    <div className="rounded-lg bg-background p-2.5 text-muted-foreground border border-border/50 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    {item.metric && (
                      <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase opacity-70 transition-opacity group-hover:opacity-100">
                        {item.metric}
                      </span>
                    )}
                  </div>
                  
                  <CardTitle className="mb-2.5 text-lg font-semibold text-foreground">
                    {item.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </Card>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
