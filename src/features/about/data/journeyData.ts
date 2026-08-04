import { Rocket, Brain, Users, TrendingUp, Globe, Sparkles, LucideIcon } from 'lucide-react';

export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: LucideIcon;
  highlights: string[];
  tags: string[];
}

export const journeyMilestones: Milestone[] = [
  {
    year: '2019',
    title: 'Studio Founded',
    subtitle: 'The Beginning',
    description: 'Vixora started as a four-person product studio in India with a clear mission: engineer software that delivers real business impact.',
    metric: '4 Founders',
    metricLabel: 'Initial Team',
    icon: Rocket,
    highlights: ['First 5 Clients Onboarded', 'Core Tech Stack Formed', '100% Bootstrap Delivery'],
    tags: ['Founding', 'UI/UX Design', 'MVP Engineering'],
  },
  {
    year: '2020',
    title: 'AI & Data Focus',
    subtitle: 'Strategic Pivot',
    description: 'Surpassed 20+ active clients and doubled down on AI-powered software & data intelligence as market demand accelerated.',
    metric: '20+ Clients',
    metricLabel: 'Active Partners',
    icon: Brain,
    highlights: ['AI Practice Launched', 'First Enterprise Contract', 'Cross-border Clients'],
    tags: ['AI Integration', 'Data Engineering', 'Scale'],
  },
  {
    year: '2021',
    title: 'SaaS Practice Launch',
    subtitle: 'Team Expansion',
    description: 'Expanded our engineering team with specialists in cloud architecture and launched our dedicated SaaS platform practice.',
    metric: '15 Specialists',
    metricLabel: 'Engineering Roster',
    icon: Users,
    highlights: ['Cloud Microservices Unit', 'Dedicated UX Lab', '98% Client Retention'],
    tags: ['SaaS Architecture', 'Cloud Native', 'Team Growth'],
  },
  {
    year: '2022',
    title: '$50M Client Revenue',
    subtitle: 'Impact Milestone',
    description: 'Digital products engineered by Vixora collectively crossed $50M+ in annual revenue generated for our client partners.',
    metric: '$50M+ Rev',
    metricLabel: 'Client Impact',
    icon: TrendingUp,
    highlights: ['Fintech Platform Launch', 'Series B Client Support', 'Zero-Downtime Migration'],
    tags: ['Revenue Impact', 'Fintech', 'Scalability'],
  },
  {
    year: '2023',
    title: 'Global Delivery Reach',
    subtitle: 'International Footprint',
    description: 'Scaled engineering infrastructure to support high-growth startups and enterprises across 40+ countries globally.',
    metric: '40+ Countries',
    metricLabel: 'Global Reach',
    icon: Globe,
    highlights: ['EMEA & APAC Hubs', '24/7 Operations Model', 'SOC2 Compliant Workflows'],
    tags: ['Global Scale', 'Enterprise', 'Multi-Region'],
  },
  {
    year: '2024',
    title: 'Vixora 2.0 (AI-First)',
    subtitle: 'Next Generation',
    description: 'Launched our AI-First engineering framework, integrating LLMs & autonomous agents into client tech stacks.',
    metric: '50+ Engineers',
    metricLabel: 'Global Team',
    icon: Sparkles,
    highlights: ['Agentic Workflows', 'Custom LLM Deployments', 'Industry Benchmark Studio'],
    tags: ['Vixora 2.0', 'GenAI Practice', 'AI-First'],
  },
];
