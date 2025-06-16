'use client';

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Create a context to share the loader state with other components
export const LoaderContext = createContext({
  isLoading: true,
  loaderComplete: false
});

export const useLoader = () => useContext(LoaderContext);

export default function PageRevealTransition({ children }: { children: React.ReactNode }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [loaderComplete, setLoaderComplete] = useState(false);
  const firstRender = useRef(true);

  // Handle initial page load
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      setIsFirstLoad(true);
      
      // Reset first load state after animation completes
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        
        // Add a small delay before setting loaderComplete to true
        setTimeout(() => {
          setLoaderComplete(true);
        }, 100);
      }, 3000); // Extended to 3s for smoother transition
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading: isFirstLoad, loaderComplete }}>
      {/* Initial page load animation - only on first visit */}
      <AnimatePresence mode="wait">
        {isFirstLoad && (
          <motion.div
            key="initial-loader"
            className="fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          >
            {/* Text appears centered */}
            <div className="relative z-20 text-center">
              <motion.div
                className="text-sand font-playfair text-4xl md:text-5xl mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0, 1, 1, 0.9],
                  y: [20, 0, 0, -50],
                  transition: { 
                    duration: 3,
                    times: [0, 0.2, 0.65, 1],
                    ease: "easeInOut" 
                  }
                }}
              >
                INDIAN HUT
              </motion.div>
              <motion.div
                className="text-sand font-sans text-sm md:text-base tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0, 1, 1, 0.9],
                  y: [20, 0, 0, -50],
                  transition: { 
                    duration: 3,
                    delay: 0.05,
                    times: [0, 0.2, 0.65, 1],
                    ease: "easeInOut" 
                  }
                }}
              >
                HERITAGE SINCE 1986
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
                  delay: 1.8
                } 
              }}
            />
            
            {/* Subtle pattern overlay */}
            <motion.div
              className="absolute inset-0 opacity-5 mix-blend-soft-light pointer-events-none"
              initial={{ opacity: 0.05 }}
              animate={{ opacity: 0.05 }}
            >
              <div className="absolute inset-0 bg-grid-pattern"></div>
            </motion.div>
            
            {/* Subtle radial gradient for depth */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-transparent to-black/30 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* No page-to-page transitions - just render the children directly */}
      <div className="w-full">
        {children}
      </div>
    </LoaderContext.Provider>
  );
} 