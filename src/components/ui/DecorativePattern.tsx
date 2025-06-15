"use client";

import { motion } from "framer-motion";

interface PatternProps {
  className?: string;
  color?: "gold" | "heritage" | "sage" | "spice";
  opacity?: number;
}

export default function DecorativePattern({ 
  className = "", 
  color = "heritage",
  opacity = 0.15 
}: PatternProps) {
  const colorMap = {
    gold: "border-gold",
    heritage: "border-heritage",
    sage: "border-sage",
    spice: "border-spice"
  };

  const borderColor = colorMap[color];

  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1.2, delay: 0.8 }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className={`w-12 h-12 border-t border-l ${borderColor}`}></div>
        <div className={`w-12 h-12 border-t border-r ${borderColor}`}></div>
        <div className={`w-12 h-12 border-b border-l ${borderColor}`}></div>
        <div className={`w-12 h-12 border-b border-r ${borderColor}`}></div>
      </div>
    </motion.div>
  );
} 