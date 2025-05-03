"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  alignment?: "center" | "left" | "right";
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  alignment = "center",
}: SectionTitleProps) {
  const alignmentClasses = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  };

  return (
    <div className={`${alignmentClasses[alignment]} max-w-[800px] space-y-4`}>
      {subtitle && (
        <motion.p
          className="text-primary font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="text-muted-foreground text-lg max-w-[600px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}