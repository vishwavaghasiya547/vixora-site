import { Brain, Code, Zap, ShoppingBag, Palette, Server, LucideIcon } from 'lucide-react';

export interface SubService {
  title: string;
  body: string;
  tags: string[];
}

export interface ServiceStep {
  step: string;
  title: string;
  body: string;
}

export interface ServiceBenefit {
  title: string;
  body: string;
}

export interface ServiceIndustry {
  name: string;
  desc: string;
}

export interface ServiceProject {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  link: string;
  outcome: string;
}

export interface ServiceTestimonial {
  name: string;
  role: string;
  content: string;
  project: string;
  rating: number;
}

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  metrics: { label: string; value: string }[];
  whyChooseUs: { title: string; body: string }[];
  offerings: SubService[];
  process: ServiceStep[];
  benefits: ServiceBenefit[];
  industries: ServiceIndustry[];
  projects: ServiceProject[];
  testimonials: ServiceTestimonial[];
  relatedSlugs: string[];
}

export const servicesData: Record<string, ServiceData> = {
  'ai-solutions': {
    slug: 'ai-solutions',
    name: 'AI & Machine Learning',
    tagline: 'Production-ready intelligent systems that automate workflows and scale operations.',
    headline: 'Deploy Intelligent Systems That Drive Measurable ROI',
    description: 'We bridge research and production software by engineering custom LLM agents, computer vision pipelines, and RAG architectures tuned for business metrics.',
    icon: Brain,
    metrics: [
      { label: 'AI Models Shipped', value: '25+' },
      { label: 'Efficiency Gain', value: '40%' },
      { label: 'Accuracy Secured', value: '99.4%' },
      { label: 'Token Costs Saved', value: '60%' }
    ],
    whyChooseUs: [
      { title: 'Production-First Code', body: 'Real-world scalable AI models designed for high server loads, not just sandbox notebooks.' },
      { title: 'RAG & Vector Search', body: 'Ground models in your private company data with zero hallucinations and enterprise privacy.' },
      { title: 'Cost & Latency Tuning', body: 'Prompt compression and intelligent caching cut API overhead and response latency by up to 60%.' }
    ],
    offerings: [
      { title: 'LLM & AI Agent Integration', body: 'Custom reasoning chains and autonomous agent workflows.', tags: ['GPT-4o', 'Claude 3.5', 'Llama 3'] },
      { title: 'Retrieval-Augmented Generation', body: 'Connect AI securely to internal databases and knowledge bases.', tags: ['pgvector', 'Pinecone', 'LangChain'] },
      { title: 'Natural Language Processing', body: 'High-speed sentiment analysis, classification, and intent extraction.', tags: ['NLP', 'Transformers', 'Spacy'] },
      { title: 'Computer Vision Systems', body: 'Automated object detection, OCR, and real-time visual inspection.', tags: ['OpenCV', 'YOLO', 'TensorFlow'] }
    ],
    process: [
      { step: '01', title: 'Data Audit', body: 'Evaluate assets and verify AI feasibility.' },
      { step: '02', title: 'Architecture', body: 'Select optimal models, vector stores, and pipelines.' },
      { step: '03', title: 'Prototype', body: 'Build proof-of-concept and run structured benchmarks.' },
      { step: '04', title: 'Optimization', body: 'Tune prompts, isolate tenant data, and lower latency.' },
      { step: '05', title: 'Production Release', body: 'Deploy with active logging, fallbacks, and cost limits.' },
      { step: '06', title: 'Continuous Tuning', body: 'Refine model weights and prompts based on real usage.' }
    ],
    benefits: [
      { title: 'Automated Operations', body: 'Eliminate manual data entry and customer support bottlenecks.' },
      { title: 'Predictive Insights', body: 'Uncover hidden market signals to forecast demand accurately.' },
      { title: 'Hyper-Personalization', body: 'Deliver contextual recommendations that boost customer retention.' }
    ],
    industries: [
      { name: 'FinTech & Banking', desc: 'Automated document analysis and risk profiling engines.' },
      { name: 'SaaS Platforms', desc: 'Embedded AI assistants and workflow automation.' },
      { name: 'Healthcare', desc: 'HIPAA-compliant document processing and research analysis.' }
    ],
    projects: [
      { title: 'AssistPro AI', category: 'AI Productivity Platform', summary: 'Natural language task management across WhatsApp, Telegram, and web.', stack: ['OpenAI / GPT', 'Node.js', 'PostgreSQL', 'Next.js'], link: 'https://assistpro.ai', outcome: 'Multi-channel AI assistant shipped to production' },
      { title: 'UserCall', category: 'Voice AI Research Platform', summary: 'AI-moderated voice interviews at scale with automatic insight extraction.', stack: ['Whisper / STT', 'Python', 'FastAPI', 'React'], link: 'https://www.usercall.co', outcome: '10× faster research cycle for product teams' }
    ],
    testimonials: [
      { name: 'Sarah Johnson', role: 'CEO, TechMart Inc.', content: 'Vixora transformed our e-commerce platform completely. Their AI-powered recommendations increased conversion by 180% and revenue by 250%.', project: 'AI-Powered E-Commerce', rating: 5 }
    ],
    relatedSlugs: ['web-development', 'saas-platforms', 'devops-cloud']
  },
  'web-development': {
    slug: 'web-development',
    name: 'Web Development',
    tagline: 'High-performance, responsive web applications engineered with component-driven simplicity.',
    headline: 'Build Faster, Scale Further, and Convert Higher',
    description: 'We build high-performance web applications that load in milliseconds, achieve 95+ Core Web Vitals, and scale effortlessly to millions of users.',
    icon: Code,
    metrics: [
      { label: 'Apps Shipped', value: '60+' },
      { label: 'Core Web Vitals', value: '95+' },
      { label: 'Page Load Time', value: '< 0.8s' },
      { label: 'Uptime SLA', value: '99.99%' }
    ],
    whyChooseUs: [
      { title: 'Type-Safe Architecture', body: 'Strict TypeScript and end-to-end type safety from database to browser.' },
      { title: 'Web Vitals Obsession', body: 'Optimized asset delivery, code splitting, and sub-second page transitions.' },
      { title: 'Reusable Design Systems', body: 'Custom component libraries that cut ongoing dev costs by 50%.' }
    ],
    offerings: [
      { title: 'Modern Web Applications', body: 'Client portals and dashboards built on React and Next.js.', tags: ['React', 'Next.js', 'Zustand'] },
      { title: 'Headless & Jamstack', body: 'Blazing-fast frontends paired with modern headless CMS and APIs.', tags: ['Sanity', 'GraphQL', 'Tailwind'] },
      { title: 'API & Microservices', body: 'RESTful and GraphQL backend endpoints built for speed and security.', tags: ['Node.js', 'FastAPI', 'Express'] },
      { title: 'Responsive Interfaces', body: 'Pixel-perfect mobile and desktop views meeting strict WCAG accessibility.', tags: ['CSS Grid', 'Tailwind', 'A11y'] }
    ],
    process: [
      { step: '01', title: 'Scoping & API Design', body: 'Map technical specs and data contracts.' },
      { step: '02', title: 'Component Blueprint', body: 'Translate designs into clean React components.' },
      { step: '03', title: 'Development', body: 'Implement client state, server caching, and business logic.' },
      { step: '04', title: 'API Integration', body: 'Connect UI components safely to backend microservices.' },
      { step: '05', title: 'Testing & QA', body: 'Run automated end-to-end tests and load speed profiling.' },
      { step: '06', title: 'Global Release', body: 'Deploy to edge CDN servers with continuous delivery.' }
    ],
    benefits: [
      { title: 'Search Dominance', body: 'Sub-second page speeds ensure top Google search rankings.' },
      { title: 'Higher Conversions', body: 'Instant page transitions remove buyer friction and boost signups.' },
      { title: 'Easy Maintenance', body: 'Clean codebases make adding future features fast and effortless.' }
    ],
    industries: [
      { name: 'SaaS & Tech', desc: 'Interactive dashboards, metrics visualizers, and onboarding.' },
      { name: 'E-Commerce', desc: 'Headless storefronts with instant product search.' },
      { name: 'Marketplaces', desc: 'Dynamic search filtering, geo-tracking, and messaging.' }
    ],
    projects: [
      { title: 'PickleballCourts', category: 'Marketplace & Community', summary: 'Location-based court discovery, community, and content monetization.', stack: ['Next.js', 'MongoDB', 'AWS', 'Stripe'], link: 'https://livepickleballcourts.com', outcome: 'National marketplace with geolocation at its core' },
      { title: 'SEOTalos', category: 'SEO Analytics SaaS', summary: 'Multi-property Search Console analytics with AI visibility tracking.', stack: ['Next.js', 'Python', 'PostgreSQL', 'Redis'], link: 'https://seotalos.com', outcome: 'Agency analytics platform with SEO A/B testing' }
    ],
    testimonials: [
      { name: 'Michael Chen', role: 'CTO, DataFlow Systems', content: 'The analytics dashboard Vixora built exceeded all our expectations. Their technical expertise helped us make fundamentally better decisions.', project: 'Enterprise SaaS Dashboard', rating: 5 }
    ],
    relatedSlugs: ['saas-platforms', 'ui-ux-design', 'e-commerce']
  },
  'saas-platforms': {
    slug: 'saas-platforms',
    name: 'SaaS Platforms',
    tagline: 'Scalable multi-tenant SaaS products with robust authorization, billing, and dashboards.',
    headline: 'Scale Your Subscription Product From Idea to Enterprise',
    description: 'We engineer multi-tenant SaaS platforms with strict data isolation, Stripe subscription engines, and real-time operational portals.',
    icon: Zap,
    metrics: [
      { label: 'Platforms Shipped', value: '18+' },
      { label: 'MRR Processed', value: '$12M+' },
      { label: 'Query Latency', value: '< 15ms' },
      { label: 'Security Score', value: 'A+' }
    ],
    whyChooseUs: [
      { title: 'Multi-Tenant Security', body: 'Strict workspace isolation schemas preventing data leaks across clients.' },
      { title: 'Advanced Metered Billing', body: 'Seamless Stripe integration supporting usage tiers, upgrades, and tax.' },
      { title: 'High-Concurrency Tech', body: 'Layered Redis caching built to handle heavy dashboard request traffic.' }
    ],
    offerings: [
      { title: 'Multi-Tenant Architecture', body: 'Isolated workspaces, subdomains, and custom database security.', tags: ['PostgreSQL', 'Auth0', 'RLS'] },
      { title: 'Billing & Subscription Engine', body: 'Custom pricing tiers, trial periods, and dunning management.', tags: ['Stripe', 'RevenueCat', 'Billing'] },
      { title: 'Admin & Operations Portals', body: 'Staff dashboards for user management, usage tracking, and audit logs.', tags: ['React', 'Tailwind', 'Charts'] },
      { title: 'Developer API Gateways', body: 'Authenticated API key generation and webhook notifications.', tags: ['Swagger', 'Webhooks', 'JWT'] }
    ],
    process: [
      { step: '01', title: 'Tenant Mapping', body: 'Structure workspace hierarchy and authentication flows.' },
      { step: '02', title: 'Database & Billing', body: 'Design relational schemas and configure Stripe price hooks.' },
      { step: '03', title: 'Core App Engine', body: 'Build tenant routing, user roles, and workspace settings.' },
      { step: '04', title: 'Dashboards & Billing', body: 'Integrate billing webhooks and interactive data charts.' },
      { step: '05', title: 'Security Audit', body: 'Run strict penetration testing and rate limiter setup.' },
      { step: '06', title: 'Zero-Downtime Launch', body: 'Automate migration pipelines and scale server pods.' }
    ],
    benefits: [
      { title: 'Launch 3 Months Faster', body: 'Pre-built SaaS core modules speed up time-to-market dramatically.' },
      { title: 'Enterprise Compliance', body: 'Role-based security and token authorization satisfy enterprise buyers.' },
      { title: 'Lower Cloud Costs', body: 'Optimized queries and serverless compute cut server bills by 50%.' }
    ],
    industries: [
      { name: 'Business Tech', desc: 'Collaborative workspaces and document tools.' },
      { name: 'SEO & Analytics', desc: 'High-volume crawlers and automated ranking reports.' },
      { name: 'Field Operations', desc: 'Client portals, scheduling, and asset management.' }
    ],
    projects: [
      { title: 'SEOTalos', category: 'SEO Analytics SaaS', summary: 'Multi-property Search Console analytics with AI visibility tracking.', stack: ['Next.js', 'Python', 'PostgreSQL', 'Redis'], link: 'https://seotalos.com', outcome: 'Agency analytics platform with SEO A/B testing' },
      { title: 'ReviewRocket', category: 'Reputation Management', summary: 'Automated review collection and AI-powered response generation.', stack: ['Node.js', 'OpenAI / GPT', 'MongoDB', 'Stripe'], link: 'https://reviewroket.com', outcome: 'Reputation automation for local business at scale' }
    ],
    testimonials: [
      { name: 'Michael Chen', role: 'CTO, DataFlow Systems', content: 'The analytics dashboard Vixora built exceeded all our expectations.', project: 'Enterprise SaaS Dashboard', rating: 5 }
    ],
    relatedSlugs: ['web-development', 'devops-cloud', 'ai-solutions']
  },
  'e-commerce': {
    slug: 'e-commerce',
    name: 'E-Commerce',
    tagline: 'Headless storefronts and custom Shopify Plus stores built for maximum conversion.',
    headline: 'Brand-First Storefronts Obsessed With Conversion',
    description: 'We build custom, headless, and Shopify Plus commerce experiences with sub-second search, frictionless carts, and instant checkout.',
    icon: ShoppingBag,
    metrics: [
      { label: 'Stores Launched', value: '14+' },
      { label: 'Conversion Lift', value: '+45%' },
      { label: 'Speed Index', value: '98/100' },
      { label: 'Cart Drop Reduction', value: '-30%' }
    ],
    whyChooseUs: [
      { title: 'Headless Architecture', body: 'Decoupled frontends yielding lightning-fast load speeds and total design freedom.' },
      { title: 'Shopify Plus Mastery', body: 'Custom Shopify Functions, checkout extensions, and ERP integration.' },
      { title: 'Conversion UX First', body: 'Slide-out carts and 1-click checkouts engineered to reduce abandonment.' }
    ],
    offerings: [
      { title: 'Headless Shopify Storefronts', body: 'Next.js storefronts connected to Shopify APIs for extreme speed.', tags: ['Shopify API', 'Next.js', 'Vercel'] },
      { title: 'Shopify Plus Custom Apps', body: 'Checkout customizations, shipping logic, and bundle rules.', tags: ['Shopify Functions', 'Node.js', 'Rust'] },
      { title: 'B2B Wholesale Portals', body: 'Tiered wholesale pricing, quick reorder forms, and tax exempt rules.', tags: ['Shopify Plus B2B', 'ERP'] },
      { title: 'Omnichannel Sync', body: 'Real-time order and inventory sync across ERPs and warehouses.', tags: ['NetSuite', 'Klaviyo', 'Salesforce'] }
    ],
    process: [
      { step: '01', title: 'UX & Sales Audit', body: 'Analyze funnel drop-offs and design optimized cart flows.' },
      { step: '02', title: 'Data Mapping', body: 'Structure collections, product variants, and ERP feeds.' },
      { step: '03', title: 'Storefront Build', body: 'Develop high-speed collection grids and instant cart drawers.' },
      { step: '04', title: 'Checkout Scripts', body: 'Configure custom discounts, upsells, and shipping rules.' },
      { step: '05', title: 'Speed Optimization', body: 'Pre-render collection pages and minimize code bundle size.' },
      { step: '06', title: 'Launch', body: 'Redirect old URLs safely and sync live inventory channels.' }
    ],
    benefits: [
      { title: 'Instant Product Views', body: 'Eliminate page lag so shoppers view items instantly without leaving.' },
      { title: 'Bespoke Brand Styling', body: 'Break free from rigid templates with custom interactive features.' },
      { title: 'Higher Order Value', body: 'In-cart bundles and smart checkout recommendations increase average spend.' }
    ],
    industries: [
      { name: 'Direct-to-Consumer', desc: 'Lifestyle brands requiring cinematic, responsive layouts.' },
      { name: 'B2B & Wholesale', desc: 'Quick order sheets, bulk pricing, and invoice payments.' },
      { name: 'Marketplaces', desc: 'Multi-vendor routing and unified checkout baskets.' }
    ],
    projects: [
      { title: 'PickleballCourts', category: 'Marketplace & Community', summary: 'Location-based court discovery, community, and content monetization.', stack: ['Next.js', 'MongoDB', 'AWS', 'Stripe'], link: 'https://livepickleballcourts.com', outcome: 'National marketplace with geolocation at its core' }
    ],
    testimonials: [
      { name: 'Emily Rodriguez', role: 'Founder, Luxury Fashion Co.', content: 'Our custom Shopify store is beautiful and performs flawlessly. Vixora delivered a premium experience our customers love.', project: 'Shopify Plus Custom Store', rating: 5 }
    ],
    relatedSlugs: ['web-development', 'ui-ux-design', 'saas-platforms']
  },
  'ui-ux-design': {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    tagline: 'Research-driven interfaces and modular design systems that make complex software simple.',
    headline: 'Craft Digital Experiences That Feel Effortless',
    description: 'We turn complex data and multi-step workflows into clean, intuitive UI design systems that accelerate development and delight users.',
    icon: Palette,
    metrics: [
      { label: 'Design Systems', value: '20+' },
      { label: 'User Research', value: '250+ hrs' },
      { label: 'Component Reuse', value: '90%' },
      { label: 'Figma Assets', value: '1,500+' }
    ],
    whyChooseUs: [
      { title: 'User Research First', body: 'Layouts validated through user interviews and click tracking before writing code.' },
      { title: 'Figma Design Tokens', body: 'Design systems mapped directly to code tokens for flawless developer handoff.' },
      { title: 'Complex SaaS Expertise', body: 'Simplifying data-dense dashboards, tables, and workflows into clear steps.' }
    ],
    offerings: [
      { title: 'User Research & Journey Mapping', body: 'Task flow analysis and heuristic audits to eliminate friction points.', tags: ['User Interviews', 'Hotjar', 'Miro'] },
      { title: 'Custom Figma Design Systems', body: 'Variables, dark/light themes, and responsive UI component libraries.', tags: ['Figma', 'Tokens', 'Design Systems'] },
      { title: 'High-Fidelity Interface Design', body: 'Polished layouts, typography pairing, and bespoke iconography.', tags: ['UI Design', 'Art Direction', 'Prototyping'] },
      { title: 'Interactive Prototypes', body: 'Clickable prototypes with micro-animations mimicking final software.', tags: ['Figma Prototyping', 'Micro-interactions'] }
    ],
    process: [
      { step: '01', title: 'Audit & Research', body: 'Document UX friction and map primary user goals.' },
      { step: '02', title: 'Wireframing', body: 'Structure navigation paths and layout wireframes.' },
      { step: '03', title: 'Design System', body: 'Define color tokens, typography, and button primitives in Figma.' },
      { step: '04', title: 'UI Design', body: 'Design core screens, settings panels, and responsive layouts.' },
      { step: '05', title: 'Prototyping', body: 'Build interactive prototypes and micro-animations.' },
      { step: '06', title: 'Dev Handoff', body: 'Export clean design tokens and guide front-end developers.' }
    ],
    benefits: [
      { title: 'Zero User Friction', body: 'Intuitive design cuts customer onboarding friction and support tickets.' },
      { title: '2x Faster Coding', body: 'Standardized design tokens eliminate design ambiguity for engineers.' },
      { title: 'Premium Brand Perception', body: 'Harmonious colors and typography give your product state-of-the-art feel.' }
    ],
    industries: [
      { name: 'AI & Analytics', desc: 'Data visualizers, prompt workspaces, and analytics panels.' },
      { name: 'FinTech', desc: 'Transaction ledgers, investment dashboards, and bank connection flows.' },
      { name: 'Enterprise Software', desc: 'Role management, permission tables, and audit logs.' }
    ],
    projects: [
      { title: 'UserCall', category: 'Voice AI Research Platform', summary: 'AI-moderated voice interviews at scale with automatic insight extraction.', stack: ['Figma', 'UX Research', 'Design Systems'], link: 'https://www.usercall.co', outcome: 'Stunning voice platform designed and shipped' }
    ],
    testimonials: [
      { name: 'Emily Rodriguez', role: 'Founder, Luxury Fashion Co.', content: 'Vixora truly understood our brand vision and delivered a premium experience.', project: 'Shopify Plus Custom Store', rating: 5 }
    ],
    relatedSlugs: ['web-development', 'e-commerce', 'saas-platforms']
  },
  'devops-cloud': {
    slug: 'devops-cloud',
    name: 'DevOps & Cloud',
    tagline: 'Bulletproof cloud infrastructure and automated CI/CD pipelines built to scale seamlessly.',
    headline: 'Secure, Automate, and Scale Your Infrastructure',
    description: 'We automate cloud infrastructure with Terraform, build multi-region server clusters, and setup automated CI/CD releases for zero-downtime deploys.',
    icon: Server,
    metrics: [
      { label: 'Cloud Migrations', value: '30+' },
      { label: 'Platform Uptime', value: '99.99%' },
      { label: 'Build Time Saved', value: '65%' },
      { label: 'Cloud Bill Reduced', value: '45%' }
    ],
    whyChooseUs: [
      { title: 'Infrastructure as Code', body: 'VPCs, load balancers, and databases defined in Terraform for 100% auditability.' },
      { title: 'Zero-Downtime Releases', body: 'Blue-green deploys and migration safety guards so users experience no downtime.' },
      { title: 'Strict Cloud Security', body: 'VPC isolation, firewall rules, and IAM access controls to satisfy compliance audits.' }
    ],
    offerings: [
      { title: 'AWS & GCP Architecture', body: 'Multi-region server clusters and serverless backend setups.', tags: ['AWS', 'Terraform', 'Kubernetes'] },
      { title: 'Automated CI/CD Pipelines', body: 'GitHub Actions scripts to test, build containers, and deploy automatically.', tags: ['GitHub Actions', 'Docker', 'Vercel'] },
      { title: 'Database Performance Tuning', body: 'Replicas, connection pools, automated backups, and query profiling.', tags: ['PostgreSQL', 'Redis', 'pgpool'] },
      { title: 'Cloud Cost Optimization', body: 'Right-sizing instances and auto-scaling rules to lower monthly AWS bills.', tags: ['Cost Optimization', 'Kubernetes Scaling'] }
    ],
    process: [
      { step: '01', title: 'Cloud Audit', body: 'Analyze cloud bills and security access configurations.' },
      { step: '02', title: 'IaC Blueprint', body: 'Model infrastructure in Terraform with strict isolation rules.' },
      { step: '03', title: 'Containerization', body: 'Optimize Docker containers and automated test pipelines.' },
      { step: '04', title: 'Staging & QA', body: 'Setup automated staging promotion gates and security checks.' },
      { step: '05', title: 'Observability', body: 'Install server health monitoring and instant alert notifications.' },
      { step: '06', title: 'Live Migration', body: 'Run database schema migrations and switch DNS seamlessly.' }
    ],
    benefits: [
      { title: 'Hands-Free Deploys', body: 'Code commits build and release automatically with zero manual steps.' },
      { title: 'Audit-Ready Security', body: 'Meet SOC2, HIPAA, and GDPR standards with encrypted storage and VPC firewalls.' },
      { title: '45% Lower Cloud Costs', body: 'Auto-scaling ensures you pay only for active traffic resources.' }
    ],
    industries: [
      { name: 'SaaS Startups', desc: 'Automated staging environments and fast build pipelines.' },
      { name: 'FinTech', desc: 'Secure data isolation, VPC firewalls, and transaction audit trails.' },
      { name: 'E-Commerce', desc: 'Edge caching and load balancing for high traffic sales surges.' }
    ],
    projects: [
      { title: 'PickleballCourts', category: 'Marketplace & Community', summary: 'Location-based court discovery, community, and content monetization.', stack: ['Next.js', 'MongoDB', 'AWS', 'Stripe'], link: 'https://livepickleballcourts.com', outcome: 'National marketplace with geolocation at its core' }
    ],
    testimonials: [
      { name: 'Sarah Johnson', role: 'CEO, TechMart Inc.', content: 'Vixora transformed our e-commerce platform completely. The team\'s technical expertise is unmatched.', project: 'AI-Powered E-Commerce', rating: 5 }
    ],
    relatedSlugs: ['saas-platforms', 'web-development', 'ai-solutions']
  }
};
