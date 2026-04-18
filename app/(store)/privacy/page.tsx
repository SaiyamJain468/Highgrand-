"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. DATA COLLECTION",
      content: "We collect only essential data required to authenticate and deliver your orders. This includes your name, shipping address, email, and transaction history. We do not store credit card information on our servers."
    },
    {
      title: "2. USAGE OF INFORMATION",
      content: "Your information is used strictly for order fulfillment, archival authentication updates, and essential communication regarding your purchases. We do not sell or trade your data with third-party advertisers."
    },
    {
      title: "3. SECURITY ARCHITECTURE",
      content: "All data is encrypted using industry-standard SSL protocols. Our database is secured and monitored to prevent unauthorized access, ensuring your archival history remains private."
    },
    {
       title: "4. COOKIE POLICY",
       content: "We use minimalist cookies to enhance your navigation experience and maintain your shopping bag. You may disable cookies in your browser, but some archival features may be impacted."
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
            <span className="font-inter text-label text-brand-muted uppercase tracking-[0.3em]">Identity Sovereignty</span>
          </div>
          <h1 className="font-bebas text-[48px] md:text-[80px] text-brand-white leading-none mb-8 uppercase tracking-tighter">PRIVACY POLICY</h1>
          <p className="font-inter text-brand-muted text-[15px] leading-relaxed max-w-2xl uppercase tracking-widest">
            Safeguarding your digital silhouette within the Highgrand ecosystem.
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
              Your continued use of the Highgrand Archive constitutes acceptance of these privacy standards.
           </p>
        </div>
      </div>
    </div>
  );
}
