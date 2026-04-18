"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Oversized Vintage Hoodie",
      size: "L",
      price: 3499,
      quantity: 1,
      image: "/product-1.jpg"
    },
    {
      id: "2",
      name: "Drop Shoulder Essential Tee",
      size: "M",
      price: 1499,
      quantity: 2,
      image: "/product-2.jpg"
    }
  ]);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = couponCode === "HIGHGRAND10" ? subtotal * 0.1 : 0;
  const shipping = subtotal > 5000 ? 0 : 150;
  const total = subtotal - discount + shipping;

  return (
    <div className="bg-brand-black min-h-screen pt-[120px] pb-24">
      <div className="container">
        
        <div className="flex items-center gap-4 mb-12">
          <h1 className="font-bebas text-[48px] md:text-[64px] text-brand-white tracking-widest uppercase leading-none">YOUR BAG</h1>
          <span className="font-inter text-label text-brand-muted bg-brand-dark px-3 py-1 border border-brand-border">
            {cartItems.length} ITEMS
          </span>
        </div>

        <AnimatePresence mode="wait">
          {cartItems.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-32 border-y border-brand-border bg-brand-dark/20"
            >
              <div className="flex justify-center mb-8">
                 <div className="w-16 h-16 bg-brand-dark border border-brand-border flex items-center justify-center text-brand-disabled">
                   <ShoppingBag size={32} strokeWidth={1} />
                 </div>
              </div>
              <p className="font-inter text-brand-muted text-body-lg mb-10 uppercase tracking-[0.3em]">Your bag is currently empty.</p>
              <Link href="/category/all" className="inline-block bg-brand-white text-brand-black px-12 py-5 font-inter font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-brand-accent transition-all duration-500 transform hover:scale-105">
                START EXPLORING
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Item List */}
              <div className="lg:col-span-8 space-y-8">
                <div className="hidden md:grid grid-cols-12 border-b border-brand-border pb-6 font-inter text-[11px] uppercase tracking-[0.2em] text-brand-muted">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-3 text-right">Subtotal</div>
                </div>

                <div className="space-y-12">
                  <AnimatePresence>
                    {cartItems.map(item => (
                      <motion.div 
                        key={item.id} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-brand-border/50 pb-12 last:border-0 last:pb-0"
                      >
                        <div className="col-span-12 md:col-span-6 flex gap-8">
                          <div className="w-[120px] aspect-[3/4] bg-brand-dark relative overflow-hidden flex-shrink-0 border border-brand-border group">
                            <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/10 transition-colors" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="font-bebas text-h4 text-brand-white uppercase mb-2 tracking-wide">{item.name}</h3>
                            <p className="font-inter text-[12px] text-brand-muted uppercase tracking-widest mb-4">SIZE: <span className="text-brand-white">{item.size}</span></p>
                            <button 
                              onClick={() => removeItem(item.id)} 
                              className="text-left font-inter text-[10px] text-brand-muted hover:text-brand-error transition-colors uppercase tracking-[0.2em] border-b border-brand-muted hover:border-brand-error w-fit pb-1"
                            >
                              Remove Item
                            </button>
                          </div>
                        </div>

                        <div className="col-span-6 md:col-span-3 flex justify-start md:justify-center">
                          <div className="flex items-center border border-brand-border bg-brand-dark/50">
                            <button onClick={() => updateQuantity(item.id, -1)} className="px-4 py-3 text-brand-white hover:text-brand-accent transition-colors"><Minus size={14} /></button>
                            <span className="font-inter text-[13px] text-brand-white w-10 text-center font-medium border-x border-brand-border/50">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="px-4 py-3 text-brand-white hover:text-brand-accent transition-colors"><Plus size={14} /></button>
                          </div>
                        </div>

                        <div className="col-span-6 md:col-span-3 text-right">
                          <span className="font-inter font-bold text-[16px] text-brand-white tracking-wider">₹{item.price * item.quantity}</span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-4">
                <div className="bg-brand-dark/40 border border-brand-border p-8 sticky top-[100px]">
                  <h2 className="font-bebas text-[24px] text-brand-white mb-8 uppercase tracking-wider font-medium">Checkout Details</h2>
                  
                  <div className="space-y-6 font-inter text-body-sm text-brand-white mb-8 pb-8 border-b border-brand-border">
                    <div className="flex justify-between">
                      <span className="text-brand-muted uppercase tracking-wider">Subtotal</span>
                      <span className="font-medium font-inter tracking-wider">₹{subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-brand-accent">
                        <span className="uppercase tracking-wider font-medium">Promotion (HIGHGRAND10)</span>
                        <span>-₹{discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-brand-muted uppercase tracking-wider">Estimated Shipping</span>
                      <span className="font-medium tracking-widest">{shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`}</span>
                    </div>
                  </div>

                  <div className="flex justify-between font-inter text-[20px] font-bold text-brand-white mb-10">
                    <span className="uppercase tracking-wider font-bebas text-h3 leading-none">Bag Total</span>
                    <span className="leading-none tracking-wider">₹{total.toFixed(2)}</span>
                  </div>

                  {/* Coupon */}
                  <div className="mb-10 group">
                    <label className="block font-inter text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-3 group-hover:text-brand-accent transition-colors">Apply Promo Code</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                        className="flex-1 bg-brand-black/50 border border-brand-border px-4 py-3 font-inter text-body-sm text-brand-white focus:outline-none focus:border-brand-accent transition-colors uppercase tracking-[0.1em]"
                        placeholder="HIGHGRAND10"
                      />
                    </div>
                  </div>

                  <Link href="/checkout" className="flex items-center justify-center gap-3 w-full bg-brand-white text-brand-black px-10 py-5 font-inter font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-brand-accent transition-all duration-500 group">
                    SECURE CHECKOUT
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="mt-8 pt-8 border-t border-brand-border/50 text-center">
                    <p className="font-inter text-[11px] text-brand-muted uppercase tracking-[0.1em] leading-relaxed italic">
                      Complimentary carbon-neutral shipping on all orders over ₹5,000.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
