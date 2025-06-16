"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div 
      className={`mb-8 md:mb-12 ${centered ? "text-center" : ""} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-charcoal mb-2 md:mb-3">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-roast text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      
      <div className={`h-px w-12 md:w-16 bg-gold mt-4 md:mt-6 ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
} 