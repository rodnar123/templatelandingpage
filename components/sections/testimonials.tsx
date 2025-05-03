"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/shared/section-title";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "GrowthCorp",
      content:
        "This platform has completely transformed how we operate. We've seen a 40% increase in productivity and our team collaboration has never been better. The onboarding process was smooth and the support team is always responsive.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "TechStart Inc.",
      content:
        "As a growing startup, we needed a solution that could scale with us. This platform not only met our requirements but exceeded our expectations. The automation features alone saved us countless hours of manual work.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Operations Manager",
      company: "Global Solutions",
      content:
        "After trying multiple solutions, we finally found a platform that our entire team loves using. The intuitive interface and powerful features have streamlined our processes and improved our client satisfaction rates.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const startTimeout = () => {
      timeoutRef.current = setTimeout(() => {
        nextTestimonial();
      }, 6000); // Change testimonial every 6 seconds
    };

    startTimeout();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Testimonials"
          description="Hear from the businesses that have transformed their operations with our platform."
        />

        <div className="mt-16 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-4xl overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative"
              >
                <div className="rounded-xl bg-muted/50 p-6 md:p-10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mb-6 text-lg md:text-xl">
                    {testimonials[currentIndex].content}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-300">
                      {/* Avatar placeholder */}
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role},{" "}
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 w-2 rounded-full ${
                      index === currentIndex
                        ? "bg-primary"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}