import * as React from "react";
import { Container } from "@/components/ui/container";

const processSteps = [
  {
    id: "01",
    title: "Requirement Analysis",
    description: "We carefully analyze your ideas and needs to improve your strategic plan with valuable suggestions and feature requests."
  },
  {
    id: "02",
    title: "Planning & Design",
    description: "We apply what we've learned from evaluating your requirements to plan how your digital project will function."
  },
  {
    id: "03",
    title: "Development",
    description: "We use the latest tech to craft code that suits your goals and audience, guaranteeing top-notch performance."
  },
  {
    id: "04",
    title: "QA Testing",
    description: "We thoroughly test across platforms to address your needs, employing regression and integration testing."
  },
  {
    id: "05",
    title: "Deployment",
    description: "After successful QA testing and user acceptance, we proceed confidently to the deployment phase."
  },
  {
    id: "06",
    title: "Support & Maintenance",
    description: "Our commitment extends beyond deployment, encompassing ongoing maintenance and support."
  }
];

export function ProcessSection() {
  return (
    <section className="w-full bg-[#F5F5F5] xl:py-[100px] lg:py-[80px] md:py-[60px] py-[50px]">
      <Container className="w-full max-w-[1410px] mx-auto lg:px-[15px] sm:px-[30px] px-5">
        
        {/* Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-[#141414] text-[36px] font-semibold mb-3">Our work process</h2>
          <p className="text-[#141414] text-[16px] font-normal">
            Our process proves our expertise and commitment to excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] lg:mt-[50px]">
          {processSteps.map((step, idx) => (
            <div key={idx} className="bg-white lg:py-[35px] lg:px-7 sm:p-5 p-5 flex flex-col items-start justify-start shadow-sm h-full group hover:bg-[#141414] transition-colors duration-300">
              
              {/* Number and Line */}
              <div className="flex items-end mb-[20px]">
                <span 
                  className="text-[50px] font-bold text-transparent leading-[40px] group-hover:[-webkit-text-stroke:1px_white] [-webkit-text-stroke:1px_#141414] transition-colors duration-300" 
                >
                  {step.id}
                </span>
                <span className="text-[#141414] group-hover:text-white transition-colors duration-300 text-[32px] font-light ml-2 leading-[40px]">_</span>
              </div>

              {/* Title */}
              <h3 className="text-[#141414] group-hover:text-white transition-colors duration-300 text-[18px] font-semibold md:mb-3 mb-3 md:mt-0 sm:mt-3 min-h-6">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#141414] group-hover:text-white transition-colors duration-300 text-[16px] leading-relaxed font-light min-h-6 m-0">
                {step.description}
              </p>
              
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
