import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

const siteUrl = "https://portfolio-beige-zeta-74.vercel.app";
const description =
  "Romy Valdez, full-stack developer in Santo Domingo, DR. Scalable web apps with Next.js, TypeScript and Supabase, from concept to deploy.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Romy Valdez — Full-Stack Developer",
    template: "%s — Romy Valdez",
  },
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Romy Valdez",
    title: "Romy Valdez — Full-Stack Developer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Romy Valdez — Full-Stack Developer",
    description,
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
      className={cn(
        inter.variable,
        spaceGrotesk.variable,
        jetBrainsMono.variable,
        "motion-safe:scroll-smooth",
        "h-full",
        "antialiased",
      )}
    >
      <body className="min-h-full flex flex-col bg-bg">
        <CustomCursor />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
