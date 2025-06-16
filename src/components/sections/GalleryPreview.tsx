"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Restaurant Interior",
    category: "Ambiance",
    image: "/images/gallery/hand-drawn-black-hotel-labels-vintage-style 1.PNG"
  },
  {
    id: 2,
    title: "Traditional Thali",
    category: "Food",
    image: "/images/gallery/hand-drawn-black-hotel-labels-vintage-style 2.PNG"
  },
  {
    id: 3,
    title: "Spice Selection",
    category: "Ingredients",
    image: "/images/decorative/decorative-element-1.png"
  },
  {
    id: 4,
    title: "Outdoor Seating",
    category: "Ambiance",
    image: "/images/backgrounds/beach-landscape.png"
  },
  {
    id: 5,
    title: "Chef's Special",
    category: "Food",
    image: "/images/decorative/decorative-element-4.png"
  },
  {
    id: 6,
    title: "Galle Fort View",
    category: "Location",
    image: "/images/gallery/lighthouse.png"
  }
];

export default function GalleryPreview() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-sand-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Gallery" 
          subtitle="Take a visual journey through our restaurant, dishes, and the vibrant atmosphere of Indian Hut."
        />
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0"
                animate={{ 
                  scale: hoveredItem === item.id ? 1.05 : 1
                }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6"
                animate={{ 
                  opacity: hoveredItem === item.id ? 1 : 0.7
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="text-xs text-gold/90 uppercase tracking-wider mb-1"
                  animate={{ 
                    y: hoveredItem === item.id ? 0 : 10,
                    opacity: hoveredItem === item.id ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.category}
                </motion.span>
                <motion.h3 
                  className="text-xl text-white font-playfair"
                  animate={{ 
                    y: hoveredItem === item.id ? 0 : 10,
                    opacity: hoveredItem === item.id ? 1 : 0.9
                  }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  {item.title}
                </motion.h3>
              </motion.div>
              
              {/* View button - only visible on hover */}
              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-heritage"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* View all gallery button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link 
              href="/gallery"
              className="inline-flex items-center gap-2 py-3 px-6 bg-heritage text-white rounded-lg hover:bg-heritage/90 transition-colors"
            >
              <span>View Full Gallery</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.66669 4L12.6667 8L8.66669 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 