export type FooterLink = {
  label: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export const footerData = {
  company: {
    name: "Vixora Labs LLP",
    description: "Building AI-Powered Digital Products That Scale Your Business.",
    email: "hello@vixoralabs.com",
    copyright: `© ${new Date().getFullYear()} Vixora Labs LLP. All rights reserved.`,
  },
  sections: [
    {
      title: "Services",
      links: [
        { label: "AI Development", href: "/services/ai-development" },
        { label: "SaaS Development", href: "/services/saas-development" },
        { label: "Web Development", href: "/services/web-development" },
        { label: "Mobile Apps", href: "/services/mobile-apps" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Portfolio", href: "/portfolio" },
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ],
  socials: [
    { label: "Twitter", href: "https://twitter.com/vixoralabs" },
    { label: "LinkedIn", href: "https://linkedin.com/company/vixoralabs" },
    { label: "GitHub", href: "https://github.com/vixoralabs" },
  ],
};
