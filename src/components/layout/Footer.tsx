"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sand-dark py-10 md:py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {/* Logo and tagline */}
          <div>
            <Link href="/" className="inline-block mb-3 md:mb-4">
              <span className="font-playfair text-lg md:text-xl text-charcoal">INDIAN HUT</span>
            </Link>
            <p className="text-roast text-sm max-w-xs">
              A heritage-inspired café and restaurant blending old-world charm with modern minimalism.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-charcoal font-medium mb-3 md:mb-4 text-base md:text-lg">Quick Links</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li><Link href="/about" className="text-roast text-sm hover-heritage">About Us</Link></li>
              <li><Link href="/menu" className="text-roast text-sm hover-heritage">Our Menu</Link></li>
              <li><Link href="/visit-us" className="text-roast text-sm hover-heritage">Visit Us</Link></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-charcoal font-medium mb-3 md:mb-4 text-base md:text-lg">Contact</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li className="text-roast text-sm">42 Church Street, Galle Fort</li>
              <li className="text-roast text-sm">Galle, Sri Lanka</li>
              <li className="text-roast text-sm">info@indianhut.lk</li>
              <li className="text-roast text-sm">+94 91 222 3366</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 md:mt-10 pt-6 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-roast text-sm text-center md:text-left mb-4 md:mb-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Indian Hut. All rights reserved.
          </motion.p>
          
          {/* Social links */}
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#" className="text-roast hover-heritage" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="#" className="text-roast hover-heritage" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            <a href="#" className="text-roast hover-heritage" aria-label="TripAdvisor">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.006 4.528v2.212h.103c3.313 0 6.332 1.426 8.428 3.806l-3.013 3.012.951.951 2.861-2.862.097-.096c1.116 1.822 1.688 3.931 1.57 6.051l.006-.052h-2.871v1.347h4.347c-.134 1.35-.604 2.649-1.392 3.764-1.382-1.862-3.555-2.983-5.851-3.013v4.439c1.624-.028 3.197-.616 4.413-1.681 1.381 1.116 2.132 2.786 2.132 4.538h1.347c0-2.029-.95-3.961-2.55-5.209 2.445-1.89 3.897-4.823 3.897-7.937 0-5.549-4.497-10.046-10.045-10.046v-1.224h-1.347v1.224c-5.549 0-10.046 4.497-10.046 10.046 0 3.114 1.452 6.047 3.896 7.937-1.6 1.248-2.55 3.18-2.55 5.209h1.347c0-1.752.75-3.422 2.132-4.538 1.216 1.065 2.789 1.653 4.413 1.681v-4.439c-2.296.03-4.469 1.151-5.851 3.013-.788-1.115-1.258-2.414-1.392-3.764h4.347v-1.347h-2.871l.006.052c-.118-2.12.454-4.229 1.57-6.051l.097.096 2.861 2.862.951-.951-3.013-3.012c2.096-2.38 5.115-3.806 8.428-3.806h.103v-2.212h-1.347zm-8.746 8.626c0-4.487 3.635-8.123 8.122-8.123 4.486 0 8.122 3.636 8.122 8.123 0 4.487-3.635 8.122-8.122 8.122-4.487 0-8.122-3.635-8.122-8.122zm3.469-.312c0 1.311 1.059 2.37 2.37 2.37s2.37-1.059 2.37-2.37-1.059-2.37-2.37-2.37-2.37 1.059-2.37 2.37zm2.37-1.022c.564 0 1.022.458 1.022 1.022s-.458 1.023-1.022 1.023-1.023-.459-1.023-1.023.459-1.022 1.023-1.022zm3.806 1.022c0 1.311 1.059 2.37 2.37 2.37s2.37-1.059 2.37-2.37-1.059-2.37-2.37-2.37-2.37 1.059-2.37 2.37zm2.37-1.022c.564 0 1.022.458 1.022 1.022s-.458 1.023-1.022 1.023-1.023-.459-1.023-1.023.459-1.022 1.023-1.022z"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 