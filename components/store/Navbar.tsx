"use client";

import { ShoppingBag, User, Search } from "lucide-react";
import { useCart } from "@/lib/context/CartContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, openDrawer } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = scrollY > 50;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  // Top offset to accommodate AnnouncementBar (36px high)
  const topOffset = Math.max(0, 36 - scrollY);

  const navItems = [
    { name: 'NEW ARRIVALS', href: '/category/new-arrivals' },
    { name: 'BESTSELLERS', href: '/category/best-sellers' },
    { name: 'COLLECTIONS', href: '/category/collections' },
    { name: 'ABOUT', href: '/about' }
  ];

  return (
    <nav
      style={{ top: typeof window !== 'undefined' && window.innerWidth < 1024 ? '0px' : `${topOffset}px` }}
      className={`fixed w-full z-50 h-[64px] transition-all duration-300 ease-smooth ${
        scrolled || (typeof window !== 'undefined' && window.innerWidth < 1024)
          ? "bg-brand-black/90 backdrop-blur-md border-b border-brand-border"
          : "bg-transparent border-b border-transparent lg:border-transparent"
      }`}
    >
      <div className="container-wide h-full flex items-center justify-between">
        <Link href="/" className="group flex items-center z-[10000]" onClick={() => setIsMenuOpen(false)}>
          <div className="font-bebas text-[28px] text-brand-white leading-none tracking-wider group-hover:text-brand-accent transition-colors mt-1">
            HIGHGRAND
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="font-inter text-[11px] uppercase tracking-[0.2em] text-brand-white/80 hover:text-brand-accent transition-colors duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 lg:gap-6 z-[10000]">
          <button className="text-brand-white hover:text-brand-accent transition-colors duration-300">
            <Search size={20} strokeWidth={1.2} />
          </button>
          <Link href="/account" className="hidden sm:block text-brand-white hover:text-brand-accent transition-colors duration-300">
            <User size={20} strokeWidth={1.2} />
          </Link>
          <button 
            onClick={openDrawer}
            className="text-brand-white hover:text-brand-accent transition-colors duration-300 relative group"
          >
            <ShoppingBag size={20} strokeWidth={1.2} />
            <span className="absolute -top-1.5 -right-1.5 bg-brand-accent text-brand-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              {cartCount}
            </span>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-brand-white p-2 hover:text-brand-accent transition-colors relative h-10 w-10 flex items-center justify-center"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="relative w-6 h-4 flex flex-col justify-between"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 7.5 }
                }}
                className="w-full h-0.5 bg-current block origin-center"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-full h-0.5 bg-current block"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -7.5 }
                }}
                className="w-full h-0.5 bg-current block origin-center"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Crazy Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-brand-black flex flex-col justify-center px-8 lg:hidden"
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'auto' }}
          >
            {/* Grain Overlay with scanning line animation */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/noise.svg')] bg-repeat" />
            <motion.div 
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-[2px] bg-brand-accent/20 blur-sm pointer-events-none z-0"
            />
            
            <div className="relative z-10 flex flex-col gap-4 md:gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -100, opacity: 0, skewY: 5 }}
                  animate={{ x: 0, opacity: 1, skewY: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-bebas text-[54px] md:text-[80px] leading-[0.85] text-brand-white hover:text-brand-accent transition-all duration-500 uppercase flex items-center gap-6 group relative"
                  >
                    <span className="font-inter text-[14px] text-brand-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                      /{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="relative overflow-hidden">
                      {item.name}
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 left-8 right-8"
            >
              <div className="w-full h-[1px] bg-brand-border/30 mb-8" />
              <div className="flex flex-col md:flex-row justify-between gap-6 text-brand-muted font-inter text-[10px] tracking-[0.3em] uppercase">
                <div>
                  <p className="mb-2 text-brand-white">Socials</p>
                  <div className="flex gap-6">
                    <span className="hover:text-brand-accent cursor-pointer transition-colors">Instagram</span>
                    <span className="hover:text-brand-accent cursor-pointer transition-colors">Discord</span>
                    <span className="hover:text-brand-accent cursor-pointer transition-colors">Archive</span>
                  </div>
                </div>
                <div className="md:text-right">
                  <p className="mb-2 text-brand-white">Inquiries</p>
                  <p>contact@highgrand.archive</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
