import * as React from "react";
import { aboutData } from "@/data/about";
import { Container } from "@/components/ui/container";

export function AboutSection() {
  const { header, statistics, cards } = aboutData;

  return (
    <section className="relative w-full bg-transparent text-white font-sans xl:py-20 lg:py-14 md:py-[60px] py-10 overflow-hidden">
      
      {/* Subtle Background Grid starting below the intro text */}
      <div 
        className="absolute inset-x-0 top-[230px] bottom-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
          backgroundPosition: 'center 0'
        }}
        aria-hidden="true" 
      />
      
      {/* 
        Exact Codewinglet Flex Layout 
        Container max-width 1410px 
      */}
      <Container className="relative z-10 w-full max-w-[1410px] mx-auto lg:px-[15px] sm:px-[30px] px-5 flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-0">
        
        {/* --- LEFT COLUMN (926px) --- */}
        <div className="flex flex-col w-full lg:w-[926px] justify-between h-full">
          
          {/* Top: Text Block */}
          <div className="flex flex-col justify-start">
            <h2 className="text-[36px] font-bold tracking-tight text-white leading-tight">
              {header.title}
            </h2>
            <p className="text-[20px] text-gray-400 font-normal mt-[6px] mb-10">
              {header.subtitle}
            </p>
            <div className="flex flex-col text-[20px] text-gray-300 leading-relaxed font-normal lg:pr-[40px]">
              <p className="pb-[22px]">
                Welcome to <strong className="font-semibold text-white">Vixora Labs</strong>, your trusted partner for modern software development and AI-powered digital solutions. We specialize in strategy, design, and the development of scalable web, mobile, cloud, and AI applications that help businesses innovate and grow across industries.
              </p>
              <p>{header.description2}</p>
            </div>
          </div>

          {/* Bottom: Stats & Pyramid Card Wrapper */}
          <div className="flex flex-col lg:flex-row justify-between items-start mt-12 lg:mt-[109px]">
            
            {/* Stats Block (216px wide as per DevTools) */}
            <div className="w-full lg:w-[216px] grid grid-cols-2 lg:block gap-4 md:gap-5 lg:gap-0 mt-5 mb-20 lg:mt-0 lg:mb-0">
              {statistics.map((stat, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col justify-center py-2 lg:py-[18px]"
                >
                  <div className="text-[30px] font-bold text-white flex items-center leading-tight">
                    {stat.value}
                  </div>
                  <p className="text-[18px] font-normal text-white min-h-[24px] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Pyramid Card */}
            <div className="flex flex-col bg-[#141414] w-full lg:w-[414px] pt-[15px] px-[15px] pb-[20px] rounded-sm group cursor-pointer transition-colors duration-300 hover:bg-[#1a1a1a] mt-8 lg:mt-0">
              <div className="relative w-full aspect-[3/2] bg-neutral-900 overflow-hidden">
                <img 
                  src={cards[0].image} 
                  alt={cards[0].title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-start mt-5">
                <p className="text-[22px] font-semibold text-white leading-snug min-h-[24px]">
                  {cards[0].title}
                </p>
                <p className="text-[16px] text-gray-400 leading-relaxed mt-[6px] min-h-[24px]">
                  {cards[0].description}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* --- RIGHT COLUMN (414px) --- */}
        <div className="flex flex-col w-full lg:w-[414px] justify-between h-full mt-12 lg:mt-[118px] gap-8 lg:gap-[66px]">
          
          {/* Handshake Card (Top aligned) */}
          <div className="flex flex-col bg-[#141414] w-full pt-[15px] px-[15px] pb-[20px] rounded-sm group cursor-pointer transition-colors duration-300 hover:bg-[#1a1a1a]">
            <div className="relative w-full aspect-[3/2] bg-neutral-900 overflow-hidden">
              <img 
                src={cards[1].image} 
                alt={cards[1].title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-start mt-5">
              <p className="text-[22px] font-semibold text-white leading-snug min-h-[24px]">
                {cards[1].title}
              </p>
              <p className="text-[16px] text-gray-400 leading-relaxed mt-[6px] min-h-[24px]">
                {cards[1].description}
              </p>
            </div>
          </div>

          {/* Typing Card (Bottom aligned via justify-between) */}
          <div className="flex flex-col bg-[#141414] w-full pt-[15px] px-[15px] pb-[20px] rounded-sm group cursor-pointer transition-colors duration-300 hover:bg-[#1a1a1a] mt-8 lg:mt-0">
            <div className="relative w-full aspect-[3/2] bg-neutral-900 overflow-hidden">
              <img 
                src={cards[2].image} 
                alt={cards[2].title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-start mt-5">
              <p className="text-[22px] font-semibold text-white leading-snug min-h-[24px]">
                {cards[2].title}
              </p>
              <p className="text-[16px] text-gray-400 leading-relaxed mt-[6px] min-h-[24px]">
                {cards[2].description}
              </p>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
