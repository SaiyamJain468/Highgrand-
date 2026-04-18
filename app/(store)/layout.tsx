"use client";

import Navbar from "@/components/store/Navbar";
import Footer from "@/components/store/Footer";
import AnnouncementBar from "@/components/store/AnnouncementBar";
import CartDrawer from "@/components/store/CartDrawer";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-brand-black w-full overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
            {/* Removed motion.div wrapper to fix blackout glitch during navigation */}
            {children}
      </main>
      <Footer />
    </div>
  );
}
