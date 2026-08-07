"use client";

import * as React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Container } from "@/components/ui/container";
import { faqsData } from "@/data/faqs";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div 
      className={cn(
        "border-b border-border/50 transition-colors duration-300",
        isOpen ? "bg-surface glass" : "hover:bg-muted/20"
      )}
    >
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-foreground md:text-lg">
          {question}
        </span>
        <div 
          className={cn(
            "ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/50 transition-transform duration-300",
            isOpen ? "bg-primary/10 text-primary rotate-180 border-primary/20" : "bg-transparent text-muted-foreground"
          )}
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>
      
      {/* CSS Grid Hack for Smooth Height Transition */}
      <div 
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-base leading-relaxed text-muted-foreground">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const { header, faqs } = faqsData;
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-background border-t border-border/50">
      <Container>
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
            <HelpCircle className="mr-2 h-3.5 w-3.5" />
            {header.badge}
          </Badge>
          
          <Heading variant="h2" className="mb-6 max-w-3xl tracking-tight text-balance">
            {header.title}
          </Heading>
          
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            {header.description}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleIndex(index)}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}
