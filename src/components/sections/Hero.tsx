"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { useLoader } from "../ui/PageRevealTransition";

export default function Hero() {
  const { isLoading, loaderComplete } = useLoader();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);
  const bgY = useTransform(scrollY, [0, 300], [0, 100]);
  const hasAnimated = useRef(false);

  // GSAP animations
  useEffect(() => {
    if (!containerRef.current || isLoading) return;
    
    // Only start animations when loader is complete and we haven't animated yet
    if (!loaderComplete || hasAnimated.current) return;
    
    // Mark that we've started the animations
    hasAnimated.current = true;
    
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
    
    // Reveal the hero section first
    gsap.to(containerRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        // Start all other animations after hero section is visible
        
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
            delay: 0.4
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
            delay: 0.2
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
            delay: 2.0
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
          delay: 2.9
        });
        
        // Continuous subtle floating animation for castle
        gsap.to(castleElement, {
          y: "-12px",
          rotationY: -3,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2.7
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
            delay: 1.0
          }
        );
        
        // Food icons animations - staggered for visual interest
        const foodIcons = [foodIcon1, foodIcon2, foodIcon3, foodIcon4, foodIcon5, foodIcon6];
        
        foodIcons.forEach((icon, index) => {
          if (!icon) return;
          
          // Random rotation for more natural appearance
          const rotation = Math.random() > 0.5 ? 
            -Math.floor(Math.random() * 10 + 5) : 
            Math.floor(Math.random() * 10 + 5);
            
          gsap.fromTo(icon,
            { opacity: 0, scale: 0.7, rotation },
            { 
              opacity: 0.85, 
              scale: 1, 
              rotation: 0, 
              duration: 1.5,
              ease: "back.out(1.2)",
              delay: 1.2 + (index * 0.2) // Staggered delay
            }
          );
          
          // Subtle floating animation with random parameters
          gsap.to(icon, {
            y: `-${5 + Math.floor(Math.random() * 5)}px`,
            duration: 2.5 + (Math.random() * 1.5),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 3.0 + (index * 0.3)
          });
        });
        
        // Animate in the text columns
        if (containerRef.current) {
          const textColumns = [
            containerRef.current.querySelector('.text-column-left'),
            containerRef.current.querySelector('.text-column-center'),
            containerRef.current.querySelector('.text-column-right')
          ];
          
          textColumns.forEach((column, index) => {
            if (!column) return;
            
            gsap.fromTo(column,
              { opacity: 0, y: 20 },
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                ease: "power2.out",
                delay: 0.3 + (index * 0.2)
              }
            );
          });
          
          // Animate scroll indicator
          const scrollIndicator = containerRef.current.querySelector('.scroll-indicator');
          if (scrollIndicator) {
            gsap.fromTo(scrollIndicator,
              { opacity: 0 },
              { 
                opacity: 1, 
                duration: 0.5,
                ease: "power2.out",
                delay: 2.2
              }
            );
          }
        }
      }
    });
    
  }, [isLoading, loaderComplete]);

  return (
    <motion.section 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      style={{ opacity: 0 }}
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
      
      {/* Food Icon 1 - Floating food element - adjusted for mobile */}
      <div className="absolute top-20 md:top-32 right-[15%] md:right-[30%] w-10 sm:w-12 md:w-14 lg:w-16 food-icon-1 opacity-0 z-[2]">
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
      
      {/* Food Icon 2 - Floating food element - adjusted for mobile */}
      <div className="absolute bottom-16 md:bottom-32 left-[10%] md:left-[20%] w-10 sm:w-12 md:w-14 lg:w-16 food-icon-2 opacity-0 z-[2]">
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
      
      {/* Food Icon 3 - Floating food element - adjusted for mobile */}
      <div className="absolute top-32 md:top-48 left-[20%] md:left-[25%] w-10 sm:w-12 md:w-14 lg:w-16 food-icon-3 opacity-0 z-[2]">
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
      
      {/* Food Icon 4 - Floating food element - adjusted for mobile */}
      <div className="absolute top-10 md:top-24 left-[8%] md:left-[10%] w-8 sm:w-10 md:w-12 lg:w-14 food-icon-4 opacity-0 z-[2]">
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
      
      {/* Food Icon 5 - Floating food element - adjusted for mobile */}
      <div className="absolute bottom-24 md:bottom-48 right-[12%] md:right-[15%] w-8 sm:w-10 md:w-12 lg:w-14 food-icon-5 opacity-0 z-[2]">
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
      
      {/* Food Icon 6 - Floating food element - adjusted for mobile */}
      <div className="absolute top-24 md:top-40 right-[8%] md:right-[12%] w-8 sm:w-10 md:w-11 lg:w-12 food-icon-6 opacity-0 z-[2]">
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
      
      {/* Galle Fort Lighthouse - adjusted for mobile */}
      <div className="absolute -bottom-4 md:-bottom-10 right-0 w-32 sm:w-40 md:w-72 lg:w-96 h-[250px] sm:h-[350px] md:h-[600px] lg:h-[800px] lighthouse-element opacity-0 z-[2] perspective-[1000px] transform-gpu">
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
      
      {/* German Castle - adjusted for mobile */}
      <div className="absolute -bottom-4 md:-bottom-10 left-0 w-32 sm:w-40 md:w-72 lg:w-96 h-[250px] sm:h-[350px] md:h-[600px] lg:h-[800px] castle-element opacity-0 z-[2] perspective-[1000px] transform-gpu">
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
      
      {/* Curved arrow pointing to lighthouse with elegant text - hidden on smaller screens */}
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
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 overflow-hidden z-[1] opacity-10">
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
        className="flex flex-col md:flex-row items-center justify-between w-full h-full flex-1 gap-6 md:gap-8 z-10 mt-8 md:mt-24 lg:mt-28"
        style={{ opacity: textOpacity, y: textY }}
      >
        {/* Left column - hidden on mobile */}
        <div className="hidden md:block w-full md:w-1/3 text-roast text-base md:text-lg font-light relative text-column-left opacity-0">
          <div className="relative pl-4 md:pl-6">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-heritage/10"></div>
            <p className="leading-relaxed">
              Nestled in the heart of Galle Fort, Indian Hut honors centuries of spice, culture, and conversation.
            </p>
            
            {/* Modern accent element */}
            <div className="mt-4 md:mt-6 opacity-0 h-0.5 w-12 bg-gold/40"></div>
          </div>
        </div>

        {/* Center column */}
        <div className="w-full md:w-1/3 text-center flex flex-col items-center justify-center gap-2 md:gap-3 relative text-column-center opacity-0">
          <div className="text-gold">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-charcoal tracking-wider heritage-spacing relative">
            <span className="relative inline-block">
              INDIAN HUT
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold/30 origin-left scale-x-0"></span>
            </span>
          </h1>
          <div className="flex flex-col items-center">
            <span className="text-sm sm:text-base md:text-lg text-charcoal tracking-widest font-medium">
              HERITAGE
            </span>
            <span className="text-xs md:text-sm text-charcoal tracking-wider mt-0.5 md:mt-1">
              SINCE 1986
            </span>
          </div>
          
          {/* Modern decorative element */}
          <div className="mt-2 md:mt-3 opacity-0 flex gap-1">
            <div className="h-0.5 w-2 bg-gold/40"></div>
            <div className="h-0.5 w-6 bg-gold/40"></div>
            <div className="h-0.5 w-2 bg-gold/40"></div>
          </div>
          
          {/* Hamsa Hand (Palm) - Indian decorative element */}
          <div className="mt-3 md:mt-4 w-10 sm:w-12 md:w-14 lg:w-16 hamsa-element opacity-0 z-[3]">
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
        </div>

        {/* Right column - hidden on mobile */}
        <div className="hidden md:block w-full md:w-1/3 text-charcoal text-base md:text-lg font-light text-right relative text-column-right opacity-0">
          <div className="relative pr-4 md:pr-6">
            <div className="absolute right-0 top-0 h-full w-0.5 bg-heritage/10"></div>
            <p className="leading-relaxed">
              Blending the charm of a colonial café with timeless Indian hospitality since 1986.
            </p>
            
            {/* Modern accent element */}
            <div className="mt-4 md:mt-6 opacity-0 flex justify-end">
              <div className="h-0.5 w-12 bg-gold/40"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll down arrow with better centering */}
      <div className="flex justify-center mt-10 md:mt-24 z-10 scroll-indicator opacity-0">
        <button
          className="text-charcoal hover-heritage transition-soft focus:outline-none relative flex flex-col items-center"
          aria-label="Scroll down"
        >
          <div className="absolute -top-6 md:-top-10 left-1/2 transform -translate-x-1/2 w-px h-4 md:h-6 bg-gold/30 origin-bottom scale-y-0"></div>
          <span className="text-xs tracking-widest text-charcoal/50 mb-2 font-light">EXPLORE</span>
          <ChevronDown size={20} className="text-gold" />
        </button>
      </div>
    </motion.section>
  );
} 