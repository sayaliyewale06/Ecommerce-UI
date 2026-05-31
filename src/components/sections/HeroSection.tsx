'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <div className="relative bg-[#f8e5e5] overflow-hidden flex items-center min-h-[500px] md:min-h-[600px]">
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Left Side: Text and CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 py-12 text-center md:text-left z-20"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif text-[#d81b60] font-bold tracking-tight mb-4 leading-tight drop-shadow-sm"
          >
            Elegance <br className="hidden md:block" /> Redefined.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-800 mb-8 max-w-md mx-auto md:mx-0 font-medium"
          >
            Discover the latest trends in traditional and modern fashion. Handpicked collections just for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="bg-[#d81b60] hover:bg-[#b0134d] text-white rounded-full px-10 py-7 text-lg shadow-lg hover:shadow-xl transition-all uppercase tracking-wider font-bold group">
              Shop Collection
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 relative h-[350px] md:h-[600px] mt-8 md:mt-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://picsum.photos/seed/fashionHero/1200/800" 
            alt="Fashion Model" 
            className="w-full h-full object-cover object-top md:mask-image-gradient rounded-3xl md:rounded-none shadow-2xl md:shadow-none"
          />
        </motion.div>
      </div>

      {/* Decorative gradient overlay (only on desktop) */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#fdfbfb]/90 via-[#fdfbfb]/50 to-transparent z-0 w-3/4" />
    </div>
  );
}
