"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const decorativeY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  
  return (
    <section id="about-section" ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-sand-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative spice pattern */}
        <motion.div 
          className="absolute top-20 right-10 w-40 h-40 opacity-[0.04]"
          style={{ y: decorativeY }}
        >
          <Image 
            src="/images/decorative/decorative-element-1.png" 
            alt="Decorative pattern" 
            width={160}
            height={160}
            className="object-contain"
          />
        </motion.div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Our Heritage" 
          subtitle="A culinary journey through time, celebrating the rich flavors and traditions of Indian cuisine."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-16">
          {/* Left column - Video with parallax effect */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            style={{ scale: videoScale, opacity: videoOpacity }}
          >
            <div className="absolute inset-0 w-full h-full">
              <video 
                ref={videoRef}
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
                poster="/images/gallery/hand-drawn-black-hotel-labels-vintage-style 1.PNG"
              >
                <source src="/10200309-hd_2160_3840_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-charcoal/10"></div>
            
            {/* Decorative corner frames */}
            <div className="corner-frame-tl border-heritage/30"></div>
            <div className="corner-frame-tr border-heritage/30"></div>
            <div className="corner-frame-bl border-heritage/30"></div>
            <div className="corner-frame-br border-heritage/30"></div>
          </motion.div>
          
          {/* Right column - Content with scroll animations */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-playfair text-charcoal mb-6">A Taste of Tradition</h3>
              
              <p className="text-roast mb-6 leading-relaxed">
                Established in 1986, Indian Hut began as a small family kitchen in the heart of Galle Fort. 
                Our recipes have been passed down through generations, preserving the authentic flavors 
                and cooking techniques that make Indian cuisine so beloved around the world.
              </p>
              
              <p className="text-roast mb-8 leading-relaxed">
                Today, we continue to honor those traditions while embracing modern culinary innovations. 
                Each dish tells a story of heritage, crafted with care using the finest locally-sourced 
                ingredients and traditional spice blends prepared in-house daily.
              </p>
              
              {/* Feature points with micro-interactions */}
              <ul className="space-y-4">
                {["Hand-ground spice blends", "Family recipes since 1986", "Local, sustainable ingredients"].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-roast"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <span className="inline-block w-2 h-2 bg-gold rounded-full mr-3"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              
              {/* Signature element */}
              <motion.div 
                className="mt-10 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="h-px w-12 bg-gold/40 mr-4"></div>
                <span className="text-heritage italic font-playfair">The taste of heritage</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 