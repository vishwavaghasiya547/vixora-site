export const caseStudiesData = {
  header: {
    badge: "Featured Work",
    title: "Proof of Execution.",
    description: "We don't just talk about modern engineering; we deploy it. Explore how we have fundamentally transformed architecture and scaled operations for our partners."
  },
  projects: [
    {
      name: "AI Review Automation & Reputation Management Platform",
      industry: "AI SaaS Platform",
      overview: "An automated platform for managing customer reviews and online reputation using artificial intelligence.",
      challenge: "Managing and responding to a high volume of online reviews across multiple platforms required significant manual effort and lacked consistent brand voice.",
      solution: "Engineered a centralized SaaS platform integrating LLMs to aggregate reviews and auto-generate context-aware, brand-aligned responses.",
      technologies: ["Next.js", "OpenAI", "Node.js", "PostgreSQL"],
      highlights: ["AI Automation", "Scalable SaaS", "Secure Authentication"],
      image: "/projects/review-ai.webp",
      href: "/portfolio/review-automation",
    },
    {
      name: "Pickleball Court Finder & Booking Platform",
      industry: "Sports & Recreation Tech",
      overview: "A specialized directory and booking engine for pickleball enthusiasts.",
      challenge: "Players struggled to find and reserve available courts efficiently due to fragmented local systems and outdated facility websites.",
      solution: "Developed a responsive, centralized booking platform with real-time availability sync, geolocation search, and secure payment processing.",
      technologies: ["React", "Next.js", "Stripe", "Supabase"],
      highlights: ["Responsive", "Modern Architecture", "Cloud Ready"],
      image: "/projects/pickleball.webp",
      href: "/portfolio/pickleball-finder",
    },
    {
      name: "AI Voice Research Platform",
      industry: "Research & Development",
      overview: "A sophisticated platform for analyzing and generating advanced voice AI models.",
      challenge: "Researchers needed a robust interface to process large audio datasets and interact with experimental voice synthesis models without infrastructure bottlenecks.",
      solution: "Architected a high-performance web interface connected to scalable cloud storage and GPU-accelerated backend processing pipelines.",
      technologies: ["React", "Python", "AWS", "Docker"],
      highlights: ["AI Automation", "Cloud Ready", "Modern Architecture"],
      image: "/projects/voice-ai.webp",
      href: "/portfolio/voice-research",
    }
  ]
};
