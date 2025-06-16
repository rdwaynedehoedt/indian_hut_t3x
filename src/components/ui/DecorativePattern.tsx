"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type DecorativePatternProps = {
  className?: string;
  color?: "gold" | "heritage" | "spice" | "sage";
  opacity?: number;
  size?: "sm" | "md" | "lg";
  variant?: "circle" | "square" | "diamond" | "floral";
  animate?: boolean;
};

export default function DecorativePattern({
  className = "",
  color = "heritage",
  opacity = 0.2,
  size = "md",
  variant = "floral",
  animate = true,
}: DecorativePatternProps) {
  const patternRef = useRef<HTMLDivElement>(null);
  
  // Size mapping
  const sizeMap = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };
  
  // Color mapping
  const colorMap = {
    gold: "text-gold",
    heritage: "text-heritage",
    spice: "text-spice",
    sage: "text-sage",
  };

  // GSAP animation for more sophisticated movement
  useEffect(() => {
    if (!animate || !patternRef.current) return;
    
    // Create a subtle floating animation
    gsap.to(patternRef.current, {
      y: "8px",
      rotation: variant === "floral" ? 5 : 0,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    // For floral variants, add a subtle rotation
    if (variant === "floral") {
      gsap.to(patternRef.current.querySelector('.inner-pattern'), {
        rotation: 10,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, [animate, variant]);

  // Pattern content based on variant
  const renderPattern = () => {
    switch (variant) {
      case "circle":
        return (
          <div className="inner-pattern relative">
            <div className={`rounded-full border-2 ${colorMap[color]} w-full h-full opacity-40`}></div>
            <div className={`rounded-full border ${colorMap[color]} absolute inset-2 opacity-60`}></div>
            <div className={`rounded-full ${colorMap[color]} absolute inset-[40%] opacity-80`}></div>
          </div>
        );
      case "square":
        return (
          <div className="inner-pattern relative">
            <div className={`border-2 ${colorMap[color]} w-full h-full opacity-40 rotate-45`}></div>
            <div className={`border ${colorMap[color]} absolute inset-2 opacity-60 rotate-[22.5deg]`}></div>
            <div className={`${colorMap[color]} absolute inset-[40%] opacity-80`}></div>
          </div>
        );
      case "diamond":
        return (
          <div className="inner-pattern relative rotate-45">
            <div className={`border-2 ${colorMap[color]} w-full h-full opacity-40`}></div>
            <div className={`border ${colorMap[color]} absolute inset-3 opacity-60`}></div>
            <div className={`${colorMap[color]} absolute inset-[35%] opacity-80`}></div>
          </div>
        );
      case "floral":
      default:
        return (
          <div className="inner-pattern relative">
            {/* Decorative floral pattern */}
            <svg 
              viewBox="0 0 100 100" 
              className={`w-full h-full ${colorMap[color]}`} 
              style={{ opacity }}
            >
              <g>
                {/* Central flower */}
                <circle cx="50" cy="50" r="8" fill="currentColor" />
                
                {/* Petals */}
                <path d="M50 30 Q60 40 50 50 Q40 40 50 30" fill="currentColor" />
                <path d="M50 30 Q60 40 50 50 Q40 40 50 30" fill="currentColor" transform="rotate(72 50 50)" />
                <path d="M50 30 Q60 40 50 50 Q40 40 50 30" fill="currentColor" transform="rotate(144 50 50)" />
                <path d="M50 30 Q60 40 50 50 Q40 40 50 30" fill="currentColor" transform="rotate(216 50 50)" />
                <path d="M50 30 Q60 40 50 50 Q40 40 50 30" fill="currentColor" transform="rotate(288 50 50)" />
                
                {/* Outer decorative elements */}
                <circle cx="50" cy="20" r="3" fill="currentColor" />
                <circle cx="50" cy="80" r="3" fill="currentColor" />
                <circle cx="20" cy="50" r="3" fill="currentColor" />
                <circle cx="80" cy="50" r="3" fill="currentColor" />
                
                {/* Corner accents */}
                <circle cx="26" cy="26" r="2" fill="currentColor" />
                <circle cx="74" cy="26" r="2" fill="currentColor" />
                <circle cx="26" cy="74" r="2" fill="currentColor" />
                <circle cx="74" cy="74" r="2" fill="currentColor" />
                
                {/* Connecting lines */}
                <line x1="50" y1="23" x2="50" y2="42" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="58" x2="50" y2="77" stroke="currentColor" strokeWidth="1" />
                <line x1="23" y1="50" x2="42" y2="50" stroke="currentColor" strokeWidth="1" />
                <line x1="58" y1="50" x2="77" y2="50" stroke="currentColor" strokeWidth="1" />
              </g>
            </svg>
          </div>
        );
    }
  };

  return (
    <motion.div 
      ref={patternRef}
      className={`${sizeMap[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {renderPattern()}
    </motion.div>
  );
} 