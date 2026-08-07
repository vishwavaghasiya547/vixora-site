"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { technologiesData } from "@/data/technologies";

export function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState(technologiesData[0].id);

  const activeTech = technologiesData.find((t) => t.id === activeTab) || technologiesData[0];

  return (
    <section id="technology" className="bg-[#000000] xl:py-20 lg:py-14 md:py-[60px] py-10 scroll-mt-40 relative z-10 w-full overflow-hidden">
      <div className="container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto max-w-[1410px]">
        
        {/* Section Header */}
        <div className="mb-[41px]">
          <h2 className="text-[#FFFFFF] text-[32px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
            Technologies We Master
          </h2>
          <p className="min-h-6 text-[#A0A0A0] mt-1.5 text-[16px] md:text-[18px] font-light">
            Building innovative digital products with modern, scalable, and future-ready technologies.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col xl:flex-row lg:mt-[50px] mt-10 gap-16">
          
          {/* Left Sidebar (Tabs) */}
          <div className="w-full lg:w-[220px] shrink-0 flex flex-row xl:flex-col overflow-x-auto lg:overflow-visible no-scrollbar mb-8 lg:mb-0 border-b xl:border-b-0 border-[#222]">
            {technologiesData.map((tech) => (
              <div
                key={tech.id}
                onClick={() => setActiveTab(tech.id)}
                className={`lg:pl-[30px] pb-[25px] pl-4 flex items-center cursor-pointer text-[18px] lg:text-[20px] whitespace-nowrap transition-colors duration-300 border-b-2 xl:border-b-0 xl:border-l-2 focus:outline-none ${
                  activeTab === tech.id
                    ? "border-white text-white font-medium"
                    : "border-transparent lg:border-[#222] text-[#666666] hover:text-[#A0A0A0] font-light"
                }`}
              >
                {tech.title}
              </div>
            ))}
          </div>

          {/* Right Content Area (Active Tab Details) */}
          <div className="flex-1 bg-[#141414] md:p-[30px] p-5 rounded-sm transition-transform duration-500 ease-in will-change-transform">
            
            {/* Heading is moved above the flex container so the image aligns with the description */}
            <p className="min-h-6 md:text-[24px] text-[20px] text-[#FFFFFF] font-semibold mb-[30px] relative after:content-[''] after:absolute after:-bottom-[10px] after:left-0 after:w-[30px] after:h-[2px] after:bg-white">
              {activeTech.heading}
            </p>

            <div className="flex flex-col lg:flex-row lg:gap-[77px] gap-10">
              
              {/* Content Details */}
              <div className="flex-1 flex flex-col">
                <p className="text-gray-400 text-[16px] font-light leading-relaxed md:pb-5 pb-[25px] xl:pr-8">
                  {activeTech.description}
                </p>

                {/* Icons Grid */}
                <div className="flex flex-wrap gap-8 sm:gap-12 mt-auto">
                  {activeTech.technologies.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center justify-center gap-1.5 w-[100px]">
                      <tech.icon className="w-10 h-10 text-[#DDDDDD]" strokeWidth={1.5} />
                      <span className="text-[13px] text-[#DDDDDD] font-light tracking-wide">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image & Button Column */}
              <div className="w-full xl:w-[260px] shrink-0 flex flex-col lg:mt-0">
                <div className="relative w-full aspect-[16/10] rounded-[4px] overflow-hidden mb-[15px]">
                  <img 
                    src={activeTech.image}
                    alt={activeTech.heading}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Link href="/contact" className="w-full border border-white hover:bg-white transition-colors duration-300 rounded-[4px] py-[10px] flex items-center justify-center gap-2 group">
                  <span className="text-white text-[14px] font-medium group-hover:text-black transition-colors">Hire developer</span>
                  <ArrowRight size={18} strokeWidth={1.5} className="text-white group-hover:text-black transition-colors shrink-0" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
