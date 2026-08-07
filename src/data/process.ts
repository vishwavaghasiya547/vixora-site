import { Compass, GitBranch, PenTool, Terminal, ShieldCheck, Rocket } from "lucide-react";

export const processData = {
  header: {
    badge: "Methodology",
    title: "Our Development Process",
    description: "From idea to launch, we follow a streamlined process to build secure, scalable, and high-quality digital solutions."
  },
  steps: [
    {
      number: "01",
      title: "Discovery",
      description: "We understand your business goals, target audience, and project requirements to define the right strategy and ensure every decision aligns with your vision.",
      icon: Compass,
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our experts create a detailed project roadmap, select the ideal technology stack, and plan a scalable architecture for long-term success.",
      icon: GitBranch,
    },
    {
      number: "03",
      title: "Design",
      description: "We design intuitive user interfaces and seamless user experiences that reflect your brand while maximizing usability and engagement.",
      icon: PenTool,
    },
    {
      number: "04",
      title: "Development",
      description: "Using modern technologies and best development practices, we build fast, secure, and scalable web, mobile, AI, and SaaS applications.",
      icon: Terminal,
    },
    {
      number: "05",
      title: "Launch",
      description: "After comprehensive testing and final approval, we deploy your application to a secure production environment with a smooth and reliable launch.",
      icon: ShieldCheck,
    },
    {
      number: "06",
      title: "Scale & Support",
      description: "We provide continuous maintenance, performance optimization, feature enhancements, and technical support to help your business grow with confidence.",
      icon: Rocket,
    }
  ]
};
