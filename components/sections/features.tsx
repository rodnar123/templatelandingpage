"use client";

import {  useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, BarChart, Layers, Zap, Shield, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionTitle from "@/components/shared/section-title";
import Container from "@/components/shared/container";
import { staggerContainer, fadeInUp } from "@/components/shared/animations";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast",
      description: "Our platform is optimized for speed and performance, ensuring your workflows are never interrupted.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure by Design",
      description: "Enterprise-grade security with end-to-end encryption and compliance with industry standards.",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Scalable Solution",
      description: "Grow with confidence knowing our platform scales with your business needs without compromise.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Data Insights",
      description: "Turn data into actionable insights with powerful analytics and reporting capabilities.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Team Collaboration",
      description: "Foster seamless teamwork with integrated collaboration tools and real-time updates.",
    },
    {
      icon: <ArrowRight className="h-10 w-10 text-primary" />,
      title: "Automation",
      description: "Automate repetitive tasks and workflows to boost productivity and reduce errors.",
    },
  ];

  // Using animation variants from our animation utility
  // We're using the staggerContainer and fadeInUp animations

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <Container>
        <SectionTitle
          title="Powerful Features"
          subtitle="Everything you need to succeed"
          description="Our comprehensive platform includes everything you need to streamline operations, boost productivity, and drive growth."
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}