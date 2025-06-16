"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Visit Us", path: "/visit-us" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-24 py-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-charcoal hover-heritage">
          <span className="font-playfair text-xl">INDIAN HUT</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className={`text-sm tracking-wider ${
                      isActive ? "text-heritage" : "text-charcoal hover-heritage"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="h-0.5 bg-heritage mt-1"
                        layoutId="activeNavIndicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-charcoal hover-heritage"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </>
            )}
          </motion.svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-sand/95 backdrop-blur-sm mt-4 rounded-lg shadow-lg overflow-hidden"
          >
            <nav className="py-4">
              <ul className="flex flex-col space-y-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  
                  return (
                    <li key={item.path} className="px-6">
                      <Link 
                        href={item.path}
                        className={`text-sm tracking-wider block py-2 ${
                          isActive ? "text-heritage" : "text-charcoal hover-heritage"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                        {isActive && (
                          <motion.div
                            className="h-0.5 bg-heritage mt-1"
                            layoutId="mobileActiveNavIndicator"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 