"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ShieldCheck, Truck, CreditCard } from "lucide-react";

export default function CheckoutPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock Order Summary
  const orderTotal = 4998;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulating payment process
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Order Placed Successfully!");
      router.push("/order/mock-order-123");
    }, 2000);
  };

  return (
    <div className="bg-brand-black min-h-screen pt-[120px] pb-24">
      <div className="container">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-8 text-[11px] font-inter tracking-[0.2em] text-brand-muted uppercase">
          <Link href="/cart" className="hover:text-brand-white transition-colors">Cart</Link>
          <ChevronRight size={12} />
          <span className="text-brand-white">Information</span>
          <ChevronRight size={12} />
          <span className="opacity-50 text-brand-disabled">Shipping</span>
          <ChevronRight size={12} />
          <span className="opacity-50 text-brand-disabled">Payment</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handlePlaceOrder} className="space-y-12">
                
                {/* Contact Section */}
                <section>
                  <div className="flex justify-between items-end mb-6">
                    <h2 className="font-bebas text-[24px] text-brand-white uppercase tracking-wider font-medium">Contact Information</h2>
                    {!session?.user && (
                      <p className="font-inter text-[12px] text-brand-muted uppercase tracking-wider">
                        Already have an account? <Link href="/login" className="text-brand-accent underline underline-offset-4">Login</Link>
                      </p>
                    )}
                  </div>
                  <input 
                    required 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-brand-dark/50 border border-brand-border p-4 text-brand-white font-inter text-body-sm focus:outline-none focus:border-brand-accent transition-colors" 
                  />
                </section>

                {/* Shipping Section */}
                <section>
                  <h2 className="font-bebas text-[24px] text-brand-white mb-6 uppercase tracking-wider font-medium">Shipping Address</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                       <p className="font-inter text-[11px] text-brand-muted uppercase tracking-[0.1em] mb-4">Country/Region: India</p>
                    </div>
                    <input required type="text" placeholder="First Name" className="bg-brand-dark/50 border border-brand-border p-4 text-brand-white font-inter text-body-sm focus:outline-none focus:border-brand-accent transition-colors" />
                    <input required type="text" placeholder="Last Name" className="bg-brand-dark/50 border border-brand-border p-4 text-brand-white font-inter text-body-sm focus:outline-none focus:border-brand-accent transition-colors" />
                    <input required type="text" placeholder="Street Address" className="md:col-span-2 bg-brand-dark/50 border border-brand-border p-4 text-brand-white font-inter text-body-sm focus:outline-none focus:border-brand-accent transition-colors" />
                    <input type="text" placeholder="Apartment, suite, etc. (optional)" className="md:col-span-2 bg-brand-dark/50 border border-brand-border p-4 text-brand-white font-inter text-body-sm focus:outline-none focus:border-brand-accent transition-colors" />
                    <input required type="text" placeholder="City" className="bg-brand-dark/50 border border-brand-border p-4 text-brand-white font-inter text-body-sm focus:outline-none focus:border-brand-accent transition-colors" />
                    <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder="State" className="bg-brand-dark/50 border border-brand-border p-4 text-brand-white font-inter text-body-sm focus:outline-none focus:border-brand-accent transition-colors" />
                      <input required type="text" placeholder="PIN Code" className="bg-brand-dark/50 border border-brand-border p-4 text-brand-white font-inter text-body-sm focus:outline-none focus:border-brand-accent transition-colors" />
                    </div>
                    <input required type="tel" placeholder="Phone Number" className="md:col-span-2 bg-brand-dark/50 border border-brand-border p-4 text-brand-white font-inter text-body-sm focus:outline-none focus:border-brand-accent transition-colors" />
                  </div>
                </section>

                {/* Payment Section */}
                <section>
                  <div className="flex items-center gap-2 mb-6">
                    <h2 className="font-bebas text-[24px] text-brand-white uppercase tracking-wider font-medium">Payment Method</h2>
                    <ShieldCheck size={18} className="text-brand-accent" />
                  </div>
                  
                  <div className="border border-brand-border bg-brand-dark/30 divide-y divide-brand-border overflow-hidden">
                    
                    <label className={`flex items-center gap-4 p-5 cursor-pointer transition-all ${paymentMethod === "razorpay" ? "bg-brand-accent/5" : "hover:bg-brand-white/5"}`}>
                      <input 
                        type="radio" 
                        name="payment" 
                        value="razorpay" 
                        checked={paymentMethod === "razorpay"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="accent-brand-accent w-4 h-4" 
                      />
                      <div className="flex-1 flex items-center justify-between">
                        <span className="font-inter text-[13px] text-brand-white font-medium uppercase tracking-widest text-balance">Razorpay (Cards, UPI, NetBanking)</span>
                        <div className="flex gap-2">
                           {/* Small Icons */}
                           <CreditCard size={14} className="text-brand-muted" />
                        </div>
                      </div>
                    </label>
                    
                    <AnimatePresence>
                      {paymentMethod === "razorpay" && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-brand-black/50"
                        >
                          <div className="p-8 text-center border-t border-brand-border/50">
                            <p className="font-inter text-brand-muted text-[12px] leading-relaxed max-w-sm mx-auto uppercase tracking-wide">
                              Secure transaction through encrypted gateway.<br/>Redirecting to Razorpay dashboard...
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <label className={`flex items-center gap-4 p-5 cursor-pointer transition-all ${paymentMethod === "phonepe" ? "bg-brand-accent/5" : "hover:bg-brand-white/5"}`}>
                      <input 
                        type="radio" 
                        name="payment" 
                        value="phonepe" 
                        checked={paymentMethod === "phonepe"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="accent-brand-accent w-4 h-4" 
                      />
                      <span className="font-inter text-[13px] text-brand-white font-medium uppercase tracking-widest">PhonePe</span>
                    </label>

                  </div>
                </section>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-brand-white text-brand-black px-10 py-5 font-inter font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-brand-accent transition-all duration-500 disabled:opacity-50 relative overflow-hidden group"
                  >
                    <span className={isProcessing ? "opacity-0" : "opacity-100"}>COMPLETE PURCHASE — ₹{orderTotal}</span>
                    {isProcessing && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-brand-black border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </button>
                </div>

              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-brand-dark/40 border border-brand-border p-8 sticky top-[100px]">
              <h2 className="font-bebas text-[24px] text-brand-white mb-8 uppercase tracking-wider font-medium">Order Summary</h2>
              
              <div className="space-y-6 border-b border-brand-border pb-8 mb-8">
                {[1, 2].map(i => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-20 h-24 bg-brand-dark border border-brand-border relative overflow-hidden flex-shrink-0">
                      <div className="absolute top-1 right-1 bg-brand-accent text-brand-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">1</div>
                    </div>
                    <div className="flex-1 font-inter">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-[12px] text-brand-white font-medium uppercase tracking-wider leading-tight">Oversized Vintage Hoodie</p>
                        <p className="text-[13px] text-brand-white font-medium ml-4">₹2499</p>
                      </div>
                      <p className="text-[11px] text-brand-muted uppercase tracking-widest">Size: L / Color: Black</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 font-inter text-body-sm mb-8 pb-8 border-b border-brand-border">
                <div className="flex justify-between">
                  <span className="text-brand-muted uppercase tracking-wider">Subtotal</span>
                  <span className="text-brand-white">₹4998.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-muted uppercase tracking-wider">Shipping</span>
                  <div className="flex items-center gap-2 text-brand-accent">
                    <Truck size={12} />
                    <span className="uppercase tracking-[0.1em] font-medium">FREE</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between font-inter text-[18px] font-bold text-brand-white">
                <span className="uppercase tracking-[0.2em] font-bebas text-h3">Total</span>
                <span className="font-inter">₹4998.00</span>
              </div>
              
              <p className="text-[11px] text-brand-muted mt-8 uppercase tracking-widest leading-relaxed text-center italic">
                Taxes are included in the final price.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
