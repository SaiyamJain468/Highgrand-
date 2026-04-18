"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  const sections = [
    {
      title: "1. ARCHIVAL PURCHASES",
      content: "All orders placed with Highgrand represent an agreement to purchase limited edition archival garments. We reserve the right to limit quantities per customer and cancel any order suspected of resale or bot activity."
    },
    {
      title: "2. PRICING & TRANSACTION",
      content: "All prices are listed in INR and are subject to change without notice. Transactions are processed securely via our verified payment partners. We are not responsible for bank-side delays or transaction failures."
    },
    {
      title: "3. INTELLECTUAL PROPERTY",
      content: "All content, designs, silhouettes, and 'HIGHGRAND' brand marks are the intellectual property of Highgrand India. Unauthorized reproduction or 'referencing' of our architectural patterns is strictly prohibited."
    },
    {
       title: "4. SHIPMENT & LOGISTICS",
       content: "Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier. We are not responsible for shipping delays caused by third-party logistics partners or customs clearance."
    }
  ];

  return (
    <div className="bg-brand-black min-h-screen pt-[120px] pb-32">
      <div className="container max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-brand-accent" />
            <span className="font-inter text-label text-brand-muted uppercase tracking-[0.3em]">Legal Framework</span>
          </div>
          <h1 className="font-bebas text-[48px] md:text-[80px] text-brand-white leading-none mb-8 uppercase tracking-tighter">TERMS & CONDITIONS</h1>
          <p className="font-inter text-brand-muted text-[15px] leading-relaxed max-w-2xl uppercase tracking-widest">
            Last Updated: April 2026. Please read these terms carefully before engaging with the Archive.
          </p>
        </motion.div>

        <div className="space-y-16">
          {sections.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-bebas text-[28px] text-brand-white mb-6 tracking-widest">{section.title}</h3>
              <p className="font-inter text-brand-muted text-[15px] leading-[1.8] tracking-widest uppercase">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-brand-border">
           <p className="font-inter text-[11px] text-brand-disabled uppercase tracking-[0.2em] italic">
              Governed by the laws of India. Highgrand reserves the right to amend these terms at any time.
           </p>
        </div>
      </div>
    </div>
  );
}
