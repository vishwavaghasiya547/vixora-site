"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { servicesList } from "@/data/services";

export function ServicesSection() {
  const [activeTab, setActiveTab] = React.useState(0);

  const activeService = servicesList[activeTab];

  return (
    <section className="w-full bg-[#F5F5F5] xl:py-20 lg:py-14 md:py-[60px] py-10 font-sans scroll-mt-40" id="service">
      <div className="container max-w-[1410px] w-full mx-auto lg:px-[15px] sm:px-[30px] px-5">
        
        {/* Header */}
        <div>
          <h1 className="text-[#141414] font-medium lg:text-[40px] md:text-[36px] sm:text-[28px] text-[28px] leading-tight">
            Our services
          </h1>
          <p className="text-[#141414] text-[20px] font-light mt-1.5 min-h-6">
            Custom software, AI, and digital solutions designed to accelerate your business growth and long-term success.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col xl:flex-row justify-between items-start mt-[50px] gap-20">
          
          {/* Left Side: Tabs */}
          <div className="w-full xl:w-[590px] flex flex-col">
            {servicesList.map((service, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={service.title}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center justify-between text-left py-5 border-b border-gray-200 transition-colors duration-300 ${
                    isActive ? "text-[#141414] font-medium" : "text-[#606060] font-light hover:text-[#141414]"
                  }`}
                >
                  <span className="text-[18px]">{service.title}</span>
                  {isActive && <ArrowUpRight className="w-5 h-5 text-[#141414]" />}
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Service Card */}
          <div className="w-full lg:w-[644px]">
            <div className="relative bg-white lg:p-10 p-5 rounded-sm shadow-sm transition-transform duration-500 ease-in will-change-transform xl:h-[819px] flex flex-col">
              <div className="flex flex-col xl:w-auto bg-white flex-1">
                
                <div>
                  {/* Image */}
                  <div className="w-full lg:h-[180px] overflow-hidden rounded-sm bg-gray-100">
                    <img 
                      src={activeService.image} 
                      alt={activeService.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Title & View More */}
                  <div className="xl:flex items-start justify-between pt-5 pb-7">
                    <div className="flex flex-col">
                      <h3 className="text-[20px] md:text-[22px] font-semibold text-[#141414]">
                        {activeService.title}
                      </h3>
                      <div className="w-[50px] h-[2px] bg-[#141414] mt-2.5"></div>
                    </div>
                    <Link 
                      href="/"
                      className="inline-flex items-center text-[15px] font-medium text-[#141414] underline underline-offset-4 decoration-1 xl:mt-0 mt-3"
                    >
                      View more <ArrowUpRight size={16} className="shrink-0 ml-1" strokeWidth={1.5} />
                    </Link>
                  </div>

                  {/* Description */}
                  <p className="text-[#606060] text-[18px] leading-relaxed pb-[25px] font-light min-h-6">
                    {activeService.description}
                  </p>

                  {/* Service Included */}
                  <div>
                    <p className="text-[#000000] font-light text-[18px] mb-[15px] min-h-6">Service Included :</p>
                    <div className="bg-[#F5F5F5] lg:p-[30px] p-5 rounded-sm grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-[15px]">
                      {activeService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-[#141414] shrink-0" />
                          <span className="text-[#141414] text-[14px] font-medium underline underline-offset-4 decoration-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Book a Meeting */}
                <div className="mt-auto pt-[40px] flex items-center">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center border border-[#141414] w-[231px] h-[52px] text-[16px] font-medium text-[#000000] hover:bg-[#141414] hover:text-white transition-colors group"
                  >
                    Book a meeting <ArrowRight size={18} className="shrink-0 ml-3 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
