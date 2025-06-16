"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function LighthouseFogEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values for parallax effect
  const lighthouseY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const fogOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.6, 0.8, 0.5]);
  const fogScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const lightIntensity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.8, 1, 0.7]);

  // Draw fog effect animation with canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let fogParticles: {
      x: number;
      y: number;
      radius: number;
      density: number;
      speed: number;
    }[] = [];

    const init = () => {
      // Set canvas size
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Create fog particles
      fogParticles = [];
      const particlesCount = Math.floor(canvas.width / 10);
      
      for (let i = 0; i < particlesCount; i++) {
        const radius = Math.random() * 5 + 3;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const density = Math.random() * 10 + 2;
        const speed = Math.random() * 0.5 + 0.1;
        
        fogParticles.push({ x, y, radius, density, speed });
      }
    };

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = 0.3;
      
      for (let i = 0; i < fogParticles.length; i++) {
        const p = fogParticles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        
        // Move fog particles
        p.x += p.speed / 2;
        
        // If particle goes beyond canvas, reset position
        if (p.x > canvas.width) {
          p.x = -p.radius;
        }
      }
      
      requestAnimationFrame(draw);
    };

    // Initialize and start animation
    init();
    draw();

    // Handle resize
    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute right-0 bottom-0 w-full h-full pointer-events-none overflow-hidden">
      {/* Lighthouse */}
      <motion.div 
        className="absolute right-0 bottom-0 w-64 md:w-96 h-[500px] md:h-[800px] z-10"
        style={{ y: lighthouseY }}
      >
        <div className="relative w-full h-full">
          <Image 
            src="/images/gallery/lighthouse.png" 
            alt="Galle Fort Lighthouse" 
            fill
            className="object-contain object-bottom"
          />
        </div>
      </motion.div>
      
      {/* Lighthouse beam/glow effect */}
      <motion.div 
        className="absolute right-[120px] md:right-[180px] bottom-[300px] md:bottom-[450px] w-12 h-12 rounded-full bg-gold/30 blur-[30px] z-5"
        style={{ scale: lightIntensity }}
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Fog layer */}
      <motion.div 
        className="absolute inset-0 z-20"
        style={{ 
          opacity: fogOpacity,
          scale: fogScale
        }}
      >
        <canvas 
          ref={canvasRef} 
          className="w-full h-full" 
          style={{ filter: "blur(20px)" }}
        />
      </motion.div>
    </div>
  );
} 