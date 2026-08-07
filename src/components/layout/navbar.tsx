"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { mainNavigation } from "@/data/navigation";
import { useScrollData } from "@/hooks/use-scroll";
import { NAVBAR_HEIGHT } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const { direction, isScrolled } = useScrollData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Hide navbar on scroll down if scrolled past threshold, show on scroll up
  const shouldHide = isScrolled && direction === "down" && !isMobileMenuOpen;

  return (
    <>
      <header
        id="header"
        className={cn(
          "sticky top-[48px] flex items-center z-50 w-full sm:py-5 md:py-0 lg:py-0 lg:px-20 transition-all duration-300",
          isScrolled ? "bg-[#141414] shadow-md" : "bg-transparent"
        )}
      >
        {/* Inner Wrapper (max-w 1410px) */}
        <div className="flex items-center w-full max-w-[1410px] lg:h-[86px] md:h-[90px] sm:h-[78px] h-[78px] mx-auto px-[15px]">
          
          {/* Left: Exact Logo Sizes from Screenshot 5 */}
          <div className="flex-1 flex justify-start">
            <Link 
              href="/" 
              className="flex items-center justify-start w-[191px] md:w-[240px] xl:w-[252px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Vixora Labs Home"
            >
              <span className="text-xl md:text-2xl font-bold tracking-tighter">Vixora Labs</span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <ul className="hidden items-center justify-between lg:gap-[15px] xl:gap-[34px] md:flex flex-shrink-0">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <p className="min-h-6 relative text-[16px] font-normal text-white after:transition-all after:duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white group-hover:after:w-full">
                    {item.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: CTA / Mobile Toggle */}
          <div className="flex-1 flex justify-end">
            <div className="hidden md:block">
              <Link 
                href="/contact" 
                className="inline-flex w-[178px] h-[44px] py-[10px] px-0 items-center justify-center whitespace-nowrap border border-white/20 bg-transparent hover:bg-white/5 text-white rounded-md font-normal text-sm transition-colors focus-visible:outline-none focus-visible:ring-1"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="-mr-2 rounded-md p-2 text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
