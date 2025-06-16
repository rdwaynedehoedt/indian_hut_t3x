"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Define the food sticker images to use
const foodStickers = [
  {
    src: "/images/menu/retro-food-stickers 1.PNG",
    alt: "Butter Chicken",
    width: 100,
    position: { x: -15, y: 20 },
    rotation: -15,
    scale: 1.1,
    delay: 0.2
  },
  {
    src: "/images/menu/retro-food-stickers 2.PNG",
    alt: "Palak Paneer",
    width: 90,
    position: { x: -10, y: 60 },
    rotation: 10,
    scale: 0.9,
    delay: 0.4
  },
  {
    src: "/images/menu/retro-food-stickers 4.PNG",
    alt: "Naan Bread",
    width: 80,
    position: { x: -20, y: 40 },
    rotation: -5,
    scale: 0.8,
    delay: 0.6
  },
  {
    src: "/images/menu/retro-food-stickers 5.PNG",
    alt: "Prawn Curry",
    width: 95,
    position: { x: 15, y: 25 },
    rotation: 12,
    scale: 1.0,
    delay: 0.3
  },
  {
    src: "/images/menu/retro-food-stickers 7.PNG",
    alt: "Chai",
    width: 85,
    position: { x: 20, y: 55 },
    rotation: -8,
    scale: 0.85,
    delay: 0.5
  },
  {
    src: "/images/menu/retro-food-stickers 8.PNG",
    alt: "Gulab Jamun",
    width: 75,
    position: { x: 25, y: 35 },
    rotation: 7,
    scale: 0.95,
    delay: 0.7
  }
];

export default function FoodStickersEffect() {
  const stickersRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!stickersRef.current) return;
    
    const container = stickersRef.current;
    const stickerElements = container.querySelectorAll('.food-sticker');
    
    // Initial state - all stickers invisible
    gsap.set(stickerElements, { 
      opacity: 0, 
      scale: 0.5,
      y: 20
    });
    
    // Create timeline for staggered entry
    const tl = gsap.timeline({ 
      defaults: { 
        ease: "elastic.out(1, 0.5)",
        duration: 1.2
      }
    });
    
    // Animate each sticker into view
    stickerElements.forEach((sticker, index) => {
      const delay = index * 0.15;
      
      tl.to(sticker, { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        delay 
      }, 0);
      
      // Add hover animation for each sticker
      gsap.set(sticker, { transformOrigin: "center center" });
      
      // Create floating/bobbing animation
      gsap.to(sticker, {
        y: "+=10",
        rotation: "+=3",
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay + 1
      });
    });
    
    // Clean up animations on unmount
    return () => {
      tl.kill();
    };
  }, []);
  
  return (
    <div 
      ref={stickersRef} 
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Left side stickers */}
      <div className="absolute left-0 top-1/4 bottom-0 w-[20%] z-10">
        {foodStickers.slice(0, 3).map((sticker, index) => (
          <div 
            key={`left-${index}`}
            className="food-sticker absolute transform perspective-[1000px]"
            style={{
              left: `${sticker.position.x}%`,
              top: `${sticker.position.y}%`,
              zIndex: 10 + index
            }}
          >
            <Image
              src={sticker.src}
              alt={sticker.alt}
              width={sticker.width}
              height={sticker.width}
              className="drop-shadow-md"
              style={{
                transform: `rotate(${sticker.rotation}deg) scale(${sticker.scale})`
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Right side stickers */}
      <div className="absolute right-0 top-1/3 bottom-0 w-[20%] z-10">
        {foodStickers.slice(3).map((sticker, index) => (
          <div 
            key={`right-${index}`}
            className="food-sticker absolute transform perspective-[1000px]"
            style={{
              right: `${sticker.position.x}%`,
              top: `${sticker.position.y}%`,
              zIndex: 10 + index
            }}
          >
            <Image
              src={sticker.src}
              alt={sticker.alt}
              width={sticker.width}
              height={sticker.width}
              className="drop-shadow-md"
              style={{
                transform: `rotate(${sticker.rotation}deg) scale(${sticker.scale})`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 