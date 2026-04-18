"use client";

import Link from "next/link";
import { Camera, MessageSquare, ArrowUp, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-black border-t border-brand-border pt-24 pb-12 relative overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          <div className="md:col-span-4">
            <h3 className="font-bebas text-[32px] text-brand-white mb-8 tracking-widest">HIGHGRAND</h3>
            <p className="font-inter text-brand-muted text-body-sm leading-relaxed mb-10 max-w-sm uppercase tracking-widest text-[11px]">
              The architecture of streetwear. Precision fits, heavyweight fabrics, and uncompromising aesthetic vision.
            </p>
            <div className="flex gap-8 text-brand-muted">
              <Link 
                href="https://www.instagram.com/highgrand__/" 
                target="_blank" 
                className="hover:text-brand-accent transition-all transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Camera size={18} strokeWidth={1.5} />
              </Link>
              <Link 
                href="https://wa.me/917669932444" 
                target="_blank" 
                className="hover:text-brand-accent transition-all transform hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <h4 className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-brand-white">Navigation</h4>
            <div className="flex flex-col gap-4 font-inter text-[11px] uppercase tracking-[0.15em] text-brand-muted">
              <Link href="/category/all" className="hover:text-brand-accent transition-colors w-fit font-medium">Shop All</Link>
              <Link href="/category/new-arrivals" className="hover:text-brand-accent transition-colors w-fit font-medium">New Arrivals</Link>
              <Link href="/about" className="hover:text-brand-accent transition-colors w-fit font-medium">The Studio</Link>
              <Link href="/faq" className="hover:text-brand-accent transition-colors w-fit font-medium">FAQ</Link>
              <Link href="/returns" className="hover:text-brand-accent transition-colors w-fit font-medium">Returns</Link>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <h4 className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-brand-white">Studio Info</h4>
            <div className="flex flex-col gap-6 font-inter text-[11px] uppercase tracking-[0.15em] text-brand-muted">
               <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">New Delhi, India</span>
               </div>
               <div className="flex items-start gap-3">
                  <Mail size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="lowercase">admin@highgrand.com</span>
               </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-8">
            <h4 className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-brand-white">Loyalty & Access</h4>
            <p className="font-inter text-brand-muted text-[11px] leading-relaxed uppercase tracking-widest">
              Be the first to authenticate new drops. Elite access only.
            </p>
            <form className="flex border-b border-brand-border pb-3 focus-within:border-brand-accent transition-all group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none outline-none text-brand-white font-inter text-[11px] tracking-[0.2em] flex-1 placeholder:text-brand-disabled uppercase"
              />
              <button type="submit" className="text-brand-white font-inter text-[11px] font-bold tracking-[0.2em] uppercase hover:text-brand-accent transition-colors">
                SIGN UP
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-brand-border/30 pt-10 mt-16">
          <div className="flex items-center gap-8 mb-8 md:mb-0">
             <p className="font-inter text-[10px] text-brand-disabled uppercase tracking-[0.2em]">© {new Date().getFullYear()} HIGHGRAND ARCHIVE</p>
             <div className="hidden md:flex gap-6 font-inter text-[10px] text-brand-disabled uppercase tracking-[0.2em]">
                <Link href="/privacy" className="hover:text-brand-white transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-brand-white transition-colors">Terms</Link>
             </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-brand-muted hover:text-brand-accent transition-colors"
          >
            <span className="font-inter text-[10px] uppercase tracking-[0.3em] font-bold">Return to Top</span>
            <div className="w-10 h-10 border border-brand-border flex items-center justify-center group-hover:border-brand-accent transition-colors">
               <ArrowUp size={16} strokeWidth={1.5} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
      
      {/* Decorative Brand Text Background */}
      <div className="absolute -bottom-10 -right-20 pointer-events-none opacity-[0.02] select-none">
         <h2 className="font-bebas text-[300px] leading-none text-brand-white">HIGHGRAND</h2>
      </div>
    </footer>
  );
}
