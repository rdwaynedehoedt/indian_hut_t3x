"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Link from "next/link";
import Tilt from 'react-parallax-tilt';
import ParallaxSpices from "../ui/ParallaxSpices";
import FoodStickersEffect from "../ui/FoodStickersEffect";

type Dish = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  spiceLevel: 1 | 2 | 3;
  category: "vegetarian" | "non-vegetarian" | "seafood" | "dessert";
  featured: boolean;
};

const featuredDishes: Dish[] = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce with aromatic spices and fresh cream.",
    image: "/images/menu/Butter Chicken styled plate overhead.jpg",
    price: "₹450",
    spiceLevel: 2,
    category: "non-vegetarian",
    featured: true
  },
  {
    id: 2,
    name: "Palak Paneer",
    description: "Fresh cottage cheese cubes in a smooth, spiced spinach gravy finished with cream.",
    image: "/images/menu/Palak Paneer.jpg",
    price: "₹350",
    spiceLevel: 1,
    category: "vegetarian",
    featured: true
  },
  {
    id: 3,
    name: "Prawn Curry",
    description: "Succulent prawns simmered in a coconut-based curry with traditional coastal spices.",
    image: "/images/menu/Prawn Curry.jpg",
    price: "₹550",
    spiceLevel: 3,
    category: "seafood",
    featured: true
  },
  {
    id: 4,
    name: "Gulab Jamun",
    description: "Soft milk solids dumplings, deep-fried and soaked in rose-scented sugar syrup.",
    image: "/images/menu/Gulab Jamun.jpeg",
    price: "₹250",
    spiceLevel: 1,
    category: "dessert",
    featured: true
  }
];

export default function FeaturedDishes() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-sand relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        {/* Parallax floating spices */}
        <ParallaxSpices />
        
        {/* 3D floating food stickers */}
        <FoodStickersEffect />
        
        {/* Decorative spice illustration */}
        <div className="absolute bottom-10 left-10 w-32 h-32 opacity-[0.07]">
          <Image 
            src="/images/decorative/decorative-element-3.png" 
            alt="Decorative spice" 
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Signature Dishes" 
          subtitle="Discover our chef's selection of exceptional dishes that showcase the essence of Indian Hut."
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                transitionSpeed={1500}
                scale={1.02}
                gyroscope={true}
                onEnter={() => setActiveIndex(index)}
                onLeave={() => setActiveIndex(null)}
              >
                {/* Dish image with hover effect */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ 
                      scale: activeIndex === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium">
                    {dish.category === "vegetarian" && (
                      <span className="text-green-600">Vegetarian</span>
                    )}
                    {dish.category === "non-vegetarian" && (
                      <span className="text-red-600">Non-Vegetarian</span>
                    )}
                    {dish.category === "seafood" && (
                      <span className="text-blue-600">Seafood</span>
                    )}
                    {dish.category === "dessert" && (
                      <span className="text-purple-600">Dessert</span>
                    )}
                  </div>
                  
                  {/* Spice level indicator */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-0.5">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${i < dish.spiceLevel ? 'bg-spice' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Dish details */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair text-lg text-charcoal">{dish.name}</h3>
                    <span className="text-gold font-medium">{dish.price}</span>
                  </div>
                  <p className="text-roast text-sm">{dish.description}</p>
                  
                  {/* Interactive order button */}
                  <motion.button
                    className="mt-4 w-full py-2 px-4 bg-sand-dark text-charcoal text-sm font-medium rounded hover:bg-heritage hover:text-white transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
        
        {/* View full menu button with animation */}
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
              href="/menu"
              className="inline-flex items-center gap-2 py-3 px-6 bg-heritage text-white rounded-lg hover:bg-heritage/90 transition-colors"
            >
              <span>Explore Full Menu</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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