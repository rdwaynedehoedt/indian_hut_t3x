"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export default function VisitSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const mapScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const mapOpacity = useTransform(scrollYProgress, [0, 0.3], [0.7, 1]);
  
  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-sand relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-[0.05]">
          <Image 
            src="/images/decorative/decorative-element-3.png" 
            alt="Decorative pattern" 
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Visit Us" 
          subtitle="Experience the authentic flavors of Indian Hut in our heritage-inspired restaurant in Galle Fort."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-16">
          {/* Left column - Info and contact */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-playfair text-charcoal mb-6">Come Dine With Us</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-heritage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Location</h4>
                    <p className="text-roast">42 Church Street, Galle Fort<br />Galle, Sri Lanka</p>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-heritage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Opening Hours</h4>
                    <p className="text-roast">Monday - Sunday: 11:00 AM - 10:00 PM</p>
                    <p className="text-roast mt-1">Lunch: 12:00 PM - 3:00 PM</p>
                    <p className="text-roast">Dinner: 6:00 PM - 10:00 PM</p>
                  </div>
                </div>
                
                {/* Contact */}
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-heritage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Contact</h4>
                    <p className="text-roast">Phone: +94 77 123 4567</p>
                    <p className="text-roast mt-1">Email: info@indianhut.com</p>
                  </div>
                </div>
              </div>
              
              {/* Reservation button */}
              <motion.button
                className="mt-8 py-3 px-6 bg-heritage text-white rounded-lg hover:bg-heritage/90 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Make a Reservation</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
          </div>
          
          {/* Right column - Map with parallax effect */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
            style={{ scale: mapScale, opacity: mapOpacity }}
          >
            {/* Map image - replace with actual map component in production */}
            <Image
              src="/images/backgrounds/1.png"
              alt="Map to Indian Hut Restaurant"
              fill
              className="object-cover object-center"
            />
            
            {/* Location pin with animation */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-spice"
              initial={{ y: -20 }}
              animate={{ y: [-20, -30, -20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </svg>
              
              {/* Ripple effect */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-spice/30"
                initial={{ width: 20, height: 20, opacity: 1 }}
                animate={{ width: 60, height: 60, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
            </motion.div>
            
            {/* Decorative corner frames */}
            <div className="corner-frame-tl border-white/30"></div>
            <div className="corner-frame-tr border-white/30"></div>
            <div className="corner-frame-bl border-white/30"></div>
            <div className="corner-frame-br border-white/30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 