"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Clock, RefreshCcw, PackageCheck } from "lucide-react";

export default function ReturnsPage() {
  const policies = [
    {
      icon: <Clock className="text-brand-accent" size={24} />,
      title: "48-HOUR ELIGIBILITY",
      content: "Return requests must be initiated within strictly 48 hours of delivery. Any requests beyond this window will be automatically rejected by our system to maintain archival integrity."
    },
    {
      icon: <ShieldAlert className="text-brand-accent" size={24} />,
      title: "STRICTLY NO REFUNDS",
      content: "We do not offer cash or bank refunds under any circumstances. Approved returns are issued strictly as Store Credit (Highgrand Credits) valid for 12 months."
    },
    {
       icon: <PackageCheck className="text-brand-accent" size={24} />,
       title: "ARCHIVAL INTEGRITY",
       content: "Items must be returned in original condition: unworn, unwashed, and with all original tags/seals intact. Any signs of wear or 'sampling' will result in an immediate forfeiture of the return."
    },
    {
       icon: <RefreshCcw className="text-brand-accent" size={24} />,
       title: "FINAL SALE ITEMS",
       content: "Any items purchased during a Drop Launch, Limited Edition releases, or using promotional discounts are labeled as FINAL SALE and are ineligible for return or exchange."
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
            <span className="font-inter text-label text-brand-muted uppercase tracking-[0.3em]">Policy Agreement</span>
          </div>
          <h1 className="font-bebas text-[48px] md:text-[80px] text-brand-white leading-none mb-8 uppercase tracking-tighter">RETURNS & EXCHANGES</h1>
          <p className="font-inter text-brand-muted text-[15px] leading-relaxed max-w-2xl">
            Highgrand operates on a limited-release model. Our return policy is structured to protect the exclusivity and quality of our pieces. By purchasing from us, you agree to these strict archival standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {policies.map((policy, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-brand-dark/30 border border-brand-border/50 group hover:border-brand-accent transition-colors"
            >
              <div className="mb-6">{policy.icon}</div>
              <h3 className="font-bebas text-[24px] text-brand-white mb-4 tracking-wider">{policy.title}</h3>
              <p className="font-inter text-brand-muted text-[13px] leading-relaxed uppercase tracking-wide">
                {policy.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="p-12 bg-brand-accent text-brand-black">
           <h2 className="font-bebas text-[32px] mb-6 leading-none tracking-widest">HOW TO INITIATE A RETURN</h2>
           <div className="space-y-6 font-inter text-[14px] font-bold uppercase tracking-wider">
              <p>1. Ensure your item meets ALL strict criteria above.</p>
              <p>2. Email authentication@highgrand.com with your Order ID and photographic evidence of the item&apos;s condition.</p>
              <p>3. If approved, you will receive a Return Authorization Code.</p>
              <p>4. Securely ship the item back. Shipping costs for returns are the responsibility of the customer.</p>
           </div>
        </div>

        <div className="mt-20 border-t border-brand-border pt-12">
           <p className="font-inter text-[11px] text-brand-disabled uppercase tracking-[0.2em] italic text-center">
              *Highgrand reserves the right to reject any return that does not meet our archival standards upon physical inspection.
           </p>
        </div>
      </div>
    </div>
  );
}
