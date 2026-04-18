import { Camera, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-brand-black min-h-screen pt-[104px] pb-24">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h1 className="font-bebas text-[56px] text-brand-white mb-4 leading-none">CONTACT US</h1>
            <p className="font-inter text-brand-muted text-[15px] leading-relaxed mb-12">
              Have a question about an order, sizing, or just want to say hello? Fill out the form or reach us via email or Instagram.
            </p>

            <div className="space-y-8 font-inter text-[14px]">
              <div className="flex items-center gap-4 text-brand-white border border-brand-border p-6 bg-brand-dark">
                <Mail size={24} className="text-brand-accent" />
                <div>
                  <p className="text-[11px] text-brand-muted uppercase tracking-widest mb-1">Email Support</p>
                  <p className="font-medium">support@highgrand.in</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-brand-white border border-brand-border p-6 bg-brand-dark">
                <Camera size={24} className="text-brand-accent" />
                <div>
                  <p className="text-[11px] text-brand-muted uppercase tracking-widest mb-1">Instagram</p>
                  <Link href="https://instagram.com/highgrand" target="_blank" className="font-medium hover:text-brand-accent transition-colors">@highgrand</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-dark border border-brand-border p-8">
            <h2 className="font-bebas text-[28px] text-brand-white mb-8">SEND A MESSAGE</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-inter text-[11px] text-brand-muted uppercase tracking-[0.1em]">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-brand-border py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="font-inter text-[11px] text-brand-muted uppercase tracking-[0.1em]">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-brand-border py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-inter text-[11px] text-brand-muted uppercase tracking-[0.1em]">Order Number (Optional)</label>
                <input type="text" className="w-full bg-transparent border-b border-brand-border py-2 text-brand-white focus:outline-none focus:border-brand-white transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="font-inter text-[11px] text-brand-muted uppercase tracking-[0.1em]">Message</label>
                <textarea rows={4} className="w-full bg-transparent border border-brand-border p-3 text-brand-white focus:outline-none focus:border-brand-white transition-colors resize-none mt-2" />
              </div>

              <button type="button" className="w-full bg-brand-white text-brand-black py-[14px] px-[32px] font-inter font-medium text-[13px] uppercase tracking-[0.1em] hover:bg-brand-accent transition-colors">
                SUBMIT INQUIRY
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
