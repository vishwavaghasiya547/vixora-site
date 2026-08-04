import {
  Lightbulb,
  Target,
  Users,
  Shield,
  TrendingUp,
  Zap,
  LucideIcon,
} from 'lucide-react';

export interface CompanyValue {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const companyValues: CompanyValue[] = [
  {
    num: '01',
    title: 'Innovation First',
    description: 'Pushing tech boundaries with creative, cutting-edge problem solving.',
    icon: Lightbulb,
  },
  {
    num: '02',
    title: 'Quality Excellence',
    description: 'Precision engineering in every line of code and pixel we deliver.',
    icon: Target,
  },
  {
    num: '03',
    title: 'Client Success',
    description: 'Your growth is our KPI. We act as embedded partners, not vendors.',
    icon: Users,
  },
  {
    num: '04',
    title: 'Radical Transparency',
    description: 'Clear timelines, real-time updates, and honest technical guidance.',
    icon: Shield,
  },
  {
    num: '05',
    title: 'Continuous Growth',
    description: 'Investing in future-proof stacks so your software stays ahead.',
    icon: TrendingUp,
  },
  {
    num: '06',
    title: 'Speed with Substance',
    description: 'Rapid, iterative delivery without ever compromising on security or scale.',
    icon: Zap,
  },
];
