"use client";

import Link from "next/link";
import { ArrowLeft, Upload } from "lucide-react";
import { useState } from "react";

export default function AdminAddProductPage() {
  const [sizes, setSizes] = useState([
    { size: "S", stock: 0 },
    { size: "M", stock: 0 },
    { size: "L", stock: 0 },
    { size: "XL", stock: 0 },
  ]);

  const updateStock = (index: number, stock: number) => {
    const newSizes = [...sizes];
    newSizes[index].stock = stock;
    setSizes(newSizes);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/products" className="text-brand-muted hover:text-brand-white transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-bebas text-[36px] text-brand-white uppercase tracking-wide leading-none pt-1">ADD PRODUCT</h1>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 border border-brand-border font-inter font-medium text-[12px] uppercase tracking-[0.1em] text-brand-white hover:bg-[#1A1A1A] transition-colors">
            SAVE AS DRAFT
          </button>
          <button className="px-6 py-2 bg-brand-white text-brand-black font-inter font-medium text-[12px] uppercase tracking-[0.1em] hover:bg-brand-accent transition-colors">
            PUBLISH PRODUCT
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Basic Info */}
          <section className="bg-brand-dark border border-brand-border p-6">
            <h2 className="font-bebas text-[20px] text-brand-white mb-6 uppercase tracking-wider">Basic Information</h2>
            <div className="space-y-6">
              <div>
                <label className="block font-inter text-[11px] font-medium text-brand-white uppercase tracking-widest mb-2">Product Name</label>
                <input type="text" className="w-full bg-brand-black border border-brand-border p-3 font-inter text-[13px] text-brand-white focus:outline-none focus:border-brand-white transition-colors" placeholder="e.g. Oversized Vintage Tie-Dye Hoodie" />
              </div>
              <div>
                <label className="block font-inter text-[11px] font-medium text-brand-white uppercase tracking-widest mb-2">Description</label>
                <textarea rows={6} className="w-full bg-brand-black border border-brand-border p-3 font-inter text-[13px] text-brand-white focus:outline-none focus:border-brand-white transition-colors resize-none" placeholder="Detailed product description..." />
              </div>
            </div>
          </section>

          {/* Media */}
          <section className="bg-brand-dark border border-brand-border p-6">
            <h2 className="font-bebas text-[20px] text-brand-white mb-6 uppercase tracking-wider">Media</h2>
            <div className="border-2 border-dashed border-brand-border p-12 flex flex-col items-center justify-center bg-brand-black relative hover:border-brand-muted transition-colors cursor-pointer group">
              <Upload size={32} className="text-brand-muted mb-4 group-hover:text-brand-white transition-colors" />
              <p className="font-inter font-medium text-[13px] text-brand-white mb-1">Click or drag images to upload</p>
              <p className="font-inter text-[11px] text-brand-muted">JPEG, PNG up to 5MB (Cloudinary)</p>
            </div>
          </section>

          {/* Variants */}
          <section className="bg-brand-dark border border-brand-border p-6">
            <h2 className="font-bebas text-[20px] text-brand-white mb-6 uppercase tracking-wider">Inventory & Sizes</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-12 gap-4 border-b border-brand-border pb-2">
                <div className="col-span-4 font-inter text-[11px] text-brand-muted uppercase tracking-widest">Size</div>
                <div className="col-span-8 font-inter text-[11px] text-brand-muted uppercase tracking-widest">Available Stock</div>
              </div>

              {sizes.map((item, index) => (
                <div key={item.size} className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-4 font-inter font-medium text-[14px] text-brand-white">{item.size}</div>
                  <div className="col-span-8">
                    <input 
                      type="number" 
                      min="0"
                      value={item.stock}
                      onChange={(e) => updateStock(index, parseInt(e.target.value) || 0)}
                      className="w-full max-w-[150px] bg-brand-black border border-brand-border p-2 font-inter text-[13px] text-brand-white focus:outline-none focus:border-brand-white transition-colors" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          
          {/* Organization */}
          <section className="bg-brand-dark border border-brand-border p-6">
            <h2 className="font-bebas text-[20px] text-brand-white mb-6 uppercase tracking-wider">Organization</h2>
            <div className="space-y-6">
              <div>
                <label className="block font-inter text-[11px] font-medium text-brand-white uppercase tracking-widest mb-2">Category</label>
                <select className="w-full bg-brand-black border border-brand-border p-3 font-inter text-[13px] text-brand-white focus:outline-none focus:border-brand-white transition-colors appearance-none">
                  <option value="">Select a category</option>
                  <option value="graphic">Graphic Tees</option>
                  <option value="hoodies">Hoodies</option>
                  <option value="bottoms">Bottoms</option>
                </select>
              </div>
              <div>
                <label className="block font-inter text-[11px] font-medium text-brand-white uppercase tracking-widest mb-2">Tags</label>
                <input type="text" className="w-full bg-brand-black border border-brand-border p-3 font-inter text-[13px] text-brand-white focus:outline-none focus:border-brand-white transition-colors" placeholder="Vintage, Heavyweight, Drop Shoulder" />
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="bg-brand-dark border border-brand-border p-6">
            <h2 className="font-bebas text-[20px] text-brand-white mb-6 uppercase tracking-wider">Pricing</h2>
            <div className="space-y-6">
              <div>
                <label className="block font-inter text-[11px] font-medium text-brand-white uppercase tracking-widest mb-2">Price (₹)</label>
                <input type="number" className="w-full bg-brand-black border border-brand-border p-3 font-inter text-[13px] text-brand-white focus:outline-none focus:border-brand-white transition-colors" placeholder="0.00" />
              </div>
              <div>
                <label className="block font-inter text-[11px] font-medium text-brand-white uppercase tracking-widest mb-2">Compare at price (MRP)</label>
                <input type="number" className="w-full bg-brand-black border border-brand-border p-3 font-inter text-[13px] text-brand-muted focus:outline-none focus:border-brand-white transition-colors" placeholder="0.00" />
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
