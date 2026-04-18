import { notFound } from "next/navigation";

export default function PolicyPage({ params }: { params: { slug: string } }) {
  const policies: Record<string, { title: string; content: React.ReactNode }> = {
    "privacy-policy": {
      title: "Privacy Policy",
      content: (
        <>
          <p>This Privacy Policy describes how HIGHGRAND (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your personal information when you visit or make a purchase from our store.</p>
          <h3 className="text-brand-white font-medium mt-6 mb-2 text-[14px]">Information We Collect</h3>
          <p>When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases.</p>
        </>
      )
    },
    "refund-policy": {
      title: "Refund Policy",
      content: (
        <>
          <p>We accept returns within 7 days of delivery. The item must be unworn, unwashed, and in its original condition with all tags attached.</p>
          <h3 className="text-brand-white font-medium mt-6 mb-2 text-[14px]">Exchange Process</h3>
          <p>To initiate an exchange, please contact us at support@highgrand.in with your order number. Once approved, you will receive shipping instructions.</p>
        </>
      )
    },
    "shipping-policy": {
      title: "Shipping Policy",
      content: (
        <>
          <p>All orders are processed within 1-2 business days. Standard shipping within India takes 3-5 business days depending on your location.</p>
          <h3 className="text-brand-white font-medium mt-6 mb-2 text-[14px]">Shipping Rates</h3>
          <p>We offer free standard shipping on all orders over ₹5,000. For orders under ₹5,000, a flat rate of ₹150 applies.</p>
        </>
      )
    },
    "terms-of-service": {
      title: "Terms of Service",
      content: (
        <>
          <p>By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website.</p>
          <h3 className="text-brand-white font-medium mt-6 mb-2 text-[14px]">Accuracy, Completeness and Timeliness of Information</h3>
          <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only.</p>
        </>
      )
    }
  };

  const policy = policies[params.slug];

  if (!policy) {
    notFound();
  }

  return (
    <div className="bg-brand-black min-h-screen pt-[104px] pb-24">
      <div className="container max-w-4xl">
        <h1 className="font-bebas text-[48px] text-brand-white mb-10 tracking-wide uppercase">
          {policy.title}
        </h1>
        <div className="bg-brand-dark border border-brand-border p-8 font-inter text-[13px] text-brand-muted leading-relaxed space-y-4">
          <p className="text-[11px] uppercase tracking-widest border-b border-brand-border pb-4 mb-6">Last Updated: October 2026</p>
          {policy.content}
        </div>
      </div>
    </div>
  );
}
