export interface LegalSection {
  id: string;
  title: string;
  keyTakeaway?: string;
  content: string[];
  bullets?: string[];
}

export interface LegalData {
  title: string;
  introduction: string;
  sections: LegalSection[];
}

export const privacyPolicyData: LegalData = {
  title: "Privacy Policy",
  introduction: "At Vixora Studio, transparency, integrity, and trust are fundamental to how we engineer digital experiences. This Privacy Policy outlines our commitment to protecting your privacy and describes how we collect, store, use, and protect your information when you visit our website, use our platforms, or engage with our services.",
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      keyTakeaway: "We collect only the essential information required to understand your project needs, communicate effectively, and improve your website experience.",
      content: [
        "In order to provide our product engineering and design services, we may collect two primary categories of information: information you explicitly provide to us, and information collected automatically through your interaction with our website.",
        "We collect personal information that you voluntarily submit, such as when you fill out our 'Start a Project' modal, use our contact form, subscribe to updates, or email us directly. This may include your name, email address, company name, project details, and budget information.",
        "When you navigate our website, we automatically collect certain technical data using cookies, server logs, and analytics tools. This includes your IP address, browser type, operating system, referring URLs, device information, and details of how you interact with our pages (such as time spent, clicks, and page navigation)."
      ]
    },
    {
      id: "how-we-use-information",
      title: "2. How We Use Your Information",
      keyTakeaway: "We use your data strictly to deliver premium engineering services, respond to project inquiries, and optimize our platform performance.",
      content: [
        "Vixora uses the information we collect to operate, maintain, and improve our digital portfolio and services. We do not engage in data profiling or ad-targeting.",
        "Specifically, we use your information for the following business purposes:"
      ],
      bullets: [
        "Project Scoping & Delivery: Evaluating your project inquiry, preparing proposal materials, and contacting you regarding potential partnerships.",
        "Client Communication: Sending project updates, answering support requests, and sharing administrative notifications.",
        "Website Optimization: Analyzing visitor behavior to improve our website design, usability, and speed.",
        "Security & Compliance: Monitoring for potential security threats, fraud, or violations of our terms, and complying with applicable laws."
      ]
    },
    {
      id: "sharing-and-disclosure",
      title: "3. Information Sharing and Disclosure",
      keyTakeaway: "We do not sell, rent, or trade your personal data. Sharing is limited to trusted infrastructure partners and legal requirements.",
      content: [
        "We respect your privacy and keep your personal data confidential. We only share your information under the following limited circumstances:",
        "Third-Party Service Providers: We partner with trusted companies to host our infrastructure, run analytics, and manage our communications (such as Vercel, AWS, and modern CRM systems). These vendors are bound by strict contract terms and are authorized to use your information only as necessary to provide services to us.",
        "Legal Obligations: We may disclose your information if required to do so by law, court order, or government authority, or if we believe in good faith that such action is necessary to protect the rights, property, or safety of Vixora, our clients, or the public.",
        "Business Transfers: In the event of a merger, acquisition, restructuring, or asset sale, client and user data may be transferred as a business asset, subject to the same privacy commitments."
      ]
    },
    {
      id: "data-security-retention",
      title: "4. Data Security and Retention",
      keyTakeaway: "We employ industry-standard encryption and security controls to protect your data, and we only retain it for as long as necessary.",
      content: [
        "Vixora uses state-of-the-art administrative, technical, and physical security measures to safeguard your personal data against unauthorized access, alteration, disclosure, or destruction.",
        "All data transmission is encrypted using Secure Socket Layer (SSL/TLS) protocols, and we store information on secured, firewalled servers. While we strive to protect your personal information, no transmission over the internet or storage system is 100% secure. If you believe your interaction with us is no longer secure, please contact us immediately.",
        "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. When data is no longer needed, we securely delete or anonymize it."
      ]
    },
    {
      id: "cookies-and-tracking",
      title: "5. Cookies and Tracking Technologies",
      keyTakeaway: "We use performance and functional cookies to remember your preferences and analyze traffic. You can manage or block cookies in your browser settings.",
      content: [
        "Cookies are small text files placed on your device to help us recognize your browser and collect information about your website visits. We use both first-party and third-party cookies on our website.",
        "We use performance and analytics cookies (such as Google Analytics) to help us understand how visitors use our site, which pages are most popular, and where we can improve site speed and performance.",
        "You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. Declining cookies may prevent you from taking full advantage of all website features."
      ]
    },
    {
      id: "your-choices-rights",
      title: "6. Your Choices and Rights",
      keyTakeaway: "Depending on your location, you have rights to access, correct, delete, or restrict the use of your personal data.",
      content: [
        "We believe in giving you control over your information. Depending on your jurisdiction (including rights under GDPR and CCPA), you may have the following rights:",
        "Access & Portability: The right to request a copy of the personal data we hold about you.",
        "Correction: The right to request that we update or correct inaccurate or incomplete personal information.",
        "Deletion: The right to request that we delete your personal data from our systems.",
        "Objection & Restriction: The right to object to or restrict our processing of your information.",
        "To exercise any of these rights, please contact us at privacy@vixora.com. We will verify your identity and respond to your request in accordance with applicable laws."
      ]
    },
    {
      id: "contact-information",
      title: "7. Contact Information",
      keyTakeaway: "For any questions or concerns regarding this policy or your personal data, our privacy team is here to assist.",
      content: [
        "If you have any questions, feedback, or complaints regarding this Privacy Policy or our data handling practices, please reach out to us:",
        "Email: privacy@vixora.com",
        "Vixora Studio — Headquartered in India (Delivering Worldwide)"
      ]
    }
  ]
};
