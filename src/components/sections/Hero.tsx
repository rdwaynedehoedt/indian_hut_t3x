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
    
    const container = containerRef.current; // Store reference to avoid null checks
    
    const lighthouseElement = container.querySelector('.lighthouse-element');
    const castleElement = container.querySelector('.castle-element');
    const hamsaElement = container.querySelector('.hamsa-element');
    const foodIcon1 = container.querySelector('.food-icon-1');
    const foodIcon2 = container.querySelector('.food-icon-2');
    const foodIcon3 = container.querySelector('.food-icon-3');
    const foodIcon4 = container.querySelector('.food-icon-4');
    const foodIcon5 = container.querySelector('.food-icon-5');
    const foodIcon6 = container.querySelector('.food-icon-6');
    // Mobile-only food icons
    const foodIcon7 = container.querySelector('.food-icon-7');
    const foodIcon8 = container.querySelector('.food-icon-8');
    const foodIcon9 = container.querySelector('.food-icon-9');
    const foodIcon10 = container.querySelector('.food-icon-10');
    const titleElement = container.querySelector('.title-element');
    const subtitleElement = container.querySelector('.subtitle-element');
    const taglineElement = container.querySelector('.tagline-element');
    const accentLine = container.querySelector('.accent-line');
    
    // Check if we're on mobile
    const isMobile = window.innerWidth < 768;
    const mobileDelay = isMobile ? 0.2 : 0.4;
    const mobileAnimationSpeed = isMobile ? 1.8 : 2.5;
    
    // Reveal the hero section first
    gsap.to(container, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        // Start all other animations after hero section is visible
        
        // Title animation
        gsap.fromTo(titleElement,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.2,
            ease: "power3.out",
            delay: 0.2
          }
        );
        
        // Subtitle animation with stagger
        gsap.fromTo(subtitleElement,
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            ease: "power2.out",
            delay: 0.6
          }
        );
        
        // Tagline animation
        gsap.fromTo(taglineElement,
          { opacity: 0, y: 15 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            ease: "power2.out",
            delay: 0.9
          }
        );
        
        // Accent line animation
        gsap.fromTo(accentLine,
          { scaleX: 0 },
          { 
            scaleX: 1, 
            duration: 1.2,
            ease: "power3.inOut",
            delay: 1.2
          }
        );
    
    // Enhanced lighthouse animation - rising from bottom with 3D effect
    gsap.fromTo(lighthouseElement, 
      { 
        opacity: 0, 
            y: isMobile ? 100 : 200, 
        scale: 0.85,
        rotationY: -10,
        transformOrigin: "bottom center"
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotationY: 0,
            duration: mobileAnimationSpeed,
        ease: "power3.out",
            delay: mobileDelay
      }
    );
    
    // Castle animation - rising from bottom with 3D effect
    gsap.fromTo(castleElement, 
      { 
        opacity: 0, 
            y: isMobile ? 100 : 200, 
        scale: 0.85,
        rotationY: 10,
        transformOrigin: "bottom center"
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotationY: 0,
            duration: mobileAnimationSpeed,
        ease: "power3.out",
            delay: mobileDelay * 0.5
      }
    );
    
    // Continuous subtle floating animation for lighthouse
    gsap.to(lighthouseElement, {
          y: isMobile ? "-10px" : "-15px",
      rotationY: 3,
          duration: isMobile ? 3 : 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
          delay: isMobile ? 2.0 : 2.9
    });
    
    // Continuous subtle floating animation for castle
    gsap.to(castleElement, {
          y: isMobile ? "-8px" : "-12px",
      rotationY: -3,
          duration: isMobile ? 2.8 : 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: isMobile ? 1.8 : 2.7
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
            delay: isMobile ? 0.5 : 1.0
          }
        );
        
                // Food icons animations - staggered for visual interest
        const foodIcons = [foodIcon1, foodIcon2, foodIcon3, foodIcon4, foodIcon5, foodIcon6];
        
        // Add mobile-only food icons
        if (isMobile) {
          foodIcons.push(foodIcon7, foodIcon8, foodIcon9, foodIcon10);
        }
        
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
              delay: isMobile ? 0.3 + (index * 0.15) : 1.2 + (index * 0.2) // Faster staggered delay on mobile
            }
          );
          
          // Subtle floating animation with random parameters
          gsap.to(icon, {
            y: `-${isMobile ? (3 + Math.floor(Math.random() * 3)) : (5 + Math.floor(Math.random() * 5))}px`,
            duration: isMobile ? 2.0 + (Math.random() * 1.0) : 2.5 + (Math.random() * 1.5),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: isMobile ? 1.5 + (index * 0.2) : 3.0 + (index * 0.3)
          });
        });
        
        // Animate scroll indicator
        const scrollIndicator = container.querySelector('.scroll-indicator');
        if (scrollIndicator) {
          gsap.fromTo(scrollIndicator,
            { opacity: 0 },
            { 
              opacity: 1, 
              duration: 1,
              ease: "power1.inOut",
              delay: isMobile ? 1.2 : 2.0
            }
          );
          
                  // Animate the vertical line above the scroll indicator
        const scrollLine = scrollIndicator.querySelector('div');
        if (scrollLine) {
          gsap.fromTo(scrollLine,
            { scaleY: 0 },
            { 
              scaleY: 1, 
              duration: 0.8,
              ease: "power2.inOut",
              delay: isMobile ? 1.4 : 2.2
            }
          );
        }
        
        // Animate the CTA buttons
        const ctaButtons = container.querySelector('.cta-buttons');
        if (ctaButtons) {
          gsap.fromTo(ctaButtons,
            { opacity: 0, y: 20 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8,
              ease: "power2.out",
              delay: isMobile ? 1.0 : 1.8
            }
          );
        }
      }
      }
    });
  }, [isLoading, loaderComplete, bgY]);

  // Scroll down function for the explore button
  const scrollToNextSection = () => {
    if (typeof document !== 'undefined') {
      const nextSection = document.querySelector('#about-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
      
      {/* Mobile Only Food Icons - These will only appear on mobile devices */}
      <div className="absolute top-36 left-[35%] w-9 sm:hidden food-icon-7 opacity-0 z-[2]">
        <div className="relative w-full aspect-square">
          <Image 
            src="/images/icons/food-icon-2.png" 
            alt="Indian Food" 
            fill
            className="object-contain object-center"
            style={{ 
              filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.15))"
            }}
          />
        </div>
      </div>
      
      <div className="absolute bottom-48 right-[30%] w-10 sm:hidden food-icon-8 opacity-0 z-[2]">
        <div className="relative w-full aspect-square">
          <Image 
            src="/images/icons/food-icon-8.png" 
            alt="Indian Food" 
            fill
            className="object-contain object-center"
            style={{ 
              filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.15))"
            }}
          />
        </div>
      </div>
      
      <div className="absolute top-48 right-[45%] w-8 sm:hidden food-icon-9 opacity-0 z-[2]">
        <div className="relative w-full aspect-square">
          <Image 
            src="/images/icons/food-icon-4.png" 
            alt="Indian Food" 
            fill
            className="object-contain object-center"
            style={{ 
              filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.15))"
            }}
          />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-[45%] w-9 sm:hidden food-icon-10 opacity-0 z-[2]">
        <div className="relative w-full aspect-square">
          <Image 
            src="/images/icons/food-icon-6.png" 
            alt="Indian Food" 
            fill
            className="object-contain object-center"
            style={{ 
              filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.15))"
            }}
          />
        </div>
      </div>
      
      {/* Galle Fort Lighthouse - extremely large on mobile and positioned more to the right */}
      <div className="absolute -bottom-4 md:-bottom-10 -right-12 sm:right-0 w-64 sm:w-72 md:w-80 lg:w-96 h-[450px] sm:h-[500px] md:h-[600px] lg:h-[800px] lighthouse-element opacity-0 z-[2] perspective-[1000px] transform-gpu">
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
      
      {/* German Castle - moderately bigger on mobile */}
      <div className="absolute -bottom-4 md:-bottom-10 left-0 w-40 sm:w-48 md:w-72 lg:w-96 h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] castle-element opacity-0 z-[2] perspective-[1000px] transform-gpu">
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
      
      {/* Main content - New design with centered layout */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto text-center">
        {/* Main title with elegant style */}
        <div className="title-element opacity-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair text-charcoal tracking-wider mb-4 md:mb-6">
            <span className="relative inline-block">
              INDIAN HUT
              <span className="accent-line absolute -bottom-2 left-0 right-0 h-0.5 bg-gold/60 origin-left scale-x-0"></span>
            </span>
          </h1>
        </div>
        
        {/* Subtitle with heritage emphasis */}
        <div className="subtitle-element opacity-0 mb-3 md:mb-5">
          <div className="flex items-center justify-center gap-3 md:gap-5">
            <div className="h-px w-8 md:w-12 bg-gold/40"></div>
            <h2 className="text-base sm:text-lg md:text-xl text-charcoal tracking-widest font-medium">
              HERITAGE SINCE 1986
            </h2>
            <div className="h-px w-8 md:w-12 bg-gold/40"></div>
          </div>
        </div>
        
        {/* Tagline with elegant description */}
        <div className="tagline-element opacity-0 max-w-xl mx-auto mb-8 md:mb-12">
          <p className="text-sm md:text-base lg:text-lg text-roast leading-relaxed">
            A culinary journey through authentic Indian flavors, nestled in the heart of Galle Fort. 
            Blending traditional recipes with modern elegance.
          </p>
          </div>
          
        {/* Hamsa Hand (Palm) - Indian decorative element */}
        <div className="w-12 sm:w-14 md:w-16 lg:w-20 hamsa-element opacity-0 z-[3] mb-8 md:mb-12">
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
        
                {/* Call to action buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 cta-buttons"
        >
          <motion.button 
            className="bg-heritage text-white py-3 px-6 sm:px-8 rounded-lg text-sm md:text-base tracking-wider flex items-center justify-center gap-2 hover:bg-heritage/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DISCOVER OUR MENU
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
          
          <motion.button 
            className="bg-transparent border-2 border-heritage text-heritage py-3 px-6 sm:px-8 rounded-lg text-sm md:text-base tracking-wider flex items-center justify-center gap-2 hover:bg-heritage/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            MAKE RESERVATION
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 14H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 17H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Scroll down arrow with better centering */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center z-10 scroll-indicator opacity-0">
        <button
          className="text-charcoal hover-heritage transition-soft focus:outline-none relative flex flex-col items-center"
          aria-label="Scroll down"
          onClick={scrollToNextSection}
        >
          <div className="absolute -top-6 md:-top-10 left-1/2 transform -translate-x-1/2 w-px h-4 md:h-6 bg-gold/30 origin-bottom scale-y-0"></div>
          <span className="text-xs tracking-widest text-charcoal/50 mb-2 font-light">EXPLORE</span>
          <ChevronDown size={20} className="text-gold" />
        </button>
      </div>
    </motion.section>
  );
} 