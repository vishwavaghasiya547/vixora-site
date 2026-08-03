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
    tagline: 'We build production-ready intelligent systems that automate workflows, predict outcomes, and scale operations.',
    headline: 'Deploy Intelligent Systems That Create Sustainable Value',
    description: 'AI shouldn\'t be an experiment. We bridge the gap between advanced research and production-grade software by engineering custom LLM integrations, computer vision pipelines, and RAG architectures that drive business metrics.',
    icon: Brain,
    metrics: [
      { label: 'AI Models Shipped', value: '25+' },
      { label: 'Average Efficiency Gain', value: '40%' },
      { label: 'Accuracy Rate Secured', value: '99.4%' },
      { label: 'Token Costs Saved', value: '60%' }
    ],
    whyChooseUs: [
      { title: 'Production-First Approach', body: 'We don\'t stop at Jupyter notebooks or sandbox prototypes. We design, optimize, and deploy AI models that run efficiently under real-world server loads.' },
      { title: 'RAG & Vector Search Expertise', body: 'We build retrieval-augmented generation systems that ground LLMs in your proprietary data, eliminating hallucinations and securing enterprise data privacy.' },
      { title: 'Token & Latency Optimization', body: 'Through strict model selection, prompt compression, streaming, and caching layers, we reduce API costs and response latency by up to 60%.' }
    ],
    offerings: [
      { title: 'Large Language Model Integration', body: 'Custom agents, reasoning chains, and prompt frameworks utilizing OpenAI, Anthropic, and open-source models tuned for your specific business processes.', tags: ['GPT-4o', 'Claude 3.5', 'Llama 3'] },
      { title: 'Retrieval-Augmented Generation (RAG)', body: 'Connecting models securely to internal company knowledge bases, databases, and APIs for accurate, context-aware information retrieval.', tags: ['pgvector', 'Pinecone', 'LangChain'] },
      { title: 'Natural Language Processing (NLP)', body: 'High-speed sentiment analysis, entity extraction, text classification, and semantic search interfaces that understand user intent.', tags: ['NLP', 'Transformers', 'Spacy'] },
      { title: 'Computer Vision Systems', body: 'Automated object detection, image classification, OCR, and surveillance analysis built to streamline quality checks or asset tracking.', tags: ['OpenCV', 'YOLO', 'TensorFlow'] }
    ],
    process: [
      { step: '01', title: 'Data & Feasibility Analysis', body: 'We audit your existing data assets, analyze business bottlenecks, and determine the technical viability of the AI solution.' },
      { step: '02', title: 'Architecture & Model Selection', body: 'We select the optimal models (open-source vs. proprietary) and map out the data pipeline, caching layer, and vector storage structure.' },
      { step: '03', title: 'Prototype & Evaluation', body: 'We build a rapid proof-of-concept and run rigorous evaluations using structured test cases to verify accuracy, latency, and costs.' },
      { step: '04', title: 'Integration & Optimization', body: 'We integrate the AI engine into your web platform, secure user data isolation, and optimize prompt structures and API overhead.' },
      { step: '05', title: 'Production Release', body: 'Deploy the system to production with continuous monitoring, fallback mechanisms, and cost alert structures.' },
      { step: '06', title: 'Continuous Iteration', body: 'Collect real-world user logs, monitor edge case failures, and refine model parameters or prompt datasets.' }
    ],
    benefits: [
      { title: 'Accelerated Operations', body: 'Automate manual data entry, customer support loops, and reporting processes, freeing your team for strategic objectives.' },
      { title: 'Predictive Insights', body: 'Extract hidden trends from customer behavior and market logs to forecast demand and optimize inventory.' },
      { title: 'Enhanced Personalization', body: 'Deliver hyper-personalized recommendations and contextual experiences that drive customer lifetime value.' }
    ],
    industries: [
      { name: 'FinTech & Banking', desc: 'Automated document analysis, compliance checks, risk profiling, and credit underwriting engines.' },
      { name: 'SaaS Platforms', desc: 'In-app AI sidekicks, text summarization tools, and automated workflow triggers.' },
      { name: 'Healthcare & Life Sciences', desc: 'HIPAA-compliant document parsing, patient intake automation, and clinical research analysis.' }
    ],
    projects: [
      { title: 'AssistPro AI', category: 'AI Productivity Platform', summary: 'Natural language task management across WhatsApp, Telegram, and web.', stack: ['OpenAI / GPT', 'Node.js', 'PostgreSQL', 'Next.js'], link: 'https://assistpro.ai', outcome: 'Multi-channel AI assistant shipped to production' },
      { title: 'UserCall', category: 'Voice AI Research Platform', summary: 'AI-moderated voice interviews at scale with automatic insight extraction.', stack: ['Whisper / STT', 'Python', 'FastAPI', 'React'], link: 'https://www.usercall.co', outcome: '10× faster research cycle for product teams' }
    ],
    testimonials: [
      { name: 'Sarah Johnson', role: 'CEO, TechMart Inc.', content: 'Vixora transformed our e-commerce platform completely. Their AI-powered recommendations increased conversion by 180% and revenue by 250%. The team\'s expertise and dedication are simply unmatched.', project: 'AI-Powered E-Commerce', rating: 5 }
    ],
    relatedSlugs: ['web-development', 'saas-platforms', 'devops-cloud']
  },
  'web-development': {
    slug: 'web-development',
    name: 'Web Development',
    tagline: 'We build high-performance, responsive, and secure web applications with modern, component-driven architecture.',
    headline: 'Build Faster, Scale Further, and Convert Higher',
    description: 'We don\'t build generic websites. We engineer high-performance web applications that load in milliseconds, achieve perfect Core Web Vitals, and scale seamlessly from launch to millions of monthly active users.',
    icon: Code,
    metrics: [
      { label: 'Web Applications Shipped', value: '60+' },
      { label: 'Average Core Web Vitals', value: '95+' },
      { label: 'Load Time Under', value: '0.8s' },
      { label: 'Uptime Maintained', value: '99.99%' }
    ],
    whyChooseUs: [
      { title: 'Clean, Type-Safe Codebase', body: 'We run TypeScript in strict mode on every project, utilizing tRPC and Zod to establish solid type contracts from database to browser.' },
      { title: 'Core Web Vitals Obsession', body: 'We optimize code splitting, lazy loading, image formats, and network waterfalls to guarantee Google-friendly search rankings.' },
      { title: 'Modular Design Systems', body: 'We develop custom component libraries that are fully reusable, keeping codebases dry and reducing future dev costs by 50%.' }
    ],
    offerings: [
      { title: 'Single-Page & Multi-Page Apps', body: 'Highly interactive client portals, business applications, and dashboards built on React and Next.js framework.', tags: ['React', 'Next.js', 'Zustand'] },
      { title: 'Headless Frontends & Jamstack', body: 'Blazing-fast frontends connected to CMS, search, and payment endpoints for maximum speed and SEO capabilities.', tags: ['Sanity', 'GraphQL', 'Tailwind'] },
      { title: 'API & Microservice Architectures', body: 'Clean RESTful and GraphQL backend endpoints built to feed clients with low latency and secure rate limiting.', tags: ['Node.js', 'FastAPI', 'Express'] },
      { title: 'Responsive Interfaces', body: 'Seamless UI transitions across mobile, tablet, and ultra-wide monitor views, adhering to rigorous accessibility guidelines.', tags: ['CSS Grid', 'Tailwind', 'A11y'] }
    ],
    process: [
      { step: '01', title: 'Discovery & API Scoping', body: 'We define the technical requirements, integrate data schemas, and draft contract-first API boundaries.' },
      { step: '02', title: 'Component & UX Prototype', body: 'We build high-fidelity interactive designs and translate them into a modular, empty-shell React library.' },
      { step: '03', title: 'Development & State Setup', body: 'Our developers implement type-safe client-state modules, server-state query caching, and core application flow.' },
      { step: '04', title: 'Integration & API Connection', body: 'We connect client modules to backend databases, third-party hooks, and security endpoints.' },
      { step: '05', title: 'QA & Optimization', body: 'We perform automated tests, profile memory leaks, optimize bundle sizes, and run accessibility compliance checks.' },
      { step: '06', title: 'Continuous Delivery Release', body: 'Set up CI/CD pipelines, configure edge redirects, and deploy the application to global production servers.' }
    ],
    benefits: [
      { title: 'Search Engine Authority', body: 'Perfect loading performance and server-side rendering ensure top-tier organic visibility on Google.' },
      { title: 'Increased Conversions', body: 'Sub-second page transitions eliminate friction, boosting customer signups and checkout rates.' },
      { title: 'Long-Term Maintainability', body: 'Clean TypeScript abstractions mean you can hand over the codebase to internal teams or add new features easily.' }
    ],
    industries: [
      { name: 'SaaS & Tech Companies', desc: 'Highly interactive dashboards, metrics visualizers, and onboarding flows.' },
      { name: 'E-Commerce Brands', desc: 'Headless storefronts with instant search indexing and lightning-fast checkout steps.' },
      { name: 'Marketplaces & Directories', desc: 'Dynamic search queries, geolocation tracking, and real-time messaging pipelines.' }
    ],
    projects: [
      { title: 'PickleballCourts', category: 'Marketplace & Community', summary: 'Location-based court discovery, community, and content monetization.', stack: ['Next.js', 'MongoDB', 'AWS', 'Stripe'], link: 'https://livepickleballcourts.com', outcome: 'National marketplace with geolocation at its core' },
      { title: 'SEOTalos', category: 'SEO Analytics SaaS', summary: 'Multi-property Search Console analytics with AI visibility tracking.', stack: ['Next.js', 'Python', 'PostgreSQL', 'Redis'], link: 'https://seotalos.com', outcome: 'Agency analytics platform with SEO A/B testing' }
    ],
    testimonials: [
      { name: 'Michael Chen', role: 'CTO, DataFlow Systems', content: 'The analytics dashboard Vixora built exceeded all our expectations. Their attention to detail and deep technical expertise helped us make fundamentally better data-driven decisions.', project: 'Enterprise SaaS Dashboard', rating: 5 }
    ],
    relatedSlugs: ['saas-platforms', 'ui-ux-design', 'e-commerce']
  },
  'saas-platforms': {
    slug: 'saas-platforms',
    name: 'SaaS Platforms',
    tagline: 'We build scalable, multi-tenant software-as-a-service platforms with robust authorization, billing, and dashboards.',
    headline: 'Scale Your Subscription Product From Idea to Enterprise',
    description: 'Building SaaS requires more than code. It requires building multi-tenant infrastructure, safe data isolation models, robust metered billing integrations, and admin portals that give you absolute control over your product.',
    icon: Zap,
    metrics: [
      { label: 'SaaS Platforms Shipped', value: '18+' },
      { label: 'Total MRR Processed', value: '$12M+' },
      { label: 'Database Queries Under', value: '15ms' },
      { label: 'API Security Score', value: 'A+' }
    ],
    whyChooseUs: [
      { title: 'Safe Multi-Tenancy', body: 'We architect strict tenant-isolation schemas at the database and application layers, preventing data leaks across clients.' },
      { title: 'Advanced Billing & Tiering', body: 'Deep Stripe billing integration supporting metered usage, subscription upgrades, vouchers, and global tax compliance.' },
      { title: 'High-Concurrency Caching', body: 'We implement layered Redis cache structures and query queue optimizations to handle high-velocity dashboard requests.' }
    ],
    offerings: [
      { title: 'Multi-Tenant Architectures', body: 'Dedicated database schemas, subdomains, and isolated workspaces ensuring secure and fast SaaS hosting.', tags: ['PostgreSQL', 'Auth0', 'RLS'] },
      { title: 'Billing & Subscription Engines', body: 'Custom subscription workflows, pricing tiers, metered pricing logs, and dunning management systems.', tags: ['Stripe', 'RevenueCat', 'Billing'] },
      { title: 'Admin & Operations Portals', body: 'Comprehensive internal dashboards for managing user access, monitoring platform health, and exporting logs.', tags: ['React', 'Tailwind', 'Charts'] },
      { title: 'Developer API Gateways', body: 'Fully documented, authenticated API keys and webhooks allowing your clients to integrate with your platform.', tags: ['Swagger', 'Webhooks', 'JWT'] }
    ],
    process: [
      { step: '01', title: 'Data Isolation & Auth Mapping', body: 'We design the tenant hierarchy, determine auth providers, and map out secure session workflows.' },
      { step: '02', title: 'Pricing & DB Schema Design', body: 'Draft relational database schemas, configure foreign key cascading, and design Stripe pricing syncs.' },
      { step: '03', title: 'Core Tenant Development', body: 'Develop workspace signups, role-based access control, tenant route switching, and profile settings.' },
      { step: '04', title: 'Subscription & Dashboard Dev', body: 'Integrate billing webhook listeners, configure stripe checkout flows, and build responsive client dashboards.' },
      { step: '05', title: 'Admin Tools & Security Check', body: 'Build staff admin pages, execute strict data penetration checks, and configure rate limiters.' },
      { step: '06', title: 'Zero-Downtime Deployment', body: 'Configure automated DB migration pipelines, scale server pods, and launch the platform.' }
    ],
    benefits: [
      { title: 'Accelerated Time to Market', body: 'Utilize our battle-tested SaaS infrastructure modules to launch your product 3 months earlier.' },
      { title: 'Worry-Free Security', body: 'Role-based access, token validation, and rate limiting ensure your SaaS complies with corporate procurement standards.' },
      { title: 'Optimized Operating Margin', body: 'Efficient database query structures and serverless compute designs reduce cloud overhead by up to 50%.' }
    ],
    industries: [
      { name: 'Business Productivity', desc: 'Collaborative workspaces, task boards, and document intelligence tools.' },
      { name: 'Marketing & SEO Tech', desc: 'High-volume data scraping engines, crawler pipelines, and ranking analytics.' },
      { name: 'Property & Field Operations', desc: 'Customer portals, dispatch mapping, and scheduling platforms.' }
    ],
    projects: [
      { title: 'SEOTalos', category: 'SEO Analytics SaaS', summary: 'Multi-property Search Console analytics with AI visibility tracking.', stack: ['Next.js', 'Python', 'PostgreSQL', 'Redis'], link: 'https://seotalos.com', outcome: 'Agency analytics platform with SEO A/B testing' },
      { title: 'ReviewRocket', category: 'Reputation Management', summary: 'Automated review collection and AI-powered response generation.', stack: ['Node.js', 'OpenAI / GPT', 'MongoDB', 'Stripe'], link: 'https://reviewroket.com', outcome: 'Reputation automation for local business at scale' }
    ],
    testimonials: [
      { name: 'Michael Chen', role: 'CTO, DataFlow Systems', content: 'The analytics dashboard Vixora built exceeded all our expectations. Their attention to detail and deep technical expertise helped us make fundamentally better data-driven decisions.', project: 'Enterprise SaaS Dashboard', rating: 5 }
    ],
    relatedSlugs: ['web-development', 'devops-cloud', 'ai-solutions']
  },
  'e-commerce': {
    slug: 'e-commerce',
    name: 'E-Commerce',
    tagline: 'We build headless commerce platforms and custom Shopify Plus stores that convert visitors into loyal customers.',
    headline: 'Create Brand-First Storefronts Obsessed With Conversion',
    description: 'Generic templates hurt sales. We build highly customized, headless, and Shopify Plus digital commerce experiences featuring fast product search, checkout flows designed to minimize cart abandonment, and instant page transitions.',
    icon: ShoppingBag,
    metrics: [
      { label: 'E-Commerce Stores Launched', value: '14+' },
      { label: 'Conversion Rate Lift', value: '45%+' },
      { label: 'Store Page Speed Index', value: '98/100' },
      { label: 'Cart Abandonment Drop', value: '30%' }
    ],
    whyChooseUs: [
      { title: 'Headless Commerce Depth', body: 'We separate the content management and storefront from the checkout backends, yielding lightning-fast page loading speeds.' },
      { title: 'Shopify Plus Customization', body: 'Mastery over Shopify Functions, custom checkout extensions, and API integrations that extend standard Shopify stores.' },
      { title: 'Conversion-Focused UX', body: 'Every pixel of the search filter, cart drawer, and single-page checkout is designed to eliminate buyer friction.' }
    ],
    offerings: [
      { title: 'Headless Shopify Frontends', body: 'Next.js storefronts pulling products from Shopify API, bypassing Liquid template limitations.', tags: ['Shopify Storefront API', 'Next.js', 'Vercel'] },
      { title: 'Custom Shopify Plus Apps & Scripts', body: 'Advanced checkout customization, custom shipping logic, bundle rules, and marketing triggers.', tags: ['Shopify Functions', 'Node.js', 'Rust'] },
      { title: 'B2B & Wholesale Portals', body: 'Dedicated dealer workspaces, tiered quantity discounts, invoice uploads, and tax-exempt validation.', tags: ['Shopify Plus B2B', 'ERP Integration'] },
      { title: 'Omnichannel Integrations', body: 'Syncing store inventory and orders automatically with external ERPs, CRMs, and warehouse platforms.', tags: ['NetSuite', 'Klaviyo', 'Salesforce'] }
    ],
    process: [
      { step: '01', title: 'Commerce & UX Audit', body: 'We analyze current store metrics, map buyer conversion drop-offs, and design optimized cart flows.' },
      { step: '02', title: 'API & Inventory Mapping', body: 'Configure product attributes, map collection hierarchies, and design data feeds for third-party tools.' },
      { step: '03', title: 'Headless / Storefront Dev', body: 'Build high-performance product listings, filters, variant selectors, and slide-out cart drawers.' },
      { step: '04', title: 'Checkout & App Development', body: 'Configure custom checkout validation scripts, loyalty program integrations, and shipping rate rules.' },
      { step: '05', title: 'SEO & Speed Optimization', body: 'Minimize bundle sizes, pre-render collection paths, and run intensive page load speed profiling.' },
      { step: '06', title: 'Launch & Feed Sync', body: 'Redirect old URLs safely, connect Google Merchant Center feeds, and go live.' }
    ],
    benefits: [
      { title: 'Instant Load Times', body: 'Bypass Shopify\'s server rendering delay to offer product pages that load instantly, preventing visitor exits.' },
      { title: 'Tailored Brand Identity', body: 'Total design freedom. We build bespoke product page layouts and interactive sizing guides that templates can\'t support.' },
      { title: 'Higher Average Order Value', body: 'Implement smart in-cart recommendations, volume bundles, and custom upsells during the checkout process.' }
    ],
    industries: [
      { name: 'Direct-to-Consumer (DTC)', desc: ' Bespoke lifestyle brands requiring cinematic layouts and smooth animations.' },
      { name: 'B2B & Manufacturing', desc: 'Wholesale order sheets, quick reorders, and ERP inventory syncing.' },
      { name: 'Multi-Brand Marketplaces', desc: 'Complex vendor routing, custom search filters, and unified checkout baskets.' }
    ],
    projects: [
      { title: 'PickleballCourts', category: 'Marketplace & Community', summary: 'Location-based court discovery, community, and content monetization.', stack: ['Next.js', 'MongoDB', 'AWS', 'Stripe'], link: 'https://livepickleballcourts.com', outcome: 'National marketplace with geolocation at its core' }
    ],
    testimonials: [
      { name: 'Emily Rodriguez', role: 'Founder, Luxury Fashion Co.', content: 'Our custom Shopify store is beautiful and performs flawlessly. Vixora truly understood our brand vision and delivered a premium experience our customers love.', project: 'Shopify Plus Custom Store', rating: 5 }
    ],
    relatedSlugs: ['web-development', 'ui-ux-design', 'saas-platforms']
  },
  'ui-ux-design': {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    tagline: 'We design research-driven interfaces and modular design systems that make complex products feel simple.',
    headline: 'Craft Digital Experiences That Feel Effortless',
    description: 'We don\'t just draw beautiful screens. We design comprehensive product architectures, conduct user interviews, and assemble modular design systems that unify your product roadmap and delight users.',
    icon: Palette,
    metrics: [
      { label: 'Design Systems Created', value: '20+' },
      { label: 'User Research Hours', value: '250+' },
      { label: 'Component Reusability', value: '90%' },
      { label: 'Figma Components Built', value: '1,500+' }
    ],
    whyChooseUs: [
      { title: 'Research-First Process', body: 'We validate layouts and interactions using qualitative user interviews and click-heat analytics before coding.' },
      { title: 'Modular Figma libraries', body: 'We build strict variables-based design systems matching Tailwind tokens, ensuring a seamless design-to-code workflow.' },
      { title: 'Complex Product Specialists', body: 'We excel at translating data-dense layouts, dashboards, and multi-step configurations into clean, intuitive steps.' }
    ],
    offerings: [
      { title: 'User Research & Personas', body: 'User testing, heuristic audits, task flows, and user journey mapping to uncover UX bottlenecks.', tags: ['User Interviews', 'Hotjar', 'Miro'] },
      { title: 'Custom Design Systems', body: 'Variables, dark/light modes, grid guidelines, and responsive component libraries compiled in Figma.', tags: ['Figma', 'Tokens', 'Design Systems'] },
      { title: 'High-Fidelity UI Design', body: 'Stunning visual styling, glassmorphic layouts, typography pairing, and custom iconography.', tags: ['UI Design', 'Art Direction', 'Prototyping'] },
      { title: 'Interactive Prototypes', body: 'Clickable prototypes with micro-animations mimicking final browser experiences for client alignment.', tags: ['Figma Prototyping', 'Micro-interactions'] }
    ],
    process: [
      { step: '01', title: 'Heuristic Audit & Research', body: 'We audit the existing software, document user friction areas, and define key personas.' },
      { step: '02', title: 'Information Architecture', body: 'Create detailed sitemaps, navigation paths, and low-fidelity layout wireframes.' },
      { step: '03', title: 'Design System Set Up', body: 'Establish typography pairing, color palettes, spacing variables, and button primitives in Figma.' },
      { step: '04', title: 'High-Fidelity Interface Design', body: 'Design all core dashboard screens, settings panels, modal forms, and responsive viewport guidelines.' },
      { step: '05', title: 'Interactive Prototyping', body: 'Link screens, configure component hover states, and design onboarding micro-animations.' },
      { step: '06', title: 'Developer Handoff', body: 'Export code tokens, prepare asset files, and hold alignment walkthroughs with engineers.' }
    ],
    benefits: [
      { title: 'Eliminated User Friction', body: 'Intuitive layouts reduce customer churn and cut customer support requests by up to 45%.' },
      { title: 'Faster Development Cycles', body: 'A unified variables-based design system eliminates guesswork, speeding up developer output.' },
      { title: 'Bespoke Brand Authority', body: 'Premium aesthetics, harmonious palettes, and consistent icons ensure your product looks state-of-the-art.' }
    ],
    industries: [
      { name: 'AI & Data Analytics', desc: 'Complex graphs, workspace workflows, prompt panels, and data-dense dashboards.' },
      { name: 'FinTech Platforms', desc: 'Transaction ledgers, bank connection flows, and investment overview boards.' },
      { name: 'Enterprise SaaS', desc: 'User directories, permission configurations, logs tables, and billing wizards.' }
    ],
    projects: [
      { title: 'UserCall', category: 'Voice AI Research Platform', summary: 'AI-moderated voice interviews at scale with automatic insight extraction.', stack: ['Figma', 'UX Research', 'Design Systems'], link: 'https://www.usercall.co', outcome: 'Stunning voice platform designed and shipped' }
    ],
    testimonials: [
      { name: 'Emily Rodriguez', role: 'Founder, Luxury Fashion Co.', content: 'Our custom Shopify store is beautiful and performs flawlessly. Vixora truly understood our brand vision and delivered a premium experience our customers love.', project: 'Shopify Plus Custom Store', rating: 5 }
    ],
    relatedSlugs: ['web-development', 'e-commerce', 'saas-platforms']
  },
  'devops-cloud': {
    slug: 'devops-cloud',
    name: 'DevOps & Cloud',
    tagline: 'We design bulletproof cloud infrastructure and automated CI/CD pipelines that scale automatically.',
    headline: 'Secure, Automate, and Scale Your Infrastructure',
    description: 'Servers shouldn\'t require manual maintenance. We automate cloud infrastructure using Terraform, build secure multi-region environments, configure auto-scaling limits, and secure secret tokens so your platform stays secure and available.',
    icon: Server,
    metrics: [
      { label: 'Cloud Migrations Completed', value: '30+' },
      { label: 'Uptime Maintained', value: '99.99%' },
      { label: 'Average Build Time saved', value: '65%' },
      { label: 'Monthly Server Cost Drop', value: '45%' }
    ],
    whyChooseUs: [
      { title: 'Infrastructure as Code (IaC)', body: 'Every server VPC, load balancer, and database is modeled in Terraform. No manual console tweaks; audit logs are clean.' },
      { title: 'Zero-Downtime Deployment', body: 'We configure blue-green deployments, rolling updates, and database migration safety gates so users never see a maintenance page.' },
      { title: 'Security & HIPAA Audits', body: 'We design virtual private clouds, restrict IAM user access, configure WAF firewalls, and encrypt data at rest.' }
    ],
    offerings: [
      { title: 'AWS & GCP Infrastructure Design', body: 'Architecting secure multi-region cluster topologies using managed instances and serverless functions.', tags: ['AWS', 'Terraform', 'Kubernetes'] },
      { title: 'Automated CI/CD Pipelines', body: 'Configure github actions and runner scripts to test code, check styles, build images, and deploy safely.', tags: ['GitHub Actions', 'Docker', 'Vercel'] },
      { title: 'Database Optimization & Tuning', body: 'Setting up database replicas, connection pooling, automated snapshot backups, and query profiling.', tags: ['PostgreSQL', 'Redis', 'pgpool'] },
      { title: 'Cost Optimization Audits', body: 'Profiling server sizing, optimizing S3 buckets, configuration of auto-scaling, and spot instance routing.', tags: ['Cost Optimization', 'Kubernetes Scaling'] }
    ],
    process: [
      { step: '01', title: 'Infrastructure Audit', body: 'We analyze your current cloud billing, compile security logs, and profile pipeline bottlenecks.' },
      { step: '02', title: 'IaC Architecture Blueprint', body: 'Model the new server environment in Terraform, set up VPC isolation boundaries, and design access levels.' },
      { step: '03', title: 'Containerization & Build Dev', body: 'Write Dockerfiles, optimize image layers, and construct test-on-pull pipelines.' },
      { step: '04', title: 'Environment Promotion setup', body: 'Build automated staging, UAT, and production promotion workflows with security gates.' },
      { step: '05', title: 'Observability & Alerting', body: 'Install database monitoring, configure memory profiling metrics, and route critical alerts to Slack.' },
      { step: '06', title: 'Migration & Load Test', body: 'Execute database schema migrations, run synthetic traffic load tests, and switch DNS records.' }
    ],
    benefits: [
      { title: 'No More Manual Deploys', body: 'Developers push code; servers compile and release automatically. Human configuration errors are eliminated.' },
      { title: 'Secure Corporate Posture', body: 'Satisfy rigorous data compliance audits (SOC2, HIPAA, GDPR) with VPC isolation, IAM strict access, and encryption.' },
      { title: 'Reduced Infrastructure Bill', body: 'Auto-scaling and instance right-sizing ensure you pay only for active resources, cutting server costs.' }
    ],
    industries: [
      { name: 'SaaS Tech Startups', desc: 'Automated deployment setups, staging environments, and database profiling.' },
      { name: 'FinTech Providers', desc: 'Secure data isolation, strict transaction logging, and VPC firewalls.' },
      { name: 'Headless E-Commerce Brands', desc: 'Edge cache routing, load balancing for burst sales traffic, and global CDNs.' }
    ],
    projects: [
      { title: 'PickleballCourts', category: 'Marketplace & Community', summary: 'Location-based court discovery, community, and content monetization.', stack: ['Next.js', 'MongoDB', 'AWS', 'Stripe'], link: 'https://livepickleballcourts.com', outcome: 'National marketplace with geolocation at its core' }
    ],
    testimonials: [
      { name: 'Sarah Johnson', role: 'CEO, TechMart Inc.', content: 'Vixora transformed our e-commerce platform completely. Their AI-powered recommendations increased conversion by 180% and revenue by 250%. The team\'s expertise and dedication are simply unmatched.', project: 'AI-Powered E-Commerce', rating: 5 }
    ],
    relatedSlugs: ['saas-platforms', 'web-development', 'ai-solutions']
  }
};
