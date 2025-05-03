"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="relative overflow-hidden rounded-xl bg-primary px-6 py-12 text-primary-foreground md:px-10 md:py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Background pattern circles */}
          <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl"></div>
          <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl"></div>
          
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-primary-foreground/90 sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Join thousands of satisfied customers who have boosted productivity
              and streamlined their operations with our platform.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="h-12 w-full sm:w-auto bg-background text-primary hover:bg-background/90"
              >
                Start Your Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="#pricing">
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            <motion.p
              className="mt-4 text-sm text-primary-foreground/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              No credit card required. 14-day free trial.
            </motion.p>
          </div>
          
          {/* Stats */}
          <motion.div
            className="relative z-10 mt-16 grid grid-cols-1 gap-6 border-t border-primary-foreground/20 pt-10 sm:grid-cols-2 md:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Businesses Onboarded
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">40%</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Average Productivity Increase
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">4.9/5</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Customer Satisfaction
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}