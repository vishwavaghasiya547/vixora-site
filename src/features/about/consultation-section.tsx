import * as React from "react";
import { ArrowRight, Database, FileCode2, Box, Layers, Code2, Server } from "lucide-react";

const services = [
  { name: "AI Solutions", emoji: "🤖" },
  { name: "Custom Software", emoji: "💻" },
  { name: "SaaS Development", emoji: "📦" },
  { name: "Web Development", emoji: "🌐" },
  { name: "Mobile Apps", emoji: "📱" },
  { name: "Cloud Solutions", emoji: "☁️" },
  { name: "DevOps", emoji: "🔀" },
  { name: "API Integration", emoji: "🔌" },
  { name: "UI/UX Design", emoji: "🎨" },
  { name: "Automation", emoji: "⚡" },
];

export function ConsultationSection() {
  return (
    <section className="relative w-full bg-[#000000] overflow-hidden">
      {/* Marquee Section */}
      <div className="relative py-8 flex overflow-hidden shrink-0 w-full">
        {/* Fade masks for smooth entry/exit */}
        <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-[#000000] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-[#000000] to-transparent pointer-events-none" />
        
        <div className="flex shrink-0 gap-10 sm:gap-20 animate-marquee whitespace-nowrap px-10 items-center">
          {/* Group 1 */}
          <div className="flex shrink-0 gap-10 sm:gap-20 items-center">
            {services.map((service, idx) => {
              return (
                <div key={`g1-${idx}`} className="flex items-center gap-3 text-white">
                  <span className="text-2xl">{service.emoji}</span>
                  <span className="text-[20px] font-bold tracking-wide">{service.name}</span>
                </div>
              );
            })}
          </div>
          {/* Group 2 (Duplicate for infinite scroll) */}
          <div className="flex shrink-0 gap-10 sm:gap-20 items-center">
            {services.map((service, idx) => {
              return (
                <div key={`g2-${idx}`} className="flex items-center gap-3 text-white">
                  <span className="text-2xl">{service.emoji}</span>
                  <span className="text-[20px] font-bold tracking-wide">{service.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
