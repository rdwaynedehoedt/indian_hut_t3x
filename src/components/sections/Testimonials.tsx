"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

type Testimonial = {
  id: number;
  name: string;
  country: string;
  countryFlag: string;
  quote: string;
  rating: number;
};

// Updated testimonials with country flags
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    country: "India",
    countryFlag: "🇮🇳",
    quote: "Indian Hut captures the essence of traditional Indian cuisine while adding their own unique twist. The butter chicken is simply divine!",
    rating: 5
  },
  {
    id: 2,
    name: "James Wilson",
    country: "UK",
    countryFlag: "🇬🇧",
    quote: "During my stay in Galle Fort, Indian Hut became my daily ritual. The ambiance and flavors transport you to another world.",
    rating: 5
  },
  {
    id: 3,
    name: "Anushka Patel",
    country: "Sri Lanka",
    countryFlag: "🇱🇰",
    quote: "As someone who grew up with authentic Indian cooking, I can say Indian Hut truly honors the traditions while creating something special.",
    rating: 4
  }
];

// Food icons for decorative elements
const foodIcons = [
  "/images/decorative/decorative-element-1.png",
  "/images/decorative/decorative-element-2.png",
  "/images/decorative/decorative-element-3.png",
  "/images/decorative/decorative-element-4.png",
  "/images/decorative/decorative-element-5.png",
  "/images/decorative/decorative-element-6.png"
];

// Predefined positions for food icons to avoid hydration errors
const iconPositions = [
  { top: "15%", left: "12%", rotate: "45deg", scale: 0.5 },
  { top: "25%", left: "80%", rotate: "120deg", scale: 0.7 },
  { top: "65%", left: "25%", rotate: "190deg", scale: 0.6 },
  { top: "85%", left: "75%", rotate: "270deg", scale: 0.4 },
  { top: "45%", left: "65%", rotate: "330deg", scale: 0.8 },
  { top: "10%", left: "45%", rotate: "10deg", scale: 0.6 }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-sand-light relative overflow-hidden">
      {/* Decorative background elements - Food icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        {/* Quote marks */}
        <div className="absolute top-20 left-1/4 text-[120px] font-playfair text-gold/10">&ldquo;</div>
        <div className="absolute bottom-20 right-1/4 text-[120px] font-playfair text-gold/10">&rdquo;</div>
        
        {/* Food icons with predefined positions to avoid hydration errors */}
        {foodIcons.map((icon, index) => (
          <div 
            key={index}
            className="absolute opacity-10"
            style={{
              top: iconPositions[index].top,
              left: iconPositions[index].left,
              transform: `rotate(${iconPositions[index].rotate}) scale(${iconPositions[index].scale})`,
              width: '60px',
              height: '60px'
            }}
          >
            <Image
              src={icon}
              alt="Food icon"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto">
        <SectionTitle 
          title="Guest Experiences" 
          subtitle="Hear what our guests have to say about their dining experiences at Indian Hut."
        />
        
        <div 
          className="mt-16 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Testimonial carousel */}
          <div className="relative h-[350px] md:h-[300px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === current && (
                  <motion.div
                    key={testimonial.id}
                    className="absolute inset-0 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Profile circle with country flag */}
                    <motion.div 
                      className="relative w-20 h-20 rounded-full overflow-hidden mb-6 bg-sand flex items-center justify-center shadow-md border-2 border-gold/20"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="text-4xl" aria-label={`Flag of ${testimonial.country}`}>
                        {testimonial.countryFlag}
                      </span>
                    </motion.div>
                    
                    {/* Rating stars */}
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gold"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </motion.svg>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <motion.blockquote 
                      className="text-lg md:text-xl text-charcoal font-light italic mb-6 max-w-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </motion.blockquote>
                    
                    {/* Author */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h4 className="font-playfair text-lg text-charcoal">{testimonial.name}</h4>
                      <p className="text-sm text-roast">From {testimonial.country}</p>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === current ? "bg-heritage scale-125" : "bg-heritage/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none">
            <motion.button
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center text-charcoal pointer-events-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            
            <motion.button
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center text-charcoal pointer-events-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
} 