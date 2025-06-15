"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import DecorativePattern from "../ui/DecorativePattern";

export default function Hero() {
  return (
    <motion.section 
      className="min-h-screen flex flex-col justify-between bg-sand px-6 md:px-12 lg:px-24 py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative elements */}
      <DecorativePattern className="absolute top-12 right-12 hidden lg:block" color="gold" opacity={0.1} />
      <DecorativePattern className="absolute bottom-32 left-12 hidden lg:block" />
      
      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full flex-1 gap-8 md:gap-4 z-10">
        {/* Left column */}
        <motion.div 
          className="w-full md:w-1/3 text-roast text-lg md:text-xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="leading-relaxed">
            Nestled in the heart of Galle Fort, Indian Hut honors centuries of spice, culture, and conversation.
          </p>
        </motion.div>

        {/* Center column */}
        <motion.div 
          className="w-full md:w-1/3 text-center flex flex-col items-center justify-center gap-4"
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
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair text-charcoal tracking-wider heritage-spacing">
            INDIAN HUT
          </h1>
          <div className="flex flex-col items-center">
            <span className="text-lg md:text-xl text-charcoal tracking-widest font-medium">
              HERITAGE
            </span>
            <span className="text-sm md:text-base text-charcoal tracking-wider mt-1">
              – GALLE FORT –
            </span>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div 
          className="w-full md:w-1/3 text-charcoal text-lg md:text-xl font-light text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <p className="leading-relaxed">
            Blending the charm of a colonial café with timeless Indian hospitality since 1986.
          </p>
        </motion.div>
      </div>

      {/* Subtle spice accent */}
      <motion.div 
        className="absolute top-1/2 left-0 w-1 h-16 bg-spice hidden lg:block"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 0.7, height: 64 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />

      {/* Scroll down arrow */}
      <motion.div 
        className="flex justify-center mt-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.button
          className="text-charcoal hover-heritage transition-soft focus:outline-none"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "loop", 
            duration: 1.5, 
            ease: "easeInOut" 
          }}
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </motion.section>
  );
} 