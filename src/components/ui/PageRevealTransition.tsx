'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';

export default function PageRevealTransition({ children }: { children: React.ReactNode }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstRender = useRef(true);

  // Handle initial page load
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      setIsFirstLoad(true);
      
      // Reset first load state after animation completes
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* Initial page load animation - only on first visit */}
      <AnimatePresence mode="wait">
        {isFirstLoad && (
          <motion.div
            key="initial-loader"
            className="fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            {/* Text appears first */}
            <div className="relative z-20 text-center">
              <motion.div
                className="text-sand font-playfair text-4xl mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  y: [20, 0, 0, -20],
                  transition: { 
                    duration: 2.0,
                    times: [0, 0.15, 0.7, 0.9],
                    ease: "easeInOut" 
                  }
                }}
              >
                INDIAN HUT
              </motion.div>
              <motion.div
                className="text-sand font-sans text-sm tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  y: [20, 0, 0, -20],
                  transition: { 
                    duration: 2.0,
                    delay: 0.1,
                    times: [0, 0.15, 0.7, 0.9],
                    ease: "easeInOut" 
                  }
                }}
              >
                GALLE FORT
              </motion.div>
            </div>

            {/* Background animations come after text appears */}
            <motion.div
              className="absolute inset-0 bg-charcoal"
              initial={{ y: 0 }}
              animate={{ 
                y: '-100%', 
                transition: { 
                  duration: 1.2,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.8
                } 
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gold"
              initial={{ y: 0 }}
              animate={{ 
                y: '-100%', 
                transition: { 
                  duration: 1.2,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.4
                } 
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* No page-to-page transitions - just render the children directly */}
      <div className="w-full">
        {children}
      </div>
    </>
  );
} 