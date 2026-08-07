import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { caseStudiesData } from "@/data/case-studies";

export function CaseStudiesSection() {
  const { header, projects } = caseStudiesData;

  return (
    <section className="relative w-full py-24 md:py-32 bg-background border-t border-border/50">
      <Container>
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
            <Briefcase className="mr-2 h-3.5 w-3.5" />
            {header.badge}
          </Badge>
          
          <Heading variant="h2" className="mb-6 max-w-3xl tracking-tight text-balance">
            {header.title}
          </Heading>
          
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            {header.description}
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="flex flex-col space-y-12 md:space-y-24">
          {projects.map((project) => (
            <Card 
              key={project.name} 
              variant="interactive" 
              className="group relative flex flex-col overflow-hidden bg-surface lg:flex-row"
            >
              
              {/* Thumbnail Area (Left on Desktop) */}
              <div className="relative flex min-h-[300px] w-full items-center justify-center bg-muted/20 border-b border-border/50 lg:w-2/5 lg:border-b-0 lg:border-r overflow-hidden transition-colors duration-500 group-hover:bg-muted/40">
                <Image 
                  src={project.image} 
                  alt={`Screenshot of ${project.name}`} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center opacity-80 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:mix-blend-normal group-hover:opacity-100" 
                />

                {/* Glass Overlay on Hover */}
                <div 
                  className="absolute inset-0 z-20 bg-background/5 opacity-0 backdrop-blur-sm transition-all duration-700 group-hover:opacity-100 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="rounded-full bg-primary/10 p-4 border border-primary/20 text-primary transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Content Area (Right on Desktop) */}
              <div className="flex w-full flex-col p-8 md:p-10 lg:w-3/5 lg:p-12 relative z-30 bg-surface">
                
                {/* Header: Industry & Tech */}
                <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    {project.industry}
                  </Badge>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Chip key={tech} variant="ghost" className="text-[10px] px-2 py-0.5 border-border/50">
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </div>

                <Heading variant="h3" className="mb-4 text-foreground">
                  {project.name}
                </Heading>

                <p className="mb-8 text-base text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>

                {/* Context Grid */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col">
                    <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">The Challenge</span>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">The Solution</span>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Engineering Highlights & CTA */}
                <div className="mt-auto flex flex-col gap-6 border-t border-border/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-4">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center text-foreground/70">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-primary opacity-70" />
                        <span className="text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={project.href}
                    className="inline-flex shrink-0 items-center text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline mt-4 sm:mt-0"
                    aria-label={`View full case study for ${project.name}`}
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                
              </div>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}
