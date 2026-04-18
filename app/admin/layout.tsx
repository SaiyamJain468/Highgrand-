"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, Tags, PackageSearch, Users, Settings, LogOut, Menu } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: PackageSearch },
    { name: "Categories", href: "/admin/categories", icon: Tags },
    { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
    { name: "Customers", href: "/admin/customers", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-brand-black text-brand-white font-inter">

      {/* Mobile sidebar toggle overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* TASK 59 & 61: Sidebar Navigation */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-brand-dark border-r border-brand-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
        <div className="h-16 flex items-center px-6 border-b border-brand-border">
          <Link href="/admin" className="font-bebas text-[24px] tracking-wide text-brand-white">
            HIGHGRAND ADMIN
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded text-[13px] uppercase tracking-wider transition-colors ${isActive ? 'bg-brand-white text-brand-black font-medium' : 'text-brand-muted hover:text-brand-white hover:bg-[#1A1A1A]'}`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-brand-border">
          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="flex items-center gap-3 px-4 py-3 w-full text-left text-[13px] uppercase tracking-wider text-brand-muted hover:text-brand-white hover:bg-[#1A1A1A] transition-colors rounded"
          >
            <LogOut size={18} />
            LOGOUT
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* TASK 62: Topbar */}
        <header className="h-16 flex items-center justify-between border-b border-brand-border px-6 bg-brand-black z-30">
          <button
            className="lg:hidden text-brand-white"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="flex-1" />

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[12px] font-medium text-brand-white uppercase">Admin User</p>
              <p className="text-[11px] text-brand-muted">admin@highgrand.in</p>
            </div>
            <div className="h-8 w-8 rounded bg-brand-white text-brand-black flex items-center justify-center font-bebas text-[18px]">
              A
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </main>
      </div>

    </div>
  );
}
