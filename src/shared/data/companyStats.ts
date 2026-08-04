export interface CompanyStat {
  value: string;
  label: string;
}

export const companyStats = {
  projectsDelivered: '150+',
  clientRetention: '98%',
  yearsExcellence: '5+',
  countriesServed: '40+',
  revenueGenerated: '$200M+',
  satisfactionRate: '99.4%',
  teamMembers: '50+',
  deliveryRecord: '100%',
  supportSLA: '24/7',
};

export const mainCompanyStats: CompanyStat[] = [
  { value: companyStats.projectsDelivered, label: 'Projects Delivered' },
  { value: companyStats.clientRetention, label: 'Client Retention' },
  { value: companyStats.yearsExcellence, label: 'Years of Excellence' },
  { value: companyStats.countriesServed, label: 'Countries Served' },
  { value: companyStats.revenueGenerated, label: 'Client Revenue Generated' },
];

export const trustBannerStats: CompanyStat[] = [
  { value: companyStats.projectsDelivered, label: 'Digital Products Shipped' },
  { value: companyStats.yearsExcellence, label: 'Years Architecting Systems' },
  { value: companyStats.satisfactionRate, label: 'Client Satisfaction Score' },
  { value: companyStats.supportSLA, label: 'Infrastructure Support SLA' },
];

export const testimonialTrustStats: CompanyStat[] = [
  { value: companyStats.satisfactionRate, label: 'Client Satisfaction Rate' },
  { value: companyStats.revenueGenerated, label: 'Client Revenue Generated' },
  { value: companyStats.deliveryRecord, label: 'On-Time Delivery Record' },
];
