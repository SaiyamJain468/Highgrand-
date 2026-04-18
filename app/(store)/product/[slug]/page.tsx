"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/context/CartContext";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Ruler, Heart, Share2, ShieldCheck } from "lucide-react";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>("desc");
  const { addItem } = useCart();

  // Mock Data
  const product = {
    id: params.slug,
    name: "THE ARCHIVAL SILHOUETTE EX-01",
    price: 2499,
    comparePrice: 3999,
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: false },
      { name: "L", inStock: true },
      { name: "XL", inStock: true }
    ],
    images: [`/products/IMG-20250713-WA0001.jpg`, `/products/IMG-20250713-WA0002.jpg`],
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("PLEASE SELECT A SIZE");
      return;
    }
    setIsAdding(true);
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: selectedSize,
      image: product.images[0]
    });

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="bg-brand-black min-h-screen pt-[100px] pb-32">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
            {product.images.map((img, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-brand-dark/30 border border-brand-border overflow-hidden relative group ${i === 0 ? 'md:col-span-2 aspect-[4/5]' : 'aspect-[3/4]'}`}
              >
                 <Image 
                   src={img} 
                   alt={`${product.name} view ${i + 1}`} 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-smooth" 
                 />
                {i === 0 && (
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-brand-accent text-brand-black font-inter font-bold text-[10px] px-4 py-1.5 uppercase tracking-[0.2em]">
                      EDITORIAL CHOICE
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-4 mb-4">
                <span className="font-inter text-[11px] text-brand-muted uppercase tracking-[0.2em]">Oversized</span>
                <span className="font-inter text-[11px] text-brand-muted uppercase tracking-[0.2em]">/</span>
                <span className="font-inter text-[11px] text-brand-muted uppercase tracking-[0.2em]">Hoodies</span>
              </div>

              <h1 className="font-bebas text-[56px] md:text-[72px] leading-[0.9] text-brand-white uppercase mb-6 tracking-wide">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-12">
                <span className="font-inter font-bold text-[24px] text-brand-white tracking-wider leading-none">₹{product.price}</span>
                <span className="font-inter text-[18px] text-brand-disabled line-through leading-none">₹{product.comparePrice}</span>
                <div className="h-4 w-[1px] bg-brand-border" />
                <span className="text-brand-accent font-inter text-[12px] font-bold uppercase tracking-[0.1em] italic">
                   Archival Value
                </span>
              </div>

              {/* Size Selector */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-inter text-[11px] font-bold uppercase text-brand-white tracking-[0.2em]">
                    Size: {selectedSize || "Select"}
                  </span>
                  <button className="flex items-center gap-2 font-inter text-[11px] uppercase text-brand-muted hover:text-brand-white transition-colors tracking-[0.1em] border-b border-brand-muted pb-0.5">
                    <Ruler size={14} strokeWidth={1.5} />
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      disabled={!size.inStock}
                      onClick={() => setSelectedSize(size.name)}
                      className={`h-[56px] border font-inter text-[12px] font-bold flex items-center justify-center transition-all duration-300
                        ${!size.inStock ? "border-brand-border/30 text-brand-disabled cursor-not-allowed bg-brand-black" : 
                          selectedSize === size.name 
                            ? "border-brand-accent bg-brand-accent text-brand-black scale-[1.05] shadow-[0_0_20px_rgba(200,169,110,0.2)]" 
                            : "border-brand-border text-brand-white hover:border-brand-white bg-transparent"
                        }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4 mb-16">
                <button 
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className={`flex-1 py-5 font-inter font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-500 transform
                    ${isAdding ? "bg-brand-accent text-brand-black" : "bg-brand-white text-brand-black hover:bg-brand-accent hover:scale-[1.02]"}
                  `}
                >
                  {isAdding ? "✓ IN YOUR BAG" : "AUTHENTICATE & ADD"}
                </button>
                <button className="w-14 h-14 border border-brand-border flex items-center justify-center text-brand-white hover:border-brand-white transition-colors group">
                  <Heart size={20} strokeWidth={1.5} className="group-hover:fill-brand-white transition-all transform group-hover:scale-110" />
                </button>
              </div>

              {/* Info Badges */}
              <div className="grid grid-cols-3 gap-4 mb-16 py-8 border-y border-brand-border">
                <div className="flex flex-col items-center text-center gap-3">
                   <ShieldCheck size={20} className="text-brand-accent" />
                   <span className="font-inter text-[9px] text-brand-muted uppercase tracking-widest font-medium">Genuine Item</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                   <div className="text-brand-white font-bebas text-[18px] leading-none mt-1 items-center flex">300<span className="text-[10px] ml-1 uppercase">GSM</span></div>
                   <span className="font-inter text-[9px] text-brand-muted uppercase tracking-widest font-medium">Healvyweight</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                   <Share2 size={20} className="text-brand-accent" />
                   <span className="font-inter text-[9px] text-brand-muted uppercase tracking-widest font-medium">Global Access</span>
                </div>
              </div>

              {/* Accordions */}
              <div className="space-y-4">
                {[
                  { id: 'desc', title: 'Product Vision', content: 'Crafted with architectural precision, our oversized hoodie features a heavyweight double-knit interlock structure. The drop-shoulder silhouette provides a structured yet relaxed form that maintains its character over time.' },
                  { id: 'fit', title: 'Fitting & Sizing', content: 'Models are 6&apos;1&quot; wearing size L. True to oversized fit. If you prefer a more tailored look, size down one. Chest measurements: S (52&quot;), M (54&quot;), L (56&quot;).' },
                  { id: 'shipping', title: 'Shipping & Logistics', content: 'Dispatch within 48 hours. Express global shipping included. Tracking ID generated instantly upon authentication.' }
                ].map((acc) => (
                  <div key={acc.id} className="border-b border-brand-border/50">
                    <button 
                      onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                      className="w-full flex justify-between items-center py-5 group focus:outline-none"
                    >
                      <span className={`font-inter text-[12px] font-bold uppercase tracking-[0.2em] transition-colors ${activeAccordion === acc.id ? 'text-brand-accent' : 'text-brand-white'}`}>
                        {acc.title}
                      </span>
                      <Plus size={16} className={`text-brand-muted transition-transform duration-300 ${activeAccordion === acc.id ? 'rotate-45' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeAccordion === acc.id && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 font-inter text-brand-muted text-[13px] leading-relaxed tracking-wide">
                            {acc.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
