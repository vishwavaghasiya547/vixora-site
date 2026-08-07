import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaDribbble, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white relative xl:pt-[60px] md:pt-10 md:pb-0 pt-10 pb-0">
      <Container className="w-full max-w-[1410px] mx-auto">
        
        {/* Top Banner */}
        <div className="md:mb-20 mb-10 flex lg:flex-row flex-col items-center justify-between lg:px-[15px] sm:px-[25px] px-5 relative mx-0 flex-wrap">
          {/* Logo */}
          <div className="w-full lg:w-[22%] shrink-0 mb-6 lg:mb-0">
            <div className="flex items-center gap-2 lg:w-auto">
              <div className="w-8 h-8 rounded-full border-[1.5px] border-white flex items-center justify-center font-bold text-sm tracking-tighter">V</div>
              <span className="text-xl md:text-2xl font-medium tracking-wide">Vixora Labs</span>
            </div>
          </div>
          
          {/* Banner Text and Button */}
          <div className="w-full lg:w-[74%] flex lg:flex-row flex-col justify-between items-center">
            <div className="flex flex-col justify-center text-center lg:text-left mb-6 lg:mb-0">
              <h3 className="lg:text-[24px] md:text-[20px] text-[16px] text-white font-light leading-snug">
                Ready to build something amazing?
              </h3>
              <h3 className="lg:text-[24px] md:text-[20px] text-[16px] text-white font-light leading-snug">
                Let's Talk
              </h3>
            </div>

            {/* Schedule Button */}
            <button className="border border-white hover:bg-white hover:text-black transition-colors text-[16px] font-medium w-[271px] h-[52px] inline-flex items-center justify-center whitespace-nowrap shrink-0">
              Schedule a meeting &rarr;
            </button>
          </div>
        </div>

        {/* Columns Grid */}
        <div className="md:gap-0 gap-[5px] flex justify-between lg:px-[15px] sm:px-[25px] px-5 relative mx-0 flex-wrap">
          
          {/* Column 1: Services */}
          <div className="w-full md:w-1/2 lg:w-[22%] sm:px-[15px] lg:px-0 relative">
            <p className="min-h-6 lg:mb-5 mb-5 flex items-center justify-between text-[18px] text-white font-medium capitalize cursor-pointer lg:cursor-default">Services</p>
            <ul className="flex flex-col gap-[6px]">
              {[
                "Internet of Things(IoT)", "IT Consulting", "Custom Software Development", 
                "Web App Development", "Mobile App Development", "UI/UX Design", 
                "QA & Testing", "Hire Dedicated Team", "Support & Maintenance", 
                "Cloud Computing", "DevOps", "Artificial Intelligence", "Sustainability Services"
              ].map(item => (
                <li key={item}><Link href="#" className="text-[#d1d5db] text-[16px] font-light hover:text-white transition-colors block leading-normal mb-[14px]">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 2: Technology */}
          <div className="w-full md:w-1/2 lg:w-[22%] sm:px-[15px] lg:px-0 relative mt-8 md:mt-0">
            <p className="min-h-6 lg:mb-5 mb-5 flex items-center justify-between text-[18px] text-white font-medium capitalize cursor-pointer lg:cursor-default">Technology</p>
            <ul className="flex flex-col gap-[6px]">
              {[
                "React Js", "Angular Js", "Node Js", "React Native", "PHP", "Vue Js", 
                "Django", "Postgre SQL", "MongoDB", "NewSQL", "AWS", "Google Cloud"
              ].map(item => (
                <li key={item}><Link href="#" className="text-[#d1d5db] text-[16px] font-light hover:text-white transition-colors block leading-normal mb-[14px]">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="w-full md:w-1/2 lg:w-[22%] sm:px-[15px] lg:px-0 relative mt-8 lg:mt-0">
            <p className="min-h-6 lg:mb-5 mb-5 flex items-center justify-between text-[18px] text-white font-medium capitalize cursor-pointer lg:cursor-default">Company</p>
            <ul className="flex flex-col gap-[6px]">
              {[
                "About us", "Contact us", "Career", "Works", "Case studies", "Blogs"
              ].map(item => (
                <li key={item}><Link href="#" className="text-[#d1d5db] text-[16px] font-light hover:text-white transition-colors block leading-normal mb-[14px]">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in touch */}
          <div className="w-full md:w-1/2 lg:w-[22%] sm:px-[15px] lg:px-0 relative mt-8 lg:mt-0 flex flex-col">
            <p className="min-h-6 lg:mb-5 mb-5 flex items-center justify-between text-[18px] text-white font-medium capitalize cursor-pointer lg:cursor-default">Get in touch</p>
            
            <div className="mb-5 flex gap-3 items-start text-[#a3a3a3] font-light leading-normal">
              <Phone className="w-5 h-5 text-white/70 mt-[2px] shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col gap-1">
                <span className="text-white text-[16px] font-normal">Contact us :</span>
                <span className="hover:text-white transition-colors cursor-pointer">+91 81608 68310 (Jobs)</span>
                <span className="hover:text-white transition-colors cursor-pointer">+91 83201 11741 (Inquiry)</span>
              </div>
            </div>

            <div className="mb-5 flex gap-3 items-start text-[#a3a3a3] font-light leading-normal">
              <Mail className="w-5 h-5 text-white/70 mt-[2px] shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col gap-1">
                <span className="text-white text-[16px] font-normal">Email us :</span>
                <span className="hover:text-white transition-colors cursor-pointer">jobs@vixoralabs.com</span>
                <span className="hover:text-white transition-colors cursor-pointer">info@vixoralabs.com</span>
                <span className="hover:text-white transition-colors cursor-pointer">sales@vixoralabs.com</span>
              </div>
            </div>

            <div className="mb-5 flex gap-3 items-start text-[#a3a3a3] font-light leading-normal">
              <MapPin className="w-5 h-5 text-white/70 mt-[2px] shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col gap-1">
                <span className="text-white text-[16px] font-normal">Address :</span>
                <span className="leading-relaxed">
                  A901-905, Vivanta Icon, Opp. Shell<br/>
                  Petrol Pump, Adajan, Surat, Gujarat<br/>
                  395009.
                </span>
                <Link href="#" className="text-[#a3a3a3] text-[16px] font-light hover:text-white transition-colors mt-1 w-fit">Google map</Link>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-5 lg:mt-7 md:mt-5 mt-5">
              {[FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter, FaDribbble, FaBehance].map((Icon, idx) => (
                <a key={idx} href="#" className="w-[34px] h-[34px] rounded-full bg-white hover:bg-[#1c1c1c] hover:text-white flex items-center justify-center transition-colors text-black">
                  <Icon className="text-[18px]" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </Container>

      {/* Bottom Legal Bar */}
      <div className="relative text-gray-300 border-t border-gray-500 mt-20">
        <Container className="w-full max-w-[1410px] mx-auto px-5 lg:px-[15px] sm:px-[25px] flex flex-col sm:flex-row items-center sm:justify-between justify-start py-[14px] gap-4 sm:gap-0">
          <p className="min-h-6 text-[16px] text-[#808080] font-light">
            All rights reserved &copy; 2026 - Vixora Labs LLP
          </p>
          <ul className="flex items-center">
            <li className="first:border-r first:border-gray-500 first:pr-6 last:pl-6">
              <Link href="#" className="text-[16px] text-gray-300 font-light hover:text-white transition-colors">Terms & Conditions</Link>
            </li>
            <li className="first:border-r first:border-gray-500 first:pr-6 last:pl-6">
              <Link href="#" className="text-[16px] text-gray-300 font-light hover:text-white transition-colors">Privacy Policy</Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
