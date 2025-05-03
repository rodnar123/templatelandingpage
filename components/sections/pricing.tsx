"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import SectionTitle from "@/components/shared/section-title";

interface PricingPlan {
  name: string;
  description: string;
  price: {
    monthly: number;
    annually: number;
  };
  features: string[];
  popular?: boolean;
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams just getting started.",
      price: {
        monthly: 29,
        annually: 24,
      },
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic reporting",
        "Standard support",
        "Access to basic features",
      ],
    },
    {
      name: "Professional",
      description: "For growing businesses that need more power and features.",
      price: {
        monthly: 59,
        annually: 49,
      },
      features: [
        "Up to 20 team members",
        "50GB storage",
        "Advanced reporting",
        "Priority support",
        "Access to all features",
        "API access",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations with unique needs.",
      price: {
        monthly: 99,
        annually: 79,
      },
      features: [
        "Unlimited team members",
        "500GB storage",
        "Custom reporting",
        "24/7 dedicated support",
        "Access to all features",
        "Custom branding",
        "Advanced security",
        "Dedicated account manager",
        "Custom training sessions",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <SectionTitle
          title="Simple, Transparent Pricing"
          subtitle="Pricing Plans"
          description="Choose the perfect plan for your business needs with no hidden fees."
        />

        <div className="mt-8 flex items-center justify-center space-x-2">
          <span
            className={`text-sm ${
              !isAnnual ? "text-foreground font-medium" : "text-muted-foreground"
            }`}
          >
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            aria-label="Toggle annual billing"
          />
          <span
            className={`text-sm ${
              isAnnual ? "text-foreground font-medium" : "text-muted-foreground"
            }`}
          >
            Annual
            <span className="ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
              Save 20%
            </span>
          </span>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-xl border p-6 ${
                  plan.popular
                    ? "border-primary shadow-lg"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-0 top-0">
                    <div className="bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Popular
                    </div>
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <div className="mb-5">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold md:text-4xl">
                      ${isAnnual ? plan.price.annually : plan.price.monthly}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      /month
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Billed annually (${plan.price.annually * 12}/year)
                    </p>
                  )}
                </div>
                <ul className="mb-6 space-y-2 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button
                    className={`w-full ${
                      plan.popular ? "" : "variant-outline"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 rounded-xl bg-muted p-6 md:p-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="max-w-md">
              <h3 className="text-xl font-bold md:text-2xl">
                Need a custom solution?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Contact our sales team for a tailored plan that meets your
                specific business requirements.
              </p>
            </div>
            <Button size="lg">Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
}