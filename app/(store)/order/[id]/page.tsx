"use client";

import Link from "next/link";
import { Copy, CheckCircle2, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function OrderConfirmationPage({ params }: { params: { id: string } }) {
  const [copied, setCopied] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  // TASK 52: Order Placed Animation (mocked with framer-motion)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const copyOrderId = () => {
    navigator.clipboard.writeText(params.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (showAnimation) {
    return (
      <div className="bg-brand-black min-h-[80vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-6"
        >
          <CheckCircle2 size={80} className="text-brand-success" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-bebas text-[48px] text-brand-white uppercase"
        >
          ORDER SECURED
        </motion.h1>
      </div>
    );
  }

  // TASK 53 & 54: Order Details & Tracking
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-black min-h-screen pt-[104px] pb-24"
    >
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-bebas text-[40px] text-brand-white mb-2 uppercase tracking-wide">THANK YOU</h1>
          <p className="font-inter text-brand-muted text-body-sm uppercase tracking-widest">
            Your order has been confirmed.
          </p>
        </div>

        <div className="bg-brand-dark border border-brand-border p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-brand-border pb-6 mb-6">
            <div>
              <p className="font-inter text-[11px] text-brand-muted uppercase tracking-[0.1em] mb-1">Order Number</p>
              <div className="flex items-center gap-3">
                <span className="font-inter font-medium text-[16px] text-brand-white">{params.id.toUpperCase()}</span>
                <button onClick={copyOrderId} className="text-brand-muted hover:text-brand-white transition-colors">
                  {copied ? <CheckCircle2 size={16} className="text-brand-success" /> : <Copy size={16} />}
                </button>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="font-inter text-[11px] text-brand-muted uppercase tracking-[0.1em] mb-1">Status</p>
              <span className="bg-[#1A1A1A] border border-brand-border px-3 py-1 font-inter text-[11px] text-brand-white uppercase tracking-wider">
                PROCESSING
              </span>
            </div>
          </div>

          <h2 className="font-bebas text-[28px] text-brand-white mb-6 uppercase tracking-wide">ORDER DETAILS</h2>
          <div className="flex flex-col gap-4 border-b border-brand-border pb-6 mb-6">
            {[1, 2].map(i => (
              <div key={i} className="flex gap-4">
                <div className="w-16 h-[85px] bg-[#111111] border border-brand-border flex-shrink-0" />
                <div className="flex-1 font-inter">
                  <p className="text-[13px] text-brand-white font-medium uppercase">Mock Oversized Tee {i}</p>
                  <p className="text-[12px] text-brand-muted mt-1">Size: L | Qty: 1</p>
                  <p className="text-[14px] text-brand-white mt-2">₹1999</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 font-inter text-[13px] text-brand-white border-b border-brand-border pb-6 mb-6">
            <div className="flex justify-between">
              <span className="text-brand-muted">Subtotal</span>
              <span>₹3998</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-muted">Shipping</span>
              <span>FREE</span>
            </div>
            <div className="flex justify-between font-medium text-[16px] mt-2 pt-2 border-t border-brand-border">
              <span>Total</span>
              <span>₹3998</span>
            </div>
          </div>

          {/* TASK 54: Tracking Section */}
          <div className="bg-[#111111] border border-brand-border p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-inter font-medium text-[13px] text-brand-white uppercase tracking-[0.1em] mb-1">TRACK YOUR ORDER</h3>
              <p className="font-inter text-[12px] text-brand-muted">We will send you tracking details once shipped.</p>
            </div>
            <Link 
              href="https://shiprocket.co/tracking/mock" 
              target="_blank"
              className="w-full md:w-auto bg-transparent border border-brand-white text-brand-white px-6 py-[12px] font-inter font-medium text-[11px] uppercase tracking-[0.1em] hover:bg-brand-white hover:text-brand-black transition-colors text-center flex items-center justify-center gap-2"
            >
              TRACK SHIPMENT <ChevronRight size={14} />
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="font-inter text-[12px] text-brand-white underline underline-offset-4 hover:text-brand-accent transition-colors uppercase tracking-[0.1em]">
            RETURN TO STORE
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
