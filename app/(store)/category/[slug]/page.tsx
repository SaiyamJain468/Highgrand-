"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.replace('-', ' ').toUpperCase();
  const productCount: number = 12;

  if (productCount === 0) {
    redirect("/");
  }

  const products = Array(12).fill(null).map((_, i) => ({
    id: i,
    name: `The Archival Silhouette EX-01`,
    price: 2499,
    comparePrice: 3999,
    // Using the same 2 demo images for all products to show the system consistency
    images: [`/products/IMG-20250713-WA0013.jpg`, `/products/IMG-20250713-WA0014.jpg`]
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const item: any = {
    hidden: { opacity: 0, y: 20 },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as any } }
  };

  return (
    <div className="bg-brand-black min-h-screen pt-[120px] pb-32">
      <div className="container-wide">
        
        {/* Category Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-border pb-10 mb-12 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-[1px] bg-brand-accent" />
              <p className="font-inter text-label text-brand-muted uppercase tracking-[0.2em]">COLLECTION</p>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-bebas text-h2 md:text-h1 text-brand-white tracking-widest leading-none uppercase"
            >
              {categoryName}
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-inter text-body-sm text-brand-muted uppercase tracking-[0.1em]"
          >
            {productCount} ARCHIVAL PIECES
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Filter Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-12">
              
              <div className="flex items-center gap-2 text-brand-white mb-6">
                <SlidersHorizontal size={16} />
                <span className="font-inter text-[12px] font-bold uppercase tracking-[0.1em]">Filters</span>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="font-inter text-[11px] font-bold text-brand-white uppercase tracking-[0.2em] mb-6 flex justify-between items-center group cursor-pointer">
                    Sort Order
                    <ChevronDown size={14} className="text-brand-muted group-hover:text-brand-white transition-colors" />
                  </h3>
                  <div className="flex flex-col gap-4 font-inter text-body-sm text-brand-muted">
                    {['New Arrivals', 'Price: Low to High', 'Price: High to Low', 'Bestselling'].map((sort, i) => (
                      <label key={sort} className="flex items-center gap-3 cursor-pointer hover:text-brand-white transition-all duration-300 transform hover:translate-x-1">
                        <input type="radio" name="sort" className="accent-brand-accent w-4 h-4 bg-transparent border-brand-border" defaultChecked={i === 0} /> 
                        <span className="uppercase text-[11px] tracking-widest">{sort}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-inter text-[11px] font-bold text-brand-white uppercase tracking-[0.2em] mb-6">Archival Sizes</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                      <button key={size} className="border border-brand-border/50 aspect-square flex items-center justify-center font-inter text-[11px] text-brand-muted hover:border-brand-accent hover:text-brand-accent transition-all duration-300">
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16"
            >
              {products.map((product) => (
                <motion.div key={product.id} variants={item}>
                  <Link href={`/product/archival-tee-${product.id}`} className="group block">
                    <div className="aspect-[3/4] bg-brand-dark border border-brand-border relative overflow-hidden mb-6">
                      <div className="absolute inset-0 bg-brand-dark/20 z-10" />
                      <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/5 transition-colors duration-500 z-20" />
                      <div className="absolute top-4 left-4 bg-brand-white text-brand-black font-inter font-bold text-[9px] px-3 py-1 uppercase tracking-widest z-30">
                        {product.id === 0 ? "DEMO PRODUCT" : "NEW ARRIVAL"}
                      </div>
                      
                      <Image 
                        src={product.images[0]} 
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-smooth"
                      />
                      
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-bebas text-[20px] text-brand-white tracking-widest group-hover:text-brand-accent transition-colors leading-none">{product.name}</h3>
                      <div className="flex items-center gap-4">
                         <span className="font-inter font-bold text-[14px] text-brand-white tracking-wider font-inter leading-none">₹{product.price}</span>
                         <span className="font-inter text-[12px] text-brand-disabled line-through tracking-wider leading-none">₹{product.comparePrice}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            <div className="mt-24 border-t border-brand-border pt-12 flex justify-center gap-6">
              {['PREV', '1', '2', '3', 'NEXT'].map(p => (
                <button key={p} className={`font-inter text-[11px] font-bold tracking-[0.2em] px-4 py-2 hover:text-brand-accent transition-colors ${p === '1' ? 'text-brand-accent underline underline-offset-8' : 'text-brand-muted'}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
