"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Image from "next/image";

// Define the timeline items
const timelineItems = [
  {
    year: "1986",
    title: "Humble Beginnings",
    description: "A small family kitchen opens its doors in the heart of Galle Fort, serving traditional Indian meals with love.",
    color: "#ea4335" // Red
  },
  {
    year: "1999",
    title: "The Second Generation",
    description: "The founder's children take the reins, adding new life and recipes while keeping the soul intact.",
    color: "#fbbc05" // Yellow
  },
  {
    year: "2010",
    title: "Galle Fort's Hidden Gem",
    description: "Word spreads. Indian Hut becomes a go-to for both travelers and locals craving real Indian taste.",
    color: "#34a853" // Green
  },
  {
    year: "2024",
    title: "A New Chapter Begins",
    description: "Revamped with a modern aesthetic, staying true to its roots. The blend of heritage + minimalism is born.",
    color: "#4285f4" // Blue
  },
  {
    year: "2025",
    title: "More Than a Meal",
    description: "Now a cultural experience — slow food, scenic views of the Fort lighthouse, curated ambiance, and storytelling through every dish.",
    color: "#8a2be2" // Purple
  }
];

export default function TimelineSection() {
  const chefQuoteRef = useRef(null);
  const isQuoteInView = useInView(chefQuoteRef, { once: true, amount: 0.5 });
  
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-sand-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Timeline: The Story of Indian Hut" 
          subtitle="1986 – 2025"
        />
        
        {/* Timeline items */}
        <div className="mt-16 relative">
          {/* Vertical timeline line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 md:-ml-0.5 w-1 bg-sand-dark/20 z-0" />
          
          {timelineItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`relative z-10 mb-12 md:mb-16 flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 md:-ml-2.5 mt-1.5 w-5 h-5 rounded-full shadow-md z-10" style={{ backgroundColor: item.color }} />
              
              {/* Content */}
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sand-dark/10">
                  {/* Year with colored dot */}
                  <div className="flex items-center mb-2 text-lg font-medium text-charcoal">
                    <span className="inline-block w-4 h-4 rounded-full mr-2 md:hidden" style={{ backgroundColor: item.color }}></span>
                    <span className="font-playfair text-xl">{item.year} – {item.title}</span>
                  </div>
                  <p className="text-roast">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Chef's Quote Section */}
        <motion.div 
          ref={chefQuoteRef}
          className="mt-24 md:mt-32 relative max-w-3xl mx-auto rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isQuoteInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-charcoal/60 z-10"></div>
          <div className="relative aspect-[16/9] w-full">
            <Image 
              src="/images/gallery/hand-drawn-black-hotel-labels-vintage-style 1.PNG"
              alt="Chef portrait"
              fill
              className="object-cover grayscale"
            />
          </div>
          
          {/* Quote content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isQuoteInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="font-handwritten text-white text-xl md:text-3xl mb-4 leading-relaxed">
                &ldquo;We don&apos;t follow trends. We follow our grandmother&apos;s hands.&rdquo;
              </h3>
              <div className="h-px w-20 bg-gold/70 mx-auto mb-4"></div>
              <p className="text-white/90 italic text-sm md:text-base">
                — Arjun Perera, Head Chef & Son of the Founder
              </p>
            </motion.div>
          </div>
          
          {/* Decorative corner frames */}
          <div className="corner-frame-tl border-gold/30 z-30"></div>
          <div className="corner-frame-tr border-gold/30 z-30"></div>
          <div className="corner-frame-bl border-gold/30 z-30"></div>
          <div className="corner-frame-br border-gold/30 z-30"></div>
        </motion.div>
      </div>
    </section>
  );
} 