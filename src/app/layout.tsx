import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vixora - Engineering Intelligent Digital Experiences",
  description: "Vixora helps startups and enterprises build scalable digital products, AI-powered platforms, and premium web experiences.",
  keywords: ["web development", "AI solutions", "SaaS development", "Shopify engineering", "digital transformation"],
  authors: [{ name: "Vixora" }],
  openGraph: {
    title: "Vixora - Engineering Intelligent Digital Experiences",
    description: "Vixora helps startups and enterprises build scalable digital products, AI-powered platforms, and premium web experiences.",
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
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
