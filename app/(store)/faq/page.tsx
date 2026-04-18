"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "HOW DO I AUTHENTICATE MY HIGHGRAND PIECE?",
      a: "Every Highgrand garment comes with a unique Archival Serial Number (ASN) on the internal label. You can verify the authenticity of your piece by entering this code on our upcoming 'Archive' portal."
    },
    {
      q: "WHAT ARE YOUR SHIPPING TIMES?",
      a: "As we operate on a drop-based model, shipping typically begins within 48-72 hours of the drop. Domestic orders arrive within 5-7 business days, while international archival pieces may take 10-14 days."
    },
    {
      q: "HOW DO I FIND MY PERFECT FIT?",
      a: "Our silhouettes are architecturally engineered for an 'Editorial Oversized' look. We recommend ordering your true size for the intended fit. Detailed GSM and dimension charts are available on every product page."
    },
    {
      q: "DO YOU RESTOCK DROPS?",
      a: "In the interest of exclusivity, most Highgrand pieces are produced in single, limited batches and are never restocked. Once the archive is depleted, it is closed."
    },
    {
      q: "WHAT IF MY ITEM ARRIVES DAMAGED?",
      a: "Quality is our foundation. If an item arrives with a production defect, please contact authentication@highgrand.com within 24 hours of delivery. For more details, see our strictly enforced Returns Policy."
    }
  ];

  return (
    <div className="bg-brand-black min-h-screen pt-[120px] pb-32">
      <div className="container max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <p className="font-inter text-label text-brand-accent uppercase tracking-[0.3em] mb-4">Support & Inquiry</p>
          <h1 className="font-bebas text-[48px] md:text-[80px] text-brand-white leading-none mb-8 uppercase tracking-tighter">THE ARCHIVE FAQ</h1>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-brand-border pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left group focus:outline-none"
              >
                <span className={`font-bebas text-[20px] md:text-[24px] tracking-widest transition-colors ${openIndex === i ? 'text-brand-accent' : 'text-brand-white group-hover:text-brand-accent'}`}>
                  {faq.q}
                </span>
                <div className="text-brand-muted">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 font-inter text-brand-muted text-[15px] leading-relaxed uppercase tracking-wide">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-brand-dark/20 border border-brand-border text-center">
           <p className="font-inter text-brand-muted text-[13px] uppercase tracking-[0.2em] mb-8">Still looking for answers?</p>
           <a 
             href="mailto:admin@highgrand.com" 
             className="inline-block bg-brand-white text-brand-black px-12 py-5 font-inter font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-brand-accent transition-all transform hover:scale-105"
           >
              CONTACT THE STUDIO
           </a>
        </div>
      </div>
    </div>
  );
}
