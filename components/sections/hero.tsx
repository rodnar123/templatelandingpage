"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import Container from "@/components/shared/container";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                New Features Available
              </span>
            </motion.div>
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              Transform Your Business with Our Solutions
            </motion.h1>
            <motion.p
              className="max-w-[600px] text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
              Streamline your operations, boost productivity, and drive growth
              with our innovative platform designed for modern businesses.
            </motion.p>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              variants={itemVariants}
            >
              <Button size="lg" className="h-12">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="h-12">
                Learn More
              </Button>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4 text-sm"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((id) => (
                  <div
                    key={id}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-gray-200"
                  >
                    {/* Avatar placeholder */}
                  </div>
                ))}
              </div>
              <div className="flex space-x-1 text-sm text-muted-foreground">
                <span className="font-medium">500+</span>
                <span>businesses trust us</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-xl border bg-gradient-to-br from-primary/20 via-secondary/20 to-background shadow-xl">
              {/* This would be where your hero image goes */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Hero Image Placeholder
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}