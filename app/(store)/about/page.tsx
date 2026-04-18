"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, Phone, MapPin, Mail, Clock, MessageSquare } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-brand-black min-h-screen pt-[104px] pb-32">
      <div className="container max-w-5xl">
        <h1 className="font-bebas text-[48px] md:text-[80px] text-brand-white mb-2 leading-[0.85] tracking-tight uppercase">ABOUT HIGHGRAND</h1>
        <p className="font-inter text-brand-muted text-[11px] tracking-[0.3em] uppercase mb-16 border-b border-brand-border pb-8 w-fit">
          Established 2026 · Architectural Form · Premium Quality
        </p>

        <div className="aspect-[21/9] bg-[#111111] mb-24 border border-brand-border w-full relative overflow-hidden group">
          <div className="absolute inset-0 bg-brand-dark opacity-40 mix-blend-multiply z-10" />
          <Image 
             src="/images/hero-bg.jpg" 
             alt="Highgrand Culture" 
             fill 
             className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" 
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
             <span className="font-bebas text-[14px] text-brand-white border border-brand-white/30 px-6 py-2 tracking-[0.4em] backdrop-blur-sm">CULTURAL EXPLORATION</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-32">
          <div className="md:col-span-12 lg:col-span-7">
            <h2 className="font-bebas text-[40px] text-brand-white mb-8 tracking-widest leading-none">THE MANIFESTO</h2>
            <div className="space-y-8 text-[18px] md:text-[22px] text-brand-white font-inter font-light italic leading-[1.6]">
              <p>
                &quot;Clothes are more than fabric — they carry the silence of your choices and the noise of your dreams. A well-fitted piece doesn&apos;t just cover you; it reveals you.&quot;
              </p>
              <p>
                &quot;Style isn&apos;t what you wear, it&apos;s what you say without speaking. And in that quiet language, the right cloth becomes louder than words.&quot;
              </p>
            </div>
          </div>
          <div className="md:col-span-12 lg:col-span-5 flex flex-col justify-end">
             <div className="p-10 bg-brand-dark/30 border-l border-brand-accent">
                <p className="font-inter text-brand-muted text-[13px] leading-relaxed tracking-wider uppercase">
                  HIGHGRAND is an exploration of contemporary proportions. We reject the notion that oversized means shapeless. Every piece is architecturally engineered to fall perfectly on the body.
                </p>
             </div>
          </div>
        </div>

        {/* Meet the Founder & Store Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
           <div className="lg:col-span-5">
              <div className="aspect-[4/5] relative bg-brand-dark border border-brand-border overflow-hidden">
                 <Image 
                   src="/images/Founder.webp" 
                   alt="Founder of HIGHGRAND" 
                   fill 
                   className="object-cover"
                 />
                 <div className="absolute bottom-6 left-6 z-10">
                    <span className="bg-brand-accent text-brand-black font-inter font-bold text-[10px] px-4 py-1.5 uppercase tracking-widest">FOUNDER</span>
                 </div>
              </div>
              <div className="mt-8">
                 <h2 className="font-bebas text-[32px] text-brand-white mb-4 leading-none tracking-tight">FROM THE FOUNDER</h2>
                 <p className="font-inter text-brand-muted text-[15px] leading-[1.8] tracking-wide">
                    Driven by a vision of architectural fashion, Highgrand emerged to create streetwear that speaks through structure. We are building a community where quality and fit are the ultimate statements.
                 </p>
              </div>
           </div>

           <div className="lg:col-span-7 space-y-12 flex flex-col justify-between">
              {/* Connect & Visit Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {/* Socials */}
                 <Link 
                    href="https://www.instagram.com/highgrand__/" 
                    target="_blank"
                    className="flex flex-col gap-6 p-8 bg-brand-dark/20 border border-brand-border hover:border-brand-accent group transition-all"
                 >
                    <div className="w-12 h-12 bg-brand-black border border-brand-border flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-black transition-all">
                       <Camera size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                       <span className="block font-bebas text-[24px] text-brand-white group-hover:text-brand-accent transition-colors">INSTAGRAM</span>
                       <span className="font-inter text-[11px] text-brand-muted uppercase tracking-widest font-medium">@highgrand__</span>
                    </div>
                 </Link>

                 <Link 
                    href="https://wa.me/917669932444" 
                    target="_blank"
                    className="flex flex-col gap-6 p-8 bg-brand-dark/20 border border-brand-border hover:border-brand-accent group transition-all"
                 >
                    <div className="w-12 h-12 bg-brand-black border border-brand-border flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-black transition-all">
                       <MessageSquare size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                       <span className="block font-bebas text-[24px] text-brand-white group-hover:text-brand-accent transition-colors">WHATSAPP</span>
                       <span className="font-inter text-[11px] text-brand-muted uppercase tracking-widest font-medium">Message our studio</span>
                    </div>
                 </Link>

                 {/* Contact Details */}
                 <div className="p-8 bg-brand-dark/10 border border-brand-border/50 sm:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                       <Phone size={20} className="text-brand-accent mt-1" strokeWidth={1.5} />
                       <div>
                          <span className="block font-inter text-[10px] text-brand-muted uppercase tracking-widest mb-1 font-bold">Call Us</span>
                          <span className="font-inter text-[14px] text-brand-white font-medium">+91 7669932444</span>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <Mail size={20} className="text-brand-accent mt-1" strokeWidth={1.5} />
                       <div>
                          <span className="block font-inter text-[10px] text-brand-muted uppercase tracking-widest mb-1 font-bold">Email</span>
                          <span className="font-inter text-[14px] text-brand-white font-medium">admin@highgrand.com</span>
                       </div>
                    </div>
                 </div>

                 {/* Location */}
                 <div className="p-8 bg-brand-dark/10 border border-brand-border/50 sm:col-span-2 flex items-start gap-6">
                    <MapPin size={28} className="text-brand-accent mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                       <span className="block font-inter text-[10px] text-brand-muted uppercase tracking-widest mb-2 font-bold">Find Us / Studio Address</span>
                       <p className="font-inter text-[14px] text-brand-white leading-relaxed font-medium uppercase tracking-wide">
                          IX/6358, Netaji Gali, Gandhi Nagar, Seelampur, New Delhi, Delhi, 110031
                       </p>
                    </div>
                 </div>

                 {/* Working Hours */}
                 <div className="p-8 bg-brand-accent text-brand-black sm:col-span-2 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                       <Clock size={24} strokeWidth={2} />
                       <span className="font-bebas text-[24px] tracking-widest">WORKING HOURS</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                       <div className="text-center md:text-left">
                          <span className="block font-inter text-[10px] uppercase tracking-widest font-bold opacity-70">Tue - Fri</span>
                          <span className="font-inter text-[15px] font-bold tracking-wider">08:30 - 20:00</span>
                       </div>
                       <div className="text-center md:text-left">
                          <span className="block font-inter text-[10px] uppercase tracking-widest font-bold opacity-70">Sat & Sun</span>
                          <span className="font-inter text-[15px] font-bold tracking-wider">09:30 - 21:30</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Quality Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-24 border-y border-brand-border/50">
           <div className="space-y-4">
              <span className="text-brand-accent font-bebas text-[18px] tracking-widest">01 / FABRIC</span>
              <h3 className="font-bebas text-[28px] text-brand-white tracking-widest">PREMIUM QUALITY</h3>
              <p className="font-inter text-brand-muted text-[13px] leading-relaxed tracking-wide text-balance">
                Ultra-soft, breathable, and built for daily wear. We source only the heaviest, premium cottons—typically 300GSM and above.
              </p>
           </div>
           <div className="space-y-4">
              <span className="text-brand-accent font-bebas text-[18px] tracking-widest">02 / CRAFT</span>
              <h3 className="font-bebas text-[28px] text-brand-white tracking-widest">MADE IN INDIA</h3>
              <p className="font-inter text-brand-muted text-[13px] leading-relaxed tracking-wide text-balance">
                Highgrand supports Indian craftsmanship, giving you quality wear that&apos;s proudly made in Delhi. With Pride.
              </p>
           </div>
           <div className="space-y-4">
              <span className="text-brand-accent font-bebas text-[18px] tracking-widest">03 / ETHOS</span>
              <h3 className="font-bebas text-[28px] text-brand-white tracking-widest">NATURAL CARE</h3>
              <p className="font-inter text-brand-muted text-[13px] leading-relaxed tracking-wide text-balance">
                Our T-shirts are crafted using skin-safe dyes and breathable fabrics for long-lasting comfort without harming nature.
              </p>
           </div>
        </div>

        <div className="mt-32 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair italic text-[32px] md:text-[48px] text-brand-white leading-tight mb-8">
            &quot;Redefining the boundaries of the oversized silhouette.&quot;
          </h2>
          <div className="w-16 h-[1px] bg-brand-accent mx-auto mb-8" />
          <p className="font-inter text-brand-muted text-[10px] tracking-[0.5em] uppercase">The Standard Edition</p>
        </div>
      </div>
    </div>
  );
}
