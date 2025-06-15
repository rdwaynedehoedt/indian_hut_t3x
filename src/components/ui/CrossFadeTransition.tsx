'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function CrossFadeTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname + (searchParams ? searchParams.toString() : '')}
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ 
          opacity: 1, 
          filter: 'blur(0px)',
          transition: { duration: 0.4, ease: 'easeInOut' }
        }}
        exit={{ 
          opacity: 0, 
          filter: 'blur(8px)',
          transition: { duration: 0.4, ease: 'easeInOut' }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 