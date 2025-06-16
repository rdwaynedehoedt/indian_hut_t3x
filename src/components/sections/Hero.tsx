"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);
  const bgY = useTransform(scrollY, [0, 300], [0, 100]);

  // GSAP animations
  useEffect(() => {
    if (!containerRef.current) return;
    
    const lighthouseElement = containerRef.current.querySelector('.lighthouse-element');
    const lighthouseLabel = containerRef.current.querySelector('.lighthouse-label');
    const castleElement = containerRef.current.querySelector('.castle-element');
    const hamsaElement = containerRef.current.querySelector('.hamsa-element');
    const foodIcon1 = containerRef.current.querySelector('.food-icon-1');
    const foodIcon2 = containerRef.current.querySelector('.food-icon-2');
    const foodIcon3 = containerRef.current.querySelector('.food-icon-3');
    const foodIcon4 = containerRef.current.querySelector('.food-icon-4');
    const foodIcon5 = containerRef.current.querySelector('.food-icon-5');
    const foodIcon6 = containerRef.current.querySelector('.food-icon-6');
    
    // Enhanced lighthouse animation - rising from bottom with 3D effect
    gsap.fromTo(lighthouseElement, 
      { 
        opacity: 0, 
        y: 200, 
        scale: 0.85,
        rotationY: -10,
        transformOrigin: "bottom center"
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotationY: 0,
        duration: 2.5,
        ease: "power3.out",
        delay: 1.2
      }
    );
    
    // Castle animation - rising from bottom with 3D effect
    gsap.fromTo(castleElement, 
      { 
        opacity: 0, 
        y: 200, 
        scale: 0.85,
        rotationY: 10,
        transformOrigin: "bottom center"
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotationY: 0,
        duration: 2.5,
        ease: "power3.out",
        delay: 0.8
      }
    );
    
    // Lighthouse label animation
    gsap.fromTo(lighthouseLabel,
      { opacity: 0, x: -20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.5,
        ease: "power2.out",
        delay: 3
      }
    );
    
    // Continuous subtle floating animation for lighthouse
    gsap.to(lighthouseElement, {
      y: "-15px",
      rotationY: 3,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 3.7
    });
    
    // Continuous subtle floating animation for castle
    gsap.to(castleElement, {
      y: "-12px",
      rotationY: -3,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 3.2
    });
    
    // Hamsa hand animation
    gsap.fromTo(hamsaElement, 
      { 
        opacity: 0, 
        scale: 0.7,
        y: 10
      },
      { 
        opacity: 0.9, 
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 2.0
      }
    );
    
    // Food icons animations
    gsap.fromTo(foodIcon1,
      { opacity: 0, scale: 0.7, rotation: -10 },
      { 
        opacity: 0.85, 
        scale: 1, 
        rotation: 0, 
        duration: 1.5,
        ease: "back.out(1.2)",
        delay: 2.2
      }
    );
    
    gsap.fromTo(foodIcon2,
      { opacity: 0, scale: 0.7, rotation: 10 },
      { 
        opacity: 0.85, 
        scale: 1, 
        rotation: 0, 
        duration: 1.5,
        ease: "back.out(1.2)",
        delay: 2.4
      }
    );
    
    gsap.fromTo(foodIcon3,
      { opacity: 0, scale: 0.7, rotation: -5 },
      { 
        opacity: 0.85, 
        scale: 1, 
        rotation: 0, 
        duration: 1.5,
        ease: "back.out(1.2)",
        delay: 2.6
      }
    );
    
    // Additional food icons animations
    gsap.fromTo(foodIcon4,
      { opacity: 0, scale: 0.7, rotation: 8 },
      { 
        opacity: 0.85, 
        scale: 1, 
        rotation: 0, 
        duration: 1.5,
        ease: "back.out(1.2)",
        delay: 2.8
      }
    );
    
    gsap.fromTo(foodIcon5,
      { opacity: 0, scale: 0.7, rotation: -8 },
      { 
        opacity: 0.85, 
        scale: 1, 
        rotation: 0, 
        duration: 1.5,
        ease: "back.out(1.2)",
        delay: 3.0
      }
    );
    
    gsap.fromTo(foodIcon6,
      { opacity: 0, scale: 0.7, rotation: 5 },
      { 
        opacity: 0.85, 
        scale: 1, 
        rotation: 0, 
        duration: 1.5,
        ease: "back.out(1.2)",
        delay: 3.2
      }
    );
    
    // Subtle floating animation for food icons
    gsap.to(foodIcon1, {
      y: "-8px",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 3.8
    });
    
    gsap.to(foodIcon2, {
      y: "-6px",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 4
    });
    
    gsap.to(foodIcon3, {
      y: "-7px",
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 3.5
    });
    
    // Subtle floating animation for additional food icons
    gsap.to(foodIcon4, {
      y: "-5px",
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 4.2
    });
    
    gsap.to(foodIcon5, {
      y: "-7px",
      duration: 3.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 4.4
    });
    
    gsap.to(foodIcon6, {
      y: "-6px",
      duration: 3.0,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 4.6
    });
  }, []);

  return (
    <motion.section 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32 relative overflow-hidden"
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
        
        {/* Subtle grid pattern */}
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </div>
      
      {/* Removed Hamsa and Diya from here */}
      
      {/* Food Icon 1 - Floating food element */}
      <div className="absolute top-32 right-[30%] w-12 md:w-14 lg:w-16 food-icon-1 opacity-0 z-[2]">
        <div className="relative w-full aspect-square">
          <Image 
            src="/images/icons/food-icon-7.png" 
            alt="Indian Food" 
            fill
            className="object-contain object-center"
            style={{ 
              filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.15))"
            }}
          />
        </div>
      </div>
      
      {/* Food Icon 2 - Floating food element */}
      <div className="absolute bottom-32 left-[20%] w-12 md:w-14 lg:w-16 food-icon-2 opacity-0 z-[2]">
        <div className="relative w-full aspect-square">
          <Image 
            src="/images/icons/food-icon-3.png" 
            alt="Indian Food" 
            fill
            className="object-contain object-center"
            style={{ 
              filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.15))"
            }}
          />
        </div>
      </div>
      
      {/* Food Icon 3 - Floating food element */}
      <div className="absolute top-48 left-[25%] w-12 md:w-14 lg:w-16 food-icon-3 opacity-0 z-[2]">
        <div className="relative w-full aspect-square">
          <Image 
            src="/images/icons/food-icon-1.png" 
            alt="Indian Food" 
            fill
            className="object-contain object-center"
            style={{ 
              filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.15))"
            }}
          />
        </div>
      </div>
      
      {/* Food Icon 4 - Floating food element */}
      <div className="absolute top-24 left-[10%] w-10 md:w-12 lg:w-14 food-icon-4 opacity-0 z-[2]">
        <div className="relative w-full aspect-square">
          <Image 
            src="/images/icons/food-icon-9.png" 
            alt="Indian Food" 
            fill
            className="object-contain object-center"
            style={{ 
              filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.15))"
            }}
          />
        </div>
      </div>
      
      {/* Food Icon 5 - Floating food element */}
      <div className="absolute bottom-48 right-[15%] w-10 md:w-12 lg:w-14 food-icon-5 opacity-0 z-[2]">
        <div className="relative w-full aspect-square">
          <Image 
            src="/images/icons/food-icon-16.png" 
            alt="Indian Food" 
            fill
            className="object-contain object-center"
            style={{ 
              filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.15))"
            }}
          />
        </div>
      </div>
      
      {/* Food Icon 6 - Floating food element */}
      <div className="absolute top-40 right-[12%] w-10 md:w-11 lg:w-12 food-icon-6 opacity-0 z-[2]">
        <div className="relative w-full aspect-square">
          <Image 
            src="/images/icons/food-icon-5.png" 
            alt="Indian Food" 
            fill
            className="object-contain object-center"
            style={{ 
              filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.15))"
            }}
          />
        </div>
      </div>
      
      {/* Galle Fort Lighthouse - bigger and with 3D effect */}
      <div className="absolute -bottom-10 right-0 w-48 md:w-72 lg:w-96 h-[400px] md:h-[600px] lg:h-[800px] lighthouse-element opacity-0 z-[2] perspective-[1000px] transform-gpu">
        <div className="relative w-full h-full drop-shadow-2xl">
          <Image 
            src="/images/gallery/lighthouse.png" 
            alt="Galle Fort Lighthouse" 
            fill
            className="object-contain object-bottom"
            style={{ 
              filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.3))",
              transformStyle: "preserve-3d"
            }}
          />
        </div>
      </div>
      
      {/* German Castle - on left side with 3D effect */}
      <div className="absolute -bottom-10 left-0 w-48 md:w-72 lg:w-96 h-[400px] md:h-[600px] lg:h-[800px] castle-element opacity-0 z-[2] perspective-[1000px] transform-gpu">
        <div className="relative w-full h-full drop-shadow-2xl">
          <Image 
            src="/images/backgrounds/germany-drawn-seamless-pattern 1 (1).png" 
            alt="German Castle" 
            fill
            className="object-contain object-bottom"
            style={{ 
              filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.3))",
              transformStyle: "preserve-3d"
            }}
          />
        </div>
      </div>
      
      {/* Curved arrow pointing to lighthouse with elegant text */}
      <div className="absolute bottom-[18%] right-[18%] md:right-[22%] lg:right-[18%] z-[3] hidden md:block lighthouse-label opacity-0">
        <div className="relative">
          {/* Curved arrow SVG */}
          <svg 
            width="60" 
            height="35" 
            viewBox="0 0 60 35" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -right-2 top-1/2 transform -translate-y-1/2"
          >
            <path 
              d="M0,15 C15,10 30,12 60,22" 
              stroke="var(--heritage)" 
              strokeWidth="1.5" 
              strokeDasharray="3 2" 
              fill="none" 
              opacity="0.7"
            />
            <path 
              d="M55,17 L60,22 L53,25" 
              stroke="var(--heritage)" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.7"
            />
          </svg>
          
          {/* Elegant text */}
          <div className="text-right pr-16 transform rotate-[-5deg]">
            <p className="font-playfair italic text-xs text-heritage drop-shadow-sm" style={{ textShadow: "0 1px 2px rgba(255,255,255,0.8)" }}>
              Overlooking the Galle Light
            </p>
          </div>
        </div>
      </div>
      
      {/* Sri Lankan coastline silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden z-[1] opacity-10">
        <svg viewBox="0 0 1200 100" className="w-full h-full">
          <path 
            d="M0,50 C100,80 200,30 300,50 C400,70 500,20 600,40 C700,60 800,30 900,50 C1000,70 1100,40 1200,60 L1200,100 L0,100 Z" 
            fill="currentColor" 
            className="text-charcoal"
          />
        </svg>
      </div>
      
      {/* Main content */}
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-between w-full h-full flex-1 gap-8 md:gap-4 z-10 mt-24 md:mt-28"
        style={{ opacity: textOpacity, y: textY }}
      >
        {/* Left column */}
        <motion.div 
          className="w-full md:w-1/3 text-roast text-base md:text-lg font-light relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative pl-4 md:pl-6">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-heritage/10"></div>
            <p className="leading-relaxed">
              Nestled in the heart of Galle Fort, Indian Hut honors centuries of spice, culture, and conversation.
            </p>
            
            {/* Modern accent element */}
            <motion.div
              className="mt-6 opacity-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ delay: 1.7, duration: 1 }}
            >
              <div className="h-0.5 w-12 bg-gold/40"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Center column */}
        <motion.div 
          className="w-full md:w-1/3 text-center flex flex-col items-center justify-center gap-3 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-gold">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-charcoal tracking-wider heritage-spacing relative">
            <span className="relative inline-block">
              INDIAN HUT
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold/30 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
              />
            </span>
          </h1>
          <div className="flex flex-col items-center">
            <span className="text-base md:text-lg text-charcoal tracking-widest font-medium">
              HERITAGE
            </span>
            <span className="text-xs md:text-sm text-charcoal tracking-wider mt-1">
              SINCE 1986
            </span>
          </div>
          
          {/* Modern decorative element */}
          <motion.div
            className="mt-3 opacity-0 flex gap-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="h-0.5 w-2 bg-gold/40"></div>
            <div className="h-0.5 w-6 bg-gold/40"></div>
            <div className="h-0.5 w-2 bg-gold/40"></div>
          </motion.div>
          
          {/* Hamsa Hand (Palm) - Indian decorative element */}
          <div className="mt-4 w-12 md:w-14 lg:w-16 hamsa-element opacity-0 z-[3]">
            <div className="relative w-full aspect-square">
              <Image 
                src="/images/decorative/decorative-element-2.png" 
                alt="Hamsa Hand" 
                fill
                className="object-contain object-center"
                style={{ 
                  filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.15))"
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div 
          className="w-full md:w-1/3 text-charcoal text-base md:text-lg font-light text-right relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="relative pr-4 md:pr-6">
            <div className="absolute right-0 top-0 h-full w-0.5 bg-heritage/10"></div>
            <p className="leading-relaxed">
              Blending the charm of a colonial café with timeless Indian hospitality since 1986.
            </p>
            
            {/* Modern accent element */}
            <motion.div
              className="mt-6 opacity-0 flex justify-end"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ delay: 1.7, duration: 1 }}
            >
              <div className="h-0.5 w-12 bg-gold/40"></div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll down arrow with better centering */}
      <motion.div 
        className="flex justify-center mt-24 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.button
          className="text-charcoal hover-heritage transition-soft focus:outline-none relative flex flex-col items-center"
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
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gold/30 origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          />
          <span className="text-xs tracking-widest text-charcoal/50 mb-2 font-light">EXPLORE</span>
          <ChevronDown size={24} className="text-gold" />
        </motion.button>
      </motion.div>
    </motion.section>
  );
} 