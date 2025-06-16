"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type SpiceProps = {
  src: string;
  alt: string;
  size: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  rotateRange?: [number, number];
  translateRange?: [number, number];
  delay?: number;
  opacity?: number;
};

export default function ParallaxSpices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Define spices with their properties
  const spices: SpiceProps[] = [
    {
      src: "/images/icons/food-icon-2.png",
      alt: "Spice 1",
      size: 40,
      position: { top: "15%", left: "10%" },
      rotateRange: [0, 45],
      translateRange: [0, -50],
      delay: 0.1,
      opacity: 0.6
    },
    {
      src: "/images/icons/food-icon-3.png",
      alt: "Spice 2",
      size: 30,
      position: { top: "45%", left: "5%" },
      rotateRange: [0, -30],
      translateRange: [0, -30],
      delay: 0.2,
      opacity: 0.5
    },
    {
      src: "/images/icons/food-icon-7.png",
      alt: "Spice 3",
      size: 35,
      position: { top: "25%", right: "8%" },
      rotateRange: [0, 60],
      translateRange: [0, -40],
      delay: 0.15,
      opacity: 0.7
    },
    {
      src: "/images/icons/food-icon-5.png",
      alt: "Spice 4",
      size: 25,
      position: { bottom: "30%", right: "15%" },
      rotateRange: [0, -45],
      translateRange: [0, -35],
      delay: 0.25,
      opacity: 0.6
    },
    {
      src: "/images/icons/food-icon-8.png",
      alt: "Spice 5",
      size: 45,
      position: { bottom: "20%", left: "15%" },
      rotateRange: [0, 30],
      translateRange: [0, -60],
      delay: 0.3,
      opacity: 0.5
    },
    {
      src: "/images/icons/food-icon-1.png",
      alt: "Spice 6",
      size: 30,
      position: { bottom: "40%", right: "25%" },
      rotateRange: [0, -25],
      translateRange: [0, -45],
      delay: 0.1,
      opacity: 0.5
    },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {spices.map((spice, index) => {
        // Create unique transformations for each spice
        const rotate = useTransform(
          scrollYProgress, 
          [0, 1], 
          [spice.rotateRange?.[0] || 0, spice.rotateRange?.[1] || 0]
        );
        const translateY = useTransform(
          scrollYProgress,
          [0, 1],
          [0, spice.translateRange?.[1] || -50]
        );

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              ...spice.position,
              rotate,
              y: translateY,
              opacity: spice.opacity || 0.6,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: spice.opacity || 0.6, 
              scale: 1,
              transition: { 
                delay: spice.delay || 0,
                duration: 0.8
              }
            }}
          >
            <div className="relative" style={{ width: spice.size, height: spice.size }}>
              <Image
                src={spice.src}
                alt={spice.alt}
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.1))" }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
} 