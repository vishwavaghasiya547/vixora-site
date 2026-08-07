"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { MoveLeft, MoveRight } from "lucide-react";

const testimonials = [
  {
    quote: "If you need a company to create your next IT product, I would like to tell you about Codewinglet Private Limited. They excel in both quantity and quality. Their process and documentation are very professional. The support I got from them was so good that I can not imagine moving forward without Team Codewinglet.",
    author: "Zuhayr Rashid",
    location: "UAE",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
  },
  {
    quote: "A great company with teams that could handle all the locations to bring my project to life. Working with them was an awesome experience, and because of them, my projects became a reality. They were dependable, grasped the business well, and had good organization.",
    author: "Ross Gates",
    location: "USA",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
  },
  {
    quote: "Exceptional experience working with this development company. They delivered our product on time and their technical expertise is highly efficient.",
    author: "Craig Nelson",
    location: "UK",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="w-full bg-black xl:py-[100px] lg:py-[80px] md:py-[60px] py-[50px] overflow-hidden">
      <Container className="w-full max-w-[1410px] mx-auto lg:px-[15px] sm:px-[30px] px-5">
        
        {/* Header */}
        <div className="flex flex-col mb-10 md:mb-[50px]">
          <h2 className="text-white text-[40px] font-semibold">Client Success Stories</h2>
          <p className="text-white text-[20px] font-normal mt-[6px]">
            See how we've helped businesses transform ideas into successful digital products and long-term growth.
          </p>
        </div>

          {/* Carousel Area */}
          <div className="relative w-full h-[600px] md:h-[462px] mt-10 overflow-hidden">
            
            {/* Background Quotes */}
            <div className="absolute left-[-20px] md:left-[-120px] top-[100px] md:top-[180px] text-[#111111] text-[150px] md:text-[250px] leading-none font-serif select-none pointer-events-none z-0">
              “
            </div>
            <div className="absolute md:left-[750px] top-[400px] md:top-[350px] text-[#111111] text-[150px] md:text-[250px] leading-none font-serif select-none pointer-events-none z-0">
              ”
            </div>

            {/* Slider Track */}
            <div 
              className="w-full h-full flex transition-transform duration-700 ease-in-out z-10 relative"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item, idx) => (
                <div key={idx} className="w-full h-full flex-shrink-0 relative">
                  
                  {/* Image */}
                  <div 
                    className="absolute right-0 top-0 w-[95%] md:w-[65%] lg:w-[60%] h-[300px] md:h-[100%] bg-gray-800"
                    style={{ 
                      clipPath: "polygon(170px 0, 100% 0, 100% 100%, 0 100%, 0 170px)",
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />

                  {/* Text Box */}
                  <div className="absolute left-0 bottom-0 md:bottom-auto md:top-[170px] w-[95%] lg:w-[754px] md:w-[600px] lg:h-[292px] bg-[#141414] lg:p-10 md:p-[30px] sm:py-[22px] sm:px-[37px] p-6 shadow-2xl flex flex-col">
                    <p className="text-white lg:text-[20px] md:text-[17px] text-[15px] leading-[1.8] font-light min-h-6 flex-1">
                      {item.quote}
                    </p>
                    
                    <div className="mt-[35px] flex justify-between items-center">
                      <h4 className="text-white font-semibold text-[16px]">{item.author}</h4>
                      <span className="text-white font-semibold text-[14px]">{item.location}</span>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
            
            {/* Arrows */}
            <div className="absolute right-0 bottom-0 z-30 flex items-center justify-end gap-5 lg:pr-10 md:pr-10 pr-5 pb-5">
              <button onClick={handlePrev} className="text-[#a3a3a3] hover:text-white transition-colors">
                <MoveLeft size={24} strokeWidth={1} />
              </button>
              <button onClick={handleNext} className="text-[#a3a3a3] hover:text-white transition-colors">
                <MoveRight size={24} strokeWidth={1} />
              </button>
            </div>

          </div>

        </Container>
      </section>
  );
}
