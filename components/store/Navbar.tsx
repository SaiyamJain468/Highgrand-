"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ShoppingBag, User, Search } from "lucide-react";
import { useCart } from "@/lib/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { cartCount, openDrawer } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      style={{ top: `${topOffset}px` }}
      className={`fixed w-full z-50 h-[64px] transition-all duration-300 ease-smooth ${
        scrolled
          ? "bg-brand-black/90 backdrop-blur-md border-b border-brand-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-wide h-full flex items-center justify-between">
        <Link href="/" className="group">
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
        <div className="flex items-center gap-6">
          <button className="text-brand-white hover:text-brand-accent transition-colors duration-300">
            <Search size={20} strokeWidth={1.2} />
          </button>
          <Link href="/account" className="text-brand-white hover:text-brand-accent transition-colors duration-300">
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
        </div>
      </div>
    </nav>
  );
}
