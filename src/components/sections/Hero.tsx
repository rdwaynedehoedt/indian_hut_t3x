"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import DecorativePattern from "../ui/DecorativePattern";
import Image from "next/image";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);
  const bgY = useTransform(scrollY, [0, 300], [0, 100]);

  // GSAP animations for decorative elements
  useEffect(() => {
    if (!containerRef.current) return;
    
    const decorativeElements = containerRef.current.querySelectorAll('.decorative-element');
    
    gsap.fromTo(decorativeElements, 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 0.15, 
        scale: 1, 
        duration: 2, 
        stagger: 0.15,
        ease: "power3.out",
        delay: 1.5
      }
    );
  }, []);

  return (
    <motion.section 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-[0.07] mix-blend-soft-light"
          style={{ y: bgY }}
        >
          <Image 
            src="/images/backgrounds/banana-leaf.png" 
            alt="Background texture" 
            fill
            className="object-cover object-center scale-110"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-sand/90 backdrop-blur-[2px]" />
      </div>

      {/* Decorative elements - symmetrically placed */}
      <DecorativePattern className="absolute top-12 right-12 hidden lg:block" color="gold" opacity={0.1} />
      <DecorativePattern className="absolute top-12 left-12 hidden lg:block" color="gold" opacity={0.1} />
      <DecorativePattern className="absolute bottom-32 left-12 hidden lg:block" />
      <DecorativePattern className="absolute bottom-32 right-12 hidden lg:block" />
      
      {/* Decorative food icons - symmetrically placed */}
      <Image 
        src="/images/icons/food-icon-3.png" 
        width={60} 
        height={60} 
        alt="" 
        className="absolute top-24 left-[15%] opacity-0 decorative-element hidden md:block"
      />
      <Image 
        src="/images/icons/food-icon-3.png" 
        width={60} 
        height={60} 
        alt="" 
        className="absolute top-24 right-[15%] opacity-0 decorative-element hidden md:block transform scale-x-[-1]"
      />
      
      <Image 
        src="/images/icons/food-icon-7.png" 
        width={50} 
        height={50} 
        alt="" 
        className="absolute bottom-32 right-[18%] opacity-0 decorative-element hidden md:block"
      />
      <Image 
        src="/images/icons/food-icon-7.png" 
        width={50} 
        height={50} 
        alt="" 
        className="absolute bottom-32 left-[18%] opacity-0 decorative-element hidden md:block transform scale-x-[-1]"
      />
      
      {/* Decorative corners - perfectly symmetrical */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-gold/20 hidden md:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-gold/20 hidden md:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-gold/20 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold/20 hidden md:block" />
      
      {/* Main content */}
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-between w-full h-full flex-1 gap-8 md:gap-4 z-10"
        style={{ opacity: textOpacity, y: textY }}
      >
        {/* Left column */}
        <motion.div 
          className="w-full md:w-1/3 text-roast text-lg md:text-xl font-light relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative pl-4 md:pl-6">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-heritage/20"></div>
            <p className="leading-relaxed">
              Nestled in the heart of Galle Fort, Indian Hut honors centuries of spice, culture, and conversation.
            </p>
            
            {/* Matching decorative element */}
            <motion.div
              className="mt-6 opacity-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ delay: 1.7, duration: 1 }}
            >
              <Image 
                src="/images/decorative/decorative-element-5.png" 
                width={40} 
                height={40} 
                alt="" 
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Center column */}
        <motion.div 
          className="w-full md:w-1/3 text-center flex flex-col items-center justify-center gap-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-gold">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-8 h-8"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair text-charcoal tracking-wider heritage-spacing relative">
            <span className="relative inline-block">
              INDIAN HUT
              <motion.span 
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gold/40 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
              />
            </span>
          </h1>
          <div className="flex flex-col items-center">
            <span className="text-lg md:text-xl text-charcoal tracking-widest font-medium">
              HERITAGE
            </span>
            <span className="text-sm md:text-base text-charcoal tracking-wider mt-1">
              – GALLE FORT –
            </span>
          </div>
          
          {/* Decorative element below text */}
          <motion.div
            className="mt-4 opacity-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Image 
              src="/images/decorative/decorative-element-2.png" 
              width={60} 
              height={30} 
              alt="" 
              className="mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Right column */}
        <motion.div 
          className="w-full md:w-1/3 text-charcoal text-lg md:text-xl font-light text-right relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="relative pr-4 md:pr-6">
            <div className="absolute right-0 top-0 h-full w-0.5 bg-heritage/20"></div>
            <p className="leading-relaxed">
              Blending the charm of a colonial café with timeless Indian hospitality since 1986.
            </p>
            
            {/* Matching decorative element */}
            <motion.div
              className="mt-6 opacity-0 flex justify-end"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ delay: 1.7, duration: 1 }}
            >
              <Image 
                src="/images/decorative/decorative-element-5.png" 
                width={40} 
                height={40} 
                alt="" 
                className="transform scale-x-[-1]"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle spice accents - symmetrical */}
      <motion.div 
        className="absolute top-1/2 left-0 w-1 h-16 bg-spice hidden lg:block"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 0.7, height: 64 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
      <motion.div 
        className="absolute top-1/2 right-0 w-1 h-16 bg-spice hidden lg:block"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 0.7, height: 64 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
      
      {/* Skyline silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden z-[5] opacity-10 mix-blend-multiply">
        <Image 
          src="/images/backgrounds/skyline.png" 
          alt="Skyline" 
          fill
          className="object-cover object-bottom scale-110"
        />
      </div>

      {/* Scroll down arrow with better centering */}
      <motion.div 
        className="flex justify-center mt-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.button
          className="text-charcoal hover-heritage transition-soft focus:outline-none relative"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "loop", 
            duration: 2.5,
            ease: "easeInOut" 
          }}
          aria-label="Scroll down"
        >
          <motion.div
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gold/40 origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          />
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </motion.section>
  );
} 