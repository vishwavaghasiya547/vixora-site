"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const typingWords = [
  "Innovation",
  "Businesses",
  "Startups",
  "Digital Products",
  "Artificial Intelligence",
  "Automation",
  "Technology",
  "Growth",
  "Success"
];

function TypewriterEffect() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (!isMounted) return;

    if (subIndex === typingWords[index].length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % typingWords.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, isMounted]);

  return (
    <span className="relative">
      {isMounted ? typingWords[index].substring(0, subIndex) : typingWords[0]}
      <span className="animate-pulse inline-block ml-[2px] w-[2px] h-[35px] lg:h-[45px] bg-white translate-y-[4px] lg:translate-y-[8px]"></span>
    </span>
  );
}

import { useState } from "react";

import { Database, FileCode2, Box, Layers, Code2, Server } from "lucide-react";

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

export function HeroSection() {
  return (
    <div className="relative z-10 bg-transparent mb-0 md:h-[calc(100vh-156px)] h-[calc(100vh-170px)] flex items-center justify-center">
      
      {/* Large Background Glow / Concentric Circles Animation */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden flex items-center justify-center">
        <div className="hero-glow-box absolute">
          <span style={{ animationDelay: "1s" }}></span>
          <span style={{ animationDelay: "2s" }}></span>
          <span style={{ animationDelay: "3s" }}></span>
          <span style={{ animationDelay: "4s" }}></span>
          <span style={{ animationDelay: "5s" }}></span>
          <span style={{ animationDelay: "6s" }}></span>
        </div>
      </div>

      {/* Inner Container */}
      <div className="xl:px-20 lg:px-[120px] md:px-10 sm:px-0 px-0 z-10 w-full max-w-[1410px] mx-auto">
        
        {/* Main Heading with Typewriter */}
        <p className="min-h-6 lg:text-[55px] md:text-[45px] text-[32px] text-center text-white lg:leading-[70px] md:leading-[60px] leading-10 font-semibold max-w-[1220px] mx-auto">
          Your Trusted AI Development <br className="hidden lg:block"/>
          Partner - Delivering Smart Solutions For <TypewriterEffect />
        </p>

        {/* Subtitle Paragraph */}
        <div className="xl:px-20 text-[16px] md:text-[20px] text-center mt-5 mb-14 text-white lg:leading-[35px] md:leading-[35px] leading-[26px] font-light w-full max-w-[1220px] mx-auto">
          Empower your business with Vixora Labs' intelligent software solutions built for growth and innovation.<br className="hidden md:block"/>
          Start your digital transformation today with scalable, AI-powered technology.
        </div>

        {/* Call to Action Button */}
        <Link 
          href="/contact"
          className="w-[250px] h-[52px] border border-white/20 text-white text-[18px] rounded-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-3 group whitespace-nowrap mx-auto"
        >
          Book a meeting
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        
      </div>

      {/* Marquee Section positioned at the bottom of the Hero Section */}
      <div className="absolute bottom-0 left-0 w-full py-8 flex overflow-hidden shrink-0 z-20 bg-transparent">
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
    </div>
  );
}
