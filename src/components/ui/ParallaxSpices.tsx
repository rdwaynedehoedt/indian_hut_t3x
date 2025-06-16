"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

// Define spice data type
type SpiceData = {
  src: string;
  alt: string;
  size: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  initialRotation: number;
  scrollSpeed: number;
};

// Define props for ParallaxSpice component
type ParallaxSpiceProps = {
  spice: SpiceData;
  scrollYProgress: MotionValue<number>;
};

// Define spice data outside the component
const spiceData: SpiceData[] = [
  {
    src: "/images/decorative/decorative-element-1.png",
    alt: "Floating spice 1",
    size: 60,
    position: { top: "15%", left: "5%" },
    initialRotation: 20,
    scrollSpeed: 0.05
  },
  {
    src: "/images/decorative/decorative-element-2.png",
    alt: "Floating spice 2",
    size: 45,
    position: { top: "30%", right: "10%" },
    initialRotation: -15,
    scrollSpeed: -0.03
  },
  {
    src: "/images/decorative/decorative-element-3.png",
    alt: "Floating spice 3",
    size: 50,
    position: { bottom: "20%", left: "15%" },
    initialRotation: 10,
    scrollSpeed: 0.04
  },
  {
    src: "/images/decorative/decorative-element-4.png",
    alt: "Floating spice 4",
    size: 55,
    position: { bottom: "35%", right: "12%" },
    initialRotation: -20,
    scrollSpeed: -0.06
  },
  {
    src: "/images/decorative/decorative-element-5.png",
    alt: "Floating spice 5",
    size: 40,
    position: { top: "70%", left: "45%" },
    initialRotation: 5,
    scrollSpeed: 0.02
  },
  {
    src: "/images/decorative/decorative-element-6.png",
    alt: "Floating spice 6",
    size: 35,
    position: { top: "40%", left: "25%" },
    initialRotation: -10,
    scrollSpeed: -0.04
  },
];

// Create separate component for each parallax spice
const ParallaxSpice = ({ spice, scrollYProgress }: ParallaxSpiceProps) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, spice.scrollSpeed * 1000]);
  const rotate = useTransform(scrollYProgress, [0, 1], [spice.initialRotation, spice.initialRotation + (spice.scrollSpeed * 100)]);
  
  return (
    <motion.div
      className="absolute z-10 opacity-[0.12] pointer-events-none"
      style={{
        ...spice.position,
        y,
        rotate
      }}
    >
      <Image 
        src={spice.src} 
        alt={spice.alt} 
        width={spice.size} 
        height={spice.size} 
        className="object-contain"
      />
    </motion.div>
  );
};

export default function ParallaxSpices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {spiceData.map((spice, index) => (
        <ParallaxSpice key={index} spice={spice} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
} 