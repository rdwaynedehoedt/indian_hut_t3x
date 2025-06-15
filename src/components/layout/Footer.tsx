"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sand-dark py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and tagline */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-playfair text-xl text-charcoal">INDIAN HUT</span>
            </Link>
            <p className="text-roast text-sm max-w-xs">
              A heritage-inspired café and restaurant blending old-world charm with modern minimalism.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-charcoal font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-roast text-sm hover-heritage">About Us</Link></li>
              <li><Link href="/menu" className="text-roast text-sm hover-heritage">Our Menu</Link></li>
              <li><Link href="/gallery" className="text-roast text-sm hover-heritage">Gallery</Link></li>
              <li><Link href="/visit-us" className="text-roast text-sm hover-heritage">Visit Us</Link></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-charcoal font-medium mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-roast text-sm mb-2">42 Church Street, Galle Fort</p>
              <p className="text-roast text-sm mb-2">Sri Lanka</p>
              <p className="text-roast text-sm mb-2">+94 77 123 4567</p>
              <p className="text-roast text-sm">info@indianhut.com</p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-heritage/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-roast text-xs">
            &copy; {currentYear} Indian Hut. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-roast hover-heritage"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Instagram
            </motion.a>
            <motion.a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-roast hover-heritage"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Facebook
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
} 