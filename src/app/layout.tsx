import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Vixora — Engineering Intelligent Digital Experiences",
  description: "Vixora partners with startups and enterprises to build scalable digital products, AI-powered platforms, and premium web experiences that drive measurable growth.",
  keywords: ["web development", "AI solutions", "SaaS development", "Shopify engineering", "digital transformation", "tech company", "software development"],
  authors: [{ name: "Vixora" }],
  openGraph: {
    title: "Vixora — Engineering Intelligent Digital Experiences",
    description: "Vixora partners with startups and enterprises to build scalable digital products, AI-powered platforms, and premium web experiences that drive measurable growth.",
    type: "website",
    url: "https://vixora.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
