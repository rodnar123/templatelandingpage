import { Metadata } from "next";

import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import About from "@/components/sections/about";
import Testimonials from "@/components/sections/testimonials";
import Pricing from "@/components/sections/pricing";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "YourCompany - Modern Solutions for Your Business",
  description: "We provide innovative solutions to help your business grow.",
  keywords: ["business", "solutions", "services", "technology"],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <CTA />
      <Contact />
    </main>
  );
}