import { 
  Server, 
  Smartphone, 
  Database, 
  CloudCog,
  Layers,
  Component,
  Globe,
  BrainCircuit,
  Blocks,
  Network,
  Code2,
  Bot,
  Workflow,
  Cpu,
  Plug
} from "lucide-react";
import { 
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaPhp, FaLaravel, FaPython, 
  FaJava, FaAndroid, FaApple, FaAws, FaDocker, FaCogs, FaLinux, FaGitAlt
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { 
  SiTailwindcss, SiTypescript, SiNestjs, SiExpress, SiFlutter, SiKotlin,
  SiFirebase, SiKubernetes, SiGithubactions, SiNginx, SiCloudflare,
  SiPostgresql, SiMongodb, SiMysql, SiRedis, SiSupabase, SiPrisma, SiSqlite,
  SiPostman, SiSwagger, SiStripe, SiSocketdotio
} from "react-icons/si";

export interface Technology {
  name: string;
  icon: React.ElementType;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  heading: string;
  description: string;
  image: string;
  technologies: Technology[];
}

export const technologiesData: TechnologyCategory[] = [
  {
    id: "front-end",
    title: "Front-end",
    heading: "Front-end Development",
    description: "Build fast, responsive, and engaging user interfaces with modern frontend technologies. Our developers create intuitive digital experiences that deliver exceptional performance, seamless usability, and a consistent experience across every device.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    technologies: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Angular", icon: FaAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
    ]
  },
  {
    id: "back-end",
    title: "Back-end",
    heading: "Back-end Development",
    description: "Develop secure, scalable, and high-performance backend systems that power modern applications. We build robust APIs, business logic, and cloud-ready architectures designed for reliability and long-term growth.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    technologies: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: FaLaravel },
      { name: "TypeScript", icon: SiTypescript },
      { name: "REST APIs", icon: Network },
    ]
  },
  {
    id: "mobile",
    title: "Mobile App",
    heading: "Mobile App Development",
    description: "Build powerful cross-platform and native mobile applications with exceptional performance and user experience. From concept to deployment, we deliver scalable mobile solutions tailored to your business goals.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "React Native", icon: FaReact },
      { name: "Android", icon: FaAndroid },
      { name: "iOS", icon: FaApple },
      { name: "Firebase", icon: SiFirebase },
      { name: "Kotlin", icon: SiKotlin },
    ]
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    heading: "AI & Automation",
    description: "Leverage the power of artificial intelligence to automate workflows, enhance customer experiences, and unlock valuable business insights. We build intelligent solutions that drive efficiency and innovation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    technologies: [
      { name: "OpenAI", icon: Bot },
      { name: "LangChain", icon: BrainCircuit },
      { name: "RAG", icon: Database },
      { name: "Vector DB", icon: Database },
      { name: "AI Agents", icon: Bot },
      { name: "MCP", icon: Cpu },
      { name: "n8n", icon: Workflow },
      { name: "Python", icon: FaPython },
    ]
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    heading: "DevOps & Cloud",
    description: "Accelerate development with modern DevOps practices and secure cloud infrastructure. We help businesses deploy, monitor, and scale applications efficiently with automated workflows and reliable cloud platforms.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80",
    technologies: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "CI/CD", icon: FaCogs },
      { name: "Nginx", icon: SiNginx },
      { name: "Linux", icon: FaLinux },
      { name: "Cloudflare", icon: SiCloudflare },
    ]
  },
  {
    id: "database",
    title: "Database",
    heading: "Database",
    description: "Design secure, scalable, and high-performance database solutions that support modern applications. We optimize data architecture to ensure reliability, speed, and seamless scalability.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
      { name: "Prisma", icon: SiPrisma },
      { name: "SQLite", icon: SiSqlite },
    ]
  },
  {
    id: "tools",
    title: "Tools",
    heading: "Tools & Integrations",
    description: "Enhance development with modern tools, seamless integrations, and intelligent automation that improve productivity, collaboration, and software quality.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    technologies: [
      { name: "Git", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
      { name: "Stripe", icon: SiStripe },
      { name: "Razorpay", icon: Plug },
      { name: "Cloudinary", icon: CloudCog },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "BullMQ", icon: Layers },
    ]
  }
];
