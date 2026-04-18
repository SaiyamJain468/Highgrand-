"use client";

import Link from "next/link";
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

export default function AdminProductsPage() {
  const [products] = useState([
    { id: "PRD-001", image: "/product-1.jpg", name: "Oversized Vintage Hoodie", category: "Hoodies", price: "₹3499", stock: 124, status: "ACTIVE" },
    { id: "PRD-002", image: "/product-2.jpg", name: "Drop Shoulder Essential Tee", category: "T-Shirts", price: "₹1499", stock: 85, status: "ACTIVE" },
    { id: "PRD-003", image: "/product-3.jpg", name: "Waffle Knit Long Sleeve", category: "T-Shirts", price: "₹1999", stock: 0, status: "OUT OF STOCK" },
    { id: "PRD-004", image: "/product-4.jpg", name: "Heavyweight Cargo Pants", category: "Bottoms", price: "₹4599", stock: 42, status: "DRAFT" },
  ]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="font-bebas text-[36px] text-brand-white uppercase tracking-wide">PRODUCTS</h1>
        <Link 
          href="/admin/products/new" 
          className="flex items-center gap-2 bg-brand-white text-brand-black px-4 py-2 font-inter font-medium text-[13px] uppercase tracking-[0.1em] hover:bg-brand-accent transition-colors"
        >
          <Plus size={16} /> ADD PRODUCT
        </Link>
      </div>

      <div className="bg-brand-dark border border-brand-border">
        {/* Toolbar */}
        <div className="p-4 border-b border-brand-border flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" size={16} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-transparent border border-brand-border pl-10 pr-4 py-2 font-inter text-[13px] text-brand-white focus:outline-none focus:border-brand-white transition-colors"
            />
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button className="flex items-center gap-2 font-inter text-[12px] uppercase text-brand-muted hover:text-brand-white transition-colors px-4 py-2 border border-brand-border">
              <Filter size={14} /> FILTER
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left font-inter text-[13px]">
            <thead className="bg-[#111111] border-b border-brand-border text-[11px] uppercase tracking-wider text-brand-muted w-full">
              <tr>
                <th className="p-4 w-12"><input type="checkbox" className="accent-brand-accent bg-transparent border-brand-border" /></th>
                <th className="p-4 font-medium min-w-[250px]">Product</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium relative top-0 right-0">Price</th>
                <th className="p-4 font-medium">Inventory</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-brand-white">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-[#1A1A1A] transition-colors group">
                  <td className="p-4"><input type="checkbox" className="accent-brand-accent bg-transparent border-brand-border" /></td>
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-16 bg-[#111111] border border-brand-border flex-shrink-0" />
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-[11px] text-brand-muted mt-1 uppercase tracking-wider">{product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-brand-muted">{product.category}</td>
                  <td className="p-4 font-medium">{product.price}</td>
                  <td className="p-4">
                    <span className={`${product.stock === 0 ? "text-brand-error" : "text-brand-white"}`}>
                      {product.stock} in stock
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-block px-2 py-1 text-[10px] uppercase tracking-wider border ${
                      product.status === 'ACTIVE' ? 'bg-brand-success/10 text-brand-success border-brand-success/20' :
                      product.status === 'DRAFT' ? 'bg-brand-muted/10 text-brand-muted border-brand-muted/20' :
                      'bg-brand-error/10 text-brand-error border-brand-error/20'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-brand-muted hover:text-brand-white"><Edit size={16} /></button>
                      <button className="text-brand-muted hover:text-brand-error"><Trash2 size={16} /></button>
                      <button className="text-brand-muted hover:text-brand-white"><MoreHorizontal size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-brand-border flex items-center justify-between font-inter text-[12px] text-brand-muted">
          <span>Showing 1 to 4 of 4 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-brand-border hover:bg-[#1A1A1A] hover:text-brand-white transition-colors" disabled>PREV</button>
            <button className="px-3 py-1 bg-brand-white text-brand-black font-medium">1</button>
            <button className="px-3 py-1 border border-brand-border hover:bg-[#1A1A1A] hover:text-brand-white transition-colors" disabled>NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
