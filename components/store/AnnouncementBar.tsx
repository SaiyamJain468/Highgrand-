"use client";

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-accent text-brand-black h-9 flex items-center overflow-hidden whitespace-nowrap w-full border-b border-brand-border">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            <span className="font-inter font-medium text-[12px] uppercase tracking-[0.12em]">
              FREE SHIPPING ON ALL ORDERS · NEW DROP EVERY FRIDAY · LIMITED STOCK AVAILABLE
            </span>
            <span className="text-brand-black/30">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
