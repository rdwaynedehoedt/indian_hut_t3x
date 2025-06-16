"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import LighthouseFogEffect from "../ui/LighthouseFogEffect";
import Link from "next/link";

export default function VisitSection() {
  const [mapHovered, setMapHovered] = useState(false);
  const googleMapsUrl = "https://maps.app.goo.gl/sY1kJ4P3Nx3uHFy2A";
  
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-sand-light relative overflow-hidden">
      {/* Lighthouse fog effect in the background */}
      <LighthouseFogEffect />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] mix-blend-multiply" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle 
          title="Visit Us" 
          subtitle="Experience the authentic flavors of Indian Hut at our Galle Fort location."
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left column - Contact information */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-playfair text-charcoal mb-6">Our Location</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-charcoal mb-1">Address</h4>
                    <p className="text-roast">
                      42 Church Street, Galle Fort<br />
                      Galle, Sri Lanka
                    </p>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-charcoal mb-1">Opening Hours</h4>
                    <p className="text-roast">
                      Monday - Sunday: 11:00 AM - 10:00 PM<br />
                      <span className="italic text-sm">Kitchen closes at 9:30 PM</span>
                    </p>
                  </div>
                </div>
                
                {/* Contact */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 16.9999V19.9999C20.0011 20.1135 19.9772 20.226 19.9303 20.3296C19.8834 20.4332 19.8145 20.5255 19.7288 20.6004C19.6432 20.6753 19.5426 20.7308 19.4343 20.7631C19.326 20.7954 19.2124 20.8039 19.1 20.7889C16.44 20.4634 13.9 19.5388 11.71 18.0888C9.66 16.7588 7.93 14.9988 6.6 12.9999C5.14 10.7988 4.21 8.2499 3.89 5.5799C3.87499 5.4676 3.88371 5.35406 3.91604 5.24595C3.94837 5.13784 4.00363 5.0374 4.07839 4.9519C4.15314 4.86639 4.24505 4.79744 4.34843 4.75029C4.45182 4.70315 4.56404 4.67894 4.68 4.6799H7.68C7.88565 4.67786 8.08467 4.75519 8.23933 4.89449C8.39399 5.03378 8.49265 5.22307 8.52 5.4299C8.58 6.0509 8.7 6.6599 8.88 7.2499C8.95499 7.48057 8.9555 7.72881 8.88151 7.95972C8.80752 8.19063 8.66324 8.39021 8.47 8.5299L7.22 9.7799C8.44663 11.8894 10.1605 13.6033 12.27 14.8299L13.52 13.5799C13.6597 13.3867 13.8593 13.2424 14.0902 13.1684C14.3211 13.0944 14.5694 13.0949 14.8 13.1699C15.39 13.3499 16 13.4699 16.62 13.5299C16.829 13.5573 17.0206 13.6574 17.1611 13.8143C17.3017 13.9712 17.3805 14.1732 17.38 14.3799L17.38 16.9999H20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-charcoal mb-1">Contact Us</h4>
                    <p className="text-roast">
                      Phone: +94 91 222 3366<br />
                      Email: info@indianhut.lk
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Link */}
              <div className="mt-8 p-4 border border-gold/30 bg-gold/5 rounded-lg">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-heritage font-medium">
                    Reservations are recommended for dinner service and weekends.
                  </p>
                  <Link 
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-heritage text-white py-2 px-4 rounded-lg hover:bg-heritage/90 transition-colors whitespace-nowrap"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22C12 22 20 16 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 16 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    View on Google Maps
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right column - Embedded Google Maps iframe */}
          <motion.div
            className="h-[400px] md:h-[500px] rounded-lg overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Embedded Google Maps iframe */}
            <div className="w-full h-full rounded-lg overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7848133869666!2d80.21529647480155!3d6.02424949396119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173a7069cd097%3A0xb6a06141163f4e94!2sIndian%20Hut!5e0!3m2!1sen!2slk!4v1750057714868!5m2!1sen!2slk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Indian Hut Location on Google Maps"
              />
            </div>
            
            {/* Decorative corner frames */}
            <div className="corner-frame-tl border-heritage/30 z-10"></div>
            <div className="corner-frame-tr border-heritage/30 z-10"></div>
            <div className="corner-frame-bl border-heritage/30 z-10"></div>
            <div className="corner-frame-br border-heritage/30 z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 