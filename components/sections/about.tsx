"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Users } from "lucide-react";
import SectionTitle from "@/components/shared/section-title";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full overflow-hidden py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <SectionTitle
          title="Our Story"
          subtitle="About us"
          description="We've spent over a decade building tools to help businesses thrive."
          alignment="left"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-muted-foreground">
              Founded in 2015, YourCompany began with a simple mission: to create
              tools that empower businesses to work smarter, not harder. What
              started as a small team with big dreams has grown into a global
              company serving thousands of clients across 30+ countries.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that powerful software should be accessible to
              businesses of all sizes. Our platform is built on three core
              principles: simplicity, flexibility, and reliability. These values
              guide everything we do, from product development to customer
              support.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg bg-muted p-4 text-center">
                <Users className="mb-2 h-8 w-8 text-primary" />
                <h4 className="text-2xl font-bold">50+</h4>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-muted p-4 text-center">
                <Award className="mb-2 h-8 w-8 text-primary" />
                <h4 className="text-2xl font-bold">15+</h4>
                <p className="text-sm text-muted-foreground">Industry Awards</p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-muted p-4 text-center">
                <Clock className="mb-2 h-8 w-8 text-primary" />
                <h4 className="text-2xl font-bold">8yrs</h4>
                <p className="text-sm text-muted-foreground">In Business</p>
              </div>
            </div>

            <Button className="w-fit group" asChild>
              <a href="#team">
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="relative aspect-square md:h-auto"
            style={{ opacity: imageOpacity, scale: imageScale }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/30 via-secondary/30 to-muted shadow-xl">
              {/* This is where you'd place your actual company image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Company Image Placeholder
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10"></div>
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-secondary/10"></div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -right-6 bottom-12 h-24 w-24 rounded-lg bg-background p-4 shadow-lg"
              initial={{ x: 20, y: 20 }}
              animate={{ x: 0, y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
              }}
            >
              <div className="flex h-full flex-col items-center justify-center">
                <span className="text-xl font-bold">30+</span>
                <span className="text-xs text-muted-foreground">Countries</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-6 top-12 h-24 w-24 rounded-lg bg-background p-4 shadow-lg"
              initial={{ x: -20, y: -20 }}
              animate={{ x: 0, y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3.5,
                delay: 0.5,
              }}
            >
              <div className="flex h-full flex-col items-center justify-center">
                <span className="text-xl font-bold">500+</span>
                <span className="text-xs text-muted-foreground">Clients</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Mission and values */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            className="rounded-xl border p-6 md:p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower businesses with innovative solutions that simplify
              complex processes, foster collaboration, and drive sustainable
              growth. We&apos;re committed to helping our clients adapt and thrive in
              an ever-changing business landscape.
            </p>
          </motion.div>
          
          <motion.div
            className="rounded-xl border p-6 md:p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-2xl font-bold">Our Values</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>
                  <strong>Innovation:</strong> We constantly push boundaries to create better solutions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>
                  <strong>Integrity:</strong> We build trust through transparency and honest communication.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>
                  <strong>Excellence:</strong> We strive for quality in everything we do.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}