"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const { isDrawerOpen, closeDrawer, items, updateQuantity, removeItem, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-brand-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-[450px] bg-brand-black border-l border-brand-border z-[101] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-brand-accent" />
                <h2 className="font-bebas text-[24px] text-brand-white uppercase tracking-widest mt-1">Your Bag</h2>
              </div>
              <button 
                onClick={closeDrawer}
                className="p-2 hover:bg-brand-dark transition-colors text-brand-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-16 h-16 bg-brand-dark border border-brand-border flex items-center justify-center text-brand-muted">
                    <ShoppingBag size={24} />
                  </div>
                  <p className="font-inter text-label text-brand-muted uppercase tracking-[0.2em]">Your bag is empty.</p>
                  <button 
                    onClick={closeDrawer}
                    className="bg-brand-white text-brand-black px-8 py-3 font-inter font-bold text-[11px] uppercase tracking-[0.1em] hover:bg-brand-accent transition-all duration-300"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-6">
                    <div className="w-24 aspect-[3/4] bg-brand-dark border border-brand-border flex-shrink-0 relative overflow-hidden">
                       {/* Placeholder for Product Image */}
                       <div className="absolute inset-0 bg-brand-darker opacity-50" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-bebas text-h4 text-brand-white tracking-wide uppercase leading-none">{item.name}</h3>
                        <button onClick={() => removeItem(item.id)} className="text-brand-muted hover:text-brand-white transition-colors">
                          <X size={14} />
                        </button>
                      </div>
                      <p className="font-inter text-[11px] text-brand-accent uppercase tracking-widest mb-4 font-medium italic">Size: {item.size}</p>
                      
                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center border border-brand-border bg-brand-dark/50">
                          <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 text-brand-white hover:text-brand-accent transition-colors"><Minus size={12} /></button>
                          <span className="font-inter text-[12px] text-brand-white w-8 text-center border-x border-brand-border/30">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 text-brand-white hover:text-brand-accent transition-colors"><Plus size={12} /></button>
                        </div>
                        <span className="font-inter font-bold text-[14px] text-brand-white">₹{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-brand-border bg-brand-dark/20 space-y-6">
                <div className="flex justify-between items-end">
                  <span className="font-inter text-label text-brand-muted uppercase tracking-[0.2em]">Subtotal</span>
                  <span className="font-inter font-bold text-[20px] text-brand-white leading-none">₹{cartTotal.toFixed(2)}</span>
                </div>
                <p className="font-inter text-[10px] text-brand-muted uppercase tracking-widest italic leading-relaxed">
                  Shipping and taxes calculated at checkout. Free shipping on orders above ₹5,000.
                </p>
                <div className="space-y-3">
                  <Link 
                    href="/checkout" 
                    onClick={closeDrawer}
                    className="flex items-center justify-center gap-3 w-full bg-brand-white text-brand-black px-10 py-5 font-inter font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-brand-accent transition-all duration-500 group"
                  >
                    CHECKOUT NOW
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="/cart" 
                    onClick={closeDrawer}
                    className="block w-full text-center border border-brand-border py-4 font-inter font-medium text-[11px] text-brand-white uppercase tracking-[0.2em] hover:border-brand-white transition-colors"
                  >
                    View Shopping Bag
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
