"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageVariants: any = {
    initial: { opacity: 1 }, // Ensure visible by default to avoid blank screen
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wordVariants: any = {
    hidden: { opacity: 0, y: 50, skewY: 5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      skewY: 0, 
      transition: { 
        duration: 0.8, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.22, 1, 0.36, 1] as any
      } 
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerVariants: any = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.3 
      } 
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      className="w-full bg-brand-black"
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 bg-brand-black">
          <div className="w-full h-full absolute inset-0 z-10 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/80" />
          <Image 
            src="/images/hero-bg.jpg" 
            alt="HIGHGRAND Collection" 
            fill 
            className={`object-cover scale-105 animate-slow-zoom transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            priority
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-inter text-[12px] md:text-label text-brand-muted uppercase tracking-[0.2em] mb-6"
          >
            Editorial Luxury Streetwear
          </motion.p>
          
          <motion.h1 
            className="font-bebas text-h1 md:text-display text-brand-white uppercase mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {["THE", "NEW", "STANDARD"].map((word, i) => (
              <div key={i} className="overflow-hidden inline-block mr-4 last:mr-0 translate-y-2">
                <motion.span variants={wordVariants} className={`inline-block ${i === 2 ? 'text-brand-accent' : ''}`}>
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <Link href="/category/all" className="bg-brand-white text-brand-black px-12 py-5 font-inter font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-brand-accent transition-all duration-300 transform hover:scale-105 shadow-2xl">
              SHOP COLLECTION
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <span className="font-inter text-[10px] uppercase tracking-[0.3em] mb-4 text-brand-muted">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-brand-accent to-transparent" />
        </motion.div>
      </section>

      {/* Category Grid */}
      <section className="py-24 md:py-32 bg-brand-dark">
        <div className="container-wide">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <p className="font-inter text-label text-brand-accent uppercase mb-2">Collections</p>
              <h2 className="font-bebas text-h2 text-brand-white">SHOP BY FIT</h2>
            </div>
            <Link href="/category/all" className="font-inter text-label text-brand-muted hover:text-brand-white transition-colors underline underline-offset-8 uppercase tracking-widest">
              VIEW ALL ITEMS
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'OVERSIZED', slug: 'new-arrivals', image: '/main page/hoodie.webp' },
              { name: 'DROP SHOULDER', slug: 'best-sellers', image: '/main page/Drop sholder.jpg' },
              { name: 'BOX FIT', slug: 'collections', image: '/main page/box fit.avif' },
              { name: 'ESSENTIALS', slug: 'all', image: '/main page/essentials.webp' }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/category/${cat.slug}`} className="group relative aspect-[2/3] overflow-hidden bg-brand-black border border-brand-border hover:border-brand-accent/30 transition-all duration-500 block">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-smooth opacity-60 group-hover:opacity-80" 
                  />
                  
                  <div className="absolute bottom-8 left-8 z-20">
                    <h3 className="font-bebas text-h3 text-brand-white mb-2 group-hover:text-brand-accent transition-colors">{cat.name}</h3>
                    <div className="w-0 group-hover:w-full h-[1px] bg-brand-accent transition-all duration-500 mb-4" />
                    <span className="font-inter text-[11px] text-brand-muted group-hover:text-brand-white transition-colors tracking-widest uppercase font-bold">EXPLORE ARCHIVE</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="py-40 bg-brand-black border-y border-brand-border px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any }}
          >
            <h2 className="font-playfair italic text-h3 md:text-h2 text-brand-white leading-snug mb-12">
              &quot;Highgrand is not just a brand, it is a statement of uncompromising quality and architectural fit.&quot;
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-12 h-[1px] bg-brand-accent mb-6" />
              <p className="font-inter text-label text-brand-muted uppercase tracking-[0.3em]">THE MANIFESTO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Newsletter Strip */}
      <section className="py-20 bg-brand-dark">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bebas text-h3 text-brand-white mb-2 uppercase tracking-wide">JOIN THE ARCHIVE</h3>
            <p className="font-inter text-body-sm text-brand-muted uppercase tracking-widest">EXCLUSIVE DROP ACCESS & EDITORIAL INSIGHTS</p>
          </div>
          <div className="flex w-full max-w-md border-b border-brand-accent pb-2">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="bg-transparent flex-1 py-3 px-0 text-brand-white font-inter text-[12px] tracking-[0.1em] focus:outline-none placeholder:text-brand-disabled uppercase" 
            />
            <button className="text-brand-accent font-inter text-[12px] font-bold tracking-[0.2em] px-4 hover:text-brand-white transition-colors">AUTHENTICATE</button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
